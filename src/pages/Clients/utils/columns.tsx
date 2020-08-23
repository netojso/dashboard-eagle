/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { CSwitch } from '@coreui/react';
import { Column } from 'react-base-table';
import ButtonUser from './ButtonUser';

const columns = (handleSelectedPage) => ([
  {
    key: 'status',
    title: 'Status',
    dataKey: 'status',
    width: 200,
    cellRenderer: ({ cellData }) => (
      <CSwitch
        shape="pill"
        key="1"
        color="info"
        checked={cellData}
        onChange={(e) => console.log(e.target)}
        value="on"
      />
    ),
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
  {
    key: 'name',
    title: 'Nome do cliente',
    dataKey: 'user',
    width: 350,
    cellRenderer: ({ cellData }) => (<ButtonUser setSelectedPage={handleSelectedPage} cellData={cellData} />),
    resizable: true,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
  {
    key: 'cpf',
    title: 'CPF/CNPJ',
    dataKey: 'user.cpf',
    width: 250,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },

  },
  {
    key: 'contato',
    title: 'Contato',
    dataKey: 'user.contato',
    width: 250,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
  {
    key: 'tipo',
    title: 'Tipo',
    dataKey: 'user.tipo',
    width: 200,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
  {
    key: 'data',
    title: 'Data Venc.',
    dataKey: 'user.data',
    width: 200,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
]);

export default columns;
