interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [index: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`
}
class StudentClass {
  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}
