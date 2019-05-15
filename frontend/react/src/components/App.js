import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WishingWall from './WishingWall';
import WishingList from './WishingList';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/list/page/1">历史</Link>
                                </li>
                            </ul>
                        </nav>

                        <Route path="/" exact component={WishingWall} />
                        <Route path="/list/page/:page" component={WishingList} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
