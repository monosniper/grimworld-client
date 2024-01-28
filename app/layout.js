import '@/styles/globals.scss'
import Header from "@/components/header";
import Footer from "@/components/footer";
import {RootStoreProvider} from "@/mobx";
import React from "react";
import Modals from "@/components/Modals";
import Particles from "@/components/Particles";
import Head from 'next/head'

export const metadata = {
    title: 'GrimWorld',
    description: 'Майнкрафт сервер GrimWorld',
}

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700&family=Moulpali&family=New+Rocker&display=swap" rel="stylesheet" />
        </Head>
          <body>
              <RootStoreProvider>
                  <main>
                      <div className={'container px-8'}>
                          <Header />
                          {children}
                      </div>
                      <Footer />
                      <Modals />
                  </main>
                  <Particles />
              </RootStoreProvider>
          </body>
        </html>
    )
}
