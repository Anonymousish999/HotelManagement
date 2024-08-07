"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayHotel = displayHotel;
const hotels = require("./addHotel");
function displayHotel() {
    console.log('List of hotels:');
    console.log('ID\tName\tCity');
    for (let i = 0; i < hotels.length; i++) {
        console.log(hotels[i].getId() + '\t' + hotels[i].getName() + '\t' + hotels[i].getCity());
    }
}
