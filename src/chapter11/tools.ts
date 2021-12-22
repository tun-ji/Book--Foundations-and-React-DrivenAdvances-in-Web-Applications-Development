const log = (output: any) => {
    document.getElementById("output")!.innerHTML = output;
}
export default log;

export interface PersonData {
    firstName: string,
    lastName: string,
    gender: number,
    height?: any, //question mark here means optional
    hobbies: string[],
    birthday?: any, //question mark here means optional
    isAlive: boolean
}

export class Person {
    private _firstName: string;
    public get firstName(): string {
        return `${this.toTitleCase(this._firstName)}`;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    private _lastName: string;
    public get lastName(): string {
        return `${this.toTitleCase(this._lastName)}`;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    private _gender: number;
    public get gender(): number {
        return this._gender;
    }
    public set gender(value: number) {
        this._gender = value;
    }
    private _height: number;
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    private _hobbies: string[];
    public get hobbies(): string[] {
        return this._hobbies;
    }
    public set hobbies(value: string[]) {
        this._hobbies = value;
    }
    private _birthday: Date;
    public get birthday(): Date {
        return this._birthday;
    }
    public set birthday(value: Date) {
        this._birthday = value;
    }
    private _isAlive: boolean;
    public get isAlive(): boolean {
        return this._isAlive;
    }
    public set isAlive(value: boolean) {
        this._isAlive = value;
    }
    constructor(personData: PersonData) {
        this._firstName = personData.firstName;
        this._lastName = personData.lastName;
        this._gender = personData.gender;
        this._height = personData.height;
        this._hobbies = personData.hobbies;
        this._birthday = personData.birthday;
        this._isAlive = personData.isAlive;
    }
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    protected toTitleCase = (str: string): string => {
        str.toLowerCase();//first set the whole string to lowercase in case
        return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase
    }
}; 