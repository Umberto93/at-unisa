import { RoomEvent } from "./room-event";

export interface Room {
    name: String,
    code: String,
    timeSlots: {
        from: Date,
        to: Date
    }[],
    events: RoomEvent[]
}
