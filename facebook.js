const FB = require('fb');
FB.setAccessToken('');
FB.api('/me', {
        locale: 'en_US',
        fields: 'first_name ,last_name, location{name}, birthday, gender, email, picture.type(large)',
    },
    function (response) {
        console.log(response);
    }
);