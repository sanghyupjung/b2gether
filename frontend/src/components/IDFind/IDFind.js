import axios from 'axios';
import { useHistory } from "react-router-dom";

const IDFind = () => {
    const history = useHistory();
    const getUsers = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios
        .post("/accounts/find/", formData)
        .then(({data}) => {
            // console.log(data.username !== '' ? data.username : "No ID");
            if(data.username !== '') {
                alert("Your ID is...\n" + data.username);
                history.push('/login');
            }
            else {
                alert("We can't find your ID!");
            }
        })
        .catch((e) => {
            console.error(e);
        });
    };

    return (
        <form class="logincontainer" onSubmit={getUsers}>
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

export default IDFind;