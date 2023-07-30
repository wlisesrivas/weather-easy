"use client";

import {Provider as ReduxProvider} from "react-redux";
import {store} from "@/store/index";
import {ReactNode} from "react";


export default function Provider({children}: {children: ReactNode}) {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}
