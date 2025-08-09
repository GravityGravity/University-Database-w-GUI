export enum Role {
   Student,
   Instructor,
   Staff,
   Advisor,
 }
 
 // export interface UserProps {
 //   fName: string;
 //   lName: string;
 //   role: Role;
 //   createdAt: Date;
 // }
 
 export let globalRole = "User";
 
 const userMap = new Map([
   [100, { name: "Student Doe", pass: "123student", role: "student" }],
   [105, { name: "Instructor Doe", pass: "123instructor", role: "instructor" }],
   [110, { name: "Advisor Doe", pass: "123advisor", role: "advisor" }],
   [115, { name: "Staff Doe", pass: "123staff", role: "staff" }],
 ]);
 
 /**
  * 
  * @param userID 
  * @param pass  
  * @returns 0: if password does NOT match userID within userMap, 
  *          1: if password matches userID checked in UserMap
  * 
  */
 export function checkUser(userID?: number, pass?: string) {
   let person = userMap.get(userID);
 
   if (pass === person?.pass) {
       globalRole = person?.role;
     return 1;
   } else {
     return 0;
   }
 }



 export function changeRoleToUser () {
   globalRole = 'Student';
 }


 