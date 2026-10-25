const userProfile = {
  name: 'Zhanbolat',
  birthYear: 2008,
  isDeveloper: true,
  hobbies: ['Reading', 'Music', 'Cycling']
};

const profileName = document.querySelector('#profile-name');
const profileAge = document.querySelector('#profile-age');
const hobbyCount = document.querySelector('#hobby-count');
const hobbyList = document.querySelector('#hobby-list');

function showProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;

  profileName.textContent = userProfile.name;
  profileAge.textContent = age;
  hobbyCount.textContent = userProfile.hobbies.length;
}

function showHobbies() {
  hobbyList.innerHTML = '';

  for (const hobby of userProfile.hobbies) {
    const listItem = document.createElement('li');
    listItem.textContent = hobby;
    hobbyList.appendChild(listItem);
  }

  showProfile();
}

document.querySelector('#profile-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const currentYear = new Date().getFullYear();
  const name = document.querySelector('#username').value.trim();
  const birthYear = Number(document.querySelector('#birth-year').value);

  if (birthYear > currentYear) {
    alert('Birth year cannot be in the future.');
    return;
  }

  userProfile.name = name;
  userProfile.birthYear = birthYear;
  showProfile();
});

document.querySelector('#hobby-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const hobbyInput = document.querySelector('#new-hobby');
  const hobby = hobbyInput.value.trim();

  if (hobby === '') {
    return;
  }

  userProfile.hobbies.push(hobby);
  hobbyInput.value = '';
  showHobbies();
});

document.querySelector('#remove-button').addEventListener('click', function () {
  userProfile.hobbies.pop();
  showHobbies();
});

document.querySelector('#username').value = userProfile.name;
document.querySelector('#birth-year').value = userProfile.birthYear;
showHobbies();
