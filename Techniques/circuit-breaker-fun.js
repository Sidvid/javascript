const circuitBreaker = (fn, threshold, timeDelay) => {
  let failureCount = 0;
  let timeSinceLastFailure = 0;
  let isClosed = false;
  return (...args) => {
    if (isClosed) {
      let difference = Date.now() - timeSinceLastFailure;
      // If time difference between  now and last failure is greater than the delay period, reset the count of failures to zero because it suggests that
      // time passed  since last failure is greater than the delay
      if (difference >= timeDelay) {
        isClosed = false;
      } else {
        console.log("Service is unavailable now !!");
      }
    }
    try {
      const result = fn(...args);
      return result;
    } catch (error) {
      failureCount++; // increasing failure count on every failure
      timeSinceLastFailure = Date.now(); // saving the time when service is failed last time
      if (failureCount >= threshold) {
        isClosed = true; // triping the circuit for x amount of time
      }
      console.log("Error");
    }
  };
};
const mainService = () => {
  let i = 0;
  return () => {
    if (i < 4) {
      i++;
      throw new Error("service is down");
    } else {
      console.log("Heloooooooo");
    }
  };
};
const request = mainService();
const cb = circuitBreaker(request, 3, 200);
cb();
cb();
cb();
cb();
cb();
cb();
cb();
cb();
cb();
cb();
cb();
cb();
cb();
cb();
setTimeout(() => cb(), 1000);
