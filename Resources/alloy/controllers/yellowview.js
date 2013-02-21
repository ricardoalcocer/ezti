function Controller() {
    function hideme(e) {
        e.cancelBubble = !0;
        ezti.hideMe($.yellowview);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.yellowview = Ti.UI.createView({
        backgroundColor: "yellow",
        id: "yellowview",
        height: "40dp",
        width: "90%"
    });
    $.addTopLevelView($.__views.yellowview);
    hideme ? $.__views.yellowview.addEventListener("click", hideme) : __defers["$.__views.yellowview!click!hideme"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ezti = require("ezti");
    __defers["$.__views.yellowview!click!hideme"] && $.__views.yellowview.addEventListener("click", hideme);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;