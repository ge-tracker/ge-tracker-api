import APIBaseWrapper from './APIBaseWrapper';
export default class ItemsWrapper extends APIBaseWrapper {
    getAllItems(): Promise<any>;
    getItem(itemId: number, detail?: boolean): Promise<any>;
    getItems(...itemIds: Array<number>): Promise<any>;
    search(query: string): Promise<any>;
}
