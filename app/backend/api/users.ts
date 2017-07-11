import * as express from 'express';
import User from '../models/user';
//import * as passport from 'passport';
//import * as jwt from 'jwt-simple';

let router = express.Router();

// get all Users
router.get('/', (req, res) => {
  User.find().then((users) => {
    res.json(users);
  }).catch ((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

//login

// get one user
router.get('/:id', (req, res) => {
  User.findById(req.params.id).then ((user) => {
    res.json(user);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// add user
router.post('/', (req, res) => {
  let user = new User();
  if (req.body.profile) {
    //user.facebook = req.body.profile.id;
  }
  if (req.body.picture) {
  //  user.picture = req.body.picture;
  }
  //user.displayName = req.body.fullName;
  user.email = req.body.email;
  user.username = req.body.username;
  user.password = req.body.password;
  user.save().then((user) => {
    res.json(user)
  }).catch((err) => {
    res.json(err);
  });
});

// update user
router.put('/:id', (req, res) => {
  // let userId = req.params.id;
  User.findOne({_id: req.params.id}).then((user) => {
    user.username = req.body.username;
    user.password = req.body.password;
    user.save().then((updatedUser) => {
      res.json(updatedUser);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });
});

// delete user
router.delete('/:id', (req, res) => {
  let userId = req.params['id'];
  User.remove({_id: userId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

export default router;
