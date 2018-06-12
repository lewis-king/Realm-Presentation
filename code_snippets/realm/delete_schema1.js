import realm from '../db/schema/realm';

realm.write(() => {
  const questions = realm.objects('Question');
  realm.delete(questions);
});