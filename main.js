var mongoose = require('mongoose');
exports.fromStringArray = function (proxies) {
    var models = [];
    for (var i = 0; i < proxies.length; i++) {
        var proxy = proxies[i];
        models.push({
            address: proxy
        });
    }
    return models;
};

exports.entities =  {
    Proxy: mongoose.model('Proxy', {
        ipv4: String,
        ipv6: String,
        port: Number,
        type: {
            type: Number,
            enum: [
                1, // HTTPProxy
                2, // HTTPSProxy
                3, // SOCKS4Proxy
                4  // SOCKS5Proxy
            ]
        }
    })  
};
