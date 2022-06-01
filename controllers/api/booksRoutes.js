const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Purchase } = require('../../models');
const withAuth = require('../../utils/auth');
