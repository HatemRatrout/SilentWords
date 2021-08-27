import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root} style={{backgroundColor:'#28282a', marginTop:"-100px"}}>
      <Container>
        <p style={{color:"white",fontFamily:"Brush Script MT, cursive"}}>E-mail: SilentWords@gmail.com <br></br>Phone: +972594474800</p>
        <a href="https://www.youtube.com"><img src="https://c866088.ssl.cf3.rackcdn.com/assets/youtube30x30.png" style={{width:"25px", height:"25px",marginRight:"10px",marginBottom:"7px"}}></img></a>
        <a href="https://www.instagram.com"><img src="https://cssdp.org/uploads/2019/08/social-instagram-new-circle-512.png" style={{width:"24px", height:"24px",marginRight:"3px",marginBottom:"7px"}}></img></a>
        <a href="https://www.twitter.com"><img src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png" style={{width:"35px", height:"20px",marginRight:"10px",marginBottom:"7px"}}></img></a>
      </Container>
    </Typography>
  );
}
