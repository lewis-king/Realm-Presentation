import realm from '../db/schema/realm';

realm.write(() => {
  realm.create('Question',
    {
      id: 1,
      question: "I scored the first goal in the World Cup 2018",
      acceptableAnswers: "Don't know yet...",
      answered: false,
    }, true)
});