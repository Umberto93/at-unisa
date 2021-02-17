export interface Exam {
    id: number,
    name: String,
    credits: number,
    attendanceYear: number,
    courseYear: number,
    grade: number | null,
    maxGrade: boolean,
    passedDate: Date,
    passed: boolean,
    isExam: boolean
};
