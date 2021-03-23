module.exports = {
  generateSingle: function (dict, input) {
    let tokens = input.split(" ");
    let newDict = {};

    newDict = dict.map((knowlegde) => {
      let tokenRange = tokens.map((str) => {
        return knowlegde.question.indexOf(str) !== -1 ? 1 : 0;
      });
      return (
        tokenRange.reduce((a, b) => {
          return a + b;
        }) / tokens.length
      );
    });
    return {
      response: dict[newDict.indexOf(Math.max(...newDict))],
      confidence: newDict[newDict.indexOf(Math.max(...newDict))],
    };
  },
  generateMulti: function (dict, input) {
    let tokens = input.split(" ");
    let newDict = {};

    newDict = dict.map((knowlegde) => {
      let tokenRange = tokens.map((str) => {
        return knowlegde.question.indexOf(str) !== -1 ? 1 : 0;
      });
      return (
        tokenRange.reduce((a, b) => {
          return a + b;
        }) / tokens.length
      );
    });
    return newDict.map((result, idx) => {
      return { response: dict[idx], confidence: result };
    });
  },
};
