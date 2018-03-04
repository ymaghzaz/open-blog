
import { Action } from '@ngrx/store';


export enum UserActionTypes {
    SET_DATA = '[User] set data',
    UPDATE_DATA = '[User] Update data'
}

export class ActionSetUser implements Action {
    readonly type = UserActionTypes.SET_DATA;
    constructor(public payload: any) { }
}

export class ActionUpdateUser implements Action {
    readonly type = UserActionTypes.UPDATE_DATA;
    constructor(public payload: any) { }
}

export type UserActions = ActionUpdateUser | ActionSetUser

export const initialState = {
    isAuthenticated: false
};

export const selectorUser = state => state.user;

export function UserReducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case UserActionTypes.SET_DATA:
            return Object.assign({}, state, {
                ...action.payload
            });

        case UserActionTypes.UPDATE_DATA:
            return Object.assign({}, state, {
                ...action.payload
            });

        default:
            return state;
    }
}