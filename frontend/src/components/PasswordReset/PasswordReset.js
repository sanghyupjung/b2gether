import axios from 'axios';
import { useHistory } from "react-router-dom";
import { delId } from "store";
import { useAppContext } from "store";
import { getStorageItem } from 'utils/localstorage';

const PasswordReset = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    const updateUsers = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userid = getStorageItem('userid', '');
        // console.log(userid);
        if(formData.get("password") === formData.get("password_again")) {
            axios
            .patch("/accounts/update/" + userid + "/", formData)
            .then(({data}) => {
                alert("Your password is...\nchanged!");
                dispatch(delId());
                history.push('/login');
            })
            .catch((e) => {
                console.error(e);
            });
        }
        else {
            alert("Password is not same!");
        }
    };

    return (
        <form class="logincontainer" onSubmit={updateUsers}>
        <div class="row mb-3">
            <label class="col-sm-5 col-form-label">PASSWORD</label>
            <div class="col-sm-7">
                <input type="password" name="password" className="form-control" />
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-5 col-form-label">PASSWORD AGAIN</label>
            <div class="col-sm-7">
                <input type="password" name="password_again" className="form-control" />
            </div>
        </div>
            <button type="submit" className="btn btn-primary">Check</button>
        </form>
    );
};

export default PasswordReset;