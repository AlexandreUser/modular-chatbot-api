var fs = require("fs");

module.exports = {
  get(req, res) {
    fs.writeFileSync(
      "./bots/" + req.query.name + ".json",
      '{"version":1,"knowlegde":[]}',
      "utf-8"
    );
    res.send({ result: "done", payload: req.query });
  },
  getBot(req, res) {
    res.send(
      JSON.parse(
        fs.readFileSync(
          "./bots/" + req.query.name + ".json",

          "utf-8"
        )
      )
    );
  },
  postQuestion(req, res) {
    let botPayload = JSON.parse(
      fs.readFileSync("./bots/" + req.body.name + ".json", "utf-8")
    );
    botPayload.knowlegde.push({
      id: botPayload.knowlegde.length,
      question: req.body.question,
      response: req.body.response,
    });
    fs.writeFileSync(
      "./bots/" + req.body.name + ".json",
      JSON.stringify(botPayload),
      "utf-8"
    );
    res.send({ result: "done", payload: botPayload });
  },
  deleteQuestion(req, res) {
    let botPayload = JSON.parse(
      fs.readFileSync("./bots/" + req.query.name + ".json", "utf-8")
    );
    botPayload.knowlegde = botPayload.knowlegde.filter((question) => {
      if (question.id != req.query.id) {
        return question;
      }
    });
    fs.writeFileSync(
      "./bots/" + req.query.name + ".json",
      JSON.stringify(botPayload),
      "utf-8"
    );
    res.send({ result: "done", payload: botPayload });
    res.send(botPayload);
  },
};
