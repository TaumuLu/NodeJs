var http = require('http');
var queryString = require('querystring');
var postDate = queryString.stringify({
    'jsonp':'jsonp',
    'message':'test',
    'type':1,
    'plat':1,
    'oid':6220304
})

var options = {
    hostname: 'www.bilibili.com',
    port: 80,
    path: '/video/av6220304/',
    method: 'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Cache-Control':'no-cache',
        'Connection':'keep-alive',
        'Content-Length':postDate.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'fts=1472261354; DedeUserID=7079048; DedeUserID__ckMd5=59533f96ffc35f9c; SESSDATA=d22d0981%2C1474853367%2C3313de16; sid=8az0i5bl; rlc_time=1473568749246; _cnt_dyn=null; _cnt_pm=0; _cnt_notify=18; uTZ=-480; _dfcaptcha=068a07688cbe397f8821b313bc07d0ac',
        'Host':'api.bilibili.com',
        'Origin':'http://www.bilibili.com',
        'Pragma':'no-cache',
        'Referer':'http://www.bilibili.com/video/av6220304/',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36'
    }
}

var req = http.request(options, function(res){
    console.log(res.statusCode);
    console.log(JSON.stringify(res.headers));

    res.on('data', function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })
    res.on('end', function(e){
        console.log(e);
    })

})
req.on('error', function(e){
    console.log(e);
})
req.write(postDate);
req.end();


http.get('http://www.bilibili.com', (res)=>{
    var html = "";
    res.on('data', (data)=>{
        html+=data;
    });
    res.on('end', ()=>{
        console.log(html);
        // console.log(e)
        // html = fileHtml(html);
        // showhtml(html);
    })
}).on('error', ()=>{
    console.log('获取数据失败');
})
