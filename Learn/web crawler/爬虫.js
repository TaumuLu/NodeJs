var http = require('http');
var $ = require('cheerio');
var url = "http://www.imooc.com/course/list?c=fe";


http.get(url, (res)=>{
    var html = "";
    res.on('data', (data)=>{
        html+=data;
    });
    res.on('end', ()=>{
        html = fileHtml(html);
        showhtml(html);
    })
}).on('error', ()=>{
    console.log('获取数据失败');
})
function fileHtml(html){
    $ = $.load(html);
    var obj = {};
    var wrap = $('.course-nav-row');
    wrap.each(function(ind,ele){
        var arr = [];
        var tit = $(this).find('.hd').text().replace(/：/,"");
        var li = $(this).find('li');
        li.each(function(ind, ele){
            arr.push($(this).find('a').text());
        })
        obj[tit] = arr;
    })
    return obj;
}
function showhtml(html){
    for( var i in html ){
        console.log('标题：' + i + '\n内容：' + html[i].join(','));
    }
}







var http=require('http');
var cheerio=require('cheerio');
var url="http://www.imooc.com/learn/348";

function printCourseInfo(courseData){
    // courseData.forEach(function(item){
        // console.log(item.chapterTitle);
        // item.video.forEach(function(video){
            // console.log("["+video.id+"]"+video.title);
        // })
    // })
    //ES6重写
    courseData.forEach(item=>{
        console.log(item.chapterTitle);
        item.video.forEach(video=>console.log("["+video.id+"]"+video.title));
    });
}

function filterChapters(html){
    var $=cheerio.load(html);
    var courseData=[];

    var chapters=$('.chapter');
    chapters.each(function(item){
        var chapter=$(this);
        var chapterTitle=chapter.find('strong').text().replace(/\s*\r\n\s*/g,"");
        var chapterData={chapterTitle:chapterTitle,video:[]};
        var videos=chapter.find('.video').children('li');
        //console.log(chapterData);
        videos.each(function(item){
            var title=$(this).find('.J-media-item').text().replace(/\s*\r\n\s*/g,"");
            var id=$(this).find('.J-media-item').attr("href").split("video/")[1];
            chapterData.video.push({title:title,id:id});

        })

        courseData.push(chapterData);
    });

    return courseData;
}

http.get(url,res=>{
    var html='';
    res.on('data',data=>html+=data);
    res.on('end',()=>{
        var courseData=filterChapters(html);
        printCourseInfo(courseData);
    });
}).on('error',function(){
    console.log('获取数据失败');
});
