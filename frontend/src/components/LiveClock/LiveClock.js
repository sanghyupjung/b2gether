import React, { Component } from 'react';
import moment from 'moment';

class LiveClock extends Component {
    render() {
        // console.log(moment());
        let nowTime = moment()
        return(
            <div class="col keepleft">
                Today is {nowTime.format("YYYY.MM.DD")}
            </div>
        )
    }
}

export default LiveClock;