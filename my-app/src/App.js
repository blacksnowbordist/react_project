import './App.css';
import React from 'react';
import Select from 'react-select';
import UITable from './components/UITable';
import Styles from './styles/Styles';
import UICheckbox from './components/UICheckbox';

function App() {
  const typeDocuments = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Каталог/файл',
        accessor: 'file'
      },
      {
        Header: 'Вид документа',
        accessor: 'some',
        Cell: <Select options= {typeDocuments}/>
      },
      {
        Header: 'Долг/должник',
        accessor: 'dolg',
      },
      {
        Header: 'Читаемый',
        accessor: 'readed',
        Cell: <UICheckbox bool = {false}/>
      },
      {
        Header: 'Доп.проверка',
        accessor: 'needCheck',
        Cell: <UICheckbox bool = {false}/>
      }
      
    ]
  )
  const data = React.useMemo(() => [{
    file: 'file',
    dolg: 'firstName',
    readed: 22,
    needCheck: true,
    some: 'some'
  }], [])



  return (
    <Styles>
      <UITable columns={columns} data={data} />
    </Styles>
  );
}

export default App;
