require('approvals').mocha("test/approvals");
var Deck = require('../source/deck.js');

// https://github.com/elliotf/mocha-sinon
var sinon = require('sinon');

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
});

afterEach(function(){
  this.sinon.restore();
});

describe('Deck', function () {
  it('should be possible to create en empty deck', function () {
    var deck = new Deck();
    var data = deck.print();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to add a card to an empty deck', function () {
    var deck = new Deck();
    var card = "S1";
    deck.addCard(card);
    var data = deck.print();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to add a card to a non-empty deck', function () {
    var deck = new Deck();
    var card = "S1";
    deck.addCard(card);
    card = "S2";
    deck.addCard(card);
    var data = deck.print();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to add several cards to a deck', function () {
    var deck = new Deck();
    var card = "S1";
    deck.addCard(card);
    var cards = ["S4", "S3", "S2"];
    deck.addCards(cards);
    var data = deck.print();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to get the deck as JSON', function () {
    var deck = new Deck();
    var cards = ["S4", "S3", "S2","S1"];
    deck.addCards(cards);
    //var data = deck.;
    this.verifyAsJSON(deck);
  });

  it('should be possible to count the cards in a deck', function () {
    var deck = new Deck();
    var cards = ["S4", "S3", "S2", "S1"];
    deck.addCards(cards);
    var data = deck.countCards();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to sort the cards in the deck', function () {
    var deck = new Deck();
    var cards = ["S3", "S1", "S4", "S2"];
    deck.addCards(cards);
    deck.sortCards();
    var data = deck.print();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to shuffle the cards in the deck', function () {
    var deck = new Deck();
    var cards = ["S4", "S3", "S2", "S1"];
    deck.addCards(cards);
    deck.shuffleCards(0);
    var data = deck.print();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to get the top card from a deck', function () {
    var deck = new Deck();
    var cards = ["S4", "S3", "S2", "S1"];
    deck.addCards(cards);
    var card = deck.getCard();
    var data = card + "-" + deck.print();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to remove a card from a deck', function () {
    var deck = new Deck();
    var cards = ["S4", "S3", "S2", "S1"];
    deck.addCards(cards);
    var card = deck.removeCard("S2");
    var data = deck.print();
    this.verify(data);  // or this.verifyAsJSON(data)
  });


  it('should be possible to peek at the top card from a deck', function () {
    var deck = new Deck();
    var cards = ["S4", "S3", "S2", "S1"];
    deck.addCards(cards);
    var data = deck.peekCard();
    this.verify(data);  // or this.verifyAsJSON(data)
  });

  it('should be possible to peek at the third card in a deck', function () {
    var deck = new Deck();
    var cards = ["S4", "S3", "S2", "S1"];
    deck.addCards(cards);
    var data = deck.peekCard(3);
    this.verify(data);  // or this.verifyAsJSON(data)
  });

});




