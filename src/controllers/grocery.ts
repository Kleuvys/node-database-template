import Grocery from '../models/grocery';
import { Request, Response, NextFunction } from 'express';


export async function getAllGroceries(req: Request, res: Response, next: NextFunction) {
    try {
        const [allGroceries] = await Grocery.fetchAll();

        res.status(200).json(allGroceries);

    } catch (error) {
        console.log(error);
    }
}