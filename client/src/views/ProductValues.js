import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden'
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://static.thenounproject.com/png/2337-200.png"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
              Learn Sign Language
              </Typography>
              <Typography variant="h5">
                {'Learn sign language online with 200+ vocabulary words in many categories you will use right away, all for FREE.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/video-call-5-504293.png"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
              Video and text chat
              </Typography>
              <Typography variant="h5">
                {'Meet people online and talk to them in sign language ..or ask about any difficulties you face in learning '}
                
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://static.thenounproject.com/png/1986856-200.png"
              />
              <Typography variant="h6" className={classes.title}>
              Articles
              </Typography>
              <Typography variant="h5">
                {'Read articles that talk about sign language or how to deal with deaf people and many more.. '}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
