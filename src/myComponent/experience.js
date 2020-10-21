import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Hidden, Typography } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

import github from '../images/github.jpg';
import covid19 from '../images/covid19.jpg';
import movies from '../images/movies.jpg';
import amazon from '../images/amazon.jpg';
import instagram from '../images/instagram.jpg';
import quiz from '../images/quiz.jpg';

const LiveProject = 'https://goofy-curran-45f2dc.netlify.app/';
const sourceCode = 'https://github.com/Zriyaz/Covid19-tracker-App';

const particleoptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

AOS.init();
const styles = (theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonLink: {
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className='exp_row' id='experience'>
          <h1 className='name-css'>
            Personal <span className='surname'>Projects</span>
          </h1>
        </div>
        <div className='workchips'>
          <Card className='workcard' data-aos='zoom-in-right'>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={covid19}
                title='Covid-19'
              />
              <CardContent className='work1'>
                <h1 style={{ color: '#f7f8f81' }}>COVID-19 TRACKER</h1>
              </CardContent>
            </CardActionArea>
            <Divider light />
            <CardContent>
              <Typography variant='body2' color='inherit' component='p'>
                A web application which gives the current situation of Covid19
                details to the world and also individual countries. Developed by
                using Reactjs, Css and API.
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonStyle}>
              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href={LiveProject}
                target='_blank'>
                Live
              </Button>

              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href={sourceCode}
                target='_blank'>
                Source Code
              </Button>
            </CardActions>
          </Card>
          <Card className='workcard' data-aos='zoom-in-right'>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={github}
                title='github'
              />
              <CardContent className='work1'>
                <h1 style={{ color: '#f7f8f81' }}>Github Search User</h1>
              </CardContent>
            </CardActionArea>
            <Divider light />
            <CardContent>
              <Typography variant='body2' color='inherit' component='p'>
                Github-Search-User-App is s Single page web-app which find the
                Github user's complete details about their repositories and
                profile. This App is developed using Reactjs, Styled components,
                Auth0,Github API and FusionCharts.
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonStyle}>
              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://youthful-goldwasser-23b1f7.netlify.app/'
                target='_blank'>
                Live
              </Button>

              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://github.com/Zriyaz/github-user-search'
                target='_blank'>
                Source Code
              </Button>
            </CardActions>
          </Card>
          <Card className='workcard' data-aos='zoom-in-right'>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={amazon}
                title='amazon-clone'
              />
              <CardContent className='work1'>
                <h1 style={{ color: '#f7f8f81' }}>Amazon Clone</h1>
              </CardContent>
            </CardActionArea>
            <Divider light />
            <CardContent>
              <Typography variant='body2' color='inherit' component='p'>
                This App is a clone of amazon website which is a single page
                application. Tools which is used to build this applications are
                : - Reactjs, Firebase and Css
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonStyle}>
              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://e-clone-9cf1f.web.app/'
                target='_blank'>
                Live
              </Button>

              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://github.com/Zriyaz/Covid19-tracker-App'
                target='_blank'>
                Source Code
              </Button>
            </CardActions>
          </Card>
          <Card className='workcard' data-aos='zoom-in-right'>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={instagram}
                title='instagram-clone'
              />
              <CardContent className='work1'>
                <h1 style={{ color: '#f7f8f81' }}>Instagram Clone</h1>
              </CardContent>
            </CardActionArea>
            <Divider light />
            <CardContent>
              <Typography variant='body2' color='inherit' component='p'>
                I built this instagram-clone with the help of a tutorial by
                Rafeh Qazi and Sonny Sangha at youtube.com/c/cleverprogrammer.
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonStyle}>
              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://jolly-benz-a441e6.netlify.app/'
                target='_blank'>
                Live
              </Button>

              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://github.com/Zriyaz/Alan-News-App'
                target='_blank'>
                Source Code
              </Button>
            </CardActions>
          </Card>
          <Card className='workcard' data-aos='zoom-in-right'>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={movies}
                title='movies'
              />
              <CardContent className='work1'>
                <h1 style={{ color: '#f7f8f81' }}>Movies Finder</h1>
              </CardContent>
            </CardActionArea>
            <Divider light />
            <CardContent>
              <Typography variant='body2' color='inherit' component='p'>
                This is a simple React Application which is use to find any
                movie details like bollywood and hollywood movies. In this App I
                used TMDB API which is providing the movies according to user
                search.
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonStyle}>
              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://movifinder.netlify.app/'
                target='_blank'>
                Live
              </Button>

              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://github.com/Zriyaz/Movie_Finder'
                target='_blank'>
                Source Code
              </Button>
            </CardActions>
          </Card>
          <Card className='workcard' data-aos='zoom-in-right'>
            <CardActionArea>
              <CardMedia className={classes.media} image={quiz} title='Quiz' />
              <CardContent className='work1'>
                <h1 style={{ color: '#f7f8f81' }}>Quiz App</h1>
              </CardContent>
            </CardActionArea>
            <Divider light />
            <CardContent>
              <Typography variant='body2' color='inherit' component='p'>
                This is basically Quiz app but in this app I used some
                interesting rules which makes app like Game and more interesting
                like KBC.
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonStyle}>
              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://quiz-practice.netlify.app/'
                target='_blank'>
                Live
              </Button>

              <Button
                size='small'
                color='primary'
                className={classes.buttonLink}
                component={'a'}
                href='https://github.com/Zriyaz/Quiz-Application'
                target='_blank'>
                Source Code
              </Button>
            </CardActions>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Experience);
