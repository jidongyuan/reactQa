var React = require('react'),
    React_dom = require('react-dom');
var QuestionItem = require('../components/QuestionItem.js');
module.exports = React.createClass({
    render: function() {
        var questions = this.props.questions;
        // console.log(JSON.stringify(questions));
        if (!Array.isArray(questions)) throw new Error('this.props.questions必須是數組');
        var questionComps = questions.map(function(qst) {
            return <QuestionItem key = { qst.key }
            questionKey = {qst.key}
            title = { qst.title }
            description = { qst.description }
            voteCount = { qst.voteCount } onVote = {this.props.onVote}
            />
        }.bind(this));

        return ( < div id = "questions"
            className = "" > { questionComps } < /div>
        )
    }
});
