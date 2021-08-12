const mongoose = require("mongoose");
const faqModels = require("./models/faqModel");
const { connectToDB, disconnectDB } = require("./connect");

const questionCard = [
  {
    title: "Регистрация",
    question: "Как зарегестрироваться?",
    answer:
      "В шапке профиля есть кнопка Авторизация/регистрация нужно ее нажать и заполнить поля вашими данными, затем нажать кнопку зарегестрироваться. Вы зарегестрированы!",
    img: "/img/questions.png",
  },

  {
    title: "Лекции",
    question: "Кто читает лекции?",
    answer:
      "В нашей команде читают лекции практикующие врачи с большим опытом, которым есть чем поделиться!",
    img: "/img/questions.png",
  },
  {
    title: "онлайн",
    question: "Могу ли я прохидить курсы онлайн?",
    answer:
      "Конечно можете, наша курсы рассчитаны на прохождение именно онлайн!",
    img: "/img/questions.png",
  },
  {
    title: "Курсы",
    question: "Кому подойдут это курсы?",
    answer:
      "Мы составили программу обучения таким образом, что наши курсы подойдут большинству людей желающих улучшить свои знания в данной теме",
    img: "/img/questions.png",
  },
  {
    title: "Компания",
    question: "Сколько лет на рынке сужествует ваша компания?",
    answer:
      "Наша группа компаний `мать и дитя` осужествляет свою деятельность с 2006 года",
    img: "/img/questions.png",
  },
];

const seeder = async () => {
  await connectToDB();
  await faqModels.insertMany(questionCard);
};

seeder();
