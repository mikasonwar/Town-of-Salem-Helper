$(document).ready(function(){

$(".cover").click(zEsconder);


var inno = [
["sheriff","Sheriff"],
["doctor","Doctor"],
["investigator","Investigator"],
["jailor","Jailor"],
["medium","Medium"],
["escort","Escort"],
["lookout","Lookout"],
["townkilling","Town &rsKilling&re"],
["townrandom","&rsRandom&re Town"]
]

var maf = [
["godfather","Godfather"],
["mafioso","Mafioso"],
["framer","Framer"]
]

var neut = [
["jester","Jester","jest"],
["executioner","Executioner","neut"],
["serial_killer","Serial Killer","sk"]
]

for(var i=0;i<inno.length;i++) {
  team="inno";
  role=inno[i][0];
  roleName=inno[i][1].replace(/&rs/g,'<span class="random">').replace(/&re/g, '</span>');
  var lbl = '<label class="'+team+'"><input type="checkbox" id="'+role+'">'+roleName+'</label>'
  $(".roles").append(lbl);
}

for(var i=0;i<maf.length;i++) {
  team="maf";
  role=maf[i][0];
  roleName=maf[i][1];

  var lbl = '<label class="'+team+'"><input type="checkbox" id="'+role+'">'+roleName+'</label>'
  $(".roles").append(lbl);
}

for(var i=0;i<neut.length;i++) {
  team=neut[i][2];
  role=neut[i][0];
  roleName=neut[i][1];


  var lbl = '<label class="'+team+'"><input type="checkbox" id="'+role+'">'+roleName+'</label>'
  $(".roles").append(lbl);
}

});

function zAdd() {
  $(".listagraveyard").show();
  $(".cover").show();
}

function zEsconder() {
  $(".listagraveyard").hide();
}
