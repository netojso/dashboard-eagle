import { Column } from 'react-base-table';

const columns = [
  {
    key: 'cep',
    title: 'CEP',
    dataKey: 'cep',
    width: 250,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },

  },
  {
    key: 'bairro',
    title: 'Bairro',
    dataKey: 'bairro',
    width: 250,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },

  },
  {
    key: 'rua',
    title: 'Rua',
    dataKey: 'rua',
    width: 250,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },

  },
  {
    key: 'cidade',
    title: 'Cidade',
    dataKey: 'cidade',
    width: 250,
    align: Column.Alignment.CENTER,
    style: { color: '#475766', fontSize: 16 },

  },

];

export default columns;
