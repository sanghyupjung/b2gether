import { Link } from 'react-router-dom';
import { useAppContext } from 'store';
import jwt_decode from 'jwt-decode';
import ShowCalendar from '../components/ShowCalendar';
import HeaderCalendar from '../components/HeaderCalendar';
import moment from 'moment';
import LiveClock from '../components/LiveClock';
import { useState } from 'react';
import LogInAndOut from '../components/LogInAndOut';
import LiveDate from '../components/LiveDate';

const MyCalendar = (props) => {
    const {store} = useAppContext();
    const token_info = jwt_decode(store.jwtToken);
    const [state, setState] = useState({
        calendarYM: moment(),
        today: moment(),
        selected: moment().format("YYYY-MM-DD")
    });
    const moveMonth = (month) => {
        setState({
            ...state,
            calendarYM: state.calendarYM.add(month,'M'),
        });
    };
    const changeSelected = (clickedDate) => {
        if(moment(clickedDate).isSame(state.selected, 'day')) {
            props.clickFn(clickedDate);
            return;
        }
        setState({
            ...state,
            selected: clickedDate
        });
        props.clickFn(clickedDate);
        if(moment(clickedDate).isBefore(state.calendarYM, 'month')) {
            moveMonth(-1);
        }
        else if(moment(clickedDate).isAfter(state.calendarYM, 'month')) {
            moveMonth(1);
        }
    };
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
            <div>&nbsp;</div>
            <div className="test-layout">
                <div className="RCA-app-container">
                    <HeaderCalendar calendarYM={state.calendarYM.format("YYYY년 MM월")}
                        today={state.today.format("현재 YYYY-MM-DD")}
                        moveMonth={moveMonth}
                    />
                    <ShowCalendar YM={state.calendarYM.format("YYYY-MM-DD")}
                        selected={state.selected}
                        changeSelected={changeSelected} />
                    <div>&nbsp;</div>
                </div>
            </div>
        </div>
    );
}

MyCalendar.defaultProps = {
    clickFn: () => {}
};

export default MyCalendar;