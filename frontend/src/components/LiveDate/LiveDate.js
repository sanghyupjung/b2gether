import React, { Component } from 'react';

class LiveDate extends Component {
    constructor(props){
        super(props)
        this.state = {d: new Date()}
    }

    componentDidMount() { // LiveClock 컴포넌트가 불러올 때마다 1초 씩 this.Change()를 부름
        this.timeID = setInterval(
            () => this.Change(), 
            1000
        )
    }

    componentWillUnmount() { // 종료되면 반복하는 것도 클리어시킴
        clearInterval(this.timeID)
    }

    Change = () => { // 시계 구현
        this.setState({
            d: new Date(),
        })
    }

    render() {
        // console.log(this.state.d)
        return(
            <div class="col keepleft">
                And the time is {this.state.d.getHours()}:{this.state.d.getMinutes()}:{this.state.d.getSeconds()}
            </div>
        )
    }
}

export default LiveDate;