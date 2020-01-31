const FB = require('fb');
FB.setAccessToken('https://graph.facebook.com/v5.0/me?fields=name%2Cage_range%2Cbirthday%2Chometown%2Cemail%2Clocation%2Cpicture&access_token=EAACPCo5zOXIBALhmMhvZAyL5ZCnBFl2E9sbuwzMT8kkB8DhCSQFNoQZBkrZCAj3YvQjTA4YRzJTCdJTpxZBEXWLCyqMrrZBHJz9Gx1LqQMIoTkUV4ZAM4HVdPSeP5FuF7DpOL7H1yVIgqGwWM4KI4r8Jw3guRitVG5Ly57cF0iJxZB0MZBORGPhrH50MyswhtcEPEpxGBptovMQ9p1ZAMiZBTF4OfngGvB1TcYGzxRshmBLOXXv3x0awTS6');
FB.api('/me', {
        locale: 'en_US',
        fields: 'first_name ,last_name, location{name}, birthday, gender, email, picture.type(large)',
    },
    function (response) {
        console.log(response);
    }
);