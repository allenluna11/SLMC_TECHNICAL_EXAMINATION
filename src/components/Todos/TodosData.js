import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import { StyledTableCell, StyledTableRow } from "./tableStyles";
const PostsData = ({ todos }) => {
    const classes = useStyles();
    return (
    <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">Title</StyledTableCell>
            </TableRow>
            </TableHead>
                <TableBody>
                {todos.map((post) => (
                <StyledTableRow key={post._id}>
                <StyledTableCell component="th" scope="row">
                    {post.id}
                </StyledTableCell>
                <StyledTableCell align="center">{post.title}</StyledTableCell>
                </StyledTableRow>
            ))}
                </TableBody>
        </Table>
      </TableContainer>
    )
}

export default PostsData
