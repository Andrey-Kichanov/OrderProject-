const { connectToDB } = require('./connect.js')
const User = require('./models/userModel.js')
const Partner = require('./models/partnerModel.js')
const Lectures = require('./models/lecturesModel.js')
const Course = require('./models/courseModel.js')

connectToDB()

async function seedDb() {
    const user = new User({ name: 'Admin', email: 'admin@mail.ru', password: '123', role: 'true' })
    await user.save()
    for (let i = 1; i < 5; i++) {
        const partner = new Partner({ title: `${i}. Наш партнер'`, description: 'Частота встречаемости словосочетания «Lorem Ipsum» в англоязычных источниках с 1800 по 2000 год согласно поиску по книгам Google books, Ngram Viewer ... Несмотря на то, что Lorem Ipsum используется в настоящее время как никогда и часто — людьми, которые не знают всей его истории, гений Цицерона все еще актуален и поныне, пусть и в искаженном виде.', logoLink: '/img/partner/1.jpg', role: 'true' })
        await partner.save()
    }
    for (let i = 1; i < 14; i++) {
        const course = new Course({ title: `${i}. Наш курс'`, description: 'Частота встречаемости словосочетания «Lorem Ipsum» в англоязычных источниках с 1800 по 2000 год согласно поиску по книгам Google books, Ngram Viewer ... Несмотря на то, что Lorem Ipsum используется в настоящее время как никогда и часто — людьми, которые не знают всей его истории, гений Цицерона все еще актуален и поныне, пусть и в искаженном виде.', teacher: '/img/partner/1.jpg', role: 'true' })
        await course.save()
        for (let j = 1; j < 10; j++) {
            const lectures = new Lectures({ title: `${i}.${j}. Наша лекция'`, description: 'Частота встречаемости словосочетания «Lorem Ipsum» в англоязычных источниках с 1800 по 2000 год согласно поиску по книгам Google books, Ngram Viewer ... Несмотря на то, что Lorem Ipsum используется в настоящее время как никогда и часто — людьми, которые не знают всей его истории, гений Цицерона все еще актуален и поныне, пусть и в искаженном виде.', logoLink: '/img/partner/1.jpg', role: 'true' })
        }
    }
}

seedDb()