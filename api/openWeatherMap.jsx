var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bae3d858a53a1a6f37aabab25a3ab084&units=metric';

// bae3d858a53a1a6f37aabab25a3ab084

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log(encodedLocation);
        console.log(requestUrl);
        return axios.get(requestUrl).then(function (res) {
            if (res.data.code && res.data.message){
                throw new  Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        },function (res) {
            throw new  Error(res.response.data.message);
        });
    }
};