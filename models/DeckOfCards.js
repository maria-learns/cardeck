// 1        | datetime.now()  | OPEN        | {deck_of_cards: { used: [], available: []}} |  1  | 4 | 1

class DeckOfCards {
  constructor(id, datetime, gameStatus) {
    this.id = id;
    this.timestamp = datetime;
    this.status = gameStatus;

  }
}
