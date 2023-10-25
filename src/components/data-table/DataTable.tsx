import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ColumnData } from '../../models/models';

export type IDataTableProps = {
  columns: ColumnData[];
  data: any[] | null;
  greenColumns?: number[]; 
  redColumns?: number[]; 
};



export default function DataTable(props: IDataTableProps) {
  if (!props.columns) {
    return <></>;
  }

  const isGreenColumn = (columnIndex: number) => (props.greenColumns || []).includes(columnIndex);
  const isRedColumn = (columnIndex: number) => (props.redColumns || []).includes(columnIndex);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map((column, index) => (
              <TableCell
                key={column.key + '.s'}
                variant="head"
                align={'left'}
                style={{ width: '120px' }}
               
              >
                {column.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data &&
            props.data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {props.columns.map((column, columnIndex) => {
                  let value = row[column.key];
                  value = Array.isArray(value) ? value.join('/') : value;
                  return (
                    <TableCell
                      key={column.key + '.s'}
                      align={'left'}
                      sx={{
                        backgroundColor: isGreenColumn(columnIndex) ? '#e7ffe7' : isRedColumn(columnIndex) ? '#ffebeb' : 'background.paper',
                      }}
                    >
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
