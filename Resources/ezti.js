var Alloy = require("alloy");

exports.openWin = function(win) {
    var w = Alloy.createController(win).getView();
    w.open();
};

exports.closeWin = function(win) {
    win.close();
};

exports.alert = function(title, message) {
    Titanium.UI.createAlertDialog({
        title: title,
        message: message,
        buttonNames: [ "OK" ]
    }).show();
};

exports.showView = function(parent, view) {
    var v = Alloy.createController(view).getView();
    parent.add(v);
};

exports.hideMe = function(whoami) {
    whoami.visible = "false";
};

exports.openWinFromRow = function(row) {
    this.openWin(row.win);
};