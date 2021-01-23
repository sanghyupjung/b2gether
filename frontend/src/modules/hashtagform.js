import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const FORM_CHANGE = 'hashtagform/FORM_CHANGE';

export const formChange = createAction(FORM_CHANGE);

const initState = Map({
    value: ''
});

export default handleActions({
    [FORM_CHANGE]: (state, action) => {
        return state.set('value', action.payload);
    }
}, initState);