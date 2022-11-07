var users = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];
function logPerson(user) {
  console.log(" - ".concat(user.name, ", ").concat(user.age));
}
console.log("Users:");
users.forEach(logPerson);
var persons /* <- Person[] */ = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];
function logPerson(user) {
  console.log(" - ".concat(user.name, ", ").concat(user.age));
}
persons.forEach(logPerson);
var persons = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];
function logPerson(person) {
  var additionalInformation;
  if ("role" in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(
    " - "
      .concat(person.name, ", ")
      .concat(person.age, ", ")
      .concat(additionalInformation)
  );
}
persons.forEach(logPerson);
