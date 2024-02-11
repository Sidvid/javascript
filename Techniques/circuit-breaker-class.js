class CircuitBreaker {
  constructor(threshold, timeout) {
    this.threshold = threshold; // Number of failures to trip the breaker
    this.timeout = timeout; // Timeout period for the breaker to reset
    this.failureCount = 0; // Number of consecutive failures
    this.lastFailureTime = null; // Timestamp of the last failure
    this.isOpen = false; // Circuit breaker state
  }

  execute(serviceCall) {
    if (this.isOpen) {
      const now = Date.now();
      if (now - this.lastFailureTime > this.timeout) {
        // Reset the circuit breaker if the timeout period has elapsed
        this.reset();
      } else {
        throw new Error("Service unavailable");
      }
    }

    try {
      const result = serviceCall();
      this.success();
      return result;
    } catch (error) {
      this.failure();
      throw error;
    }
  }

  success() {
    this.failureCount = 0;
    this.isOpen = false;
  }

  failure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.trip();
    }
  }

  trip() {
    this.isOpen = true;
    this.lastFailureTime = Date.now();
    console.log("Circuit breaker tripped");
  }

  reset() {
    this.failureCount = 0;
    this.isOpen = false;
    console.log("Circuit breaker reset");
  }
}

// Example usage:
const circuitBreaker = new CircuitBreaker(3, 5000); // Trips after 3 consecutive failures, resets after 5 seconds

function simulatedServiceCall() {
  // Simulated service call
  if (Math.random() < 0.5) {
    throw new Error("Service call failed");
  }
  return "Service call succeeded";
}

// Execute the service call using the circuit breaker
for (let i = 0; i < 10; i++) {
  try {
    const result = circuitBreaker.execute(simulatedServiceCall);
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
