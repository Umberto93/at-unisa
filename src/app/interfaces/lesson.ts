import { SessionProf } from "./session-prof";

export interface Lesson {
    name: string;
    teachingCode: string,
    day: number;
    timeStart: string;
    timeEnd: string;
    room: string;
    profs: SessionProf[];
    courses: string[];
}
