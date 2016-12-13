const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.connect('mongodb://localhost/mongoose_album');
mongoose.Promise = bluebird;

const AlbumInfo = mongoose.model('Album', {
  name: String,
  artist: String,
  released: Date,
  tracks: [{
    name: String,
    songwriters: [String],
    duration: Number

  }],
  personell: [
    {
      name: String,
      instrument: String
    }
  ]
});

var ZepIV = new AlbumInfo({
  name: 'Led Zeppelin IV',
  artist: 'Led Zeppelin',
  released: new Date('1971-11-08'),
  tracks: [
    {
      name: 'The Battle of Evermore',
      songwriters: ['Jimmy Page', 'Robert Plant'],
      duration: 351
    },
    {
      name: 'Stairway to Heaven',
      songwriters: ['Jimmy Page', 'Robert Plant'],
      duration: 492
    },
    {
      name: 'When the Levee Breaks',
      songwriters: ['John Bonham', 'John Paul Jones', 'Memphis Minne', 'Jimmy Page', 'Robert Plant'],
      duration: 427
    }
  ],
  personell: [
    {
      name: 'Jimmy Page',
      instrument: 'Guitar'
    },
    {
      name: 'John Bonham',
      instrument: 'Drums'
    },
    {
      name: 'Robert Plant',
      instrument: 'Singer'
    },
    {
      name: 'John Paul Jones',
      instrument: 'Bass'
    }
  ]
});

ZepIV.save()
  .then(function(result) {
    console.log('Success: ', result);
  })
  .catch(function(err) {
    console.log('Error: ', err.message);
  });
