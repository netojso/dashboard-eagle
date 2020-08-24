/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Column } from 'react-base-table';
import DivUser from './DivUser';

// Colunas que serão enviadas para a Table

const columns = [
  {
    title: 'Status',
    dataKey: 'status',
    width: 150,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
  {
    title: 'Nome do colaborador',
    dataKey: 'user',
    width: 300,
    cellRenderer: ({ cellData }) => (<DivUser cellData={cellData} />),
    resizable: true,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
  {
    title: 'Horário de login',
    dataKey: 'login',
    width: 250,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },

  },
  {
    title: 'Clientes atendidos',
    dataKey: 'clients',
    width: 200,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },
  },
];

export default columns;
