/* eslint-disable import/no-extraneous-dependencies */
// import express from 'express';
const express = require('express');
const path = require('path');
// import { locales } from './config/supported-locales.js';

const app = express();
const port = 9000;

// serve all files in locales folder with '/locale' prefix and ignore .json file extention in url
app.use('/locale', express.static(path.join(__dirname, 'locales'), { extensions: ['json'] }));

// test endpoint
app.get('/', (req, res) => {
  res.send('Request sucessful');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log(`Server available at http://localhost:${port}`);
});
