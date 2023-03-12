import React, { createContext, useContext, Dispatch, SetStateAction, useState, PropsWithChildren } from 'react';

type AppConfig = {
    url: string
};

type AppConfigContextType = [AppConfig, Dispatch<SetStateAction<AppConfig>>];

const AppConfigContext = createContext<AppConfigContextType>([{ url: '' }, () => {
}]);

export const useAppConfig = () => useContext(AppConfigContext);

type AppConfigContextProviderProps = PropsWithChildren<{ defaultValue: AppConfig }>;

export const AppConfigContextProvider = ({
    defaultValue,
    children
}: AppConfigContextProviderProps) => {
    const state = useState<AppConfig>(defaultValue);

    return (
        <AppConfigContext.Provider value={state}>
            {children}
        </AppConfigContext.Provider>
    );
};
