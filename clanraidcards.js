$(document).ready(function(){
  var card_names = {
    "Burst" : ["Acid_Drench", "Blazing_Inferno", "Decaying_Strike", "Fusion_Bomb", "Grim_Shadow", "Radioactivity", "Thriving_Plague"],
    "Affliction" : ["Clanship_Barrage", "Fragmentize", "Moon_Beam", "Purifying_Blast", "Razor_Wind", "Skull_Bash", "Whip_of_Lightning"],
    "Support" : ["Ancestral_Favor", "Crushing_Instinct", "Inspired_Force", "Prismatic_Rift", "Rancid_Gas", "Soul_Fire", "Victory_March"]
  };
  for ( var card_type in card_names ) {
    var row = $("<div class='card_row' id='"+card_type+"'></div>");
    for ( var card_index in card_names[card_type] ) {
      var card = $("<div class='card' id='"+card_names[card_type][card_index]+"'></div>");
      card.append(
        "<div class='inc button noselect'></div>",
        "<label class='level noselect'>1</label>",
        "<div class='dec button noselect'></div>"
      );
      row.append(card);
    };
    $("#cards").append(row);
  };

  $(".card").click(function (e) {
    if($(e.target).hasClass('button')) return; // ignore child buttons
    $(this).toggleClass("selected");
  });

  $(".button").on("click", function(e) {
    var c = parseFloat($(this).parent().find("label").text());

    if ($(this).hasClass("inc")) {
      $(this).parent().find("label").text(c + 1);
      return;
    }
    if ($(this).hasClass("dec") && c > 1) {
      $(this).parent().find("label").text(c - 1);
      return;
    }

  });
});
