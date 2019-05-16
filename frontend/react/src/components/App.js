import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WishingWall from './WishingWall';
import WishingList from './WishingList';
import WishingForm from './WishingForm';

const App = ({ match }) => (
    <Router>
        <div>
            <nav id="header">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">许愿墙</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/list/page/1">记录</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/wishing">许愿</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={WishingWall} />
            <Route path="/list/page/:page" component={WishingList} />
            <Route path="/wishing" exact component={WishingForm} />
        </div>
    </Router>
);

export default App;
