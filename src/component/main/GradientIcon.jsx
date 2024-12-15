import React from 'react';

const GradientIcon = ({ icon: Icon, index }) => (
  <svg width="150px" height="150px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#EC0DFC', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3FA5E6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <Icon style={{ fill: `url(#grad-${index})`, fontSize: '100%' }} />
  </svg>
);

export default GradientIcon;