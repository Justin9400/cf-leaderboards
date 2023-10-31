import Tye from '../mtgcard/Tye'
import Bryan from '../mtgcard/Bryan'
import Morgan from '../mtgcard/Morgan'
import Justin from '../mtgcard/Justin'
import Paper from '@mui/material/Paper'
import React, { useState } from 'react'
import Table from '@mui/material/Table'
import Brandon from '../mtgcard/Brandon'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import { ColumnData } from '../../models/models'
import TableContainer from '@mui/material/TableContainer'

export type IDataTableProps = {
  columns: ColumnData[]
  data: any[] | null
  greenColumns?: number[]
  redColumns?: number[]
}

export default function DataTable(props: IDataTableProps) {
  const [hoveredCell, setHoveredCell] = useState({ rowIndex: -1, columnIndex: -1 })

  if (!props.columns) {
    return <></>
  }

  const isGreenColumn = (columnIndex: number) => (props.greenColumns || []).includes(columnIndex)
  const isRedColumn = (columnIndex: number) => (props.redColumns || []).includes(columnIndex)

  // Define an array of images corresponding to winners
  const winnerImages: { [key: string]: JSX.Element } = {
    Morgan: <Morgan />,
    Bryan: <Bryan />,
    Tye: <Tye />,
    Justin: <Justin />,
    Brandon: <Brandon />
    // Add more mappings as needed
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map((column, index) => (
              <TableCell key={column.key + '.s'} variant="head" align={'left'} style={{ width: '120px' }}>
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
                  const value = row[column.key]

                  return (
                    <TableCell
                      key={column.key + '.s'}
                      align={'left'}
                      sx={{
                        backgroundColor: isGreenColumn(columnIndex)
                          ? '#e7ffe7'
                          : isRedColumn(columnIndex)
                          ? '#ffebeb'
                          : 'background.paper'
                      }}
                      style={{ position: 'relative' }}
                      onMouseEnter={() => setHoveredCell({ rowIndex, columnIndex: columnIndex })}
                      onMouseLeave={() => setHoveredCell({ rowIndex: -1, columnIndex: -1 })}
                    >
                      {hoveredCell.rowIndex === rowIndex && hoveredCell.columnIndex === columnIndex
                        ? // Display the custom component when hovered
                          winnerImages[value] || value
                        : // Display the text as usual
                          value}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
