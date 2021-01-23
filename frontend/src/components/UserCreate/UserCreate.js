import axios from 'axios';
import { useHistory } from "react-router-dom";

const UserCreate = () => {
    const history = useHistory();
    const userJoin = (e) => {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target);
        // console.log(formData.get("password"));
        // console.log(formData.get("password_again"));
        if(formData.get("password") === formData.get("password_again")) {
            axios
            .post('/accounts/join/', formData)
            .then(({data}) => {
                // console.log(data);
                alert("Your account is...\ncreated!");
                history.push('/login');
            })
            .catch(() => {
                console.error(e);
            });
        }
        else {
            alert("Password is not same!");
        }
    };

    return (
        <form class="logincontainer" onSubmit={userJoin}>
            <div class="row mb-3">
                <label class="col-sm-5 col-form-label">ID</label>
                <div class="col-sm-7">
                    <input type="text" name="username" className="form-control" />
                </div>
            </div>
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
            <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
    );
};

export default UserCreate;