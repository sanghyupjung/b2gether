// 여러 페이지를 이동할 수 있게 도와주는 Browser Router 를 만드는 것
// 여러 페이지를 하나로 묶어둠

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Main, Login, Signin, FindID, ChangePassword, ResetPassword, WriteStory, MakeTodolist } from './pages';
import { users } from './routers';

const PageRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/findId" component={FindID} />
                <Route exact path="/changePassword" component={ChangePassword} />
                <Route exact path="/resetPassword" component={ResetPassword} />
                <Route exact path="/writeStory/" component={WriteStory} />
                <Route path="/makeTodolist/:calendar" component={MakeTodolist} />
                <Route path="/:user_id" component={users} />
            </Switch>
        </BrowserRouter>
    );
};

export default PageRouter;