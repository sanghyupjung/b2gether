import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LogInAndOut from '../components/LogInAndOut';
import SignInOrMyPage from '../components/SignInOrMyPage';
import LiveClock from '../components/LiveClock';
import LiveDate from '../components/LiveDate';

class Main extends Component {
    state = {
        stories: [],
        items: 4,
        preItems: 0,
    };

    getStories = () => {
        axios
        .get("accounts/story/")
        .then(({data}) => {
            // console.log(data);
            let reverse_data = data.reverse();
            let result = reverse_data.slice(this.state.preItems, this.state.items);
            // console.log(result);
            this.setState({
                // stories: data,
                stories: result,
                // stories: [...this.state.stories, ...result]
            });
        })
        .catch((e) => {
            console.error(e);
        });
    };

    infiniteScroll = () => {
        // console.log(Math.max(document.documentElement.clientTop, document.body.clientTop));
        // console.log(Math.max(document.documentElement.offsetTop, document.body.offsetTop));
        // console.log(Math.max(document.documentElement.scrollTop, document.body.scrollTop));
        // console.log(Math.max(document.documentElement.clientHeight, document.body.clientHeight));
        // console.log(Math.max(document.documentElement.offsetHeight, document.body.offsetHeight));
        // console.log(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
        // console.log("스크롤 탑 : " + document.documentElement.scrollTop);
        // console.log("클라이언트 높이 : " + document.documentElement.clientHeight);
        // console.log("스크롤 높이 : " + document.documentElement.scrollHeight);
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        // console.log(scrollTop + clientHeight - 1);
        // console.log(scrollHeight);
        if(scrollTop + clientHeight + 1 >= scrollHeight) {
            // console.log("Next");
            this.setState({
                // preItems: this.state.items,
                items: this.state.items + 4,
            });
            // this.getStories();
            this.componentDidMount();
        }
    };

    // componentDidMount : 마운트가 끝나고 화면에 표시되기 전
    componentDidMount() {
        this.getStories();
        window.addEventListener("scroll", this.infiniteScroll, true);
    }

    render() {
        const {history} = this.props;
        const {stories} = this.state;
        const story_list = stories.map((story) => {
            // console.log(story);
            const {id, name, contents, created, user} = story;
            // console.log(created);
            // console.log(typeof(created));
            return (
                // <li key={id}>{name}</li>
                <>
                    <div class="card story">
                        <div class="card-body">
                            <h1 class="card-title">{name}</h1>
                            <div class="userandstorydate">
                                <div>
                                    {/* {created} */}
                                    { created.substring(0, 4) + "."
                                    + created.substring(5, 7) + "."
                                    + created.substring(8, 10) + " "
                                    + created.substring(11, 13) + ":"
                                    + created.substring(14, 16) + ":"
                                    + created.substring(17, 19) }
                                </div>
                                <div>{user}</div>
                            </div>
                            <div>&nbsp;</div>
                            <div>{contents}</div>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                </>
            );
        });
        // const reverse_story_list = story_list.reverse();
        return (
            <div>
                <div class="titleb2gether">B2GETHER</div>
                <div class="container">
                    <div class="row">
                        <LiveClock />
                        <LogInAndOut />
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <LiveDate />
                        <SignInOrMyPage />
                    </div>
                </div>
                <div>&nbsp;</div>
                {/* <ul>{reverse_story_list}</ul> */}
                <div class="storycontainer">
                    {story_list}
                    {/* {reverse_story_list} */}
                </div>
            </div>
        );
    }
}

export default Main;