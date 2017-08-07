var pm2 = require('pm2');

pm2.connect(function (err) {
    if (err) {
        console.error(err);
        process.exit(2);
    }

    pm2.start({
        script: './bin/www',         // Script to be run
        watch : ["routes"]
    }, function (err, apps) {
        console.log('pm2 started');
        pm2.streamLogs('all', 0);
    });
});
