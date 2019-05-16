import React from 'react';
import '../assets/css/WishingWall.css';

class WishingList extends React.Component {
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

        const listItems = messages.map(message => (
            <WishingItem key={message.id.toString()} message={message} />
        ));

        return (
            <div id="list-content"><ul className="list-unstyled">{listItems}</ul></div>
        );
    }
}


function WishingItem(props) {
    const message = props.message;

    return (
        <li className="media wishing-item" id={"wishing-" + message.id}>
            <div className="media-body">
                <p className="author">{message.author} <span className="floor">#{message.id}</span></p>
                <p className="message">{message.content}</p>
                <span className="time">{message.created_at}</span>
            </div>
        </li >
    );
}


export default WishingList;
