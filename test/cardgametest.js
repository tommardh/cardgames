require('approvals').mocha("test/approvals");
var Cardgame = require('../source/cardgame.js');

describe('Cardgame', function () {
  
  it('should be possible to create a new game', function () {
    var cardgame = new Cardgame("Vänd-8");
    var data = cardgame.print("admin");
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to add a player if game is not started', function () {
    var cardgame = new Cardgame("Vänd-8");
    cardgame.addPlayer("Kalle");
    var data = cardgame.print("admin");
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to start a game if there exists two players', function () {
    var cardgame = new Cardgame("Vänd-8");
    cardgame.addPlayer("Kalle");
    cardgame.addPlayer("Viktoria");
    cardgame.start();
    var data = cardgame.print("admin");
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible for a player to take one card from pile', function () {
    var cardgame = new Cardgame("Vänd-8");
    cardgame.addPlayer("Kalle");
    cardgame.addPlayer("Viktoria");
    cardgame.start();
    cardgame.getCardFromPile("Kalle");
    var data = cardgame.print("admin");
    this.verify(data);  // or this.verifyAsJSON(data)
  });

it('should be possible for a player to put one card on the open pile', function () {
    var cardgame = new Cardgame("Vänd-8");
    cardgame.addPlayer("Kalle");
    cardgame.addPlayer("Viktoria");
    cardgame.start();
    cardgame.getCardFromPile("Kalle");
    cardgame.putCardOnOpenPile("Kalle","H10");
    var data = cardgame.print("admin");
    this.verify(data);  // or this.verifyAsJSON(data)
  });


  it('should only be possible to view the cards relevant for a user', function () {
    var cardgame = new Cardgame("Vänd-8");
    cardgame.addPlayer("Kalle");
    cardgame.addPlayer("Viktoria");
    cardgame.start();
    var data = cardgame.print("Kalle");
    this.verify(data);  // or this.verifyAsJSON(data)
  });


});

