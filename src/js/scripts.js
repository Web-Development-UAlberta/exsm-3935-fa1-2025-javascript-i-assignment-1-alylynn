async function main() {
   //Collect user's name and concatenate it
   let firstName = await input("What is your first name? ");
   let lastName = await input("What is your last name? ");
   let fullName = firstName + " " + lastName;
   
  //Replace all instances of letter a with letter o and display the name
  let newName = fullName.replaceAll("a", "o");
  output(newName);

  //Collect numbers from user
  let largerNumber = await input("Please enter a number larger than 10: ");
  let smallerNumber = await input("Please enter a number smaller than 10: ");

  //Calculate remainder and display results
  let remainder = largerNumber % smallerNumber;
  output(remainder);

}
