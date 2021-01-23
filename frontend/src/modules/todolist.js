import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const Todolist_ADD = 'todolist/ADD';
const Todolist_DELETE = 'todolist/DEL';

export const add = createAction(Todolist_ADD);
export const del = createAction(Todolist_DELETE);

const initState = List([]);

export default handleActions({
    [Todolist_ADD]: (state, action) => {
        const {id, content} = action.payload;
        return state.push(Map({
            id,
            content
        }));
    },
    [Todolist_DELETE]: (state, action) => {
        const {payload: id} = action;
        return state.filter(item => item.get('id') !== id);
    }
}, initState);