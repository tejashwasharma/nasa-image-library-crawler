import React, { MutableRefObject } from "react";

export declare type Component<P = {}> = (props: P) => JSX.Element;

export interface globalProps {
    hide?: boolean;
    hideBorder?: boolean;
}

export interface Props extends globalProps {
    children?: React.ReactNode;
}

export interface KeywordsProps extends Props {
    keywords?: Array<string>;
}

export interface GalleryProps extends Props {
    gallery?: Array<string> | null;
}

export interface DivProps extends globalProps {
    row?: boolean;
    alignCenter?: boolean;
    justifyCenter?: boolean;
    inline?: boolean;
    imgContainer?: boolean;
    bgUrl?: string;
    bgColor?: string;
    sm?: boolean;
}

export interface InputProps {
    type?: 'text' | 'number' | 'email' | 'password';
    name?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: boolean;
    className?: string;
    value?: string;
    ref?: MutableRefObject<HTMLInputElement | null>;
}
