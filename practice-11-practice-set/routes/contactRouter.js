const express = require('express');
const contactRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtils');

contactRouter.get('/contact-us', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

module.exports = contactRouter;
