var React = require('react'),
    React_dom = require('react-dom');
    module.exports = React.createClass({
    render: function(){
        return (
         <button id="add-question-btn" className="btn btn-success" onClick={this.props.onToggleForm}>添加问题</button>
        )
    }
});