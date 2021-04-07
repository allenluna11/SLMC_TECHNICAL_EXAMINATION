import React, { useState, useEffect } from 'react'
import { Typography, Container, TextField } from "@material-ui/core";

import useStyles from "./styles";
import CommentTable from "./CommentTable";

const Comment = () => {
  const classes = useStyles();

  const [postComment, setPostsComment] = useState([]);
  const [searchTerms, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/comment")
      .then(response => response.json())
      .then(data => setPostsComment(data))
  }, []);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

    function search(rows) {
    return (rows.filter(
      (row) =>
      row.id.toLowerCase().indexOf(searchTerms) > -1 ||
      row.name.toLowerCase().indexOf(searchTerms) > -1 ||
      row.email.toLowerCase().indexOf(searchTerms) > -1 ||
      row.body.toLowerCase().indexOf(searchTerms) > -1
    )
    );
  }

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>Comment Lists</Typography>
      <TextField type="text" label="Search..." variant="outlined" name="search" onChange={handleSearch} value={searchTerms}/>
      <CommentTable comment={search(postComment)}/>
    </Container>
    )
}

export default Comment
