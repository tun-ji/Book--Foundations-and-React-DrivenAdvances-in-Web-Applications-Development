import log, {appName, dummyFunction, weatherTag, genericFunction, genericObjFunction, genericDecFunction, multiplier, graphing, Person, CustomMath, User} from './tools'
//For illustration, call the imported log function
/*
logger("Welcome to Chapter 10! The application name is " + name +". There is a function that returns " + dummy()); 

log(`Welcome to Chapter 10! The application name is "${appName}". There is a function that returns "${dummyFunction}".`) - Used for Template Literals

log(weatherTag`The temperature is ${25} degress centigrade. The day is `)
log(genericDecFunction())


let person1 = new Person("oluwatomilola","Adeniran","Male",173)
let person2 = new Person("mary","Joseph","Female",undefined)

log(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`)

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!"); //send out a reject
        feedback
    }, 1000)
}).then((data) => {
    log(`${data}`);//This should output "Timeout is over" if resolve("Timeout is over") is invoked
}).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
    log(`Error message received: ${error}`);
}) 

let user1 = new User("myusername","mypassword","Oluwatomilola","Adeniran","Male",undefined)
log(`The username of ${user1.firstName} is ${user1.username}`) 

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!"); //send out a reject
        feedback
    }, 1000)
}).then((data) => {
    log(`${data}`);//This should output "Timeout is over"
}).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
    log(`Error message received: ${error}`);
}).then(() => {
    log(`This function is executed after success or failure is returned`)
}); 

let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
fetch(url)
    .then(response => response.json()) //convert data returned to json
    .then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data
    .catch(error => log(`Error: ${error}`)); 

let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
Promise.all([fetch1, fetch2, fetch3])//get the data for the three calls in an array.
    .then((data) => {
        log(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
    }) 


//Define the function that will return new Promise that wraps the asynchronous call to setTimeout()
const promiseAwareTimeout = (milliseconds = 1000) => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve
        }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
}
//define a function that uses our Promise executor
const usePromiseAwareTimeout = async (milliseconds) => {
    log('About to call timeout')
    try {
        log(await promiseAwareTimeout(milliseconds));
    } catch (error) {
        log(error);
    }
};
//call the async function.
usePromiseAwareTimeout(3000); 

let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserById = async (userId) => {
    let url = usersUrl + userId;
    try {
        const response = await fetch(url);
        const data = await response.json();
        /*
        The if statement below is to ensure that errors like URL not found (ie Error 404) is caught.
        fetch() unfortunately does not send a Promise.reject() in such a case.
        So here, we are throwing exception if HTTP response status is
        outside the OK range (the 2xx range are OK), so that it can be caught.
        
        if (response.status >= 200 && response.status < 300) {
            return data;
            //log(data.name); //do whatever you want with the data. You can even pass to other functions to do some work on it
        } else {
            throw Error(response.status);//make sure that the error is not ignored by the catch() statement below.
        }

    } catch (error) {
        //log(`Error: ${error}`);//do whatever you want to deal with error
        return error;
    }
}
Promise.all([getUserById(0), getUserById(2), getUserById(3)]) //getUserById() is deliberately passed Id of 0 in the first case to provoke Error: 404.
    .then((data) => {
        log(`User1 = ${data[0].name == 'Error' ? data[0] : data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
    }) 

function* waitList(list) {
    for (let person of list) {
        yield person; //create yield point for each item on the list
    }
    //return; terminates a generator at any point. It does not have to be used at all. It can be used between yield statements if the developer wants the rest of the yield to be ignored.
}

function* waitList(list) {
    for (let [index, value] of list.entries()) {
        yield `Hi ${value}. You are number ${index + 1} on the list`
    }
    //return; terminates a generator at any point. It does not have to be used at all. It can be used between yield statements if the developer wants the rest of the yield to be ignored.
} 

let myWaitList = waitList(['Peter', 'Mary', 'John']); //call waitList
//Prepare the output.
let output = `The first yielded value is: ${myWaitList.next().value} <br/>
    Here is what is returned in the next call: ${myWaitList.next().value} <br/>
    Hopefully we still have room for a next call. Here is the return: ${myWaitList.next().value} <br/>
    What if we call again when there is no more value to yield. Here is what we get: ${myWaitList.next().value}`
log(output);
*/

const addressees = ["John Uzo","Mary Smart","Paul Umoh"]; //array with elements.
addressees.map(addressee => {
    let message = `Dear ${addressee}, It is my pleasure to inform you that your admission letter is ready for collection`;
    log(message);
});