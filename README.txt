To request data from this microservice: use the following command:

await fetch('http://localhost:8888/name-pass-checker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({attempt, users}) 

where attempt is a json object in the form of { username: "", password: ""} and users is a list of json object of the same format

To receive the data, just call: await results.json(). It's return value will be the boolean result

UML diagram: https://drive.google.com/file/d/1h5tWYlYKA-Wrq72ruJx-G-OIoDbJEA_u/view?usp=sharing

Demo video: https://youtu.be/eWT_L_asR-M
