var React = require('react');
var {Link,IndexLink}= require('react-router');
/*var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h3>navigation component</h3>
                <IndexLink to="/"    activeClassName="active" activeStyle={{fontWeight:'bold'}}>get wheather</IndexLink>&nbsp;&nbsp;&nbsp;
                <Link to="/about"    activeClassName="active" activeStyle={{fontWeight:'bold'}}>about</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>examples</Link>
            </div>
        );
    }
});*/
var Nav = () => {
    return (
        <div>
            <h3>navigation component</h3>
            <IndexLink to="/"    activeClassName="active" activeStyle={{fontWeight:'bold'}}>get wheather</IndexLink>&nbsp;&nbsp;&nbsp;
            <Link to="/about"    activeClassName="active" activeStyle={{fontWeight:'bold'}}>about</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>examples</Link>
        </div>
    );
};

module.exports = Nav;