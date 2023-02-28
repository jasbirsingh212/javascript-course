'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const createPromise = () =>
  new Promise((resolve, reject) => {
    reject('chal bsdk');
  });

createPromise()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log("error " + err);
  });