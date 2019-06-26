function solve(deck) {
    let card = {
        faces: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
        suits: {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        },

    };
    let cards = [];
    try {
        for (const currentCard of deck) {
            let face = currentCard.slice(0, currentCard.length - 1);

            let suit = currentCard[currentCard.length - 1];
            if (!card.faces.includes(face) || !card.suits[suit]) {

                throw new Error(`Invalid card: ${face + suit}`);

            } else {
                let newCard = face+card.suits[suit];
                cards.push(newCard);
            }
        }

    } catch
        (e) {
        console.log(e.message);
        return;
    }
    console.log(cards.join(' '));
}
solve(['AS', '10D', 'KH', '2C']);
solve(['5S', '3D', 'QD', '1C']);