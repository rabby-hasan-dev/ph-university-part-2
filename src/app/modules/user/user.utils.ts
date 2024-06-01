

import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";


const findLastStudentId = async () => {
    const lastStudent = await User.findOne(
        { role: 'student' }, { id: 1, _id: 1 }
    ).sort({ createdAt: -1 }).lean();


    return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
}




// year semester code 4 digit number
export const generatedStudentId = async (payload: TAcademicSemester) => {


    // const currentId = (0).toString().padStart(4, '0');

    const currentId = (await findLastStudentId()) || (0).toString();
    let increamentId = (Number(currentId) + 1).toString().padStart(4, '0');
    increamentId = `${payload.year}${payload.code}${increamentId}`

    return increamentId;


}