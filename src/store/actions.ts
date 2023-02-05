import { ActionCreator } from "redux";
import { TUserItem } from "./reducer";
  
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_NAME = "UPDATE_NAME";
export const LOADING = "LOADING";
export const ERROR_ENTRY = "ERROR_ENTRY";
export const UPDATE_ORDERLIST = "UPDATE_ORDERLIST";
export const LOG_OUT = "LOG_OUT";
export const COUNTER_LIST = "COUNTER_LIST";

type UpdateEmailAction = {  // управляемая компонента инпут email
  type: typeof UPDATE_EMAIL;
  text: string;
}
  
export const updateEmail: ActionCreator<UpdateEmailAction> = (text) => ({
	type: UPDATE_EMAIL,
	text,
})

type UpdatePasswordAction = { // управляемая компонента инпут password
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

type LogOutAction = {
	type: typeof LOG_OUT;
}

export const logOut: ActionCreator<LogOutAction> = () => ({
	type: LOG_OUT,
})

type ErrorEntryAction = {
	type: typeof ERROR_ENTRY;
}

export const errorEntry: ActionCreator<ErrorEntryAction> = () => ({
	type: ERROR_ENTRY,
})

type UpdateOrderlistAction = {
	type: typeof UPDATE_ORDERLIST;
	data: TUserItem[];
}

export const updateOrderlist: ActionCreator<UpdateOrderlistAction> = (data) => ({
	type: UPDATE_ORDERLIST,
	data,
})

type UpdateCountListAction = {
  type: typeof COUNTER_LIST;
}

export const updateCountList: ActionCreator<UpdateCountListAction> = () => ({
  type: COUNTER_LIST,
})
