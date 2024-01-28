"use client"

import React, {useEffect} from 'react';
import Modal from 'react-modal';
import styles from "@/styles/modals.module.scss";
import Image from "next/image";
import componentStyles from "@/styles/components.module.scss";
import {useRootStore} from "@/mobx";
import {API_URL, SERVER_URL} from "@/api";

const ProductModal = ({ handleClose, isOpen }) => {
    const { modalsStore } = useRootStore();
    const {name, description, price_1: price, Media: {name: image_name}} = modalsStore.current_product ?? {Media: {}}

    return (
        <Modal closeTimeoutMS={500} ariaHideApp={false} isOpen={isOpen}>
            <div className={styles.content}>
                <button className={styles.close} onClick={handleClose}>
                    <Image
                        src="/images/close.svg"
                        width={30}
                        height={30}
                        alt="Close"
                    />
                </button>
                <div className={styles.image}>
                    <img src={SERVER_URL + 'uploads/' + image_name}width={300} height={300}  alt={name}/>
                </div>
                <div className={styles.title}>{name}</div>
                <div className={styles.text} dangerouslySetInnerHTML={{ __html: description }}></div>
                <div className={styles.footer}>
                    <div className={styles.price}>{price}₽</div>
                    <div className={componentStyles.button}>
                        В корзину
                        <Image
                            src="/images/basket_black.svg"
                            width={25}
                            height={25}
                            alt="Add to Basket"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProductModal;