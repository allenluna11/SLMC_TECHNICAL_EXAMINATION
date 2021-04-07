import React from 'react';
import {Link} from "react-router-dom"
import { Typography, Grid, Grow, Container, Card, CardActions , CardContent, CardActionArea } from "@material-ui/core";
import useStyles from "./styles";
const Home = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container} text="center" maxWidth="md">
            <Typography variant="h3" className={classes.title}>Lists of API</Typography>
            <Container>
                <Grow in>
                    <Grid container justify="space-around" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                                <CardActions>
                                    <CardContent className={classes.content} id="card">
                                        <Typography className={classes.titleData} variant="h4" component={Link} to="/posts">POSTS</Typography>
                                        <Typography component="p">Click Posts</Typography>
                                    </CardContent>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                                <CardActions>
                                    <CardContent>
                                        <Typography className={classes.titleData} variant="h4" component={Link} to="/comment">COMMENTS</Typography>
                                        <Typography component="p">Click Comment</Typography>
                                    </CardContent>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                                <CardActions>
                                    <CardContent>
                                        <Typography className={classes.titleData} variant="h4" component={Link} to="/album">ALBUMS</Typography>
                                        <Typography component="p">Click Albums</Typography>
                                    </CardContent>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                                <CardActions>
                                    <CardContent>
                                        <Typography className={classes.titleData} variant="h4" component={Link} to="/photo">PHOTOS</Typography>
                                        <Typography component="p">Click Photos</Typography>
                                    </CardContent>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                                <CardActions>
                                    <CardContent>
                                        <Typography className={classes.titleData} variant="h4" component={Link} to="/todos">TODO</Typography>
                                        <Typography component="p">Click Todo</Typography>
                                    </CardContent>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grow>
            </Container>
        </Container>
    )
}

export default Home
