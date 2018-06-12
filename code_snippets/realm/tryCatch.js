try {
  realm.write(() => {
    //Insert create statement as seen in a previous slide
  });
} catch (e) {
    //Log the exception and notify the user something has gone wrong
}