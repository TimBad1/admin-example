import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ActionCreator, applyMiddleware, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export type RootState = {
  user: {
    email: string;
    password: string;
  }
}

const initialState: RootState = {
  user: {
    email: '',
    password: '',
  }
   
}

const VERIFICATION = "VERIFICATION";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

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

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.text,
          // password: 'cxzs',
        }
      }
      case UPDATE_PASSWORD:
        return {
          ...state,
          user: {
            ...state.user,
            password: action.text,
          }
        }
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools())

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider  store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
