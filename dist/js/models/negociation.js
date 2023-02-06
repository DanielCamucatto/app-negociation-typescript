var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _amount, _value;
export class Negociation {
    constructor(data, amount, value) {
        _data.set(this, void 0);
        _amount.set(this, void 0);
        _value.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _amount, amount);
        __classPrivateFieldSet(this, _value, value);
    }
    get data() {
        return __classPrivateFieldGet(this, _data);
    }
    get amount() {
        return __classPrivateFieldGet(this, _amount) * __classPrivateFieldGet(this, _value);
    }
    get value() {
        return __classPrivateFieldGet(this, _value);
    }
}
_data = new WeakMap(), _amount = new WeakMap(), _value = new WeakMap();
