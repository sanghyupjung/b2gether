import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const HASHTAG_ADD = 'hashtag/ADD';
const HASHTAG_DELETE = 'hashtag/DEL';

export const add = createAction(HASHTAG_ADD);
export const del = createAction(HASHTAG_DELETE);

const initState = List([]);

export default handleActions({
    [HASHTAG_ADD]: (state, action) => {
        const {id, content} = action.payload;
        return state.push(Map({
            id,
            content,
        }));
    },
    [HASHTAG_DELETE]: (state, action) => {
        const {payload: id} = action;
        return state.filter(item => item.get('id') !== id);
    },
}, initState);