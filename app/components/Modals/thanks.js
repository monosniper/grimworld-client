import React from 'react';
import styles from "@/styles/modals.module.scss";
import Image from "next/image";
import componentStyles from "@/styles/components.module.scss";
import Modal from "react-modal";

const ThanksModal = ({ handleClose, isOpen }) => {
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
                        src="/images/herobrine.png"
                        width={300}
                        height={300}
                        alt="Herobrine"
                    />
                </div>
                <div className={styles.title + ' ' + styles.title_b}>Спасибо за покупку!</div>
            </div>
        </Modal>
    );
};

export default ThanksModal;