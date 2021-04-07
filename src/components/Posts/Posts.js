import React, { useState, useEffect } from 'react'
import { TextField, Typography, Container } from "@material-ui/core";

import useStyles from "./styles";
import PostsData from './PostsData';

const Posts = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [])

  const handleSearch = (e) => {
    setSearchTerms(e.target.value);

  }

  function search(rows) {
    return (rows.filter(
      (row) =>
      row.id.toLowerCase().indexOf(searchTerms) > -1 ||
      row.title.toLowerCase().indexOf(searchTerms) > -1 ||
      row.body.toLowerCase().indexOf(searchTerms) > -1
    )
    );
  }
    
  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>Posts</Typography>
      <TextField type="text" name="search" value={searchTerms} label="Search..." variant="outlined" onChange={handleSearch}/>
      <PostsData posts={search(posts)}/>
      </Container>
    )
}

export default Posts
