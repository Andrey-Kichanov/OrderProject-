const { connectToDB, disconnectDB } = require('./connect');
const User = require('./models/userModel');
const Partner = require('./models/partnerModel');
const Lecture = require('./models/lecturesModel');
const Course = require('./models/courseModel');

async function seedDb() {
  connectToDB();
  const user = new User({
    name: 'Admin', email: 'admin@mail.ru', password: '123', role: 'true',
  });
  await user.save();
  for (let i = 1; i < 5; i += 1) {
    const partner = new Partner({ title: `${i}. Наш партнер`, description: 'Частота встречаемости словосочетания «Lorem Ipsum» в англоязычных источниках с 1800 по 2000 год согласно поиску по книгам Google books, Ngram Viewer ... Несмотря на то, что Lorem Ipsum используется в настоящее время как никогда и часто — людьми, которые не знают всей его истории, гений Цицерона все еще актуален и поныне, пусть и в искаженном виде.', logoLink: '/img/partner/1.jpg' });
    await partner.save();
  }
  for (let i = 1; i < 14; i += 1) {
    const course = new Course({
      title: `${i}. Наш курс`, description: 'Частота встречаемости словосочетания «Lorem Ipsum» в англоязычных источниках с 1800 по 2000 год согласно поиску по книгам Google books, Ngram Viewer ... Несмотря на то, что Lorem Ipsum используется в настоящее время как никогда и часто — людьми, которые не знают всей его истории, гений Цицерона все еще актуален и поныне, пусть и в искаженном виде.', teacher: `${user._id}`, pictureLink: '/img/course/1.jpg',
    });
    for (let j = 1; j < 10; j += 1) {
      const lectures = new Lecture({
        title: `${i}.${j}. Наша лекция'`, description: 'Частота встречаемости словосочетания «Lorem Ipsum» в англоязычных источниках с 1800 по 2000 год согласно поиску по книгам Google books, Ngram Viewer ... Несмотря на то, что Lorem Ipsum используется в настоящее время как никогда и часто — людьми, которые не знают всей его истории, гений Цицерона все еще актуален и поныне, пусть и в искаженном виде.', pictureLink: '/img/lectures/1.jpg', role: 'true',
      });
      await lectures.save();
      course.lecturesId.push(lectures._id);
    }
    await course.save();
  }
  console.log('База готова!!!');
  disconnectDB();
}

seedDb();
