import CommonHelper from "./CommonHelper";

class Decorator {
  static async decorateWithBeforAndAfter(current, before, after) {
    before();
    if (CommonHelper.isAsyncFunc(current)) {
      current().finally(() => after());
    } else {
      try {
        current();
      } finally {
        after();
      }
    }
  }

  static async decorateWithBeforAndAfterAndReturn(current, before, after) {
    before();
    if (CommonHelper.isAsyncFunc(current)) {
      const result = await current();
      after();
      return result;
    } else {
      const result = current();
      after();
      return result;
    }
  }

  static decorateWithDelay(func, ms) {
    ms = 500 || ms;
    setTimeout(() => {
      func();
    }, ms);
  }

  static async decorateWithErrorHandling(mainFunc, handlerFunc, errorTitle) {
    try {
      return await mainFunc();
    } catch (e) {
      handlerFunc(errorTitle, e);
    }
  }
}

export default Decorator;
