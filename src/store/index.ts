"use client";

import {configureStore} from "@reduxjs/toolkit";
import {weatherApis} from "@/store/api/weatherApis";
import {setupListeners} from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        [weatherApis.reducerPath]: weatherApis.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(weatherApis.middleware);
    }
});

setupListeners(store.dispatch);

export {store};
