import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Paper, Tooltip, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutimg from '../images/ab-img.png';

AOS.init();
const About = () => {
  return (
    <section id='about'>
      <div className='about_row'>
        <div data-aos='fade-up'>
          <img className='profile-pic' src={aboutimg} alt='' />
        </div>
        <div className='new_about'>
          <h1 className='about_h1'>About Me</h1>
          <p data-aos='fade-up'>
            <Typography paragraph variant='body1' className='aboutStyle'>
              Hi I am Mohammad Riyaz, a 24 year old passionate web developer
              from Jamui (Bihar). I love to develop amazing websites using
              modern JavaScript technologies like ReactJs / Redux and NodeJs.
            </Typography>
            <Typography variant='body1' paragraph className='aboutStyle'>
              Currently, I am Student pursuing MCA in 5th semester at KONGU
              ENGINEERING COLLEGE Erode, Tamilnadu. Looking for an opportunity
              in the area of web Development to show my skills and explore more.
            </Typography>
          </p>

          <div className='row'>
            <div>
              <p>
                <Tooltip
                  TransitionComponent={Zoom}
                  title='HTML5'
                  data-aos='zoom-out-left'
                  data-aos-duration='3000'>
                  <i className='fab fa-html5 fa-3x' />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title='CSS3'
                  data-aos='zoom-out-left'
                  data-aos-duration='3000'>
                  <i className='fab fa-css3-alt fa-3x' aria-hidden='true' />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title='JAVASCRIPT'
                  data-aos='zoom-out-left'
                  data-aos-duration='3000'>
                  <i className='fab fa-js-square fa-3x' aria-hidden='true' />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title='REACTJS'
                  data-aos='zoom-out-left'
                  data-aos-duration='3000'>
                  <i className='fab fa-react fa-3x' aria-hidden='true' />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title='JAVA'
                  data-aos='zoom-out-left'
                  data-aos-duration='3000'>
                  <i className='fab fa-java fa-3x' aria-hidden='true' />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title='NODEJS'
                  data-aos='zoom-out-left'
                  data-aos-duration='3000'>
                  <i className='fab fa-node fa-3x' aria-hidden='true' />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title='MONGODB-DATABASE'
                  data-aos='zoom-out-left'
                  data-aos-duration='3000'>
                  <i className='fas fa-database fa-3x' aria-hidden='true' />
                </Tooltip>
              </p>
            </div>
            <div>
              <h1>Contact Details</h1>
              <p data-aos='fade-up' className='contact-about'>
                <span>
                  <i className='fas fa-envelope' />
                  mdriyazuddine17@gmail.com
                </span>

                <span>
                  <i className='fas fa-mobile-alt' />
                  +91 6201031126
                </span>

                <span>
                  <i className='fas fa-map-marker-alt' />
                  Erode , Tamilnadu
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
