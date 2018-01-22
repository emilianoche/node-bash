var fs = require('fs')
var pwd = function () {
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nprompt > ');
}
var dt = Date();
var date = function () {
    process.stdout.write(dt);
    process.stdout.write('\nprompt > ');
};
var ls = function () {
    fs.readdir('.', function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write('\nprompt > ');
    })
};

var echo = function (str) {
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    process.stdout.write(strFinal.join(' ').toString());
    process.stdout.write('\nprompt > ');
};

var cat = function (str) {
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    var archivo  = strFinal.join(' ').toString()
    var archivos = archivo.split(' ')    
    archivos.forEach(function(file){
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;
            
            console.log(data);
            process.stdout.write('\nprompt > ');        
          });
    })
    
      
};



module.exports = {
    pwd: pwd,
    date: date,
    ls: ls,
    echo: echo,
    cat:cat
}