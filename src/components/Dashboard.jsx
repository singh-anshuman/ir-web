import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

export default class Dashboard extends React.Component {

    rowData = [
        {id: 1, symbol: "SBIN", name: "State Bank of India", price: 430, quantity: 200},
        {id: 2, symbol: "REDI", name: "Redington India Ltd.", price: 520, quantity: 50},
        {id: 3, symbol: "RELI", name: "Reliance Industries", price: 1010, quantity: 10},
        {id: 4, symbol: "APPL", name: "Apple Ltd.", price: 134, quantity: 300},
        {id: 4, symbol: "SMSNG", name: "Samsung Ltd.", price: 87, quantity: 250}
        
    ];

    render() {
        return (
            <div className="ag-theme-blue" style={{height: 500, width: 1200}}>
                <AgGridReact
                    rowData={this.rowData}>
                    <AgGridColumn field="id"></AgGridColumn>
                    <AgGridColumn field="symbol"></AgGridColumn>
                    <AgGridColumn field="name"></AgGridColumn>
                    <AgGridColumn field="price"></AgGridColumn>
                    <AgGridColumn field="quantity"></AgGridColumn>
                </AgGridReact>
            </div>
        )
    }
} 