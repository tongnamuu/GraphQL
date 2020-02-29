export const people = [
  {
    id: 1,
    name: "user1",
    age: 20,
    gender: "Male"
  },
  {
    id: 2,
    name: "user2",
    age: 21,
    gender: "Male"
  },
  {
    id: 3,
    name: "user3",
    age: 22,
    gender: "Male"
  },
  {
    id: 4,
    name: "user4",
    age: 23,
    gender: "Male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
};
