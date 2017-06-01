/*
 * This is the first assignment towards your JS adventure.
 * Ignore everything except for the comments above the methods. The
 * methods are just for testing purposes so you know when you have
 * accomplished a specific task.
 *
 * Place the answer required after each "return" keyword in each
 * method and Wallaby will let you know when you have it right
 */

export default class {

  /*
   * Return a string with the characters Hello World
   */
  helloWorld() {
    return 'Hello World';
  }

  /*
   * Return the answer to everything. The number 42
   */
  theAnswerToEverything() {
    return 42;
  }

  /*
   * Return a simple boolean
   */
  isJSHard() {
    return true;
  }

  /*
   * Return a mathematical expression that results in the answer being 4
   */
  resultOfFour() {
    return 5-1;
  }

  /*
   * Return a mathematical expression that results in 42 (Use a different operator than before)
   */
  resultOfFortyTwo() {
    return 6*7;
  }

  /*
   * Return a variable that is holding a string of your first name
   */
  myFirstName() {
    const firstName = 'Doyle';
    return firstName;
  }

  /*
   * Return a variable that is holding a string of your last name
   */
  myLastName() {
    const lastName = 'Olschewski';
    return lastName;
  }

  /*
   * Return two variables each holding a string of your first and last name respectively but joined (concatenated) together
   */
  myFirstAndLastName() {
    const firstName = 'Doyle';
    const lastName = 'Olshewski';
    return firstName + " " + lastName;
  }

  /*
   * Return (using typeof) the type of 'Great Job!'
   */
  whatsTheType() {
    return typeof 'Great Job!';
  }

}
