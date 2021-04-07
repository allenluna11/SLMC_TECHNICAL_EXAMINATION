import React, { useState, useEffect } from 'react'
import { Typography, Container, TextField } from "@material-ui/core";
import useStyles from "./styles";
import PhotoTable from "./PhotoTable";
const Photos = () => {
    const classes = useStyles();

    const [photos, setPhotos] = useState([]);
    const [searchTerms, setSearchTerm] = useState("");

    useEffect(() => {
            fetch("http://localhost:5000/photo")
            .then(response => response.json())
            .then(data => setPhotos(data))
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
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
      <Typography variant="h4" className={classes.title}>Photo's Lists</Typography>
      <TextField type="text" label="Search..." variant="outlined" name="search" onChange={handleSearch} value={searchTerms}/>
            <PhotoTable photos={search(photos)}/>
    </Container>
    )
}

export default Photos
