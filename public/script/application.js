// const regButton = document.querySelector('.logIn');
// const body = document.querySelector('.container');

// const registrationPlace = () => <div class='filter'>
// <div class='modelForm'>
// <form>
// <h1 title="Форма регистрации">Регистрация</h1>
// <div class='group'>
// <label>Имя Пользователя</label>
// <input type="text"></input>
// </div>
// <div class='group'>
// <label>Пароль</label>
// <input type="password"></input>
//       </div>
//       <div class='group'>
//       <label>Email</label>
//       <input type="text"></input>
//       </div>
//       </form>
//       </div>
//       </div>;

// // console.log(body.innerHTML = registrationPlace);

// regButton.addEventListener('click', (event) => {
//   const htmldiv = registrationPlace();
//   body.innerHTML = htmldiv;
//   console.log(body.innerHTML);
// });
const show = function (state) {
  document.querySelector('.modalForm').style.display = state;
  document.querySelector('.filter').style.display = state;
};
