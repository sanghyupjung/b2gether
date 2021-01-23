import axios from 'axios';
import { useHistory } from "react-router-dom";
import { setId } from "store";
import { useAppContext } from "store";

const PasswordChange = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    const checkUsers = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios
        .post("/accounts/check/", formData)
        .then(({data}) => {
            console.log(data);
            if(data[0].username !== '') {
                let auth_code = prompt("The mail has been sent to your email!\nPut the authentication code!");
                if(auth_code === data[1]) {
                    dispatch(setId(data[0].id));
                    // console.log(data[0].id);
                    alert("The authentication code you wrote is...\ncorrect!");
                    history.push('/resetPassword');
                }
                else {
                    alert("The authentication code you wrote is...\nwrong...");
                    history.push('/changePassword');
                }
            }
            else {
                alert("We can't find your account!");
            }
        })
        .catch((e) => {
            console.error(e);
        });
    };

    return (
        <form class="logincontainer" onSubmit={checkUsers}>
            <div class="row mb-3">
                <label class="col-sm-5 col-form-label">ID</label>
                <div class="col-sm-7">
                    <input type="text" name="username" className="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-5 col-form-label">PHONE NUMBER</label>
                <div class="col-sm-7">
                    <input type="text" name="phone_number" className="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-5 col-form-label">E-MAIL</label>
                <div class="col-sm-7">
                    <input type="text" name="email" className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Check</button>
        </form>
    );
};

export default PasswordChange;