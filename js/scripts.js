const ul = document.createElement("ul");
const suits = ["spades", "hearts", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

window.addEventListener("load", function(){
suits.forEach(function(suit) {

  ranks.forEach(function(rank) {
  const li = document.createElement("li");
  li.append(rank + ' of ' + suit);
  ul.append(li);
  });
});

document.body.append(ul); 
});
