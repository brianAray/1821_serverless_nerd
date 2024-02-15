// ES MODULE EXPORT

const person = {
  name: "Mike",
  role: "front end dev",
};

export function printRole() {
  console.log(person.role);
}

export default {
  person,
  printRole,
};
