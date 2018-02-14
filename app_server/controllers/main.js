const index = function(req, res) {
     res.render('index', {
          title: 'Aitor Chordá Reta',
          currenturl: '/'
     });
}

module.exports = {
     index
};
