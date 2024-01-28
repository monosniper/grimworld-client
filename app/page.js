"use client"

import styles from '@/styles/home.module.scss'
import React, {useEffect} from 'react';
import Image from 'next/image'
import Products from "@/components/Products";
import BuyDiamondsPanel from "@/components/BuyDiamondsPanel";
import LastBuys from "@/components/LastBuys";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const Page = () => {
    const { dataStore } = useRootStore();

    useEffect(() => {
        dataStore.fetchProducts()
    }, []);

    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.banner__image}></div>
                <div className={styles.banner__content}>
                    <div className={styles.banner__title}>GrimWorld</div>
                    <div className={styles.banner__description}>{dataStore.settings.description}</div>
                    <div className={styles.banner__items}>
                        <div className={styles.banner__item}>IP: {dataStore.settings.ip1}</div>
                        <div className={styles.banner__item}>IP: {dataStore.settings.ip2}</div>
                        <div className={styles.banner__item}>
                            <span className={styles.banner__online}></span>
                            {dataStore.online ? (dataStore.online.online + '/' + dataStore.online.max) : '0/0'}
                        </div>
                    </div>
                    <div className={styles.banner__scroll}>
                        <Image
                            src="/images/scroll.svg"
                            width={15}
                            height={15}
                            alt="Scroll down"
                        />
                    </div>
                </div>
            </div>

            <Products />
            <BuyDiamondsPanel/>
            <LastBuys/>
        </div>
    );
};

export default observer(Page);
