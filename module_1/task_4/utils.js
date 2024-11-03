"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
function* generateId() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}
