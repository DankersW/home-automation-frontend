import React from 'react'
import "./Table.css"

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';

function DenseTable({table_headers, table_data}) {
    return(
        <div className="table-container">
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"></TableCell>
                            {table_headers.map((header_item) => { return (
                                <TableCell key={'header_cell' + header_item} align="right">{header_item}</TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table_data.map((row_item) => (
                            <TableRow key={row_item.name}>
                            <TableCell component="th" scope="row"> {row_item.name} </TableCell>
                            {table_headers.map((column_key) => (
                                <TableCell align="right" key={row_item.name + "_" + column_key}>{row_item[column_key]}</TableCell>
                            ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DenseTable;