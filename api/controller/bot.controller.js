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
      payload: { response: bot.runProcessorMulti(req.query.question) },
    });
  },
};
