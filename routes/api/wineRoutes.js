const express = require('express')
const router = express.Router()
const fetch =(...args)=> import('node-fetch').
then(({default: fetch}) => fetch(...args))

//All Wines
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/wines/reds'

    fetch(URL)
    .then(res => res.json())
    .then(data => {
        res.render('pages/wines', {
            title: 'All Wines',
            name: 'Wine List',
            data
        })
    })
})

//Single Wine
router.get('/:id', (req, res)=> {
    const id= req.params.id
    const URL = `https://api.sampleapis.com/wines/reds`

    fetch(URL)
    .then(res => res.json())
    .then(data => {

        if(Object.keys(data).length >=1){
            res.render('pages/single-wine', {
                title:`data.title`,
                name: `data.title`,
                data
            })
        } else {
            res.render('pages/404', {
                title:'404 - Error',
                name:'404-Error'
            })
        }
    })
})

module.exports = router