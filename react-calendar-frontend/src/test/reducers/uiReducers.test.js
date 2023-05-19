import { uiCloseModal, uiOpenModal } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducers";

const initState = {
  modalOpen: false,
};

describe('Testing in uiReducer', () => {
  test('It should return the default state', () => {
    const state = uiReducer( initState, {} );
    expect( state ).toEqual(initState);
  });

  test('It should open and close the modal', () => {
    const modalOpenAction = uiOpenModal();
    const modalCloseAction = uiCloseModal();

    let state = uiReducer( initState, modalOpenAction );
    expect( state ).toEqual({
      modalOpen: true
    });

    state = uiReducer( initState, modalCloseAction );
    expect( state ).toEqual({
      modalOpen: false
    });
  });
  
})
