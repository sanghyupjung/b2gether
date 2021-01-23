import React, { Component } from 'react';

import HashtagForm from '../components/HashtagForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as hashtagformActions from '../modules/hashtagform';
import * as hashtagActions from '../modules/hashtag';

class HashtagFormContainer extends Component {
    changeHandler = (e) => {
        const {value} = e.target;
        const {HashtagFormActions} = this.props;
        HashtagFormActions.formChange(value);
    }

    id = 0;

    getItemId = () => {
        return this.id++;
    }

    insertHandler = (e) => {
        e.preventDefault();
        const {value, HashtagFormActions, HashtagActions} = this.props;
        const new_item = {
            content: value,
            id: this.getItemId(),
        };
        HashtagActions.add(new_item);
        HashtagFormActions.formChange('');
    }

    render() {
        const {value} = this.props;
        const {changeHandler, insertHandler} = this;
        return (
            <HashtagForm value={value}
            onChange={changeHandler}
            insertHandler={insertHandler}
            />
        );
    }
}

export default connect(
    (state) => ({
        value: state.hashtagform.get('value')
    }),
    (dispatch) => ({
        HashtagFormActions: bindActionCreators(hashtagformActions, dispatch),
        HashtagActions: bindActionCreators(hashtagActions, dispatch),
    })
)(HashtagFormContainer);