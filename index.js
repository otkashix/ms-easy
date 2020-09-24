module.exports = {
    seconds: function(num){
        if(!num) throw new TypeError('No number was specified.');
        return num * 1000;
    },
    minutes: function(num){
        if(!num) throw new TypeError('No number was specified.');
        return num * 60000;
    },
    hours: function(num){
        if(!num) throw new TypeError('No number was specified.');
        return num * 3600000;
    },
    days: function(num){
        if(!num) throw new TypeError('No number was specified.');
        return num * 86400000;
    },
    weeks: function(num){
        if(!num) throw new TypeError('No number was specified.');
        return num * 604800000;
    },
    months: function(num){
        if(!num) throw new TypeError('No number was specified.');
        return num * (2.6280E+9);
    },
    years: function(num){
        if(!num) throw new TypeError('No number was specified.');
        return num * (3.1536E+10);
    }
}