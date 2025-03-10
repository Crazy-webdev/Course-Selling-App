export interface AdminSignupInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface AdminSigninInput {
  email: string;
  password: string;
}
export interface CourseInput {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}
