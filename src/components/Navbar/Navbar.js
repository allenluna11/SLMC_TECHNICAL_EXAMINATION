import React from 'react';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./styles.css";
const Navbar = () => {
    return (
        <nav size="lg" className="navbar">
            <Typography variant="h4" className="navbar-brand" component={Link} to="/" >XYZ</Typography>
            <ul className="navbar-item">
                <Typography className="link" variant="body2" component={Link} to="/posts">Posts</Typography>
                <Typography className="link" variant="body2" component={Link} to="/comment">Comment</Typography>
                <Typography className="link" variant="body2" component={Link} to="/album">Albums</Typography>
                <Typography className="link" variant="body2" component={Link} to="/photo">Photos</Typography>
                <Typography className="link" variant="body2" component={Link} to="/todos">Todos</Typography>
            </ul>
        </nav>
    )
}

export default Navbar
