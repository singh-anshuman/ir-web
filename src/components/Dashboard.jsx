import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

export default class Dashboard extends React.Component {

    rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    render() {
        return (
            <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                <AgGridReact
                    rowData={this.rowData}>
                    <AgGridColumn field="make"></AgGridColumn>
                    <AgGridColumn field="model"></AgGridColumn>
                    <AgGridColumn field="price"></AgGridColumn>
                </AgGridReact>
            </div>
        )
    }
} 