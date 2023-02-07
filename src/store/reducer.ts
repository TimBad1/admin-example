import { Reducer } from "redux";
import {  UPDATE_EMAIL, 
          UPDATE_PASSWORD, 
          UPDATE_NAME, 
          LOADING, 
          LOG_OUT, 
          ERROR_ENTRY, 
          UPDATE_ORDERLIST, 
          COUNTER_LIST 
        } from "./actions";

export type TListItems = {
  id: number;
  number: number;
  email_client: string;
  check: number;
  date_order: Date;
}

export type TUserItem = {
  user_id: number;
  list: [
    TListItems[]
  ]
}

export type TUsers = {
  email: string;
  password: string;
  name: string;
  id: number;
  avatar: string;
}

export type RootState = {
    user: TUsers;
    loading: boolean;
    errorEntry: boolean;
    orderlist: TListItems[],
    paginationCount: number,
  }
  
  const initialState: RootState = {
    user: {
      email: '',
      password: '',
      name: '',
      id: 0,
      avatar: '',
    },
    loading: false,
    errorEntry: false,
    orderlist: [],
    paginationCount: 0,
  }


  export const reducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_EMAIL:
        return {
          ...state,
          errorEntry: false,
          user: {
            ...state.user,
            email: action.text,
          }
        }
      case UPDATE_PASSWORD:
        return {
          ...state,
          errorEntry: false,
          user: {
            ...state.user,
            password: action.text,
          }
        }
      case UPDATE_NAME:
        return {
          ...state,
          user: {
            ...state.user,
            name: action.text,
          }
        }
      case LOADING:
        return {
          ...state,
          errorEntry: false,
          loading: true,
        }
      case LOG_OUT:
        return {
          ...state,
          orderlist: [],
          user: {
            email: '',
            password: '',
            name: '',
            id: 0,
            avatar: '',
          },
          paginationCount: 0,
        }
      case ERROR_ENTRY:
        return {
          ...state,
          errorEntry: true,
          loading: false,
        }
      case UPDATE_ORDERLIST:
        return {
          ...state,
          orderlist: action.data,
          loading: false,
        }
      case COUNTER_LIST:
        return {
          ...state,
          paginationCount: action.paginationCount,
        }
      default:
        return state
    }
  }
  