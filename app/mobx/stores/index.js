import {ModalsStore} from "@/mobx/stores/modals";
import {DataStore} from "@/mobx/stores/data";
import {BasketStore} from "@/mobx/stores/basket";

export class RootStore {
    modalsStore;
    dataStore;
    basketStore;

    constructor() {
        this.modalsStore = new ModalsStore();
        this.dataStore = new DataStore();
        this.basketStore = new BasketStore();
    }
}