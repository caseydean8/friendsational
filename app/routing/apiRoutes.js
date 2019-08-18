// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
const friendData = require('../data/friends')

module.exports = app => {
    app.get('/api/friends',
    ((req, res) => {
        res.json(friendData)
    }))
    app.post('/api/friends', ((req, res) => {
        friendData.push(req.body);
        res.json(true);
        // console.log(friendData)
        //loop through friendData objects and compare most recent friend score vs previous scores, subtracting differences at correlating index positions, creating a new array with differences summed.
        // create compare data array 
        let compareData = []
        for (let i = 0; i < friendData.length; i++) {
            let score = friendData[i].scores
            // console.log(score)
            compareData.push(score)
            console.log(compareData)
        }
    }))
} 