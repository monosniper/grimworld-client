"use client"

import React, {useEffect, useState} from 'react';
import styles from '@/styles/buy_panel.module.scss'
import componentStyles from '@/styles/components.module.scss'
import Image from "next/image";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const BuyDiamondsPanel = () => {
    const { dataStore } = useRootStore();

    const [value, setValue] = useState(100)
    const [sum, setSum] = useState(100)

    const minValue = 50
    const maxValue = 10000

    const handleChange = ({target: {value: val}}) => {
        setValue(val)
        calculateSum(val)
    }

    const handleChangeSum = ({target: {value: val}}) => {
        setSum(val)
        calculateValue(val)
    }

    const calculateValue = (s) => {
        let coef = parseFloat(dataStore.settings.diamonds_coef)

        // const newVal = (s / coef).toFixed(0)
        // setValue(newVal)

        // if(newVal <= (maxValue / 3)) coef += 0.5
        // else if(newVal < (maxValue / 2) && newVal > (maxValue / 3)) coef += 0.3
        // else coef -= 0.1

        setValue((s * coef).toFixed(0))
        // setValue(newVal - ((newVal / coef).toFixed(0)))
    }

    const calculateSum = (v) => {
        let coef = parseFloat(dataStore.settings.diamonds_coef)

        // if(v <= (maxValue / 3)) coef += 0.5
        // else if(v < (maxValue / 2) && v > (maxValue / 3)) coef += 0.3
        // else coef -= 0.1

        // setSum((v - (v * coef)).toFixed(0))
        setSum((v / coef).toFixed(0))
    }

    // useEffect(() => {
    //     calculateSum()
    // }, [value])

    return (
        <div className={styles.block + ' my-8'}>
            <div className={styles.title}>
                Купить Души ☠️
                {/*<Image*/}
                {/*    src="/images/diamond.png"*/}
                {/*    width={20}*/}
                {/*    height={20}*/}
                {/*    alt="Buy diamonds"*/}
                {/*/>*/}
            </div>
            <div className={styles.slider}>
                <input
                    type="range"
                    step={1}
                    value={value}
                    min={dataStore.settings.min_diamonds}
                    max={dataStore.settings.max_diamonds}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.results}>
                <input type="number" value={value} onChange={handleChange} className={componentStyles.field + ' ' + styles.field}/>
                <input type="number" value={sum} onChange={handleChangeSum} className={componentStyles.field + ' ' + styles.field}/>
                <span className={styles.field_rub}>₽</span>
            </div>
            <div className={styles.footer + ' mt-8'}>
                <button className={componentStyles.button + ' ' + styles.btn}>Купить</button>
            </div>
        </div>
    );
};

export default observer(BuyDiamondsPanel);