"use client"

import styles from '@/styles/static.module.scss'

import React from 'react';
import componentStyles from "@/styles/components.module.scss";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const Page = () => {
    const {dataStore} = useRootStore();

    return (
        <div>
            <div className={styles.header}>
                <div className={componentStyles.title}>Политика конфиденциальности</div>
            </div>

           <div className={styles.text} dangerouslySetInnerHTML={{__html: dataStore.settings.policy}}></div>
        </div>
    );
};

export default observer(Page);
