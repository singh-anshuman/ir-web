import React from 'react';
import { Button } from 'antd';
import './UtilityBar.css'; 

export default class UtilityBar extends React.Component {
    constructor(props) {
        super(props);
        this.showAddInvestmentDialog = this.showAddInvestmentDialog.bind(this);
    }

    showAddInvestmentDialog() {
        console.log('Opening Add Investment Dialog');
    }

    render() {
        return(
            <div className="UtilityBar">
                <Button type="default" onClick={this.showAddInvestmentDialog}>
                    Add Investment
                </Button>
            </div>
        )
    }
}