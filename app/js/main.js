var React = require('react'),
React_dom = require('react-dom');
var QuestionApp = require('./components/QuestionApp.js'); 
var QuestionAppElement = React.createElement(QuestionApp);
var mainCom = React_dom.render(
QuestionAppElement,
document.getElementById('app')
	);