const express = require("express");
const app = express();

const db = require("./data/database");

const quoteRoutes = require("./routes/quotes.routes");

app.use("/quote", quoteRoutes);

// 에러 핸들링을 만들어줘야한다.
app.use((error, req, res, next) => {
  res.status(500).json({
    message: "에러발생!!",
  });
});

db.initDb()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
    console.log("데이터베이스 연결 실패!");
  });
