var React = require('react');
var Resume = require('./components/Resume');

window.React = React; // debug
React.render( <Resume/> , document.getElementById('resume-body'));
