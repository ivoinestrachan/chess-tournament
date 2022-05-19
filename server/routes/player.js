const router = require('express').Router();


function isAuthorized(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else{
    res.redirect('/');
  }
}
router.get('/', isAuthorized,(req, res) => {
  res.redirect('https://chesstournament.vercel.app/auth/players');
});

module.exports = router;