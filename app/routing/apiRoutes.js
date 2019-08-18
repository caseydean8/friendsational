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
        let count = -1
        for (let i = 0; i < friendData.length; i++) {
            let score = friendData[i].scores
            count++
            // console.log(score)
            compareData.push(score)
            console.log(`friend data list is ${count} long`)
        }
        console.log(compareData)
        for (let i = 0; i < compareData.length - 1; i++) {
            arrayCompare(compareData[i], compareData[count])
        }
        
        // let difference =[]
        // for (let i = 0; i != compareData.length; i++) {
        //     for (let j = 0; j != compareData[i].length; j++) {
        //     difference.push(compareData[i][j] - compareData[count][j])
        //     console.log(difference)
        //     if (difference.length === 10) {
        //         break
        //     }
        //     }
        // }
        // console.log(difference)
    }))
} 

function arrayCompare(a, b) {
    cArray = []
    for (let i = 0; i < 10; i++) {
       c = Math.abs(a[i] - b[i])
       cArray.push(c)
    }
    console.log(cArray)
}