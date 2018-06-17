import realm from '../db/realm';

realm.write(() => {
  realm.create('Question', {id: 1, answered: true}, true);
});