import { Router } from 'express';
import { KNEX } from '../database/connection';

const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
    const items = await KNEX.select().table('items');

    return res.json(items);
});

export default itemsRouter;