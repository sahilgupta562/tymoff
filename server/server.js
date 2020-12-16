// Express requirements
import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import path from "path";
import forceDomain from "forcedomain";
import Loadable from "react-loadable";
// import cookieParser from "cookie-parser";
import Cookies from "cookies";

// Our loader - this basically acts as the entry point for each page load
import loader from "./loader";

// Create our express app using the port optionally specified
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const options = {
  root: path.join(__dirname),
};

// NOTE: UNCOMMENT THIS IF YOU WANT THIS FUNCTIONALITY
/*
  Forcing www and https redirects in production, totally optional.

  http://mydomain.com
  http://www.mydomain.com
  https://mydomain.com

  Resolve to: https://www.mydomain.com
*/
app.use(
  forceDomain({
    hostname: "www.tymoff.com",
    protocol: "https",
    // hostname: "beta.tymoff.com",
    // protocol: "http",
  })
);

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(Cookies.express());
app.use(session({ secret: "session" }));

app.get("/robots.txt", (req, res) => res.status(200).sendFile("robots.txt", options));

// sitemap links
app.get("/sitemap.xml", (req, res) => res.status(200).sendFile("sitemap.xml", options));
app.get("/sitemap-static.xml", (req, res) => res.status(200).sendFile("sitemap-static.xml", options));
app.get("/sitemap-Adventure.xml", (req, res) => res.status(200).sendFile("sitemap-Adventure.xml", options));
app.get("/sitemap-Business.xml", (req, res) => res.status(200).sendFile("sitemap-Business.xml", options));
app.get("/sitemap-Celebrities.xml", (req, res) => res.status(200).sendFile("sitemap-Celebrities.xml", options));
app.get("/sitemap-Dance.xml", (req, res) => res.status(200).sendFile("sitemap-Dance.xml", options));
app.get("/sitemap-Education.xml", (req, res) => res.status(200).sendFile("sitemap-Education.xml", options));
app.get("/sitemap-Fashion.xml", (req, res) => res.status(200).sendFile("sitemap-Fashion.xml", options));
app.get("/sitemap-Festivals.xml", (req, res) => res.status(200).sendFile("sitemap-Festivals.xml", options));
app.get("/sitemap-Finance.xml", (req, res) => res.status(200).sendFile("sitemap-Finance.xml", options));
app.get("/sitemap-Food.xml", (req, res) => res.status(200).sendFile("sitemap-Food.xml", options));
app.get("/sitemap-General-Knowledge.xml", (req, res) => res.status(200).sendFile("sitemap-General-Knowledge.xml", options));
app.get("/sitemap-General.xml", (req, res) => res.status(200).sendFile("sitemap-General.xml", options));
app.get("/sitemap-Greetings.xml", (req, res) => res.status(200).sendFile("sitemap-Greetings.xml", options));
app.get("/sitemap-Health.xml", (req, res) => res.status(200).sendFile("sitemap-Health.xml", options));
app.get("/sitemap-History.xml", (req, res) => res.status(200).sendFile("sitemap-History.xml", options));
app.get("/sitemap-Holiday.xml", (req, res) => res.status(200).sendFile("sitemap-Holiday.xml", options));
app.get("/sitemap-horror.xml", (req, res) => res.status(200).sendFile("sitemap-horror.xml", options));
app.get("/sitemap-Humor.xml", (req, res) => res.status(200).sendFile("sitemap-Humor.xml", options));
app.get("/sitemap-Kids.xml", (req, res) => res.status(200).sendFile("sitemap-Kids.xml", options));
app.get("/sitemap-Literature.xml", (req, res) => res.status(200).sendFile("sitemap-Literature.xml", options));
app.get("/sitemap-Marketing.xml", (req, res) => res.status(200).sendFile("sitemap-Marketing.xml", options));
app.get("/sitemap-Motivational.xml", (req, res) => res.status(200).sendFile("sitemap-Motivational.xml", options));
app.get("/sitemap-Movies.xml", (req, res) => res.status(200).sendFile("sitemap-Movies.xml", options));
app.get("/sitemap-Music.xml", (req, res) => res.status(200).sendFile("sitemap-Music.xml", options));
app.get("/sitemap-Nature.xml", (req, res) => res.status(200).sendFile("sitemap-Nature.xml", options));
app.get("/sitemap-News.xml", (req, res) => res.status(200).sendFile("sitemap-News.xml", options));
app.get("/sitemap-Others.xml", (req, res) => res.status(200).sendFile("sitemap-Others.xml", options));
app.get("/sitemap-Philosophy.xml", (req, res) => res.status(200).sendFile("sitemap-Philosophy.xml", options));
app.get("/sitemap-Photography.xml", (req, res) => res.status(200).sendFile("sitemap-Photography.xml", options));
app.get("/sitemap-Politics.xml", (req, res) => res.status(200).sendFile("sitemap-Politics.xml", options));
app.get("/sitemap-Puzzles.xml", (req, res) => res.status(200).sendFile("sitemap-Puzzles.xml", options));
app.get("/sitemap-Relationship.xml", (req, res) => res.status(200).sendFile("sitemap-Relationship.xml", options));
app.get("/sitemap-Science.xml", (req, res) => res.status(200).sendFile("sitemap-Science.xml", options));
app.get("/sitemap-Technology.xml", (req, res) => res.status(200).sendFile("sitemap-Technology.xml", options));
app.get("/sitemap-Television.xml", (req, res) => res.status(200).sendFile("sitemap-Television.xml", options));
app.get("/sitemap-Travel.xml", (req, res) => res.status(200).sendFile("sitemap-Travel.xml", options));
app.get("/sitemap-Creativity.xml", (req, res) => res.status(200).sendFile("sitemap-Creativity.xml", options));

// sitemap links end

app.get("/logo-icon.png", (req, res) => res.status(200).sendFile("logo-icon.png", options));
app.get("/logo.png", (req, res) => res.status(200).sendFile("logo.png", options));
app.get("/favicon.ico", (req, res) => res.status(200).sendFile("favicon.ico", options));
// Set up homepage, static assets, and capture everything else
app.use(express.Router().get("/", loader));

// app.use(express.static(path.resolve(__dirname, "../build")));

function cacheControl(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Cache-Control", "max-age=2592000000");
  next();
}
app.use("/static", cacheControl, express.static(path.join(__dirname, "..", "build", "/static"), { maxAge: 86400000 }));
app.use("/assets", cacheControl, express.static(path.join(__dirname, "..", "build", "/assets"), { maxAge: 86400000 }));
app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});

// Handle the bugs somehow
app.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});
