const findWinner = (type) => {
  return new Promise((resolve, reject) => {
    switch (true) {
      case type <= 10 && type >= 0:
        resolve(`A is winner because he got ${type} vote`);
        break;
      case type > 10 && type <= 50:
        resolve(`B is winner because he got ${type} vote`);
        break;
      case type > 50:
        resolve(`C is winner because he got ${type} vote`);
        break;
      default:
        reject("Error while counting");
        break;
    }
  });
};
const electionOneResult = findWinner(30);
electionOneResult
  .then((message) => {
    console.log(message);
    const reElection = findWinner(90);

    return reElection;
  })
  .then((message) => {
    // message();
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
