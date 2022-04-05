import db from '../utils/database';


export default class Grocery {
    id: number;
    item: string;

    constructor(id: number, item: string) {
        this.id = id;
        this.item = item;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM groceries');
    }
}