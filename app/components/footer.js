"use client"

import React from 'react';
import styles from '@/styles/footer.module.scss'
import Link from "next/link";
import Image from "next/image";
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";

const Footer = () => {
    const { dataStore } = useRootStore();

    return (
        <footer className={styles.footer}>
            <div className={'container ' + styles.footer__wrapper}>
                <div className={styles.footer__socials}>
                    <Link passHref={true} href={dataStore.settings.telegram || '#'}>
                        <Image
                            src="/images/telegram.svg"
                            width={25}
                            height={25}
                            alt="Telegram"
                        />
                    </Link>
                    <Link passHref={true} href={dataStore.settings.tiktok || '#'}>
                        <Image
                            src="/images/tiktok.svg"
                            width={25}
                            height={25}
                            alt="TikTok"
                        />
                    </Link>
                    <Link passHref={true} href={dataStore.settings.youtube || '#'}>
                        <Image
                            src="/images/youtube.svg"
                            width={25}
                            height={25}
                            alt="Youtube"
                        />
                    </Link>
                </div>
                <div className={styles.footer__center}>
                    © grimworld.xyz <b>Все права защищены</b>
                </div>
                <div className={styles.footer__right}></div>
            </div>
        </footer>
    );
};

export default observer(Footer);