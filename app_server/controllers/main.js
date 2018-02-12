const index=function (req, res) {
     res.render('index', { title: 'Express' });
}

const aitor=function(req, res) {
     res.render('aitor',{ message: 'My deployment github repository can be found', url: 'https://github.com/aitor422/WADMEAN', urlname: 'here'});
}

const about=function(req, res) {
     res.send('My first route works!');
}

module.exports={
     index,
     aitor,
     about
};
