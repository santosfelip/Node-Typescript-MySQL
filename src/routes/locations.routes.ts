import { Router } from 'express';
import Knex from 'knex';
import { KNEX } from '../database/connection';

const locationsRouter = Router();

locationsRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    const location = await KNEX('locations').where('id',id).first();

    if(!location) {
        return res.status(400).json({ message: "Location not found." });
    }

    const items = await KNEX('items')
        .join('locations_items', 'items.id', '=', 'locations_items.items_id')
        .where('locations_items.location_id', id)
        .select('items.title');

    return res.json({ location, items });
});

locationsRouter.post('/', async (req, res) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = req.body;

    const location = {
        image: "fake-image.jpg",
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    };

    const transaction = await KNEX.transaction();

    const newIds = await transaction('locations').insert(location);

    const location_id = newIds[0];

    const locationsItens = items.map(async (items_id: number) => {
        const selectedItem = await transaction('items').where('id', items_id).first();

        if(!selectedItem) {
            return res.status(400).json({ message: "Item not found."});
        }
        return {
            items_id,
            location_id
        }
    })

    await transaction('locations_items').insert(locationsItens);

    await transaction.commit();

    return res.json({
        id: location_id,
        ...location
    })
})

export default locationsRouter;