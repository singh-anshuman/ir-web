import React from 'react';
import { Button } from 'antd';
import './UtilityBar.css'; 
import AddInvestment from '../AddInvestment/AddInvestment';

export default class UtilityBar extends React.Component {
    constructor(props) {
        super(props);
        this.showAddInvestmentDialog = this.showAddInvestmentDialog.bind(this);
        this.hideAddInvestmentDialog = this.hideAddInvestmentDialog.bind(this);

        this.state = {
            isVisible: false
        }
    }

    showAddInvestmentDialog() {
        this.setState({
            isVisible:true
        })
    }

    hideAddInvestmentDialog() {
        this.setState({
            isVisible: false
        });
    }

    render() {
        return(
            <div className="UtilityBar">
                <Button type="default" onClick={this.showAddInvestmentDialog}>
                    Add Investment
                </Button>
                <AddInvestment isVisible={this.state.isVisible}
                    closeDialog={this.hideAddInvestmentDialog}/>
            </div>
        )
    }
}