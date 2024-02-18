let yearBuilt = document.getElementById('year-built');
let totalPrice;
const form = document.getElementById('the-form');
let submitBtn = document.getElementById('submit');
let resetBtn = document.getElementById('resetBtn');

function calculateRate(sqFtRate, year) {
  let sqft = document.getElementById('sqft');
  const increment = 25;

  // minimum inspection rate
  sqFtRate = 400;

  if (sqft.value < 1500) {
    sqFtRate = sqFtRate;
  } else if (sqft.value < 2000) {
    sqFtRate = sqFtRate + increment;
  } else if (sqft.value < 2500) {
    sqFtRate = sqFtRate + increment * 2;
  } else if (sqft.value < 3000) {
    sqFtRate = sqFtRate + increment * 3;
  } else if (sqft.value < 3500) {
    sqFtRate = sqFtRate + increment * 4;
  } else if (sqft.value < 4000) {
    sqFtRate = sqFtRate + increment * 5;
  } else if (sqft.value < 4500) {
    sqFtRate = sqFtRate + increment * 6;
  } else if (sqft.value < 5000) {
    sqFtRate = sqFtRate + increment * 7;
  } else if (sqft.value < 5500) {
    sqFtRate = sqFtRate + increment * 8;
  } else if (sqft.value <= 5999) {
    sqFtRate = sqFtRate + increment * 9;
  } else if (sqft.value >= 6000) {
    sqFtRate = Math.round(sqft.value * 0.13);
  }

  if (yearBuilt.value === '' || yearBuilt.value >= 2020) {
    year = 0;
    // anything before 1919 is handled below in display rate function
  } else if (yearBuilt.value <= 1939) {
    year = increment * 5;
  } else if (yearBuilt.value <= 1959) {
    year = increment * 4;
  } else if (yearBuilt.value <= 1979) {
    year = increment * 3;
  } else if (yearBuilt.value <= 1999) {
    year = increment * 2;
  } else if (yearBuilt.value <= 2019) {
    year = increment;
  }
  totalPrice = sqFtRate + year;
}

function displayRate(e) {
  e.preventDefault();

  let displayEnteredSqFt = document.querySelector('.entered-sqft');
  let displayEnteredYear = document.querySelector('.entered-year');
  let displayTotal = document.getElementById('total');

  calculateRate();

  displayEnteredSqFt.textContent = sqft.value;
  displayEnteredYear.textContent = yearBuilt.value;

  if (yearBuilt.value <= 1919) {
    displayTotal.textContent = 'Call';
  } else {
    displayTotal.textContent = `$${totalPrice}`;
  }
  form.reset();
  yearBuilt.blur(); //to make number keyboard go away

  window.scrollTo(0, 0);
}

submitBtn.addEventListener('click', displayRate);

resetBtn.addEventListener('click', () => {
  form.reset();
});

const currentYear = new Date().getFullYear();
document.getElementById('copyYear').innerHTML = currentYear;
