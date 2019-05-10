const express = require("express");
const path = require("path");
const db = require("./db/database");
const models = require("./db/models");
const app = express();
const router = require("./routes");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local").Strategy;

const PORT = process.env.PORT || 8080;

const appPath = path.join(__dirname, "../public");

app.use(express.static(appPath));
app.use(bodyParser());
app.use(router);

function startListen(app, port) {
  app.listen(port, function() {
    console.log(`App listening on port  ${PORT}!`);
  });
}

db.sync()
  .then(() => {
    console.log("Database synchronized");

    passport.use(
      new LocalStrategy(function(username, password, done) {
        models.User.findOne({
          where: { login: username, pass: password }
        })
          .then(user => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch(error => {
            return done(error, false);
          });
      })
    );

    passport.serializeUser(function(user, cb) {
      return cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb) {
      models.User.findOne({
        where: { id }
      }).then(user => {
        if (user) {
          return cb(null, user);
        }
      });
    });

    app.use(passport.initialize());
    app.use(passport.session());

    app.post(
      "/api/login",
      passport.authenticate("local", { failureRedirect: "/login" }),
      function(req, res) {
        res.redirect("/");
      }
    );

    startListen(app, PORT);
  })
  .catch(error => {
    console.error(error);
  });
