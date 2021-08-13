const selectQuestion = document.querySelector('.menu-question');
const selectLectures = document.querySelector('.container-courses-list');
const answersPlace = document.querySelector('.answers');
const lecturesPlace = document.querySelector('.lecturesDiv');
const placeforVideo = document.querySelector('.lectures-video');
const regName = document.querySelector('#user');
const regPassword = document.querySelector('#regPass');
const regEmail = document.querySelector('#regEmail');
const regRepPassword = document.querySelector('#regRepPass');
const regPlace = document.querySelector('#btnreg');
const placeForLecture = document.querySelector('.lecture-text');
const loginEmail = document.querySelector('#loginEmail');
const loginPass = document.querySelector('#loginPass');
const logPlace = document.querySelector('#bntLog');

regPlace.addEventListener('click', async (event) => { // регистрация
  event.preventDefault();
  console.log('==>>', event.target);

  const valueName = regName.value;
  const valuePass = regPassword.value;
  const valueRepPass = regRepPassword.value;
  const valueEmail = regEmail.value;

  if (valuePass !== valueRepPass) {
    const errorPass = document.createElement('p');
    errorPass.style.marginTop = '10px';
    errorPass.style.marginBottom = '0px';
    errorPass.style.color = 'red';
    errorPass.innerText = 'Пароли не совпадают';
    regPlace.appendChild(errorPass);
  } else {
    const newUser = { valueName, valuePass, valueEmail };
    console.log('МЫ ТУТ!');
    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const result = await response.json();
    if (result.message) {
      const errorPass = document.createElement('p');
      errorPass.style.marginTop = '10px';
      errorPass.style.marginBottom = '0px';
      errorPass.style.color = 'red';
      errorPass.innerText = 'Данный Email уже используется';
      regPlace.appendChild(errorPass);
    } else if (result.email && result.password) {
      window.location.href = 'http://localhost:5000';
    }
  }
});

selectQuestion?.addEventListener('click', async (event) => { // вывод вопросов-ответов
  // console.log(event.target.id);
  const buttonId = event.target.id;

  const response = await fetch(`/faq/${buttonId}`, {
    method: 'POST',
  });

  const result = await response.json();
  if (result) {
    console.log(result.answer);
    answersPlace.innerText = result.currentFaq.answer;
  }
});

logPlace.addEventListener('click', async (event) => {
  event.preventDefault();
  console.log('==', event.target);

  const emailValue = loginEmail.value;
  const passValue = loginPass.value;

  const User = { emailValue, passValue };

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(User),
  });

  const result = await response.json();
  console.log(result);

  if (result.message) {
    const errorPass = document.createElement('p');
    errorPass.style.marginTop = '10px';
    errorPass.style.marginBottom = '0px';
    errorPass.style.color = 'red';
    errorPass.innerText = 'Логин или пароль не верны';
    logPlace.appendChild(errorPass);
  }
  if (result.enter) {
    window.location.href = 'http://localhost:5000';
  }
});

selectLectures?.addEventListener('click', async (event) => { // вывод лекций
  console.log(event.target.parentNode.parentNode);
  const courseId = event.target.parentNode.parentNode.firstElementChild.id;
  const buttonId = event.target.id;

  console.log(buttonId);

  const response = await fetch(`/courses/${courseId}/lectures/${buttonId}`, {
    method: 'GET',
  });

  const result = await response.json();
  placeforVideo.innerHTML = '';
  if (result) {
    placeForLecture.innerHTML = result.description;
    if (result.videoLink) {
      placeforVideo.innerHTML = `<video src=${result.videoLink} width="500px" controls="controls"></video>`;
    }
  }
});
