const express = require("express");
const app = express();

app.get("/", (req, res) =>
  res.sendFile("/home/kami/repos/odin-informational-site/index.html"),
);

app.get("/about", (req, res) =>
  res.sendFile("/home/kami/repos/odin-informational-site/about.html"),
);

app.get("/contact-me", (req, res) =>
  res.sendFile("/home/kami/repos/odin-informational-site/contact-me.html"),
);

app.all("*splat", (req, res) =>
  res.status(404).sendFile("/home/kami/repos/odin-informational-site/404.html"),
);

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}`);
});
