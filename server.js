// express 불러오기
const express = require("express");
//db 연결하기
const connectDB = require("./config/db");
// app 생성
const app = express();
// PORT 번호 기본값 5000으로 설정
const PORT = process.env.PORT || 5000;

// get요청시 "API Running" 을 response 해주기
app.get("/", (req, res) => {
  res.send("API Running");
});

connectDB();

//allow us to get the data in req.body
app.use(express.json({ extended: false}));

//Define Routes
app.use("/api/register", require("./routes/api/register"));
// 첫번째 인자로 PORT 번호
// 두번째 인자로 callback 함수를 통해 server 구축 성공시 console log
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));