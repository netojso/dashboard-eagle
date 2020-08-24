import React from 'react';
import BaseTable, { Column } from 'react-base-table';
import 'react-base-table/styles.css';
import { Container } from './styles';

// interface DataClient {
//     id: number;
//     status: boolean,
//     user: {
//       id: number,
//       avatar: string,
//       name: string,
//       apelido: string,
//       contato: string,
//       tipo: string,
//       cpf: string,
//       data: 20,
//       nascimento: string,
//     }
// }

// interface DataCollab {
//   id: number,
//       status: string,
//       user: {
//         avatar: string,
//         name: string,
//       },
//      login: string,
//       clients: number,
// }

// interface DataAdress {
//   cep: string,
//   rua: string,
//   bairro: string,
//   cidade: string,
// }

interface IProps {
  key: string;
  // data: DataClient[] | DataCollab[] | DataAdress[]
  data: any;
  width: number;
  columns: {
    dataKey: string;
    width: number;
  }[];
  maxHeight: number;
  headerHeight: number;
  rowHeight: number;
}

const Table: React.FC<IProps> = ({
  key,
  columns,
  data,
  headerHeight,
  maxHeight,
  rowHeight,
  width}) => {
  return (
    <Container>
        <BaseTable
        key={key}
        data={data}
        width={width}
        headerHeight={headerHeight}
        maxHeight={maxHeight}
        rowHeight={rowHeight}
        >
          {columns.map(({dataKey, width, ...restProps}) => (
          <Column width={width} key={dataKey} dataKey={dataKey} {...restProps} />
          ))}
        </BaseTable>
     </Container>
    );
}

export default Table;
