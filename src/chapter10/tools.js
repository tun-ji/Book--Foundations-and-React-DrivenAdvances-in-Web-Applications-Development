const log = output => {
    document.getElementById("output").innerHTML = output;
};

export const appName = "Chapter 10 Code Illustrations"

export var dummyFunction = () => {
    return "I am a dummy function"
}

export default log; 

export const weatherTag = (string, temperature) => {
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    let substring0 = string[0];
    let substring1 = string[1];
    let weatherCondition;
    //Let us use the embedded expressions for some logic
    if (temperature > 26) {
        weatherCondition = "hot day"
    } else {
        weatherCondition = "cool day"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
} 

//Array deconstruction illustration
export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang, ...otherLangugaes] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLangugaes}`
}

//Object deconstruction illustration 
export const genericObjFunction = () => {
    //declare an object literal
    let personalInformation = {
        firstName: 'Oluwatomilola',
        lastName: 'Adeniran',
        gender: 'Male',
        religion: 'Christianity (Baptist)',
        fathersName: 'Adetunji',
        mothersName: 'Modupe'
    }
    //deconstruct into new variables firstName, last name and otherPersonalInfo
    let { firstName, lastName, ...otherPersonalInfo } = personalInformation;

    return `The first name is ${firstName} and the last name is ${lastName}. Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
} 

//Nested object deconstruction illustration
export const genericDecFunction = () => {
    //declare an object literal with nested objects
    let biodata = {
        personalInformation: {
            firstName: 'Oluwatomilola',
            lastName: 'Adeniran',
            gender: 'Male',
            religion: 'Christianity (Baptist)',
            fathersName: 'Adetunji',
            mothersName: 'Modupe'
        },
        education: {
            highestQualificationObtained: 'BSc.',
            institution: 'Pan-Atlantic University'
        },
        occupation: 'Student',
        skills: ['Programming', 'Singing', 'Innovation', 'Talent management'],
        interestsAndHobbies: ['Musical Theatre', 'Fighting', 'Tech Innovation News']
    };

    //deconstruct firstName, lastName from the nested personalInformation object as well as occupation.
    let { personalInformation: { firstName, lastName }, occupation } = biodata;//makes firstName, lastName and occupation directly available as variables within our function.
    //deconstruct personalInformation and then the rest using the spread operator
    let { personalInformation, ...otherBiodata } = biodata;//makes personalInformation object directly available as a variable. The rest (using Spread operator) are made available as part of an object named
    otherBiodata
    //output data using a multiline string literal. We have embedded <br/> so that the browser will break the lines as well for us
    return `First name is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. A lot more data are available. For example: <br/><br/>
 Gender: ${personalInformation.gender}<br/>
 Religion: ${personalInformation.religion}<br/>
 Skills: ${otherBiodata.skills}<br/>
 Interests and Hobbies: ${otherBiodata.interestsAndHobbies}<br/>
 Education: Highest qualification obtained is ${biodata.education.highestQualificationObtained} from ${biodata.education.institution}<br/>`;
} 

export const multiplier = (...numbers) => {
    var product = 1;
    if (numbers.length < 2) {
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (let number of numbers) {
        product = product * number;
    }
    return product;
} 

export const graphing = (m, c, ...x) => {
    //This function returns an array of {x,y} objects for all the x arguments passed.
    //Map the array of x into an array of {x,y} object, with the y value calculated each time.
    let coordinates = x.map((x) => {
        return { 'x': x, 'y': (m * x) + c };
    })
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates) {
        let xy = `(${coordinate.x},${coordinate.y})`
        output += xy;
    }
    return output
}

//Create a function that will capitalize the first letter of a string.
const toTitleCase = (str) => {
    str.toLowerCase();//first set the whole string to lowercase in case
    return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase
} 

export class Person {
    constructor(firstName, lastName, gender, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
    }

    getFirstName() {
        return toTitleCase(this.firstName)
    }
};

export class User extends Person {
    constructor(username, password, firstName, lastName, gender, height) {
        super(firstName, lastName, gender, height);
        this.username = username;
        this.password = password;
    }
} 
   

//static methods
export class CustomMath{
    static sqrt(a){
        return Math.sqrt(a);
    }
    static pow(a,b){
        return Math.pow(a,b);
    }
} 

