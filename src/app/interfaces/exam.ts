export interface Exam {
    name: string;
    credits: number;
    attendanceYear: number;
    courseYear: number;
    grade: number | null;
    maxGrade: boolean;
    passedDate: Date;
    passed: boolean;
}
