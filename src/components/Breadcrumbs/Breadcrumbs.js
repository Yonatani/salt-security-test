import React from 'react';
import { Icon } from "@blueprintjs/core";
import './breadcrumbs.less';

const Breadcrumbs = ({items}) => {
    return (
        <div className="breadcrumbs-container">
            {items.map(({text}, index) => {
                const isLast = index !== items.length-1
                return (
                    <div key={text} className="breadcrumb-container" >
                        <div className={`path ${isLast ? '' : 'last-breadcrumb'}`}>{text}</div>
                        {isLast && <Icon icon="chevron-right" className="icon"/>}
                    </div>
                )
            })}
        </div>
    )
};

export default Breadcrumbs;
