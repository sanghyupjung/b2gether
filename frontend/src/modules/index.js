import { combineReducers } from 'redux';
import hashtagform from './hashtagform';
import hashtag from './hashtag';
import todolistform from './todolistform';
import todolist from './todolist';

export default combineReducers({
    hashtagform,
    hashtag,
    todolistform,
    todolist,
});