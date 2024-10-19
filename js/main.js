const currentYear = dayjs();
document.getElementById('copyYear').textContent = currentYear.$y;
const startYear = dayjs('2002-01-01');

const yearsOfExperience = currentYear.diff(startYear, 'year');

if (document.getElementById('years-experience'))
  document.getElementById('years-experience').textContent = yearsOfExperience;
