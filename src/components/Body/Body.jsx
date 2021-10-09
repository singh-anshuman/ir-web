import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './Body.css';

export default class Body extends React.Component {
    render() {
        return(
            <div className="Body">
                <Dashboard/>
            </div>
        )
    }
}