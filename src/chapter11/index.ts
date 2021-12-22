// import log, {Person} from './tools';
import log from './tools';
import Student from './student';
import { PersonData, StudentData, Gender, ModeOfEntry } from './type-definition'

//Student registration
//prepare personal data
let student1PersonalData: PersonData = {
    firstName: "Mary",
    lastName: "Ota",
    gender: Gender.female,
    hobbies: ['Work', 'Pray', 'Play'],
    isAlive: true
}
//prepare student data
let student1StudentData: StudentData = {
    department: "information science and media studies",
    matriculationNumber: "234234",
    modeOfEntry: ModeOfEntry.UTME,
    programOfStudy: "Information Science and Media Studies",
    yearOfEntry: new Date()
}
//instantiate the new student
let student1 = new Student(student1StudentData, student1PersonalData)
//access the new student’s data
log(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber} <br/>
   belongs to the department ${student1.department}. The height is ${student1.height}`);

//add height to student1
student1.height = 1.7;
log(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber} <br/>
belongs to the department of ${student1.department}. The height is ${student1.height}`);

// let person1Data: PersonData = {
//     firstName: "Pius",
//     lastName: "Onobhayedo",
//     gender: Gender.male,
//     height: "1.5",
//     hobbies: [],
//     birthday: new Date(1900, 10, 10),
//     isAlive: true
// }
// let person2Data: PersonData = {
//     firstName: "Mary",
//     lastName: "Joseph",
//     gender: Gender.female,
//     hobbies: ['Work', 'Pray', 'Play'],
//     isAlive: true
// }
// let person1 = new Person(person1Data);
// let person2 = new Person(person2Data);
// log(`Person 1 is ${person1.height} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);
// log(`Person 1 is ${person1.firstName} whose height is ${person1.height}
//    and birthday is ${person1.birthday.toLocaleDateString()} and hobbies are ${person1.hobbies.length == 0 ? 'not yet set' : person1.hobbies}. <br/>
//    Person 2 is ${person2.firstName} whose height is ${person2.height} and hobbies are ${person2.hobbies.length == 0 ? 'not yet set' : person2.hobbies}`); 