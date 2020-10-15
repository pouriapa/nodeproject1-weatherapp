const path = require('path')
const express = require('express')
const hbs = require('hbs')
//importing weather apps
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();

// Define Path for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up hadlebars engine and views location
app.set('view engine', 'hbs')//new 
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


// Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {

    res.render('index', {
        title: 'Pouria Corporation',
        footerContent: 'index footer'
    })

})

app.get('/about', (req, res) =>{

    res.render('about', {

        title: 'Pouria',
        footerContent: 'about footer'

    })

})

app.get('/help', (req, res) =>{

    res.render('help', {

        title: 'help page',
        footerContent: 'help footer'
    
    })
})


app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send('<p1> Please send the address </p>')
    }

    geocode(req.query.address, (error , data)=>{

        if (error){
            return res.send(error)
        }
        forecast(data, (weather)=>{
             
            res.send(weather)

        })
    })
       
})

app.get('*', (req, res) => {

    res.render('page404', {

        title: '404 Page Not Found',
            
    })
})

app.listen(3000, () => {

    console.log('Server is Up on port 3000')
})


