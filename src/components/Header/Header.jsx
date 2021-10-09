import React from 'react';
import './Header.css';
import {PageHeader} from 'antd';

export default class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <PageHeader 
                    className="site-page-header"
                    title="Investment Research"
                />
            </div>
        )
    }
}