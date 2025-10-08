
module.exports = function (req, res, next) {
    if (!req.user) {
        return res.redirect('/login'); // Redirect to login page if not logged in
    }
    next();
};
