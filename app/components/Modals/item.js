"use client"

import React from 'react';
import styles from "@/styles/modals.module.scss";
import Image from "next/image";
import componentStyles from "@/styles/components.module.scss";
import Modal from "react-modal";
import {SERVER_URL} from "@/api";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const ItemModal = ({ handleClose, isOpen }) => {
    const { modalsStore } = useRootStore();
    const {name, description, Media: {name: image_name}} = modalsStore.current_item ?? {Media: {}}

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
                    <Image
                        src={SERVER_URL + 'uploads/' + image_name}
                        width={300}
                        height={300}
                        alt="Herobrine"
                    />
                </div>
                <div className={styles.title}>{name}</div>
                <div className={styles.text}>{description}</div>
            </div>
        </Modal>
    );
};

export default observer(ItemModal);