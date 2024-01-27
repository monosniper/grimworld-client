"use client"

import React from 'react';
import Product from "@/components/product";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const Items = ({ items }) => {
    const { dataStore } = useRootStore();

    return (
        <div className={'my-8 py-8 grid xl:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 gap-4'}>
            {items ? items
                .filter(item => (dataStore.current_category ? item.Category.id === dataStore.current_category : true))
                .filter(item => (dataStore.query !== '' ? item.name.indexOf(dataStore.query) !== -1 : true))
                .map(item => <Product key={item.id} data={item} />) : null}
        </div>
    );
};

export default observer(Items);