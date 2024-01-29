import {makeAutoObservable} from "mobx";
import Cookies from 'universal-cookie';

export class BasketStore {
    items = [];
    total = 0;
    cookies;

    PRODUCT_TYPE = 'product'
    DIAMONDS_TYPE = 'diamonds'

    DURATION_1 = '1'
    DURATION_2 = '2'
    DURATION_3 = '3'
    DURATION_FOREVER = 'forever'

    constructor() {
        makeAutoObservable(this);

        this.cookies = new Cookies(null, { path: '/' });

        const items = this.cookies.get('items')
        if(items) {
            this.items = items
            const _this = this
            items.map(({price}) => {
                _this.total += price
            })
        }
    }

    addItem(data, isProudct=true) {
        if(!this.items.find(({id}) => id === data.id)) {
            this.items.push({
                id: data.id,
                name: data.name,
                price: data.price_1,
                prices: {
                    [this.DURATION_1]: data.price_1,
                    [this.DURATION_2]: data.price_2,
                    [this.DURATION_3]: data.price_3,
                    [this.DURATION_FOREVER]: data.price_forever,
                },
                type: this.PRODUCT_TYPE,
                isPrivilege: data.isPrivilege,
                image_name: data.Media.name,
                duration: this.DURATION_1,
            })
            this.total += parseInt(data.price)
            this.cookies.set('items', JSON.stringify(this.items));
        }
    }

    removeItem(id) {
        this.total -= parseInt(this.items.find(item => item.id === id).price)
        this.items = this.items.filter(item => item.id !== id)
        this.cookies.set('items', JSON.stringify(this.items));
    }

    changeDuration(id, duration) {
        const _this = this

        this.items.map(item => {
            if(item.id === id) {
                item.duration = duration
                _this.total -= item.price
                const price = item.prices[item.duration]
                item.price = price
                _this.total += price
            }

            return item;
        })
    }
}