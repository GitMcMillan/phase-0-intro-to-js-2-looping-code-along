// Code your solutions in this file

// have an array of names 
//consolelog a thank you message for each name on array
// 
//

const namesList = ["Guadalupe", "Ollie", "Aki"]







function writeCards() {
  const cards = []

  for (let i = 0; i < namesList.length; i++) {


    cards.push(`Thank you, ${namesList[i]}, for the wonderful surprise gift!`)

  };
  return cards;
};









function countDown() {
  let countdown = 10;
  while (countdown > -1) {
    console.log(countdown--)
  }
}

// function countDown(num) {
//   for (let i = num; i > -1; i--) {
//     console.log([i])
//   };

// };
