import realm from '../db/schema/realm';

let unansweredQuestions = realm.objects('Question').filtered('answered == false').sorted('id');