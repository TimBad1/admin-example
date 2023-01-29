import { ActionCreator, Reducer } from "redux";

export type TUserItem = {
  user_id: number;
  id: number;
  number: number;
  email_client: string;
  check: number;
  date_order: Date;
}

export type TUsers = {
  email: string;
  password: string;
  name: string;
  id: number;
}

export type RootState = {
    login: TUsers;
    loading: boolean;
    errorEntry: boolean;
    orderlist: TUserItem[],
    paginationCount: number,
    user_name: string;
  }
  
  const initialState: RootState = {
    login: {
      email: '',
      password: '',
      name: '',
      id: 0,
    },
    loading: false,
    errorEntry: false,
    orderlist: [],
    paginationCount: 0,
    user_name: '',
  }
  
  const UPDATE_EMAIL = "UPDATE_EMAIL";
  const UPDATE_PASSWORD = "UPDATE_PASSWORD";
  const UPDATE_NAME = "UPDATE_NAME";
  const LOADING = "LOADING";
  const ERROR_ENTRY = "ERROR_ENTRY";
  const UPDATE_ORDERLIST = "UPDATE_ORDERLIST";
  
  type UpdateEmailAction = {
    type: typeof UPDATE_EMAIL;
    text: string;
  }
  
  export const updateEmail: ActionCreator<UpdateEmailAction> = (text) => ({
    type: UPDATE_EMAIL,
    text,
  })
  
  type UpdatePasswordAction = {
    type: typeof UPDATE_PASSWORD;
    text: string;
  }
  
  export const updatePassword: ActionCreator<UpdatePasswordAction> = (text) => ({
    type: UPDATE_PASSWORD,
    text,
  })

  type UpdateNameAction = {
    type: typeof UPDATE_NAME;
    text: string;
  }
  
  export const updateName: ActionCreator<UpdateNameAction> = (text) => ({
    type: UPDATE_NAME,
    text,
  })

  type LoadingAction = {
    type: typeof LOADING;
  }

  export const loading: ActionCreator<LoadingAction> = () => ({
    type: LOADING,
  })

  type ErrorEntryAction = {
    type: typeof ERROR_ENTRY;
  }

  export const errorEntry: ActionCreator<ErrorEntryAction> = () => ({
    type: ERROR_ENTRY,
  })

  type UpdateOrderlist = {
    type: typeof UPDATE_ORDERLIST;
    data: TUserItem[];
  }
  
  export const updateOrderlist: ActionCreator<UpdateOrderlist> = (data) => ({
    type: UPDATE_ORDERLIST,
    data,
  })




  export const reducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_EMAIL:
        return {
          ...state,
          errorEntry: false,
          login: {
            ...state.login,
            email: action.text,
          }
        }
        case UPDATE_PASSWORD:
          return {
            ...state,
            errorEntry: false,
            login: {
              ...state.login,
              password: action.text,
            }
          }
        case UPDATE_NAME:
          return {
            ...state,
            login: {
              ...state.login,
              name: action.text,
            }
          }
        case LOADING:
          return {
            ...state,
            errorEntry: false,
            loading: true,
          }
        case ERROR_ENTRY:
          return {
            ...state,
            errorEntry: true,
          }
        case UPDATE_ORDERLIST:
        return {
          ...state,
          orderlist: action.data,
          loading: false
        }

      default:
        return state
    }
  }
  