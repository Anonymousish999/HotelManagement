import hotels from "./addHotel";
import { displayHotel } from "./displayHotel";
import promptSync from "prompt-sync";
import logger from "../logger/logger";
const prompt = promptSync();


function loop() {
  while (true) {
    console.log("Welcome to Hotel Booking System");
    console.log("1. Yes");
    console.log("2. No");
    let choice = prompt("Do you want to book a hotel? ");
    if (choice === "1") {
      displayHotel();
      bookHotel();
      logger.info("Hotel booked successfully");
    } else if (choice === "2") {
      console.log("Thank you for visiting");
      logger.error("User exited");
      return;
    } else {
      console.log("Invalid choice");
    }
    
  }
}

function bookHotel() {

    const id = prompt("Enter hotel ID to book: ");
    let hotelId = parseInt(id);
    console.log(hotelId);
    console.log("Booking hotel with ID: " + hotelId);
    let hotel = hotels.find((hotel) => hotel.getId() === hotelId);
    if (!hotel) {
      console.log("Hotel not found");
    } else if (hotel.getRooms() > 0) {
      hotel.setRooms(hotel.getRooms() - 1);
      console.log("Hotel booked successfully");
      console.log("Your hotel details:");
      console.log("ID\tName\tCity");
      console.log(
        hotel.getId() + "\t" + hotel.getName() + "\t" + hotel.getCity()
      );
      console.log("Available rooms: " + hotel.getRooms());
    }
}
loop();
