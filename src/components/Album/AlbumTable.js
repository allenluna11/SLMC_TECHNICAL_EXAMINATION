import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import { StyledTableCell, StyledTableRow } from "./tableStyles";

const AlbumTable = ({albums}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell  align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Title</StyledTableCell>
            </TableRow>
            </TableHead>
                <TableBody>
                {albums.map(album => (
                <StyledTableRow key={album._id}>
                <StyledTableCell component="th" scope="row"  align="center">
                    {album.id}
                </StyledTableCell>
                        <StyledTableCell align="center">{album.title}</StyledTableCell>
                </StyledTableRow>
            ))}
                </TableBody>
        </Table>
      </TableContainer>
    )
}

export default AlbumTable
