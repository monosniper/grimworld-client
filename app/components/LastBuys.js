import React from 'react';
import componentStyles from "@/styles/components.module.scss";
import Items from "@/components/Items";

const LastBuys = () => {
    return (
        <div className={'my-8'}>
            <div className={componentStyles.title + ' text-center'}>Последние покупки</div>
            <Items />
        </div>
    );
};

export default LastBuys;