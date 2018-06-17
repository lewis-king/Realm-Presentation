import realm from '../db/realm';

let unansweredQuestions = realm.objects('Question').filtered('answered == false').sorted('id');