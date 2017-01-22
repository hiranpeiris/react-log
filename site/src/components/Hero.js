import React, { PureComponent } from 'react';
import './Hero.scss';

class Hero extends PureComponent {
  render () {
    return (
      <div className='hero'>
        <span>></span>
        <h1>
          react
          <span>log</span>
        </h1>
        <iframe
          src='https://ghbtns.com/github-btn.html?user=diegomura&repo=react-log&type=star&count=true&size=large'
          frameBorder='0'
          scrolling='0'
          width='160px'
          height='30px' />
      </div>
    );
  }
};

export default Hero;
