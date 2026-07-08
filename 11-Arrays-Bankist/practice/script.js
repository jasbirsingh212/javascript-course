'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//Code Start From Here

const displayMovements = movements => {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const arrSum = arr => {
  return arr?.length && arr.reduce((acc, cur) => acc + cur);
};

const calDisplayBalance = arr => {
  const balance = arrSum(arr);
  labelBalance.textContent = `${balance}€`;
};

const calDisplaySummary = arr => {
  const deposits = arr.filter(item => item > 0);
  const withdrawal = arr.filter(item => item < 0);

  const depositSum = arrSum(deposits);
  const withdrawalSum = arrSum(withdrawal);
  const interestSum = arrSum(deposits.map(item => (item * 1.2) / 100));

  labelSumIn.textContent = `${depositSum}€`;
  labelSumOut.textContent = `${Math.abs(withdrawalSum)}€`;
  labelSumInterest.textContent = `${Math.trunc(interestSum)}€`;
};

const createUserNames = arr => {
  arr.forEach(item => {
    item.username = item.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(accounts);

// const move = movements.filter(mov =>  mov > 0 );
// console.log(move)

// const balance = movements.reduce((acc, cur) => acc + cur, undefined)
// console.log(balance)

// const max = movements.reduce((acc, cur) => acc > cur ? acc: cur);
// console.log(max);
let currentUser;
const updateUI = currentUser => {
  displayMovements(currentUser?.movements);
  calDisplayBalance(currentUser?.movements);
  calDisplaySummary(currentUser?.movements);
};

const handleLogin = e => {
  e.preventDefault();
  // @ts-ignore
  const userName = inputLoginUsername.value;

  currentUser = accounts.find(account => account.username === userName);
  console.log(currentUser);

  // @ts-ignore
  if (currentUser?.pin === Number(inputLoginPin?.value)) {
    // @ts-ignore
    inputLoginUsername.value = inputLoginPin.value = '';
    // @ts-ignore
    inputLoginPin.blur();

    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(' ')[0]
    }`;
    // @ts-ignore
    containerApp.style.opacity = 100;

    //UI update
    // @ts-ignore
    updateUI(currentUser);
  }
};

const handleTransfer = e => {
  e.preventDefault();
  // @ts-ignore
  const transferToUser = inputTransferTo.value;
  // @ts-ignore
  const transferAmount = Number(inputTransferAmount.value);

  const recivedUser = accounts.find(
    account => account.username === transferToUser
  );
  const isTranserable = transferAmount < arrSum(currentUser.movements);
  const isDifferentUser = recivedUser.username !== currentUser.userName;

  if (transferAmount > 0 && recivedUser && isTranserable && isDifferentUser) {
    currentUser.movements.push(-1 * transferAmount);
    recivedUser.movements.push(transferAmount);
    updateUI(currentUser);
  }

  // @ts-ignore
  inputTransferTo.value = inputTransferAmount.value = '';
};

const handleLoan = e => {
  e.preventDefault();

  // @ts-ignore
  const loanAmount = Number(inputLoanAmount.value);
  const isLoanable =
    arrSum(currentUser.movements.filter(mov => mov > 0)) * 0.2 >= loanAmount;
  if (loanAmount > 0 && isLoanable) {
    currentUser.movements.push(loanAmount);
    updateUI(currentUser);
  }

  // @ts-ignore
  inputLoanAmount.value = '';
};

const handleCloseAccount = e => {
  e.preventDefault();
  // @ts-ignore
  const closeUser = inputCloseUsername.value;
  // @ts-ignore
  const closePin = Number(inputClosePin.value);
  const isValidPin =
    accounts.find(account => account?.username === closeUser)?.pin === closePin;
  const isExistsIndex = accounts.findIndex(acc => acc.username === closeUser);

  if ((isExistsIndex >= 0 ? true : false) && isValidPin) {
    // @ts-ignore
    accounts.splice(isExistsIndex, 1);
  }

  console.log(accounts);
  // @ts-ignore
  inputClosePin.value = inputCloseUsername.value = '';
};

btnLogin.addEventListener('click', handleLogin);
btnTransfer.addEventListener('click', handleTransfer);
btnLoan.addEventListener('click', handleLoan);
btnClose.addEventListener('click', handleCloseAccount);

//-------------------------------------------------------------------------

const chunkCreator = (arr = [], chunk = 0) => {
  const answer = [];

  for (let i = 0; i < arr.length / chunk; i++) {
    const temp = [];

    for (let j = i * chunk; j < chunk + i * chunk && j < arr.length; j++) {
      temp.push(arr[j]);
    }

    answer.push(temp);
  }

  return answer;
};

//console.log(chunkCreator([1, 2, 3, 4, 5], 6));

//------------------------------------------------------------------------------

const stairs = (n, i, j, answer) => {
  if (i === n) return;

  if (j === n) {
    console.log(answer);
    return;
  }

  const newAns = answer + (j <= i ? '#' : ' ');

  if (j < n) {
    stairs(n, i, j + 1, newAns);
  }

  if (j === 0) {
    stairs(n, i + 1, j, '');
  }
};

stairs(3, 0, 0, '');
