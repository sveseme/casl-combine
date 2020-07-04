"use strict";
exports.__esModule = true;
exports.Fields = exports.Subjects = exports.Actions = void 0;
var ability_1 = require("@casl/ability");
var Actions;
(function (Actions) {
    Actions["READ"] = "read";
    Actions["CREATE"] = "create";
    Actions["DELETE"] = "delete";
    Actions["UPDATE"] = "update";
})(Actions || (Actions = {}));
exports.Actions = Actions;
var Subjects;
(function (Subjects) {
    Subjects["SETTINGS"] = "Settings";
})(Subjects || (Subjects = {}));
exports.Subjects = Subjects;
var Fields;
(function (Fields) {
    Fields["ALL"] = "all";
})(Fields || (Fields = {}));
exports.Fields = Fields;
function a1() {
    var _a = new ability_1.AbilityBuilder(), can = _a.can, rules = _a.rules;
    can(Actions.CREATE, Subjects.SETTINGS);
    return new ability_1.Ability(rules);
}
function a2() {
    var _a = new ability_1.AbilityBuilder(), can = _a.can, rules = _a.rules;
    can(Actions.UPDATE, Subjects.SETTINGS, { ownerId: 23 });
    return new ability_1.Ability(rules);
}
function combined() {
    var ab1 = a1();
    var ab2 = a2();
    // How to combine ab1 and a2b?
    return ( !== null &&  !== void 0 ?  : ) ?
        :
    ;
}
