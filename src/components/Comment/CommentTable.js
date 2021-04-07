import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import { StyledTableCell, StyledTableRow } from "./tableStyles";
const CommentTable = ({ comment }) => {
    
    const classes = useStyles();
    return (
    <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Body</StyledTableCell>
            </TableRow>
            </TableHead>
                <TableBody>
                {comment.map((post) => (
                <StyledTableRow key={post._id}>
                <StyledTableCell component="th" scope="row">
                    {post.id}
                </StyledTableCell>
                <StyledTableCell align="center">{post.name}</StyledTableCell>
                <StyledTableCell align="center">{post.email}</StyledTableCell>
                <StyledTableCell align="center">{post.body}</StyledTableCell>
                </StyledTableRow>
            ))}
                </TableBody>
        </Table>
      </TableContainer>
    )
}

export default CommentTable
