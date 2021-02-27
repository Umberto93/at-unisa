import { Lesson } from "./lesson";

export interface Schedule {
    [id: number]: Lesson[]
}
