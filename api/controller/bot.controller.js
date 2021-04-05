var fs = require("fs");
const bot = require("../../core/instance.core");
module.exports = {
  getResponse(req, res) {
    bot.composeDict(
      JSON.parse(fs.readFileSync("./bots/" + req.query.name + ".json", "utf-8"))
        .knowlegde
    );

    res.send({
      result: "done",
      payload: { response: bot.runProcessorSingle(req.query.question.toLowerCase()) },
    });
  },
  getAllbots(req, res) {
    let files = [];
    fs.readdirSync("./bots/").forEach((file) => {
      files.push(file);
    });
    res.send(files);
  },
};
