module.exports = {
  get(req, res) {
    res.send({
      name: "modular chatbot",
      version: "0.1",
      paths: ["/api/v1/main"],
    });
  },
};
