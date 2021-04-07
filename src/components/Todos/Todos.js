import React, { useState, useEffect } from 'react'
import { TextField, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";

import TodosData from "./TodosData";
const Todos = () => {
    const classes = useStyles();

    const [todos, setTodos] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then(response => response.json())
      .then(data => setTodos(data));
  }, [])


    const handleSearch = (e) => {
        setSearchTerms(e.target.value);
    }

    function search(rows) {
    return (rows.filter(
      (row) =>
      row.id.toLowerCase().indexOf(searchTerms) > -1 ||
      row.title.toLowerCase().indexOf(searchTerms) > -1 
    )
    );
  }

    return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>Posts</Typography>
      <TextField type="text" name="search" value={searchTerms} label="Search..." variant="outlined" onChange={handleSearch}/>
            <TodosData todos={search(todos)}/>
      </Container >
    )
}

export default Todos
