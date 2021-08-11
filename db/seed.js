const { connectToDB, disconnectDB } = require('./connect');
const User = require('./models/userModel');
const Partner = require('./models/partnerModel');
const Lecture = require('./models/lecturesModel');
const Course = require('./models/courseModel');
const fs = require("fs").promises;

async function seedDb() {
  connectToDB();
  const listCourse = await fs.readdir("./data/");
  const listMedia = await fs.readdir("./media/");
  const user = new User({
    name: 'Admin', email: 'admin@mail.ru', password: '123', role: 'true',
  });
  await user.save();
  for (let i = 1; i < 5; i += 1) {
    const partner = new Partner({ title: `${i}. Наш партнер`, description: 'Частота встречаемости словосочетания «Lorem Ipsum» в англоязычных источниках с 1800 по 2000 год согласно поиску по книгам Google books, Ngram Viewer ... Несмотря на то, что Lorem Ipsum используется в настоящее время как никогда и часто — людьми, которые не знают всей его истории, гений Цицерона все еще актуален и поныне, пусть и в искаженном виде.', logoLink: '/img/partner/1.jpg' });
    await partner.save();
  }
  for (let i=0; i<listCourse.length; i++){
    const course = new Course({title: `${listCourse[i]}`, description: 'Частота встречаемости словосочетания «Lorem Ipsum» в англоязычных источниках с 1800 по 2000 год согласно поиску по книгам Google books, Ngram Viewer ... Несмотря на то, что Lorem Ipsum используется в настоящее время как никогда и часто — людьми, которые не знают всей его истории, гений Цицерона все еще актуален и поныне, пусть и в искаженном виде.', teacher: `${user._id}`, pictureLink: `/img/course/${listCourse[i]}.jpg`});
    const listLectures  = await fs.readdir(`./data/${listCourse[i]}/`);
    for (let j=0; j<listLectures.length; j++){
      const textFile = await fs.readFile(`./data/${listCourse[i]}/${listLectures[j]}`, "utf-8");
      let mediaLink=''
      for (let l=0; l<listMedia.length; l++){
        if (listLectures[j].slice(0, -4)===listMedia[l].slice(0,-4)) mediaLink=`/db/Media/${listMedia[l]}`
      }
        console.log();

        const lectures = new Lecture({title: `${listLectures[j].slice(0, -4)}`, description: `${textFile}`, videoLink: `${mediaLink}`});
        await lectures.save();
        course.lecturesId.push(lectures._id);
    }
    await course.save();
  console.log('База готова!!!');
  //disconnectDB();  
  }
}

seedDb();
