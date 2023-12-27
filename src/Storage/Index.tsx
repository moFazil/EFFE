"use client";
import React, { createContext } from "react";
import { Storage } from "./Storage";


export const StorageContext = createContext(new Storage());

export function StorageProvider(props: {children: React.ReactNode}) {
    const [storage] = React.useState(new Storage());
    return(
        <StorageContext.Provider value={storage}>
            {props.children}
        </StorageContext.Provider>
    );
}