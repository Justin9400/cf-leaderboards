import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ColumnData } from '../../models/models';


export type IDataTableProps = {
  columns: ColumnData[]
  data: any[] | null
}

// Pass in the game, be sure to set the columns properly with {key: KEY, name: NAME} for each column
  // Columns keys are case sensitive
// Pass in the game history as the result from Supabase
export default function DataTable(props: IDataTableProps) {
  if(!props.columns){
    return <></>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <TableCell
                  key={column.key + ".s"}
                  variant="head"
                  align={'center'}
                  style={{width: '120px'}}
                  sx={{
                    backgroundColor: 'background.paper',
                  }}
                >
                  {column.name}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data && props.data.map((row) => {
            return (
              <TableRow >
                {props.columns && props.columns.map((column) => {
                  let value = row[column.key]
                  value = Array.isArray(value) ? value.join('/') : value;
                  return (
                    <TableCell key={column.key + '.s'} align={'right'}>
                      {value}
                    </TableCell>
                  );
              })}
            </TableRow>
          );
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
