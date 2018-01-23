var fs = require('fs')
var request = require('request');
var pwd = function (str, done) {
    done(process.env.PWD);
}
var dt = Date();
var date = function (str, done) {
    done(dt);
};
var ls = function (str, done) {
    var final = ''
    fs.readdir('.', function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            final += file.toString() + "\n";
        })
        done(final)

    })
};

var echo = function (str, done) {
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    done(strFinal.join(' ').toString());
};

var cat = function (str,done) {
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    var archivo = strFinal.join(' ').toString()
    var archivos = archivo.split(' ')
    archivos.forEach(function (file) {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;

            done(data);
        });
    })
};

var head = function (str,done) {
    var final = ''
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    var archivo = strFinal.join(' ').toString()
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw err;
        var firstLine = data.split('\n');
        for (var i = 0; i < 5; i++) {
            final += firstLine[i] + '\n'
        }
        done(final)
    });
}

var tail = function (str,done) {
    var final = ''
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    var archivo = strFinal.join(' ').toString()
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw err;
        var firstLine = data.split('\n');
        for (var i = firstLine.length - 5; i < firstLine.length; i++) {
            final += firstLine[i] + '\n'
        }
        done(final)
    });
}

var sort = function (str, done) {
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    var archivo = strFinal.join(' ').toString()
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw err;
        var firstLine = data.split('\n');
        var aux = bubbleSort(firstLine)
        aux = aux.join('\n');
        done(aux);
    });
}

function bubbleSort(array) {
    do {
        var bandera = false
        var contador = 0
        for (var i = 0; i < array.length - contador; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i)
                bandera = true
                contador++
            }
        }
    }
    while (bandera)
    return array
}

var swap = function (array, i) {
    var temp = array[i + 1]
    array[i + 1] = array[i]
    array[i] = temp
}

var wc = function (str,done) {
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    var archivo = strFinal.join(' ').toString()
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw err;
        var firstLine = data.split('\n');
        done(firstLine.length.toString())
    });
}

var uniq = function (str,done) {
    var arry = []
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    var archivo = strFinal.join(' ').toString()
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw err;
        var firstLine = data.split('\n');
        for (var i = 0; i < firstLine.length; i++) {
            if (firstLine[i] !== firstLine[i + 1]) {
                arry.push(firstLine[i]);
            }
        }
        arry = arry.join('\n');
        done(arry);
    });
}

var curl = function (str, done) {
    var arry = []
    var arr = str.split(' ');
    var strFinal = arr.slice(1)
    var archivo = 'http://www.' + strFinal.join(' ').toString()
    request(archivo, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        process.stdout.write('\nprompt > ');
    });
}



module.exports = {
    pwd: pwd,
    date: date,
    ls: ls,
    echo: echo,
    cat: cat,
    head: head,
    tail: tail,
    wc: wc,
    sort: sort,
    uniq: uniq,
    curl: curl
}