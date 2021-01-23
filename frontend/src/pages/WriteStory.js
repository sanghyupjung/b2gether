import { Link } from 'react-router-dom';
import { useAppContext } from 'store';
import jwt_decode from 'jwt-decode';
import UploadStory from '../components/UploadStory';
import LiveClock from '../components/LiveClock';
import LogInAndOut from '../components/LogInAndOut';
import LiveDate from '../components/LiveDate';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { delToken } from 'store';

const WriteStory = () => {
    const {store, dispatch} = useAppContext();
    // const token_info = jwt_decode(store.jwtToken);
    const token_info = store.jwtToken ? jwt_decode(store.jwtToken) : "";
    // console.log(token_info);
    const history = useHistory();
    // useEffect(() => {
    //     alert("You need to login again!");
    //     dispatch(delToken());
    //     history.push('/login');
    // }, []);
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
            <UploadStory />
        </div>
    );
}

export default WriteStory;