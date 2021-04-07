import React, {useState, useEffect} from 'react'
import { Typography, Container, TextField } from "@material-ui/core";
import useStyles from "./styles";

import AlbumTable from "./AlbumTable";

const Album = () => {
    const classes = useStyles();

    const [albums, setAlbums] = useState([]);
    const [searchTerms, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/album")
            .then(response => response.json())
            .then(data => setAlbums(data))
    }, []);

    function search(rows) {
        return (rows.filter(
        (row) =>
        row.id.toLowerCase().indexOf(searchTerms) > -1 ||
        row.title.toLowerCase().indexOf(searchTerms) > -1 
        )
    );
  }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
      <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>Albums Lists</Typography>
      <TextField type="text" label="Search..." variant="outlined" name="search" onChange={handleSearch} value={searchTerms}/>
            <AlbumTable albums={search(albums)}/>
    </Container>

    )
}

export default Album
