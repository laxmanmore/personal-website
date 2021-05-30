import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  downloadButton: {
    marginTop: "20px",
  },
  profilePhoto: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function About() {
  const classes = useStyles();
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `CV_For_ROR_7.5+_years_Laxman_More.pdf`;
    link.href = "./CV_For_ROR_7.5+_years_Laxman_More.pdf";
    link.click();
  };

  return (
    <div classes={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} container justify="center">
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/Laxman.jpg'} className={classes.profilePhoto}/>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4">
            About Me
          </Typography>
          <Typography>
            Has around 7.5+ years of Technical experience in the development and implementation of web applications.
            Has good experience in various technologies like Ruby on Rails, React JS, HTML, CSS, Javascript, jQuery, MySQL & PostgreSQL.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.downloadButton}
            onClick={onDownload}
            startIcon={<GetAppIcon/>}
          >
            Download Resume
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
