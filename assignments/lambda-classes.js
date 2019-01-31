// CODE here for your Lambda Classes


class Person {
    constructor (basics) {
    this.name = basics.name;
    this.age = basics.age
    this.location = basics.location;
    this.gender = basics.gender;
}
    speak(){
        return `Hello my name is ${this.name}, I am located in ${this.location}`
    }
}

class Instructor extends Person {
    constructor (about) {
        super(about)
        this.specialty = about.specialty;
        this.favLanguage = about.favLanguage;
        this.catchPhrase = about.catchPhrase;
    }
    demo(subject) {

        return console.log(`Today we will learn about ${subject}`);
    }
    grade(subject){
        return  `${this.name} did well on ${subject}`
    }
}

class Student extends Person {
    constructor(student){
        super(student);
        this.previoudBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    // listSubjects (){ 
    //     Student.forEach(function(answers) {
    //         listSubjects.push(answers)
    //     }) 
    // }
    PRAssignment(subject) {
        return `${this.name} has submitted a project for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint on ${subject}`
    }
}



class ProjectManager extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favIncstructor = pm.favInstructor;
    }
    lecture (channel) {
        return `${this.name} announces to ${channel}, lecture will be in one hour!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}




const phil = new Instructor({
    name: 'phil',
    location: 'Cali',
    age: '22',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the brackets`
  });

  const erica = new Instructor({
      name: 'erica',
      age: '25',
      location: 'Nevada',
      gender: 'Female',
      Specialty: 'preprocessors',
      favLanguage: 'less',
      catchPhrase: 'Lets get this started'
  });

  const lisa = new Student({
      name: 'lisa',
      age: 27,
      location: 'NYC',
      gender: 'female',
      specialty: 'CSS',
      favSubjects: ['HTML', 'CSS'],
      catchPhrase: 'I need help',
      previousBackground: 'barteder',
      className: 'web17',
  })

  const kris = new Student({
      name: 'kris',
      age: '21',
      location: 'Maine',
      gender: 'Male',
      specialty: 'HTML',
      favSubject: ['HTML', 'JS'],
      previousBackground: 'fisher',
      className: 'web16',
  })

  const Niya = new ProjectManager({
    name: 'Niya',
    age: '21',
    location: 'Washington',
    gender: 'female',
    Specialty: 'redux',
    favLanguage: 'C++',
    catchPhrase: 'Let me help',
    gradClassName: 'web15',
    favInstructor: 'bigKnell',
  })

  const kory = new ProjectManager({
    name: 'kory',
    age: '29',
    location: 'Arizona',
    gender: 'Male',
    Specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: 'Time to bake',
    gradClassName: 'Android dev 6',
    favInstructor: 'Kortny',
  })



  console.log(phil.grade('JS'))

  console.log(lisa.PRAssignment('CSS'))

  console.log(kory.sprintChallenge('JavaScript'))

  console.log(kory.standUp("Andriod Dev"))

  console.log(Niya.debugsCode(lisa, "React"))