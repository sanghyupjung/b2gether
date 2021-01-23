import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useAppContext } from "store";

const Stories = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    const goWriteStory = async (e) => {
        try {
            history.push("/writeStory");
        }
        catch(e) {
            if(e.response) {
                console.error(e.response);
            }
        }
    };
    return (
        <div class="writeyourstory">
            <button type="button" class="btn btn-primary" onClick={goWriteStory}>
                Write your story
            </button>
        </div>
    );
};

export default Stories;