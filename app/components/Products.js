"use client"

import React from 'react';
import styles from '@/styles/products.module.scss'
import componentStyles from '@/styles/components.module.scss'
import Image from "next/image";
import Categories from "@/components/Categories";
import Items from "@/components/Items";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const Products = () => {
    const { dataStore } = useRootStore();

    const handleChange = (e) => {
        dataStore.setQuery(e.target.value)
    }

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.header__left}></div>
                <div className={componentStyles.title}>Товары</div>
                <div className={styles.header__right}>
                    <div className={componentStyles.field}>
                        <input value={dataStore.query} onChange={handleChange} type="search" placeholder={'Поиск...'}/>
                        <div className={componentStyles.field__icon}>
                            <Image
                                src="/images/search.svg"
                                width={25}
                                height={25}
                                alt="Search"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Categories />
            <Items items={dataStore.products} />
        </div>
    );
};

export default observer(Products);