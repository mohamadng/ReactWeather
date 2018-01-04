var React = require('react');
/*
var WeatherMessage = React.createClass({
    
    render:function () {
        //var temp = this.props.temp;
       // var location = this.props.location;
        var {temp,location} = this.props;
        var message='';
        message="the tempeture of " + location + " is: "+temp;
        return (
            <h3>{message}</h3>
        );
    }
});*/

var WeatherMessage = ({temp,location}) => {
    return (
        <h3>"the tempeture of {location} is: {temp}</h3>
    );
};

module.exports = WeatherMessage;