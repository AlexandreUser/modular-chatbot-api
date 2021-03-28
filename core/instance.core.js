const { generateMulti, generateSingle } = require("./matchingLogic.core");
class ChatbotModular {
  constructor(version, name) {
    this.version = version;
    this.name = name;
    this.dict = [];
    this.debug = false;
    this.composeDict = function (dictComposer) {
      if (this.debug) {
        console.log(dictComposer);
      }
      this.dict = dictComposer;
    };
    this.runProcessorSingle = (input) => {
      return generateSingle(this.dict, input);
    };
    this.runProcessorMulti = (input) => {
      return generateMulti(this.dict, input);
    };
  }
}
module.exports = new ChatbotModular("v1", "John");

//chatbot.composeDict([
//  { question: "who are you", response: "I'm John" },
//  { question: "where are you from", response: "I'm from Brazil" },
//  { question: "where do you work", response: "I work in Canada" },
//]);
//console.log(chatbot.runProcessorSingle("where are bot from"));
//console.log(chatbot.runProcessorMulti("where are bot from"));
