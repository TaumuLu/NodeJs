var fs = require('fs');
var co = require('co');

Wallpaper Engine

var a = new Promise(function(resolve, reject){
    debugger;
    // fs.readFile('./text.txt', function(error, data) {
        // if (error) reject(error);
        resolve(1234);
    // });
}).then(function(data){
    console.log(data.toString());
})

console.log(111);

setTimeout(function(){
    console.log(222);
}, 0)


process.nextTick(function(){
    console.log(333);
});


// var readFile = function(fileName) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(fileName, function(error, data) {
//             if (error) reject(error);
//             resolve(data);
//         });
//     });
// };

// co(function *() {
//     console.log(111);
//     var f1 = yield readFile('./text.txt');
//     console.info(f1.toString());
//     // a.then(function(){
//         // console.log(a);
//     // })
// })


// function a(gen) {
//     return new Promise(function(resolve, reject) {
//         console.log(1111);
//         resolve(111);
//     })
// }

// a().then(function(data){
//     console.log(data);
// })
