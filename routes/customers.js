const express = require('express');
const router = express.Router();
const { addCustomer, editCustomer, deleteCustomer, getCustomer, listCustomers } = require('../controllers/customers')
const { isAuthorized } = require('../middlewares')
// const permissionsRoute = require('./permissions')

router.get('/', isAuthorized, async function(req, res, next) {
  await listCustomers(req, res, next)
});

router.get('/:customer_id', isAuthorized, async function(req, res, next) {
  await getCustomer(req, res, next)
});

router.put('/:customer_id', isAuthorized, async function(req, res, next) {
  await editCustomer(req, res, next)
});

router.delete('/:customer_id', isAuthorized, async function(req, res, next) {
  await deleteCustomer(req, res, next)
});

router.post('/', isAuthorized, async function(req, res, next) {
  await addCustomer(req, res, next)
});

module.exports = router;
