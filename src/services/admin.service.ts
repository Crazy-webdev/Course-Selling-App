import { AdminSigninInput, AdminSignupInput, CourseInput } from "../interfaces/admin.interface";


export class AdminService {
    async signup(data: AdminSignupInput){
        console.log(`hello inside signup`,data);
        return {};
    };

    async signin(data: AdminSigninInput){
        console.log(`hello inside signin`,data);
        return {};
    };

    async createCourse(data: CourseInput){
        console.log(`hello inside createcourse`,data);
        return {};
    };
}

export const adminService = new AdminService();