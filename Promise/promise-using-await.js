const getData = () => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * (100 - 0) + 0);
    if (randomNum % 2 === 0) {
      setTimeout(() => {
        resolve({
          data: "this is data",
          success: true,
          error: false,
          errMessage: [],
          id: randomNum,
        });
      }, 1000);
    } else {
      setTimeout(() => {
        reject({
          data: "",
          success: false,
          error: true,
          errMessage: ["Something went wrong!!"],
          id: randomNum,
        });
      }, 500);
    }
  });
};
const fetchData = async () => {
  console.log("Fetch is initiated");
  try {
    const response = await getData();
    console.log("response :>> ", response);
    return response;
  } catch (error) {
    console.log("OOPSSS!! we got error", error);
    return error;
  }
};
const fetchDataAgain = async () => {
  console.log("Fetch two is initiated");
  const response = await getData();
  console.log("response 2", response);
};
// Here we are executing fetchData first and fetchDataAgain but both task will be saved in queue , and one which get resolved/reject first will be printed first
// Note here is that code below the await will not be executed  until the promise has either resolved or rejected. of corresponding function
// i.e. "Fetch is initiated is printed " and then it waits for the promise to be resolved or rejected and parallely "Fetch will be printed" but code below await will not gonna printed untill any promise resolve / reject
// this is main point here , this is why javascript is single threaded , we can not break its thread , main thread will always working on
// yes its also true that we made it async by using promise
fetchData();
fetchDataAgain();
