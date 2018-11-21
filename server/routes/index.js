// Module Dependencies
const express = require('express');
const cors = require('cors');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

// Cors Config
var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// Models

const Users = require('../models/User');
const Complaint = require('../models/Complaint');


// Routes Middleware

/*
 *   Authentication Middleware Route
 */


/*
 * Register Route
 */


router.post('/api/register', cors(corsOptions), (req, res) => {
  let user = new Users(req.body);
  user.save()
    .then(user => {
      res.status(200).json({success: true, userObj: user});
    })
    .catch(err => {
      res.status(400).json({
        'error': 'Failed 400'
      });
    });
});


/*
 * Login Route
 */


router.post('/api/login', cors(corsOptions), (req, res) => {

  if(!req.body.email) {
    res.json({success: false, message: 'Enter value for Email' });
  } else if (!req.body.password) {
    res.json({success: false, message: 'Enter value for Password' });
  } else {
    Users.findOne({ email: req.body.email }, (err, result) => {
      if(err) return res.json({success: false, message: err });
      if(!result) {
        res.json({success: false, message: 'User not found.'});
      } else {
        const validatePassword = result.comparePassword(req.body.password);
        if(!validatePassword) {
          res.json({success: false, message: 'Incorrect Email/Password'});
        } else {
          jwt.sign({userId: result._id}, ' ', {expiresIn: 60 * 60}, (err, token) => {
            res.json({
              success: true,
              message: 'LoggedIn!',
              token: token,
              user: {
                id: result._id,
                name: result.fullName,
                email: result.email,
                mobile: result.mobile_number,
                userType: result.userType
              }
            });
          });
        }
      }
    });
  }

});






/*
 *   Complaint Route
 */

router.get('/api/complaints', cors(corsOptions), (req, res) => {
  Complaint.find({}, (err, result) => {
    if(err) return console.log(err);
    // result = _.sortBy(result,"updatedOn");
    res.json(result = _.sortBy(result,"updatedOn"));
  });
});

router.get('/api/complaint/:id', cors(corsOptions), (req, res) => {
  Complaint.findById(req.params.id, (err, result) => {
    if(err) return console.log(err);
    res.json(result);
  });
});

router.post('/api/complaint/status/:id', cors(corsOptions), (req, res) => {
  Complaint.findById(req.params.id, (err, result) => {
    if(err) return console.log(err);

    result.status = req.body.status;
    result.updatedOn = Date.now();

    result.save()
      .then(result => {
        res.json('Updated Query!');
      })
      .catch(err => {
        res.status(400).send('Update Failed!');
      })

  });
});




router.post('/api/complaint/comment/:id', cors(corsOptions), (req, res) => {
  Complaint.findById(req.params.id, (err, result) => {
    if(!result) return next(new Error('Could not find complaint'));
    console.log(req.body);
    const commentData = {
      comment: req.body.comment.comment,
      commentedBy: req.body.commentedBy
    }

    result.comments.push(commentData);
    result.status = req.body.status;
    result.updatedOn = Date.now();

    result.save()
      .then(result => {
        res.json('Updated Query!');
      })
      .catch(err => {
        res.status(400).send('Update Failed!');
      })
  });
});

router.get('/api/complaints/:id', cors(corsOptions), (req, res) => {
  Complaint.find({createdBy: req.params.id}, (err, result) => {
    if(err) return console.log(err);

    res.json(result);
  });
});

 router.post('/api/complaints/add', cors(corsOptions), (req, res) => {
   let complaint = new Complaint(req.body);
   complaint.save()
     .then(complaint => {
       res.status(200).json({
         'success': 'Complaint added successfully'
       });
     })
     .catch(err => {
       res.status(400).json({
         'error': 'Failed 400'
       });
     });
 });


module.exports = router;
