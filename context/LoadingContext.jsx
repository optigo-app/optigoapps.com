'use client';

import React, { createContext, useContext, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
    const ref = useRef();

    const start = () => ref.current.continuousStart();
    const complete = () => ref.current.complete();

    return (
        <LoadingContext.Provider value={{ start, complete }}>
            <LoadingBar color="var(--primary-color)" height={3} ref={ref} />
            {/* <LoadingBar color="#460daf" height={3} ref={ref} />    */}
            {children}
        </LoadingContext.Provider >
    )
}

export default LoadingProvider;
