
const friendData = require('../data/friends')

module.exports = app => {
    app.get('/api/friends',
    ((req, res) => {
        res.json(friendData)
    }))
    app.post('/api/friends', ((req, res) => {
        friendData.push(req.body);
        res.json(true);
        //loop through friendData objects and compare most recent friend score vs previous scores, subtracting differences at correlating index positions, creating a new array with differences summed.
        // create compare data array 
        let compareData = []
        let names = []
        let count = -1
        let sumArray = []

        for (let i = 0; i < friendData.length; i++) {
            let score = friendData[i].scores
            // console.log(score)
            compareData.push(score)
            names.push(friendData[i].name)
            count++
            console.log(`friend data list is ${count} long`)
        }
        // console.log(names)
        // console.log(compareData)
        
        for (let i = 0; i < compareData.length - 1; i++) {
            arrayCompare(compareData[i], compareData[count])
        }
        
        function arrayCompare(a, b) {

            cArray = []
            const reducer = (accumulator, currentValue) => accumulator + currentValue
            let sum

            for (let i = 0; i < 10; i++) {
               c = Math.abs(a[i] - b[i])
               cArray.push(c)
               sum = cArray.reduce(reducer)
            }

            console.log(cArray)
            console.log(sum)
            sumArray.push(sum)
        }

        console.log(sumArray)
        let matchIndex = sumArray.indexOf(Math.min.apply(null, sumArray))
        console.log(matchIndex)
    }))
} 
