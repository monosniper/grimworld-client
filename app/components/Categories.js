"use client"

import React, {useEffect, useState} from 'react';
import styles from '@/styles/categories.module.scss'
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const Categories = () => {
    const { dataStore } = useRootStore();
    const [categories, setCategories] = useState([])

    useEffect(() => {
        dataStore.categories.length && setCategories(dataStore.categories)
    }, [dataStore.categories])

    const handleClick = (id) => {
        if(id === dataStore.current_category) {
            dataStore.setCurrentCategory(null)
        } else dataStore.setCurrentCategory(id)
    }

    return (
        <div className={styles.wrapper}>
            {categories.map(category => <div key={category.id} onClick={() => handleClick(category.id)} className={styles.item + ' ' + (dataStore.current_category === category.id ? styles.active : '')}>{category.name}</div>)}
        </div>
    );
};

export default observer(Categories);