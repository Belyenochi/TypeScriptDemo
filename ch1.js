// customConsole.log("A log entry!");
var isValid = true;
if (isValid) {
    console.log("is valid!");
}
var AlertLevel;
(function (AlertLevel) {
    AlertLevel[AlertLevel["info"] = 0] = "info";
    AlertLevel[AlertLevel["warning"] = 1] = "warning";
    AlertLevel[AlertLevel["error"] = 2] = "error";
})(AlertLevel || (AlertLevel = {}));
function getAlertSubscribers(level) {
    var emails = new Array();
    switch (level) {
        case AlertLevel.info:
            emails.push("754572491@qq.com");
            break;
        case AlertLevel.warning:
            emails.push("development@domain.com");
            emails.push("sysadmin@domain.com");
            break;
        case AlertLevel.error:
            emails.push("development@domain.com");
            emails.push("sysadmin@domain.com");
            break;
        default:
            throw new Error("Invalid argument");
    }
    return emails;
}
var i = 0;
while (i < 5) {
    i += 1;
    console.log(i);
}
var greet = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
};
function sume(a, b, callback) {
    callback(a + b);
}
var Character = /** @class */ (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            return "Hi! " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi! my name is " + this.fullname;
        }
    };
    return Character;
}());
var spark = new Character("Jacob", "Keyes");
var msg = spark.greet();
console.log(msg);
var msg1 = spark.greet("Dr. Halsey");
console.log(msg1);
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (arg) {
        if (typeof console.log === "function") {
            console.log("function: " + arg);
        }
        else {
            console.log(arg);
        }
    };
    return Logger;
}());
var user = {
    name: "",
    password: ""
};
// namespace Geometry {
//     interface VectorInterface {
//         /* ... */
//     }
//     export interface Vector2dInterface {
//         /* ... */
//     }
//     export interface Vector3dInterface {
//         /* ... */
//     }
//     export class Vector2d implements VectorInterface, Vector2dInterface {
//         /* ... */
//     }
//     export class Vector3d implements VectorInterface, Vector3dInterface {
//         /* ... */
//     }
// }
// var vector2dInterface: Geometry.Vector2dInterface = new Geometry.Vector2d();
// var vector3dInterface: Geometry.Vector3dInterface = new Geometry.Vector3d();
// 结合TS的模块、类、函数和类型注解
var Geometry;
(function (Geometry) {
    var Vector2d = /** @class */ (function () {
        function Vector2d(x, y) {
            this._x = x;
            this._y = y;
        }
        Vector2d.prototype.toArray = function (callback) {
            callback([this._x, this._y]);
        };
        Vector2d.prototype.length = function () {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        };
        Vector2d.prototype.normalize = function () {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        };
        return Vector2d;
    }());
    Geometry.Vector2d = Vector2d;
})(Geometry || (Geometry = {}));
var vector = new Geometry.Vector2d(2, 3);
vector.normalize();
vector.toArray(function (vectorAsArray) {
    console.log(" x :" + vectorAsArray[0] + ' y : ' + vectorAsArray[1]);
});
