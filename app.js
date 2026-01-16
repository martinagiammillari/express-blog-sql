
import express from "express";
import postsRouter from "./routers/posts.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";


const app = express ();
const port = 3600;
app.use(express.static("public"));

app.use(express.json());
app.use("/posts", postsRouter);




app.use(notFound);
app.use(errorHandler);


app.listen(port, function(){
    console.log("il server è in ascolto sula porta " +port);
})
