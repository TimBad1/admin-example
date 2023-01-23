import { types } from "node-sass";
import { ActionCreator, Reducer } from "redux";

export type TUsers = {
  email: string;
  password: string;
}

export type RootState = {
    login: {
      email: string;
      password: string;
    }
    loading: boolean;
    users?: TUsers[]
  }
  
  const initialState: RootState = {
    login: {
      email: '',
      password: '',
    },
    loading: false,
  }
  
  // const VERIFICATION = "VERIFICATION";
  const UPDATE_EMAIL = "UPDATE_EMAIL";
  const UPDATE_PASSWORD = "UPDATE_PASSWORD";
  const LOADING = "LOADING";
  
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

  type LoadingAction = {
    type: typeof LOADING;
  }

  export const loading: ActionCreator<LoadingAction> = () => ({
    type: LOADING,
  })

  export const reducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_EMAIL:
        return {
          ...state,
          login: {
            ...state.login,
            email: action.text,
          }
        }
        case UPDATE_PASSWORD:
          return {
            ...state,
            login: {
              ...state.login,
              password: action.text,
            }
          }
        case LOADING:
          return {
            ...state,
            loading: true
          }
      default:
        return state
    }
  }
  