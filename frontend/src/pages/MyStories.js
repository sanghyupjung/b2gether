import { Link } from 'react-router-dom';
import { useAppContext } from 'store';
import jwt_decode from 'jwt-decode';
import Stories from '../components/Stories';
import LiveClock from '../components/LiveClock';
import LiveDate from '../components/LiveDate';
import LogInAndOut from '../components/LogInAndOut';
import axios from 'axios';
import { useState, useEffect } from 'react';

const MyStories = () => {
    const {store} = useAppContext();
    const token_info = jwt_decode(store.jwtToken);

    const [state, setState] = useState({
            stories: [],
            items: 4,
            preItems: 0,
    });

    const {stories} = state;
    const story_list = stories.map((story) => {
        const {id, name, contents, created, user} = story;
        return (
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

    const getStories = () => {
        axios
        .get("http://localhost:8000/accounts/story/")
        .then(({data}) => {
            // console.log(data);
            const reverse_data = data.reverse();
            const result = reverse_data.slice(state.preItems, state.items);
            // console.log(result);
            // setState({
            //     ...state,
            //     stories: result,
            // });
        })
        .catch((e) => {
            console.error(e);
        });
    };

    // const infiniteScroll = () => {
    //     // console.log("스크롤 탑 : " + document.documentElement.scrollTop);
    //     // console.log("클라이언트 높이 : " + document.documentElement.clientHeight);
    //     // console.log("스크롤 높이 : " + document.documentElement.scrollHeight);
    //     let scrollTop = document.documentElement.scrollTop;
    //     let clientHeight = document.documentElement.clientHeight;
    //     let scrollHeight = document.documentElement.scrollHeight;
    //     // console.log(scrollTop + clientHeight - 1);
    //     // console.log(scrollHeight);
    //     if(scrollTop + clientHeight + 1 >= scrollHeight) {
    //         console.log("Next");
    //         this.setState({
    //             // preItems: this.state.items,
    //             items: this.state.items + 4,
    //         });
    //         // this.getStories();
    //         this.componentDidMount();
    //     }
    // };

    useEffect(() => {
        getStories();
    }, []);

    // componentDidMount() {
    //     getStories();
    //     // window.addEventListener("scroll", this.infiniteScroll, true);
    // }

    return (
        <div>
            <div class="titleb2gether">
                <Link to="/">B2GETHER</Link>
            </div>
            <div class="container">
                <div class="row">
                    <LiveClock />
                    <LogInAndOut />
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <LiveDate />
                    <div class="col keepright">
                        <Link to={"/" + token_info.username + "/mystories"}>My Stories</Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to={"/" + token_info.username + "/mycalendar"}>My Calendar</Link>
                    </div>
                </div>
            </div>
            <Stories />
            <div class="storycontainer">
                {stories}
            </div>
        </div>
    );
}

export default MyStories;