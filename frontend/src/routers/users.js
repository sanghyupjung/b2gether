import { Switch, Route } from 'react-router-dom';
import MyStories from '../pages/MyStories';
import MyCalendar from '../pages/MyCalendar';

const users = ({ match }) => {
    return (
        <Switch>
            {/* <Route exact path={match.url} component={MyStories} /> */}
            <Route
                path={match.url + '/mystories'}
                component={MyStories}
            /> 
            <Route
                path={match.url + '/mycalendar'}
                component={MyCalendar}
            /> 
        </Switch>
    );
};

export default users;