/*
 * easy-guid
 * https://github.com/easy-node/easy-guid
 *
 * Copyright (c) 2014 Huei Tan
 * Licensed under the MIT license.
 */

'use strict';

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

function guid32() {
    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}

function guid16() {
    return (S4()+S4()+S4()+S4());
}

exports.new = function (type) {

    var value;

    switch (type) {
        case 16:
            value = guid16();
            break;
        case 32:
            value = guid32();
            break;
        default:
            value = guid32();
    }

    return value;
};

