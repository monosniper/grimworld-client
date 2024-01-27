import '@/styles/globals.scss'
import Header from "@/components/header";
import Footer from "@/components/footer";
import {RootStoreProvider} from "@/mobx";
import React from "react";
import Modals from "@/components/Modals";
import Particles from "@/components/Particles";

export const metadata = {
    title: 'GrimWorld',
    description: 'Майнкрафт сервер GrimWorld',
}

export default function RootLayout({children}) {
    return (
        <html lang="ru">
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
