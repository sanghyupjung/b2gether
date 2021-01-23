import axios from 'axios';
// import { useHistory } from "react-router-dom";
import { useAppContext } from "store";
import jwt_decode from 'jwt-decode';
import TodolistFormContainer from 'containers/TodolistFormContainer';
import TodoItemList from 'components/TodoItemList';
import { useHistory } from "react-router-dom";
import CurrentTodolist from 'components/CurrentTodolist';
import { delToken } from 'store';

const UploadTodolist = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    const token_info = jwt_decode(store.jwtToken);
    const para = document.location.href.split("?");
    const parameter = [token_info.username, para[0].slice(-8)];
    
    const upload = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const data = document.getElementsByName("todoitem");
        // console.log(token_info);
        for(let i = 0; i < data.length; i++) {
            const formData = new FormData();
            // console.log(x[i].innerText);
            // formData.append("data" + String(i + 1), data[i].innerText);
            // console.log(formData.get("data" + String(i + 1)));
            formData.append("name", data[i].innerText);
            // formData.append("user", token_info.user_id);
            formData.append("year", para[0].slice(-8).substring(0, 4));
            formData.append("month", para[0].slice(-8).substring(4, 6));
            formData.append("day", para[0].slice(-8).substring(6, 8));
            // console.log(store.jwtToken);
            const headers = {
                Authorization: 'JWT ' + store.jwtToken
            }
            axios
            .post('/accounts/todolist/create/', formData, { headers: headers })
            // .post('/accounts/todolist/create/', formData)
            .then(({data}) => {
                // console.log(data);
                alert("The todolist is...\nuploaded!");
                history.push('/' + token_info.username + "/mycalendar");
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    alert("You need to login again!");
                    // dispatch(delToken());
                    history.push('/login');
                }
                else {
                    console.error(e);
                }
            });
        }
        // console.log(formData);
    };
    return (
        <form onSubmit={upload}>
            <div class="uploadtodolist container">
                <div class="form-group col currenttodolist">
                    <label>Your Todolist is...</label>
                    <CurrentTodolist>{parameter}</CurrentTodolist>
                </div>
                <div class="inputtodolist col">
                    <div class="textaligncenter">
                        <label>Upload Your Todolist</label>
                    </div>
                    <div class="form-group">
                        <TodolistFormContainer />
                    </div>
                    <div class="uploadyourjob">
                        <button type="submit" class="btn btn-primary">
                            Upload Your Job
                        </button>
                    </div>
                    <div class="form-group">
                        <TodoItemList />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UploadTodolist;