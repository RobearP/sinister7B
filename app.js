// import express
import express from "express";

//import morgan
import morgan from "morgan";

//import routes from routes handler files???
import {topicsRouter} from "./routes/topicRoutes.js";

//export const app will be set as default
const app = express ();

//use app (morgan,express.json, ???.Routes, )

app.use (morgan("dev"));
app.use (express.json());
app.use ("/topics", topicsRouter);

//    error handling
// Error handler for incorrect filepath
app.use(function (_req, res, _next) {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Did you send the request to the right path?",
    });
  });
  
  export default app;
 

