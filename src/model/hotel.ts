
export class Hotel{
    private id: number;
    private name: string;
    private city: string;
    private rooms: number;

    constructor(id: number, name: string, city: string, rooms: number){
        this.id = id;
        this.name = name;
        this.city = city;
        this.rooms = rooms;
    }

    public getId(): number{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getCity(): string{
        return this.city;
    }

    public getRooms(): number{
        return this.rooms;
    }

    public setRooms(rooms: number){
        this.rooms = rooms;
    }

}