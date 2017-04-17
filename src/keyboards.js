

//requires
var constants = require("./constants.js");
var logger = require("./logger.js");

//export
var exports = module.exports = {};

exports.get =  function(keyboard_type, data){
    logger.log("get: "+keyboard_type);
    switch(keyboard_type){
        case "golfcourse":
            return keyboard_golf(data);
        case "ichibaitem":
            return keyboard_ichiba(data);
        default:
            break;
    }

}


function keyboard_ichiba(data){
    
    var ichibaitem = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><p style=\"color: #ffffff; background-color: #ff0000\">"+data[0].price+"</p>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "bottom",
        "ActionType": "open-url",
        "ActionBody": data[0].item_url,
        "BgColor": "#f7bb3f",
        "Image": data[0].picture[0]
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[1].price+" ¥</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "bottom",
        "ActionType": "open-url",
        "ActionBody": data[1].item_url,
        "BgColor": "#7eceea",
        "Image": data[1].picture[0]
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[2].price+" ¥</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "bottom",
        "ActionType": "open-url",
        "ActionBody": data[2].item_url,
        "BgColor": "#f6f7f9",
        "Image": data[2].picture[0]
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[3].price+" ¥</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "bottom",
        "ActionType": "open-url",
        "ActionBody": data[3].item_url,
        "BgColor": "#dd8157",
        "Image": data[3].picture[0]
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[4].price+" ¥</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "bottom",
        "ActionType": "open-url",
        "ActionBody": data[4].item_url,
        "BgColor": "#f6f7f9",
        "Image": data[4].picture[0]
    }]
    };

    return ichibaitem;
}


function keyboard_golf(data){

    var golfcourse = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[0].name+"</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "open-url",
        "ActionBody": data[0].book_url,
        "BgColor": "#f7bb3f",
        "Image": data[0].picture
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[1].name+"</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "open-url",
        "ActionBody": data[1].book_url,
        "BgColor": "#7eceea",
        "Image": data[1].picture
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[2].name+"</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "open-url",
        "ActionBody": data[2].book_url,
        "BgColor": "#f6f7f9",
        "Image": data[2].picture
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[3].name+"</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "open-url",
        "ActionBody": data[3].book_url,
        "BgColor": "#dd8157",
        "Image": data[3].picture
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>"+data[4].name+"</b></font>",
        "TextSize": "small",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "open-url",
        "ActionBody": data[4].book_url,
        "BgColor": "#f6f7f9",
        "Image": data[4].picture
    }]
    };

    return golfcourse;
}

var keyboard = {    
        "Type": "keyboard",
        "DefaultHeight": true,
        "BgColor": "#FFFFFF",
        "Buttons": [{
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "BgMediaType": "gif",
            "BgMedia": "http://www.url.by/test.gif",
            "BgLoop": true,
            "ActionType": "open-url",
            "ActionBody": "www.tut.by",
            "Image": "www.tut.by/img.jpg",
            "Text": "Key text",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        }]
};



var keyboard_help = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Late for work</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "late",
        "BgColor": "#f7bb3f",
        "Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Arrival time</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "arrived",
        "BgColor": "#7eceea",
        "Image": "https://s18.postimg.org/ntpef5syd/french.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>AM/PM/Day off</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "off",
        "BgColor": "#f6f7f9",
        "Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Overtime</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "overtime",
        "BgColor": "#dd8157",
        "Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
    }]
};

var keyboard_reason = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Train delay</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "train delay",
        "BgColor": "#f7bb3f",
        "Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Bus delay</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "bus delay",
        "BgColor": "#7eceea",
        "Image": "https://s18.postimg.org/ntpef5syd/french.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Private/Other</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "private reason",
        "BgColor": "#f6f7f9",
        "Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
    }]
};

var keyboard_off = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>AM Off</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "am_off",
        "BgColor": "#f7bb3f",
        "Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>PM Off</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "pm_off",
        "BgColor": "#7eceea",
        "Image": "https://s18.postimg.org/ntpef5syd/french.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Day Off</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "day_off",
        "BgColor": "#f6f7f9",
        "Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
    }]
};