"use client";

import React, {useState} from 'react';
import Image from 'next/image'
import Link from "next/link";
import styles from "../styles/header.module.scss"
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const Header = () => {
    const { modalsStore, basketStore } = useRootStore();
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link href={"/"}>GW</Link>
            </div>
            <div className={styles.header__menu}>
                <Link href={"/crafts"} className={styles.header__item}>Крафты</Link>
                <Link href={"/bans"} className={styles.header__item}>Бан-лист</Link>
                <Link href={"/rules"} className={styles.header__item}>Правила</Link>
            </div>
            <div className={styles.header__right}>
                <div onClick={() => modalsStore.openModal('basket')} className={styles.basket}>
                    {basketStore.items.length ? <span className={styles.basket__count}>{basketStore.items.length}</span> : null}
                    <Image
                        src="/images/basket.svg"
                        width={30}
                        height={30}
                        alt="Basket"
                    />
                </div>
            </div>
            <div className={styles.header__menu_mobile + ' ' + (isOpenMenu ? styles.header__menu_mobile_active : '')}>
                <Link href={"/crafts"} className={styles.header__item}>Крафты</Link>
                <Link href={"/bans"} className={styles.header__item}>Бан-лист</Link>
                <Link href={"/rules"} className={styles.header__item}>Правила</Link>
                <div onClick={() => modalsStore.openModal('basket')} className={styles.basket}>
                    {basketStore.items.length ? <span className={styles.basket__count}>{basketStore.items.length}</span> : null}
                    <Image
                        src="/images/basket.svg"
                        width={30}
                        height={30}
                        alt="Basket"
                    />
                </div>
            </div>
            <div className={styles.header__mobile} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                <Image
                    src={isOpenMenu ? "/images/close.svg" : "/images/menu.svg"}
                    width={30}
                    height={30}
                    alt="Open menu"
                />
            </div>
        </header>
    );
};

export default observer(Header);