const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
.then(()=> {
    console.log('You did it! Your MongoDB is running.')
}).catch(err => {
    console.error('Something went wrong!')
    console.error(err)
})
