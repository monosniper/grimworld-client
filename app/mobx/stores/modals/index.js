import {makeAutoObservable} from "mobx";

export class ModalsStore {
    modals = {
        product: false,
        basket: false,
        thanks: false,
        craft: false,
    }
    current_product = null
    current_item = null

    constructor() {
        makeAutoObservable(this);
    }

    closeModal(name) {
        this.modals[name] = false
    }

    openModal(name) {
        this.modals[name] = true
    }

    setCurrentProduct(product) {
        this.current_product = product
    }

    setCurrentItem(item) {
        this.current_item = item
    }
}