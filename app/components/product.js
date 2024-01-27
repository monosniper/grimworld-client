"use client";

import React from 'react';
import styles from "@/styles/items.module.scss";
import componentStyles from "@/styles/components.module.scss";
import Image from "next/image";
import {observer} from "mobx-react-lite";
import {useRootStore} from "@/mobx";
import {API_URL, SERVER_URL} from "@/api";

const Product = ({ data }) => {
    const { modalsStore, basketStore } = useRootStore();

    const handleOpen = () => {
        modalsStore.setCurrentProduct(data)
        modalsStore.openModal('product')
    }

    const handleClick = () => basketStore.addItem(data)

    return (
        <div className={styles.item}>
            <div
                onClick={handleOpen}
                className={styles.item__image}
                style={{backgroundImage: `url("${SERVER_URL + 'uploads/' + data.Media?.name}")`}}
            ></div>
            <div
                onClick={handleOpen}
                 className={styles.item__title}>{data.name}</div>
            <div className={styles.item__footer}>
                <div className={styles.item__price}>{data.price}₽</div>
                <button className={componentStyles.button} onClick={handleClick}>
                    <Image
                        src="/images/basket_black.svg"
                        width={25}
                        height={25}
                        alt="Add to basket"
                    />
                </button>
            </div>
        </div>
    );
};

export default observer(Product);