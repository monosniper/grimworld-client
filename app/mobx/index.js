"use client";

import React from "react";
import {RootStore} from "@/mobx/stores";

let store;

const StoreContext = React.createContext(undefined);

export const RootStoreProvider = ({children,}) => {
    const root = store ?? new RootStore();

    return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};

export const useRootStore = () => {
    const context = React.useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }

    return context;
};