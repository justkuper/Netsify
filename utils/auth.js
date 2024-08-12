
// * This file contains the middleware functions that are used to check if the user is authenticated or not
const auth = (req, res, next) => {
  if (!req.session.userType) {
    res.redirect(307, "/login");
    return;
  }

  console.log(req.session.uid + " auth");

  next();
};

function redirectAuthed(req, res, next) {
  if (req.session.userType === "user") {
    res.redirect("/user");
    return;
  } else if (req.session.userType === "provider") {
    res.redirect("/provider");
    return;
  }
  next();
}

module.exports = {
  auth,
  redirectAuthed,
};
