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
                <div className={componentStyles.title}>Правила</div>
            </div>

            <div className={styles.text}>{dataStore.settings.rules}</div>
        </div>
    );
};

export default observer(Page);
