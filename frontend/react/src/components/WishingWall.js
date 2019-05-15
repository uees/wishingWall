import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import iconBpic from '../assets/images/bpic_1.gif';
import '../assets/css/WishingWall.css';

const STATE = {
    zIndex: 0,
}

class WishingWall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            messages: Array.from({ length: 30 }, (v, k) => {
                return {
                    id: k,
                    created_at: "2018-09-09",
                    content: "哈哈哈哈哈哈 大苏打实打实大苏打",
                    author: "马大哈",
                    top: parseInt(Math.random() * 400) + "px",
                    left: parseInt(Math.random() * 700) + "px",
                }
            }),
        };
    }

    componentDidMount() {
        // todo ajax
    }

    componentWillUnmount() {

    }

    render() {
        const messages = this.state.messages;
        const style = {
            zIndex: this.state.zIndex,
        };
        const listItems = messages.map(message => (
            <Wishing key={message.id.toString()} message={message}
                style={style} />
        ));

        return (
            <div id="content">{listItems}</div>
        );
    }
}

class Wishing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClose: false,
            zIndex: STATE.zIndex,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClose() {
        this.setState({
            isClose: !this.state.isClose,
        });
    }

    handleClick() {
        STATE.zIndex++;
        this.setState({
            zIndex: STATE.zIndex,
        });
    }

    render() {
        if (this.state.isClose) {
            return null;
        }

        const message = this.props.message;
        const style = {
            top: message.top,
            left: message.left,
            zIndex: this.state.zIndex,
        };

        return (
            <div className="wishing" id={"wishing-" + message.id} style={style} onClick={this.handleClick}>
                <div className="tip_h" title="双击关闭纸条">
                    <div className="num">第[{message.id}]条 {message.created_at}</div>
                    <div className="close" title="关闭纸条" ref="close" onClick={this.handleClose}>×</div>
                    <div className="clr"></div>
                </div>

                <div className="tip_c">
                    {message.content}
                </div>

                <div className="tip_f">
                    <div className="icon"><img src={iconBpic} alt="" title="" /></div>
                    <div className="name">{message.author}</div>
                    <div className="clr"></div>
                </div>
            </div>
        );
    }
}

export default WishingWall;
