import realm from '../db/schema/realm';

realm.write(() => {
  question.answered = true;
});