
import React, { Component,useState } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

export default function DataTable() {

    const [selectedRow, setSelectedRow] = useState(null);

    return(
        <div style={{ maxWidth: '100%', height:"80%", width:"100%",padding:"10px" }}>
        <MaterialTable
          columns={[
            { title: 'ID', field: 'name' },
            { title: 'Steam név', field: 'surname'},
            { title: 'Készpénz', field: 'birthYear', type: 'numeric' },
            { title: 'Bankiegyenleg', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
            { title: 'Bankiegyenleg', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
            { title: 'Bankiegyenleg', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
            { title: 'Bankiegyenleg', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
          ]}
          data={[
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Anyam', surname: 'Picsája', birthYear: 1997, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Anyam', surname: 'Picsája', birthYear: 1997, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Anyam', surname: 'Picsája', birthYear: 1997, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Anyam', surname: 'Picsája', birthYear: 1997, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Anyam', surname: 'Picsája', birthYear: 1997, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Anyam', surname: 'Picsája', birthYear: 1997, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Anyam', surname: 'Picsája', birthYear: 1997, birthCity: 63 },
        
        ]}
          title="Elérhető játékosok listája"
          icons={tableIcons}
          onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
          options={{
            paging: true,
            pageSize:5,
            paginationType: "normal",
            pageSizeOptions:[],
            maxBodyHeight:"800",
            headerStyle: {
                backgroundColor: 'black',
                color: '#FFF'
              },
              rowStyle: {
                backgroundColor: 'black',
              }
          }}
          localization={{
              body:{
                emptyDataSourceMessage: 'Nem található a keresett adat a táblában!',
              },
              pagination:{
                firstTooltip:"Első oldal",
                previousTooltip:"Előző oldal",
                nextTooltip:"Következő oldal",
                lastTooltip:"Utolsó oldal",
                labelDisplayedRows:"{from}-{to} -ig {count}"
              },
              toolbar:{
                searchPlaceholder:"Keresés",
                searchTooltip:"Kereső"
              }

          }}

        />
        </div>
    );
}

