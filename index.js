const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 App CI/CD funcionando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
