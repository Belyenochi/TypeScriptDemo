interface ICustomConsole {
    log(arg : string) : void;
}

declare var customConsole : ICustomConsole;
// customConsole.log("A log entry!");

var isValid : boolean = true;

if (isValid) {
    console.log("is valid!");
}

enum AlertLevel{
    info,
    warning,
    error
}

function getAlertSubscribers(level: AlertLevel) {
    var emails = new Array<String>();

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

var i : number = 0;
while (i < 5) {
    i += 1;
    console.log(i);
}

var greet: (name: string) => string = function(name: string):string {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
}

function sume(a: number, b: number, callback: (result: number) => void) {
    callback(a + b);
}

class Character {
    fullname: string;
    constructor(firstname: string, lastname: string) {
        this.fullname = firstname + " " + lastname;
    }
    greet(name?: string) {
        if (name) {
            return "Hi! " + name + "! my name is " + this.fullname;
        } else {
            return "Hi! my name is " + this.fullname;
        }
    }
}

var spark = new Character("Jacob", "Keyes");
var msg = spark.greet();
console.log(msg);
var msg1 = spark.greet("Dr. Halsey");
console.log(msg1);

interface LoggerInterface {
    log(arg: any): void;
}
class Logger implements LoggerInterface {
    log(arg) {
        if (typeof console.log === "function") {
            console.log("function: " + arg);
        } else {
            console.log(arg);
        }
    }
}

interface UserInterface {
    name : string;
    password: string;
}
var user : UserInterface = {
    name: "",
    password: ""
}

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
module Geometry {
    export interface Vector2dInterface {
        toArray(callback: (x: number[]) => void): void;
        length(): number;
        normalize();
    }
    export class Vector2d implements Vector2dInterface {
        private _x: number;
        private _y: number;
        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }
        toArray(callback: (x: number[]) => void): void {
            callback([this._x, this._y]);
        }
        length(): number {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        }
        normalize() {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        }
    }
}

var vector : Geometry.Vector2dInterface = new Geometry.Vector2d(2, 3);
vector.normalize();
vector.toArray(function(vectorAsArray: number[]) {
    console.log(" x :" + vectorAsArray[0] + ' y : ' + vectorAsArray[1]);
});