import * as t from "../types";

export const setInfo = (name: string) => (dispatch: any) => {
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};
