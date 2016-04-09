var Deck = require('./deck.js');

var id;
var started;
var deck;
var openPile;
var hands;
var players;

// Constructor
function Cardgame(name) {
  this.id = name;
  this.started = false;
  this.deck = new Deck();
  this.openPile = new Deck();
  this.players = [];
  this.hands = [];
  initializeDeck(this.deck);
  //this.deck.shuffleCards(1);
};

function initializeDeck(deck) {
  for (var i = 1; i < 14; i++) {
    deck.addCard("S"+i);
    deck.addCard("K"+i);
    deck.addCard("H"+i);
    deck.addCard("R"+i);
  }
};

// Class methods
Cardgame.prototype.addPlayer = function (name) {
  var hand = new Deck();
  this.players.push(name);
  this.hands.push(hand);
};

Cardgame.prototype.getCardFromPile = function (name) {
  for (var i = this.players.length - 1; i >= 0; i--) {
    if(this.players[i] === name) {
      this.hands[i].addCard(this.deck.getCard());
    }
  }
};

Cardgame.prototype.putCardOnOpenPile = function (name,card) {
  for (var i = this.players.length - 1; i >= 0; i--) {
    if(this.players[i] === name) {
      for (var j = this.hands[i].countCards(); j > 0; j--) {
        if (this.hands[i].peekCard(j) === card) {
         this.openPile.addCard(this.hands[i].peekCard(j));
        }
      }
      this.hands[i].removeCard(card);
    }
  }
};


Cardgame.prototype.start = function () {
  if (!this.started) {
    for (var j = 1; j <= 6; j++) {
      for (var i = this.players.length - 1; i >= 0; i--) {
        this.hands[i].addCard(this.deck.getCard());
      }
    }
    this.openPile.addCard(this.deck.getCard());
    this.started = true;
  }
};

Cardgame.prototype.print = function(name) {
  var output = "";
  output = output + "Game: " + this.id + "\n";
  output = output + "Players: " + this.players.length + "\n";
  for (var i = this.players.length - 1; i >= 0; i--) {
    output = output + this.players[i] + "\n";
    if (this.players[i] === name || name === "admin") {
      output = output + this.hands[i].print() + "\n";
    } else {
      output = output + this.hands[i].countCards() + " hidden card(s)\n";
    }
  }
  if (name === "admin") {
    output = output + "Pile\n" + this.deck.print() + "\n";
    output = output + "Open Pile\n" + this.openPile.print();
  } else {
    output = output + "Pile\n" + this.deck.countCards() + " hidden card(s)\n";
    output = output + "Open Pile\n" + this.openPile.peekCard() + " and " + (this.openPile.countCards() - 1) + " hidden card(s)\n";
  }
  return output;
};

// export the class
module.exports = Cardgame;

