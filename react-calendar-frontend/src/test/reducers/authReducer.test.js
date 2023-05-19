import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initState = {
  checking: true,
}

describe('Testing with authReducer', () => {
  test('It should return the default state', () => {
    const state = authReducer(initState, {});
    expect(state).toEqual(initState);
  });

  test('It should return the authLogin state', () => {
    const action = {
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'cesar'
      },
    };

    const state = authReducer(initState, action);
    expect(state).toEqual({
      checking: false,
      uid: '123',
      name: 'cesar',
    });
  });

  test('It should return the authCheckingFinish state', () => {
    const state = authReducer(initState, { type: types.authCheckingFinish });
    expect(state).toEqual({ checking: false });
  });

  test('It should return the authLogout state', () => {
    const state = authReducer(initState, { type: types.authLogout });
    expect(state).toEqual({ checking: false });
  });
});
