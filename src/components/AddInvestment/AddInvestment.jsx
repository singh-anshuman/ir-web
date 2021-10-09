import React from 'react';
import {Modal} from 'antd';

export default class AddInvestment extends React.Component {
    
    constructor(props) {
        super(props);
        this.addInvestment = this.addInvestment.bind(this);
    }

    addInvestment() {
        this.props.closeDialog();
        //  Code for adding investment to be added here
    }
    
    render() {
        return (
            <Modal title="Add Investment" 
                    visible={this.props.isVisible} 
                    onOk={this.addInvestment} 
                    onCancel={this.props.closeDialog}>
                Add Investment Dialog Text !!!
            </Modal>
        )
    }
}