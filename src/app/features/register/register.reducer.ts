import { Action } from '@ngrx/store';

export const initialState = {
    isAuthenticated: false
};

export function registerReducer(state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}