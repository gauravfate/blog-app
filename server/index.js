const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();
const upload = require("express-fileupload");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

const allowedOrigins = [
   "https://blog-app-front-end-five.vercel.app",
  "http://localhost:3000"
];

app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PATCH", "DELETE"]
}));

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(upload());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/",(req, res)=> {
    res.json("All Well !!");
})

app.use(notFound);
app.use(errorHandler);


connect(`${process.env.MONGO_URL}`)
    .then(
        app.listen(process.env.PORT || 5000, () =>
            console.log(`listening to port ${process.env.PORT}`)
        )
    )
    .catch((error) => {
        console.log(error);
    });
