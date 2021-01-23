import { Link } from 'react-router-dom';
import { useAppContext } from 'store';
import jwt_decode from 'jwt-decode';

const SignInOrMyPage = () => {
    const {store} = useAppContext();
    // console.log(store.jwtToken)
    const token_info = store.jwtToken ? jwt_decode(store.jwtToken) : '';
    // console.log(token_info);
    return (
        <>
            {store.isAuthenticated ? (
                <div class="col keepright">
                    <Link to={"/" + token_info.username + "/mystories"}>
                        My Stories
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to={"/" + token_info.username + "/mycalendar"}>
                        My Calendar
                    </Link>
                </div>
                ) : (
                <div class="col keepright">
                    <Link to="/signin">
                        Sign In
                    </Link>
                </div>
            )}
        </>
    );
};

export default SignInOrMyPage;