"use client";

import React from 'react';
import {useRootStore} from "@/mobx";
import {observer} from "mobx-react-lite";
import ProductModal from "@/components/Modals/product";
import BasketModal from "@/components/Modals/basket";
import ThanksModal from "@/components/Modals/thanks";
import ItemModal from "@/components/Modals/item";

const Modals = () => {
    const { modalsStore } = useRootStore();

    return (
        <div>
            <ProductModal
                handleClose={() => modalsStore.closeModal('product')}
                isOpen={modalsStore.modals.product}
            />
            <BasketModal
                handleClose={() => modalsStore.closeModal('basket')}
                isOpen={modalsStore.modals.basket}
            />
            <ThanksModal
                handleClose={() => modalsStore.closeModal('thanks')}
                isOpen={modalsStore.modals.thanks}
            />
            <ItemModal
                handleClose={() => modalsStore.closeModal('item')}
                isOpen={modalsStore.modals.item}
            />
        </div>
    );
};

export default observer(Modals);