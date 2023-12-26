"use client";

import React, { createContext } from "react";
import { Storage } from "./Storage";


export const StorageContent = createContext(new Storage());

export function StorageProvider(props: {children: React.ReactNode}) {
    const [storage] = React.useState(new Storage());
    return(
        <StorageContent.Provider value={storage}>
            {props.children}
        </StorageContent.Provider>
    );
}