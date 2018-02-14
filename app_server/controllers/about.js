const about = function(req, res) {
     res.render('about', {
          title: res.__('About'),
          currenturl: '/about'
     });
}

module.exports = {
     about
};
