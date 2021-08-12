const selectQuestion = document.querySelector('.menu-question');
const answersPlace = document.querySelector('.answers');
const regForm = document.querySelector('.login-html');
const regName = document.querySelector('#user');
const regPassword = document.querySelector('#regPass');
const regEmail = document.querySelector('#regEmail');
const regRepPassword = document.querySelector('#regRepPass');
const regPlace = document.querySelector('#btnreg');
console.log(regForm);

regForm.addEventListener('submit', async (event) => {
  event.preventDefault();

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

    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const result = await response.json();
    console.log(result);
  }
});

selectQuestion.addEventListener('click', async (event) => {
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
