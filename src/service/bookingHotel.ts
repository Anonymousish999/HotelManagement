import readline from 'readline';
import hotels from './addHotel';
import { displayHotel } from './displayHotel';

displayHotel();

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Enter hotel ID to book: ', (id) => {
    let hotelId = parseInt(id);console.log(hotelId);
    console.log('Booking hotel with ID: ' + hotelId);
    let hotel = hotels.find(hotel => hotel.getId() === (hotelId));
    if(!hotel){
        console.log('Hotel not found');
        read.close();
    }else if(hotel.getRooms() > 0){
        hotel.setRooms(hotel.getRooms() - 1);
        console.log('Hotel booked successfully');
        console.log('Your hotel details:');
        console.log('ID\tName\tCity');
        console.log(hotel.getId() + '\t' + hotel.getName() + '\t' + hotel.getCity());
        console.log('Available rooms: ' + hotel.getRooms());
    }

    read.close();
});