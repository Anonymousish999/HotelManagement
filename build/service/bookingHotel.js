"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const addHotel_1 = __importDefault(require("./addHotel"));
const displayHotel_1 = require("./displayHotel");
(0, displayHotel_1.displayHotel)();
let read = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
read.question('Enter hotel ID to book: ', (id) => {
    let hotelId = parseInt(id);
    console.log(hotelId);
    console.log('Booking hotel with ID: ' + hotelId);
    let hotel = addHotel_1.default.find(hotel => hotel.getId() === (hotelId));
    if (!hotel) {
        console.log('Hotel not found');
        read.close();
    }
    else if (hotel.getRooms() > 0) {
        hotel.setRooms(hotel.getRooms() - 1);
        console.log('Hotel booked successfully');
        console.log('Your hotel details:');
        console.log('ID\tName\tCity');
        console.log(hotel.getId() + '\t' + hotel.getName() + '\t' + hotel.getCity());
        console.log('Available rooms: ' + hotel.getRooms());
    }
    read.close();
});
