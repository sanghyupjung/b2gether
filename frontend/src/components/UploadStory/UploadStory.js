import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useAppContext } from "store";
import HashtagFormContainer from 'containers/HashtagFormContainer';
import HashtagList from 'components/HashtagList';
import { delToken } from 'store';
import jwt_decode from 'jwt-decode';

const UploadStory = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    const token_info = jwt_decode(store.jwtToken);
    // console.log(token_info);
    const upload = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const headers = {
            Authorization: 'JWT ' + store.jwtToken
        }
        axios
        .post('/accounts/story/create/', formData, { headers: headers })
        .then(({data}) => {
            // console.log(data);
            alert("Your story is...\nuploaded!");
            history.push('/' + token_info.username + "/mystories");
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
    };
    return (
        <form onSubmit={upload}>
            &nbsp;
            <div class="form-group">
                <div class="textaligncenter">
                    <label>Story</label>
                </div>
                <input type="text" name="name" className="form-control" placeholder="Your Title" />
                <textarea name="contents" className="form-control" placeholder="Your Story" />
            </div>
            {/* <div class="form-group">
                <label>Hash Tag</label>
                <HashtagFormContainer />
                <HashtagList />
            </div> */}
            <div class="textaligncenter">
                <button type="submit" class="btn btn-primary">
                    Create Your Story
                </button>
            </div>
        </form>
    );
};

export default UploadStory;