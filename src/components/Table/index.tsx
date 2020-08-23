import React from 'react';
import BaseTable, { Column } from 'react-base-table';
import 'react-base-table/styles.css';
import { Container } from './styles';
interface IProps {
  data: any;
  width: number;
  columns: any;
  maxHeight: number;
  headerHeight: number;
  rowHeight: number;
}

const Table: React.FC<IProps> = ({
  columns,
  data,
  headerHeight,
  maxHeight,
  rowHeight,
  width}) => {
  return (
        <BaseTable
        data={data}
        width={width}
        headerHeight={headerHeight}
        maxHeight={maxHeight}
        rowHeight={rowHeight}
        >
          {columns.map(column => (
          <Column {...column} key={column.dataKey} />
          ))}
        </BaseTable>
    );
}

export default Table;
