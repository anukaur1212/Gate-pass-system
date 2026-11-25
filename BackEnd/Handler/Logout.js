export function Logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Logout failed");
    }

    res.redirect('/login');
  });
}