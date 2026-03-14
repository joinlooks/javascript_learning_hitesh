import { log } from "../utility.mjs";

const course = {
    courseName: "JS in Hindi",
    coursePrice: 999,
    courseInstructor: "Hitesh",
};

const { courseCity = "Pune" } = course;
log(courseCity);

const arr = [1, 2, 3];
const { first } = arr;
log(first);
