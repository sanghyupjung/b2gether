import React, { Component } from 'react';
import Hashtag from '../Hashtag'

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as hashtagActions from '../../modules/hashtag';

class HashtagList extends Component {
    deleteHandler = (e, id) => {
        e.preventDefault();
        const {HashtagActions} = this.props;
        HashtagActions.del(id);
    }

    render() {
        const {hashtag} = this.props;
        const {deleteHandler} = this;
        const hashtags = hashtag.map((item) => {
            const {id, content} = item.toJS();
            return (
                <Hashtag deleteHandler={(e) => deleteHandler(e, id)}>
                    {content}
                </Hashtag>
            );
        });
        return (
            <div>{hashtags}</div>
        );
    }
}

export default connect(
    (state) => ({
        hashtag:state.hashtag
    }),
    (dispatch) => ({
        HashtagActions:bindActionCreators(hashtagActions, dispatch)
    })
)(HashtagList);