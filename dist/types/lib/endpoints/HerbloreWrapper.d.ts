import APIBaseWrapper from './APIBaseWrapper';
export default class HerbloreWrapper extends APIBaseWrapper {
    getCleanHerbs(): Promise<any>;
    getMakePotions(): Promise<any>;
    getUnfinishedPotions(): Promise<any>;
}
