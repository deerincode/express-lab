const express = require('express')
const app = express()
const port = 3000

// Imported album track listings
const discovery = require('./models/discoveryTrackList')
const irrealisMood = require('./models/relicTrackList')
const punisher = require('./models/punisherTrackList')
const pearls = require('./models/sophieTrackList')
const darkAge = require('./models/littleDarkAgeTrackList')
const pony = require('./models/ponyTrackList')

// Configuring the app
const fs = require('fs')
app.engine('madeline', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#', '<div>' + options.content + '</div>')
      .replace('#flag#', '<div>' + options.flag + '</div>')
      .replace('#album#', '<h1>' + options.album + '</h1>')
      .replace('#albumArt#', '<div>' + options.albumArt + '</div>')
      .replace('#tracks#', '<ul>' + options.tracks + '</ul>')
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'madeline')

// Helper Method

function addTracks(album){
  let trackList = ''
  for(let song of album){
    trackList += `<li>${song}</li>`
  }
  return trackList
}

// Express Routes
app.get('/discovery', (req, res) => {
  res.render('songtemplate', {title: 'Daft Punk - Discovery', album: 'Discovery - 2001', albumArt: '<img src="https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png">, ', tracks: `${addTracks(discovery)}`})
})

app.get('/irrealismood', (req, res) => {
  res.render('songtemplate', {title: 'Of Montreal - White is Relic/Irrealis Mood', album: 'White is Relic/Irrealis Mood - 2018', albumArt: '<img src="https://upload.wikimedia.org/wikipedia/en/e/e1/White_is_Relic_Irrealis_Mood_cover.jpg">, ', tracks: `${addTracks(irrealisMood)}`})
})

app.get('/punisher', (req, res) => {
  res.render('songtemplate', {title: 'Phoebe Bridgers - Punisher', album: 'Punisher - 2020', albumArt: '<img src="https://upload.wikimedia.org/wikipedia/en/2/23/Phoebe_Bridgers_Punisher_%282020%29.png">, ', tracks: `${addTracks(punisher)}`})
})

app.get('/oil', (req, res) => {
  res.render('songtemplate', {title: "Sophie - Oil of Every Pearl's Un-Insides", album: "Oil of Every Pearl's Un-Insides - 2018", albumArt: '<img src="https://upload.wikimedia.org/wikipedia/en/d/d0/Sophie_-_Oil_of_Every_Pearl%27s_Un-Insides.png">, ', tracks: `${addTracks(pearls)}`})
})

app.get('/darkage', (req, res) => {
  res.render('songtemplate', {title: 'MGMT - Little Dark Age', album: 'Little Dark Age - 2018', albumArt: '<img src="https://upload.wikimedia.org/wikipedia/en/8/8d/MGMT_-_Little_Dark_Age.png">, ', tracks: `${addTracks(darkAge)}`})
})

app.get('/pony', (req, res) => {
  res.render('songtemplate', {title: 'Orville Peck - Pony', album: 'Pony - 2019', albumArt: '<img src="https://upload.wikimedia.org/wikipedia/en/2/21/Pony_Orville_Peck.jpg">, ', tracks: `${addTracks(pony)}`})
})


app.get('/trans', (req, res) => {
  res.render('basetemplate', {title: 'Pride Flags: Transgender Pride', message: 'Transgender Pride Flag', flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1920px-Transgender_Pride_flag.svg.png" height = 400vh width = 650vw>', content: '<h4>Designed by Monica Helms, Adopted in 1999</h4>' })
})

app.get('/progress', (req, res) => {
  res.render('basetemplate', {title: 'Pride Flags: Progress Pride', message: 'Progress Pride Flag', flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/LGBTQ%2B_rainbow_flag_Quasar_%22Progress%22_variant.svg/1280px-LGBTQ%2B_rainbow_flag_Quasar_%22Progress%22_variant.svg.png" height = 400vh width = 650vw>', content: '<h4>Designed by Daniel Quasar, Adopted in 2018</h4>' })
})

app.get('/lesbian', (req, res) => {
  res.render('basetemplate', {title: 'Pride Flags: Lesbian Pride', message: 'Orange-Pink Lesbian Pride Flag', flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Lesbian_pride_flag_2018.svg/1280px-Lesbian_pride_flag_2018.svg.png" height = 400vh width = 650vw>', content: '<h4>Designed by Emily Gwen, Adopted in 2018</h4>'})
})

app.get('/pansexual', (req, res) => {
  res.render('basetemplate', {title: 'Pride Flags: Pansexual Pride', message: 'Pansexual Pride Flag', flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pansexuality_Pride_Flag.svg/1920px-Pansexuality_Pride_Flag.svg.png" height = 400vh width = 650vw>', content: '<h4>Designed by Jasper V, Adopted in 2010</h4>'})
})



app.listen(port, function() {
  console.log('Listening on port: ' + port)
 })