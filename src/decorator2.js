var Boat = /** @class */ (function () {
    function Boat() {
        this.color = 'blue';
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    Boat.prototype.captain = function () {
        console.log('swish');
    };
    return Boat;
}());
function testDecorator(target, key) {
    console.log('Target:', target);
    console.log('Key:', key);
}
testDecorator(Boat.prototype, 'captain');
