import realm from '../db/realm';

realm.write(() => {
  realm.create('Question',
    {
      id: 1,
      question: "I scored the first goal in the World Cup 2018",
      acceptableAnswers: ["Yury Gazinsky", "Gazinsky"],
      answered: false,
    })
});