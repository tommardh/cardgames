var id;
var cards;

// Constructor
function Deck() {
  this.id = 1;
  this.cards = [];
};

// class methods

Deck.prototype.addCard = function (newcard) {
      this.cards.push(newcard);
};


Deck.prototype.addCards = function (newcards) {
  for (var i = newcards.length - 1; i >= 0; i--) {
    this.cards.push(newcards[i]);
  }
};

Deck.prototype.countCards = function () {
  return this.cards.length;
}

Deck.prototype.getCard = function () {
  return this.cards.pop();
}

Deck.prototype.removeCard = function (card) {
  this.cards.splice( this.cards.indexOf(card), 1 );
}


Deck.prototype.peekCard = function (index) {
  if (index > 0) {
    return this.cards[this.cards.length - index];
  } else {
    return this.cards[this.cards.length-1];
  }
}

Deck.prototype.sortCards = function () {
  this.cards.sort();
}

// https://www.frankmitchell.org/2015/01/fisher-yates/
Deck.prototype.shuffleCards = function (seed) {
  var i = 0
    , j = 0
    , temp = null

  var random = function (max) {
    return Math.floor(Math.random() * (max + 1))
  }

  for (i = this.cards.length - 1; i >= 0; i--) {
    if(seed !== 0) {
      j = random(i);
    }
    temp = this.cards[i]
    this.cards[i] = this.cards[j]
    this.cards[j] = temp
  }
}

Deck.prototype.print = function() {
  var output = "";
  if (this.cards.length === 0) {
    output = "Empty deck";
  } else {
    output = this.cards[this.cards.length - 1];
    if (this.cards.length > 1) {
      for (var i = this.cards.length - 2; i >= 0; i--) {
        output = output + " " + this.cards[i];
      }
    }
  }
  return output;
};


// export the class
module.exports = Deck;

