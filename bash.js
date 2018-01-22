var command = require('./commands.js')
var fs = require('fs')
// Output a prompt
process.stdout.write('prompt > ');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

    var str = data.toString().trim();
    var cmd = str.split(' ');
    command[cmd[0]](str);
});
