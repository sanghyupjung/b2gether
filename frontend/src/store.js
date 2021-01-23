import { createContext, useContext } from "react";
import useReduceWithSideEffects, { UpdateWithSideEffect } from 'use-reducer-with-side-effects';
import { getStorageItem, setStorageItem } from 'utils/localstorage';

const AppContext = createContext();

const SET_TOKEN = 'app/set_token';
const DEL_TOKEN = 'app/del_token';

export const setToken = (token) => ({type: SET_TOKEN, payload: token});
export const delToken = () => ({type: DEL_TOKEN});

const SET_ID = 'app/set_id';
const DEL_ID = 'app/del_id';

export const setId = (userid) => ({type: SET_ID, payload: userid});
export const delId = () => ({type: DEL_ID});

const reducer = (prevState, action) => {
    const {type} = action;
    
    if(type === SET_TOKEN) {
        const {payload: jwtToken} = action;
        const newState = {...prevState, jwtToken, isAuthenticated: true};
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            // 로컬 스로리지에 토큰 저장
            setStorageItem('jwtToken', jwtToken);
        });
    }
    else if(type === DEL_TOKEN) {
        console.log(1);
        const newState = {...prevState, jwtToken:'', isAuthenticated: false};
        console.log(2);
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            console.log(3);
            setStorageItem('jwtToken', '');
            console.log(4);
        });
    }

    if(type === SET_ID) {
        const {payload: userid} = action;
        const newState = {...prevState, userid, idPassed: true};
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem('userid', userid);
        });
    }
    else if(type === DEL_ID) {
        const newState = {...prevState, userid:'', idPassed: false};
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem('userid', '');
        });
    }

    return prevState;
}

export const AppProvider = ({children}) => {
    const userid = '';
    // const userid = getStorageItem('userid', '')
    const jwtToken = getStorageItem('jwtToken', '')
    const [store, dispatch] = useReduceWithSideEffects(reducer, {
        jwtToken,
        isAuthenticated: jwtToken.length > 0,
        userid,
        idPassed: userid.length > 0,
    });
    return (
        <AppContext.Provider value={{store, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);