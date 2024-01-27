import {makeAutoObservable} from "mobx";
import $api from "@/api";

export class DataStore {
    products = [];
    categories = [];
    crafts = [];
    settings = {
        telegram: '',
        tiktok: '',
        youtube: '',
    };
    bans = [];
    latest_buys = [];
    current_category = null;
    query = '';
    bans_query = '';

    constructor() {
        makeAutoObservable(this);

        this.fetchSettings()
    }

    fetchProducts() {
        $api("products").then(({ data: {data} }) => {
            this.products = data
            this.categories = data.map(item => item.Category)
        })
    }

    fetchSettings() {
        $api("settings").then(({ data: {data} }) => {
            this.settings = data
        })
    }

    fetchCrafts() {
        $api("crafts").then(({ data: {data} }) => {
            this.crafts = data
        })
    }

    fetchBans() {
        $api("bans").then(({ data: {data} }) => {
            this.bans = data
        })
    }

    fetchLatestBuys() {
        $api("latest_buys").then(({ data: {data} }) => {
            this.latest_buys = data
        })
    }

    setCurrentCategory(id) {
        this.current_category = id
    }

    setQuery(query) {
        this.query = query
    }

    setBansQuery(query) {
        this.bans_query = query
    }
}