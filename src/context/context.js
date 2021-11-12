import React, {useReducer} from 'react';
import {initialState, AuthReducer} from './reducers';



const AuthStateContext = React.createContext();
const AuthDispatchContex = React.createContext();

export const useAuthState = () => {
    const context = React.useContext(AuthStateContext);
    if(context === undefined) {
        throw new Error('useAuthState must be used with a AuthProvider')
    }
    return context
}

export const useAuthDispatch = () => {
    const context = React.useContext(AuthDispatchContex);
    if(context === undefined) {
        throw new Error('useAuthDispatch must be used with a AuthProvider')
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return(
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContex.Provider value={dispatch}>
                {children}
            </AuthDispatchContex.Provider>
        </AuthStateContext.Provider>
    )
}