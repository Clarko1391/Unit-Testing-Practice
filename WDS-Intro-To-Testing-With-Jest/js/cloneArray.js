// cloneArray function will take an exisitng array as an arg and clone the full array of values into a separate memory location on the machine
const cloneArray = (array) => [...array];

// using module.exports will allow this function to be imported into other files and is best practice for maintaining large code-bases made up of several parts
module.exports = cloneArray;
