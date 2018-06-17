import realm from '../db/realm';

realm.write(() => {
  const questions = realm.objects('Question');
  realm.delete(questions);
});