require('es6-promise');


//** Warm Up **//

// setTimeout(() => {
//   console.log('TIMED OUT!')
// }, 300)


//** Fuffil a promise **/

// var promise = new Promise((fuffil, reject) => {
//   setTimeout(() => {
//     fuffil('FUFFILED!')
//   }, 300);
// })

// promise.then(() => {
//   console.log('FULFILLED!')
// })

//** Reject a Promise **//

var promise = new Promise((fuffil, reject) => {
  let num;
  setTimeout(() => {
    num = 2
  }, 300);

  if(num > 3) {
    fuffil('The humber is greater than 3');
  } else {
    reject(Error('REJECTED!'))
  }
})

const onReject = (error) => {
  console.log(error.message)
};

promise.then(() => {}, (error) => {
  onReject(error)
})