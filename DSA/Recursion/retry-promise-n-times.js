function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
const retryPromise = async (callback, retries) => {
  try {
    await callback();
  } catch (error) {
    if (retries <= 0) {
      return Promise.reject("Something went wrong!!!");
    }
    await wait(1000);
    retryPromise(callback, retries - 1);
  }
};
const serverCall = () => {
  const count = 0;
  return async () => {
    if (count < 2) {
      throw "Error in server";
    } else {
      return "Sucess!!";
    }
  };
};
retryPromise(serverCall(), 3);
