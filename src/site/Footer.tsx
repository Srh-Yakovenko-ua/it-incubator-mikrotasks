import React from 'react';

type FooterPropsType = {
    titleForFooter : string
}

export const Footer = (props : FooterPropsType) => {
    return (
        <h3>{props.titleForFooter}</h3>
    );
}