var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if (location.length >0){
            this.refs.location.value='';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="type a city name"/>
                    <button type="submit">get weather</button>
                </form>
            </div>
        );
    }
});


module.exports = WeatherForm;