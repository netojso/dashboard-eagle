/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Column } from 'react-base-table';
import ButtonUser from './ButtonUser';

const columns = [
  {
    key: 'status',
    title: 'Status',
    dataKey: 'status',
    width: 150,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
  {
    key: 'name',
    title: 'Nome do colaborador',
    dataKey: 'user',
    width: 300,
    cellRenderer: ({ cellData }) => (<ButtonUser cellData={cellData} />),
    resizable: true,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
  {
    key: 'login',
    title: 'Horário de login',
    dataKey: 'login',
    width: 250,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },

  },
  {
    key: 'clientes',
    title: 'Clientes atendidos',
    dataKey: 'clients',
    width: 200,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
];

export default columns;
