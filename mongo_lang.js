const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.connect('mongodb://localhost/mongoose');
mongoose.Promise = bluebird;

var notEmpty = function(inventors){
    if(inventors.length === 0) {
      return false;
    }
    else {
      return true;
    }
};

const Language = mongoose.model('Language', {
  name: {type: String, required: true},
  website: String,
  dateFirstAppeared: {type: Date, required: true},
  typingDiscipline: [String],
  paradigms: [String],
  student_points: Number,
  inventors: [
    {
      name: {type: String, required: true},
      website: String
  }]
});

// Language.inventors.validate(function(v) {
//   return v.length > 0;
// }, 'error');
//
// Language.create({
//   name: 'Something',
//   website: 'kjefn',
//   dateFirstAppeared: new Date('1991-12-17'),
//   typingDiscipline: ['stuff'],
//   paradigms: ['other stuff']
//   // inventors: [
//   //   {
//   //     name: 'Rob',
//   //     website: 'mywebsite'
//   //   }
//   // ]
// })
// .then(function(res) {
//   console.log(res);
// })
// .catch(function(err) {
//   console.log(err.message);
//   console.log("Details: ", err.errors);
// });

// Language.create({
//   name: 'Ruby',
//   inventors: [{
//     name: 'Yukihiro Matsumoto'
//   }],
//   paradigms: ['object-oriented', 'imperative', 'functional',
//   'reflective'],
//   typingDiscipline: ['duck', 'dynamic', 'discipline']
// });

// Language.find({})
//   .then(function(res) {
//     console.log('Results: ', res);
//   });

// Language.find({name: "Python"})
//   .then(function(res) {
//     console.log('Results: ', res);
//   });

// Language.update(
//   {name: 'Javascript'},
//   {
//     $set: {
//       website: 'gofuckyourself.io'
//     }
//   },
//   {
//     upsert: true
//   }
// )
// .then(function(res) {
//   console.log("Success: ", res);
// })
// .catch(function(err) {
//   console.log("Error: ", err.message);
// });

// Language.find({name: 'Python'})
//   .then(function(res) {
//     console.log('ID: ', res[0]._id);
//   });


Language.update(
  {name: 'Python'},
  {
    $inc: {
      student_points: 1
    }
  },
  {
    upsert: true
  }
)
.then(function(res) {
  console.log("Success: ", res);
})
.catch(function(err) {
  console.log("error: ", err.stack);
});

Language.find({name: 'Python'})
.then(function(res) {
  console.log(res);
});
