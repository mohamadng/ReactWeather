var React = require('react');

 /*var Examples=React.createClass({
    render: function () {
        return (
            <div>
                <h3>Examples Component</h3>
            </div>
        );
    }
});*/

var Examples = (props) => {
    return (
        <div>
            <h1>Examples Component</h1>
            <p>some change here!</p>
        </div>
    );
};

module.exports=Examples;