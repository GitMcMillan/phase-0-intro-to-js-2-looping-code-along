// Code your solutions in this file





const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards) {
  const messages = []
  for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
        messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)

    }



    return messages;
}

writeCards(cards);


function countDown() {
  let countdown = 10;
  while (countdown > -1) {
    console.log(countdown--)
  }
}
