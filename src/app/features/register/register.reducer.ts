import { Action } from "@ngrx/store";

export enum StudentActionTypes {
  SET_DATA = "[Students] set data",
  UPDATE_DATA = "[Students] Update data"
}

export class ActionSetStudents implements Action {
  readonly type = StudentActionTypes.SET_DATA;
  constructor(public payload: any) {}
}

export class ActionUpdateStudents implements Action {
  readonly type = StudentActionTypes.UPDATE_DATA;
  constructor(public payload: any) {}
}

export const initialState = {
  students: []
};

export const selectorStudents = state => state.students;

export function registerReducer(state = initialState, action: any) {
  switch (action.type) {
    case StudentActionTypes.SET_DATA:
      return Object.assign({}, state, {
        students: action.payload
      });

    case StudentActionTypes.UPDATE_DATA:
      return Object.assign({}, state, {
        students: action.payload
      });
    default:
      return state;
  }
}
