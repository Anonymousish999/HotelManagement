"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(id, name, city, rooms) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.rooms = rooms;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCity() {
        return this.city;
    }
    getRooms() {
        return this.rooms;
    }
    setRooms(rooms) {
        this.rooms = rooms;
    }
}
exports.Hotel = Hotel;
