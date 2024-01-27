"use client"

import React, {useState} from 'react';
import styles from "@/styles/modals.module.scss";
import Image from "next/image";
import componentStyles from "@/styles/components.module.scss";
import Modal from "react-modal";
import Link from "next/link";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";
import {SERVER_URL} from "@/api";

const BasketModal = ({ handleClose, isOpen }) => {
    const { basketStore } = useRootStore();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('ru')
    const [isConfirmed, setIsConfirmed] = useState(true)

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

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
                <div className={styles.items}>
                    {basketStore.items.map(item => (
                        <div key={'basket-'+item.id} className={styles.item}>
                            <div className={styles.item__side}>
                                {item.type === basketStore.PRODUCT_TYPE ? <Image
                                    className={styles.item__image}
                                    src={SERVER_URL + 'uploads/' + item.image_name}
                                    width={100}
                                    height={100}
                                    alt="Scroll down"
                                /> : null}
                                <div className={styles.item__title}>{item.name + (item.type === basketStore.DIAMONDS_TYPE ? '☠️' : '')}</div>
                            </div>
                            <div className={styles.item__side}>
                                {item.isPrivilege ? (
                                    <div className={componentStyles.field + ' ' + styles.select}>
                                        <select
                                            onChange={({target: {value}}) => basketStore.changeDuration(item.id, value)}
                                            value={item.duration}
                                            defaultValue={basketStore.DURATION_1}
                                        >
                                            <option value={basketStore.DURATION_1}>На месяц</option>
                                            <option value={basketStore.DURATION_2}>На 2 месяца</option>
                                            <option value={basketStore.DURATION_3}>На 3 месяца</option>
                                            <option value={basketStore.DURATION_FOREVER}>Навсегда</option>
                                        </select>
                                    </div>
                                ) : null}
                                <div className={styles.item__price}>{item.price}₽</div>
                                <div className={styles.item__remove} onClick={() => basketStore.removeItem(item.id)}>
                                    <Image
                                        src="/images/close.svg"
                                        width={30}
                                        height={30}
                                        alt="Remove Item"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.form}>
                    <div className={componentStyles.field}>
                        <input type="text" value={username} onChange={handleChangeUsername} placeholder={'Никнейм'} />
                    </div>
                    <div className={componentStyles.field}>
                        <input type="email" value={email} onChange={handleChangeEmail} placeholder={'Почта'} />
                    </div>
                </div>
                <div className={componentStyles.switch + ' ' + (country === 'ru' ? '' : componentStyles.switch_active)}>
                    <div onClick={() => setCountry('ru')} className={componentStyles.switch__item}>Россия</div>
                    <div onClick={() => setCountry('ua')} className={componentStyles.switch__item}>Украина</div>
                    <div className={componentStyles.switch__current}></div>
                </div>
                <div className={styles.confirm}>
                    <div className={styles.confirm__check} onClick={() => setIsConfirmed(!isConfirmed)}>
                        {isConfirmed && <Image
                            src="/images/check.svg"
                            width={16}
                            height={16}
                            alt="Close"
                        />}
                    </div>
                    Я согласен с <Link onClick={handleClose} href={"/policy"}>условиями пользования</Link>
                </div>
                <div className={styles.footer}>
                    <div className={styles.price}>{basketStore.total}₽</div>
                    <button className={componentStyles.button}>Перейти к оплате</button>
                </div>
            </div>
        </Modal>
    );
};

export default observer(BasketModal);