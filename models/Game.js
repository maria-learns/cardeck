class Game {
  constructor(id, datetime, gameStatus, deckOfCards, playerOne, playerTwo) {
    this.id = id;
    this.timestamp = datetime;
    this.status = gameStatus;
    this.deck = deckOfCards;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.winner = null;
  }
}
