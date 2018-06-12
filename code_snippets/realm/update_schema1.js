import realm from '../db/schema/realm';

realm.write(() => {
  realm.create('Question', {id: 1, answered: true}, true);
});