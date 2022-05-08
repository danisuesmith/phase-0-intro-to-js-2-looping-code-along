function writeCards(cards, adj) {
  let messages = [];
  for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]}, for the wonderful ${adj} gift!`);
  }
  return messages;
}

function countDown() {
  let count = 10;
  while (count >= 0) {
    console.log(count--);
  }
  return countDown;
}
