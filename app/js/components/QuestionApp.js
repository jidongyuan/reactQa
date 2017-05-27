var React = require('react'),
    React_dom = require('react-dom'),
    ShowAddButton = require('../components/ShowAddButton.js'),
    QuestionForm = require('../components/QuestionForm.js'),
    QuestionList = require('../components/QuestionList.js'),
    _ = require('lodash');


module.exports = React.createClass({
    getInitialState:function(){
        var questions = [
        {
            key:1,
            title:'产品经理与程序员矛盾的本质是什么？測試git改動',
            description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
            voteCount:10
        },
        {
            key:2,
            title:'热爱编程是一种怎样的体验？',
            description:'别人对玩游戏感兴趣哦，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
            voteCount:8
        },
        ];

        return {
            questions:questions,
            formDisplayed:false,
        }
    },
    onToggleForm:function(){
        this.setState({
            formDisplayed:!this.state.formDisplayed,
        })
    },
    onNewQuestion:function(newQuestion){
         console.log("新增問題");
        newQuestion.key = this.state.questions.length+1;
        var newQuestions = this.state.questions.concat(newQuestion);
        newQuestions = this.sortQuestions(newQuestions);
        this.setState({
            questions:newQuestions,
        })
    },
    sortQuestions:function(questions){
         console.log("問題排序");
        questions.sort(function(a,b){
            return b.voteCount - a.voteCount;
        });

        return questions;

    },
    onVote:function(key,newCount){
        console.log("調用" + newCount);
        var questions = _.uniq(this.state.questions);
        var index = _.findIndex(questions,function(qst){
            return qst.key == key;
        })
        questions[index].voteCount = newCount;
        this.sortQuestions(questions);
        this.setState({
            questions:questions,
        });
    },
    render:function(){
        // console.log(JSON.stringify(this.state.formDisplayed + "真的假的"));
        return (
          <div><div className="jumbotron text-center">
        <div className="container">
            <h1>React问答</h1>
            <ShowAddButton onToggleForm={this.onToggleForm}/>
        </div>
    </div>
    <div className="main container">
        <QuestionForm onNewQuestion={this.onNewQuestion} onToggleForm={this.onToggleForm} formDisplayed={this.state.formDisplayed}/>
        <QuestionList questions={this.state.questions} onVote={this.onVote}/>
    </div>
    </div>
        )
    }
});

