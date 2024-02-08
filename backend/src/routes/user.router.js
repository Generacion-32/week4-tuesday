const { getAll, create, getOne, remove, update, login, logged } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
  .get(verifyJWT, getAll)
  .post(create);

routerUser.route('/login')
  .post(login)

routerUser.route('/me')
  .get(verifyJWT, logged)

routerUser.route('/:id')
  .get(verifyJWT, getOne)
  .delete(remove)
  .put(update);

module.exports = routerUser;