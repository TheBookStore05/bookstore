const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const purchaseRoutes = require('./purchaceRoutes');

router.use('/users', userRoutes);
router.use('/purchase', purchaseRoutes);

module.exports = router;
