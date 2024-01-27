"use client"

import styles from '@/styles/crafts.module.scss'
import componentStyles from '@/styles/components.module.scss'
import React, {useEffect} from 'react';
import Image from "next/image";
import {useRootStore} from "@/mobx";
import {SERVER_URL} from "@/api";
import {observer} from "mobx-react-lite";

const Crafts = () => {
    const {dataStore, modalsStore} = useRootStore();

    useEffect(() => {
        dataStore.fetchCrafts()
    }, []);

    const handleChange = (e) => {
        dataStore.setQuery(e.target.value)
    }

    const handleClick = (item) => {
        modalsStore.setCurrentItem(item)
        modalsStore.openModal('item')
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={componentStyles.title}>Уникальные крафты</div>
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

            <div className={'grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-4 mt-8'}>
                {dataStore.crafts.filter(item => (dataStore.query !== '' ? item.Result.name.indexOf(dataStore.query) !== -1 : true)).map(craft => (
                    <div className={styles.wrapper}>
                        <div className={styles.block + ' grid grid-cols-3 ' + styles.block_max}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                craft.Items.find(item => item.column === i) ? (
                                    <div className={styles.item} onClick={() => handleClick(craft.Items.find(item => item.column === i).Item)}>
                                        <Image
                                            src={SERVER_URL + 'uploads/' + craft.Items.find(item => item.column === i).Item.Media.name}
                                            width={80}
                                            height={80}
                                            alt={craft.Items.find(item => item.column === i)?.Item.name}
                                        />
                                        <div className={styles.block__count}>{craft.Items.find(item => item.column === i).count}</div>
                                    </div>
                                ) : <div className={styles.item}></div>
                            ))}

                            <span className={styles.block__sep + ' ' + styles.block__sep_1}></span>
                            <span className={styles.block__sep + ' ' + styles.block__sep_2}></span>
                            <span className={styles.block__sep + ' ' + styles.block__sep_3}></span>
                            <span className={styles.block__sep + ' ' + styles.block__sep_4}></span>
                        </div>
                        <div className={styles.block + ' ' + styles.block_result} onClick={() => handleClick(craft.Result)}>
                            <Image
                                src={SERVER_URL + 'uploads/' + craft.Result.Media.name}
                                width={80}
                                height={80}
                                alt={craft.Result.name}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(Crafts);
