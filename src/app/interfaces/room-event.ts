export interface RoomEvent {
    name: String,
    type: String,
    profs: {
        firstname: String,
        lastname: String,
        mail: String
    }[],
    from: Date,
    to: Date
}
