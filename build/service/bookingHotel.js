"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import readline from "readline";
const addHotel_1 = __importDefault(require("./addHotel"));
const displayHotel_1 = require("./displayHotel");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function loop() {
    while (true) {
        console.log("Welcome to Hotel Booking System");
        console.log("1. Yes");
        console.log("2. No");
        let choice = prompt("Do you want to book a hotel? ");
        if (choice === "1") {
            (0, displayHotel_1.displayHotel)();
            bookHotel();
        }
        else if (choice === "2") {
            console.log("Thank you for visiting");
            return;
        }
        else {
            console.log("Invalid choice");
        }
    }
}
function bookHotel() {
    const id = prompt("Enter hotel ID to book: ");
    let hotelId = parseInt(id);
    console.log(hotelId);
    console.log("Booking hotel with ID: " + hotelId);
    let hotel = addHotel_1.default.find((hotel) => hotel.getId() === hotelId);
    if (!hotel) {
        console.log("Hotel not found");
    }
    else if (hotel.getRooms() > 0) {
        hotel.setRooms(hotel.getRooms() - 1);
        console.log("Hotel booked successfully");
        console.log("Your hotel details:");
        console.log("ID\tName\tCity");
        console.log(hotel.getId() + "\t" + hotel.getName() + "\t" + hotel.getCity());
        console.log("Available rooms: " + hotel.getRooms());
    }
}
loop();
