"use client"

import styles from '@/styles/bans.module.scss'
import componentStyles from '@/styles/components.module.scss'
import React, {useEffect} from 'react';
import Image from "next/image";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const Page = () => {
    const {dataStore} = useRootStore();

    useEffect(() => {
        dataStore.fetchBans()
    }, []);

    const __ = (type) => {
        return {
            'ban': 'Бан',
            'kick': 'Кик',
            'mute': 'Мут',
        }[type]
    }

    const utcToLocal = (time) => {
        return new Intl.DateTimeFormat('ru-RU', {
            dateStyle: 'short',
            timeStyle: 'short',
            timeZone: 'Europe/Moscow',
        }).format(time)
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={componentStyles.title}>Бан-лист</div>
                <div className={componentStyles.field}>
                    <input value={dataStore.bans_query} onChange={({target: {value}}) => dataStore.setBansQuery(value)} type="search" placeholder={'Поиск...'}/>
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
            <div className={styles.table}>
                <div className={styles.table__header}>
                    <div className={styles.table__th}>Игрок</div>
                    <div className={styles.table__th}>Инициатор</div>
                    <div className={styles.table__th}>Тип</div>
                    <div className={styles.table__th}>Причина</div>
                    <div className={styles.table__th}>Дата</div>
                    <div className={styles.table__th}>Истекает</div>
                </div>
                {dataStore.bans
                    .filter(ban => dataStore.bans_query !== '' ? (ban.username.indexOf(dataStore.bans_query) !== -1) : true)
                    .map(ban => (
                    <div className={styles.table__row}>
                        <div data-content={"Игрок"} className={styles.table__td}>{ban.username}</div>
                        <div data-content={"Инициатор"} className={styles.table__td}>{ban.by}</div>
                        <div data-content={"Тип"} className={styles.table__td}>{__(ban.type)}</div>
                        <div data-content={"Причина"} className={styles.table__td}>{ban.reason}</div>
                        <div data-content={"Дата"} className={styles.table__td}>{utcToLocal(ban.time)}</div>
                        <div data-content={"Истекает"}
                             className={styles.table__td}>{ban.until ? utcToLocal(ban.until) : '-'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(Page);
