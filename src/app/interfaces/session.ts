import { SessionCourse } from "./session-course";
import { SessionProf } from "./session-prof";

export interface Session {
    name: String,
    dateStart: Date,
    dateEnd: Date,
    room: String,
    prof: SessionProf,
    notes: String,
    type: String,
    course: SessionCourse
}
