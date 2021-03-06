var express = require('express');
var port = process.PORT || 3000;
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var app = express();


app.set('views', './views/pages');
app.set('view engine', 'jade');
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded());
// app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(serveStatic('bower_components'));
app.listen(port);

console.log('test port 3000');




//index page
app.get('/', function (req, res)  {
    res.render('index', {
        title:'iMovie 首页',
        movies: [{
            title:'奇妙世纪 08 梦的还原器',
            _id: 1,
            poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
        },{
            title:'奇妙世纪 08 梦的还原器',
            _id: 2,
            poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
        },{
            title:'奇妙世纪 08 梦的还原器',
            _id: 3,
            poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
        },{
            title:'奇妙世纪 08 梦的还原器',
            _id: 4,
            poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
        },{
            title:'奇妙世纪 08 梦的还原器',
            _id: 5,
            poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
        },{
            title:'奇妙世纪 08 梦的还原器',
            _id: 6,
            poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
        }]
    })
})

//admin page
app.get('/admin/movie', function (req, res)  {
    res.render('admin', {
        title:'iMovie 后台管理',
        movie: {
            title: ' ',
            doctor: ' ',
            country: ' ',
            year: ' ',
            language: ' ',
            summary: ' ',
            poster: ' ',
            flash: ' '
        }
    })
})

//detail page
app.get('/movie/:id', function (req, res)  {
    res.render('detail', {
        title: 'iMovie 影片详情页',
        movie: {
            title: '奇妙世纪 08 梦的还原器',
            doctor: '程亮/林博',
            country: '大陆',
            year: 2014,
            language: '汉语',
            poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
            flash: 'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf',
            summary: '《奇妙世纪》是由啼声影视与优酷出品共同打造的中国首部原创都市奇幻单元剧。'
              }
    })
})

//list page
app.get('/admin/list', function (req, res)  {
    res.render('list', {
        title:'iMovie 后台-影片列表',
        movies: [{
            _id: 1,
            title: '奇妙世纪 08 梦的还原器',
            doctor: '程亮/林博',
            country: '大陆',
            year: 2014,
            language: '汉语',
            summary: '《奇妙世纪》是由啼声影视与优酷出品共同打造的中国首部原创都市奇幻单元剧。',
            poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
            flash: 'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf'
        }]
    })
})
