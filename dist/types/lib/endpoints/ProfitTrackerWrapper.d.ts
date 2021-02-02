import APIBaseWrapper from './APIBaseWrapper';
export declare type ProfitTransactionStatus = 'bought' | 'selling' | 'sold';
export default class ProfitTrackerWrapper extends APIBaseWrapper {
    getTransactions(opts?: {}): Promise<any>;
    getTransaction(id: string): Promise<any>;
    createTransaction(itemId: number, qty: number, buyPrice: number, params?: {}): Promise<any>;
    updateTransaction(id: string, status: ProfitTransactionStatus, params?: {}): Promise<any>;
    deleteTransaction(id: string): Promise<any>;
    getBuyingTransactions(opts?: {}): Promise<any>;
    getBoughtTransactions(opts?: {}): Promise<any>;
    getSellingTransactions(opts?: {}): Promise<any>;
    getSoldTransactions(opts?: {}): Promise<any>;
    getActiveTransactions(): Promise<any>;
    getPreviousTransactions(itemId: number): Promise<any>;
    getSummary(): Promise<any>;
    getMostProfitable(): Promise<any>;
    clear(): Promise<any>;
}
