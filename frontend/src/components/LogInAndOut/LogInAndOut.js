import { Link } from 'react-router-dom';
import { delToken } from 'store';
import { useAppContext } from 'store';
import { useHistory } from "react-router-dom";

const LogInAndOut = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    return (
        <div class="col keepright">
            {store.isAuthenticated ? (
            <Link
                to="/login"
                onClick = {
                    (e) => {
                        e.preventDefault();
                        dispatch(delToken());
                        history.push('/');
                    }
                }
            >
                Logout
            </Link>
            ) : (
            <Link
                to="/login"
            >
                Login
            </Link>
            )}
        </div>
    );
};

export default LogInAndOut;