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
    },
    ms: function(num){
        if(!num) throw new TypeError('No number was specified.');
        let years = 0;
        let months = 0;
        let weeks = 0;
        let days = 0;
        let hours = 0;
        let mins = 0;
        let secs = 0;
        let remaining = 0;
        let cont = true;
        let message = "";

        remaining = num;

        while(cont){
            if(remaining > 3.1536E+10){
                years++;
                remaining -= 3.1536E+10;
            }else if (remaining > 2.6280E+9){
                months++;
                remaining -= 2.6280E+9;
            }else if(remaining > 604800000){
                weeks++;
                remaining -= 604800000;
            }else if(remaining > 86400000){
                days++;
                remaining -= 86400000;
            }else if(remaining > 3600000){
                hours++;
                remaining -= 3600000;
            }else if(remaining > 60000){
                mins++;
                remaining -= 60000;
            }else if(remaining > 1000){
                secs++;
                remaining -= 1000;
            }else{
                cont = false;
            }
        }

        if(years > 0){
            message += `${years} yy `;
        }
        if(months > 0){
            message += `${months} mm `;
        }
        if(weeks > 0){
            message += `${weeks} ww `;
        }
        if(days > 0){
            message += `${days} dd `;
        }
        if(hours > 0){
            message += `${hours} h `;
        }
        if(mins > 0){
            message += `${mins} m `;
        }
        if(secs > 0){
            message += `${secs} s `;
        }
        return message;
    },
    date: function(num){
        if(!num) throw new TypeError('No number was specified.');
        let years = 1970;
        let months = 1;
        let weeks = 0;
        let days = 1;
        let hours = 0;
        let mins = 0;
        let secs = 0;
        let remaining = 0;
        let cont = true;
        let message = "";

        remaining = num;

        while(cont){
            if(remaining > 3.1536E+10){
                years++;
                remaining -= 3.1536E+10;
            }else if (remaining > 2.6280E+9){
                months++;
                remaining -= 2.6280E+9;
            }else if(remaining > 604800000){
                weeks++;
                remaining -= 604800000;
            }else if(remaining > 86400000){
                days++;
                remaining -= 86400000;
            }else if(remaining > 3600000){
                hours++;
                remaining -= 3600000;
            }else if(remaining > 60000){
                mins++;
                remaining -= 60000;
            }else if(remaining > 1000){
                secs++;
                remaining -= 1000;
            }else{
                cont = false;
            }
        }

        message = `${(days + weeks * 7)-12}/${months}/${years}, ${hours - 10}:${mins}`;
        return message;
    }
}