import React from 'react';
import BaseTable from 'react-base-table';
import columns from '../AddClient/utils/columns'
import Table from '../../components/Table';
// import { Container } from './styles';

const Teste: React.FC = () => {
  return (
    <Table
      data={[]}
      width={1000}
      columns={columns}
      maxHeight={300}
      headerHeight={40}
      rowHeight={50}
    />
  );
}

export default Teste;
