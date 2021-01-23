import axios from 'axios';
import { useHistory } from "react-router-dom";
import { setToken } from "store";
import { useAppContext } from "store";

const UserLogin = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await axios.post('/accounts/token/', formData);
            const {
                data: {token: jwtToken}
            } = response;
            // console.log('토큰 확인', jwtToken);
            alert('Login Success!')
            dispatch(setToken(jwtToken));
            // history.push('/test');
            history.push('/');
        }
        catch(e) {
            if(e.response) {
                const {data} = e.response;
                console.error(data);
            }
        }
    }

    return (
        <form class="logincontainer" onSubmit={onSubmit}>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">ID</label>
                <div class="col-sm-9">
                    <input type="text" name="username" className="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">PASSWORD</label>
                <div class="col-sm-9">
                    <input type="password" name="password" className="form-control" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary">
                Login
            </button>
        </form>
    );
};

export default UserLogin;