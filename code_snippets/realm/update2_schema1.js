import realm from '../db/realm';

realm.write(() => {
  question.answered = true;
});