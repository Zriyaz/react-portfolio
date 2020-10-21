import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Achievements = () => {
  return (
    <div id='achievements'>
      <Grid container className='about-css'>
        <Grid item xs={12}>
          <h1 className='name-css'>
            <span className='surname'>Achievements</span>
          </h1>
          <div
            data-aos='zoom-in-down'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2500'>
            <Paper
              elevation={24}
              style={{ backgroundColor: '#2c3e50', color: 'white' }}>
              <div className='achievements'>
                <ul className='fa-ul mb-0'>
                  <li>
                    <i
                      className='fa-li fa fa-trophy'
                      style={{ color: '#F1F2B5' }}
                    />
                    2<sup>nd</sup> position in Mini-Orian a coding Competition
                    held in Kongu Engineering College, Tamilnadu.
                  </li>
                  <li>
                    <i
                      className='fa-li fa fa-trophy'
                      style={{ color: '#F1F2B5' }}
                    />
                    Participated in PSG Arts & Sceince College Coimbatoor for
                    coding competition.
                  </li>

                  <li>
                    <i
                      className='fa-li fa fa-trophy '
                      style={{ color: '#F1F2B5' }}
                    />
                    Participated in PSG Arts & Sceince College Coimbatoor for
                    Hackathon.
                  </li>
                </ul>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
