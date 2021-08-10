/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
/* eslint-disable max-len */
const options = {
  useNewUrlParser: true, // говорим mongoose, что строка подключения будет в новом формате (новый формат должен обязательно содеражт порт)
  useFindAndModify: false, // заставляем методы findOneAndUpdate() и findOneAndRemove() использовать нативный (т.е предоставленный самой mongodb) метод findOneAndUpdate() вместо findAndModify()
  useCreateIndex: true, // Заставляем mongoose работать с функцией createIndex() драйвера mongodb вместо ensureIndex(). Так как последний помечен драйвером mongodb, как устаревший
  useUnifiedTopology: true, // заставляем mongoose использование новый механизм управления подключением драйвера mongodb.
  poolSize: 10, // максимальное количество сокетов, которые драйвер MongoDB будет держать открытыми для этого соединения
  bufferMaxEntries: 0, // говорим mongoose перестать выполнять любые операции с базой данных, после того как произодет отключение от последней.
  // В противном случае mongoose пытается дождаться восстановления соездинения, для завершения операций
};

const dbUrl =
  "mongodb+srv://romik:1231234@cluster0.pefgd.mongodb.net/BrokolliBlog?retryWrites=true&w=majority";

const apiUrl = "http://localhost:5000/api/v1";

module.exports = { dbUrl, options, apiUrl };
