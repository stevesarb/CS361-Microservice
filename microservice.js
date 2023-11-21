const express = require("express")
const app = express()

// // sample objects:
// var loginInfo = [{username: "default", password: "default"}, {username: "blah", password: "hello"}, {username: "steven", password: "isAwesome"}]

// for (let i = 0; i < loginInfo.length; i++) {
//     console.log("Person", i + 1, "login info: ")
//     console.log("    Username: ", loginInfo[i].username)
//     console.log("    Password: ", loginInfo[i].password)
// }

app.post('/name-pass-checker', (req, res) => {
    const usersList = req.body.users
    const attempt = req.body.attempt

    var attemptValid = false

    for (let i = 0; i < usersList.length; i++) {
        if ((attempt.username === usersList[i].username) && (attempt.password === usersList[i].password)) {
            attemptValid = true
            break;
        }
    }

    res.json({attemptValid})
})

app.listen(8888)

