function Controller() {
    function closeme() {
        ezti.alert("My Title", "This is the message");
        ezti.closeWin($.screen2);
    }
    function showyellowview() {
        ezti.showView($.screen2, "yellowview");
    }
    function hideyellowview() {
        ezti.hideView($.screen2, "yellowview");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.screen2 = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "screen2"
    });
    $.addTopLevelView($.__views.screen2);
    showyellowview ? $.__views.screen2.addEventListener("click", showyellowview) : __defers["$.__views.screen2!click!showyellowview"] = !0;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Win2",
        id: "__alloyId1"
    });
    $.__views.screen2.add($.__views.__alloyId1);
    closeme ? $.__views.__alloyId1.addEventListener("click", closeme) : __defers["$.__views.__alloyId1!click!closeme"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ezti = require("ezti");
    __defers["$.__views.screen2!click!showyellowview"] && $.__views.screen2.addEventListener("click", showyellowview);
    __defers["$.__views.__alloyId1!click!closeme"] && $.__views.__alloyId1.addEventListener("click", closeme);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;