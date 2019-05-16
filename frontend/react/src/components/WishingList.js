import React from 'react';
import axios from 'axios'
import { wishApi } from '../api';
import { formatTime } from '../utils';
import '../assets/css/WishingWall.css';

class WishingList extends React.Component {
    constructor(props) {
        super(props);
        this.cancel = null;
        this.state = {
            date: new Date(),
            messages: [],
        };
    }

    componentDidMount() {
        const page = this.props.match.page;

        wishApi.index({
            cancelToken: new axios.CancelToken(cancel => {
                this.cancel = cancel
            }),
            params: {
                page
            }
        }).then(response => {
            const { data } = response.data
            const messages = data.map(message => {
                message.created_at = formatTime(message.created_at)
                message.position = {
                    top: parseInt(message.position.top * 400) + "px",
                    left: parseInt(message.position.left * 700) + "px",
                }
                return message
            });

            this.setState({ messages })
        });
    }

    componentWillUnmount() {
        this.cancel()
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
