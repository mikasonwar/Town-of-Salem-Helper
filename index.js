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

var Hello = [
 "Hello",
 "Hola",
 "Bonjour",
 "Olá",
 "Namasté",
 "Guten tag",
 "Ciao",
 "こんにちは",
 "Здравствуйте",
 "你好",
 "Χαίρετε",
 "مرحبا",
 "zdravo",
 "xin chào"
]


$(document).ready(function(){

$(".cover").click(zEsconder);


  for(var i=0;i<inno.length;i++) {
    team="inno";
    role=inno[i][0];
    roleName=inno[i][1].replace(/&rs/g,'<span class="random">').replace(/&re/g, '</span>');
    var lbl = '<div class="'+team+' lblgraveyard" id="'+role+'">'+roleName+'</div>';
    $(".listagraveyard .flex").append(lbl);
  }

for(var i=0;i<inno.length;i++) {
  team="inno";
  role=inno[i][0];
  roleName=inno[i][1].replace(/&rs/g,'<span class="random">').replace(/&re/g, '</span>');
  var lbl = '<label class="'+team+' '+role+'" role="'+role+'"><input type="checkbox" >'+roleName+'</label>';
  $(".roles").append(lbl);
  $(".graveyard").append(lbl);
  $(".claims").append(lbl);
}

for(var i=0;i<maf.length;i++) {
  team="maf";
  role=maf[i][0];
  roleName=maf[i][1];

  var lbl = '<label class="'+team+' '+role+'" role="'+role+'"><input type="checkbox" >'+roleName+'</label>';
  $(".roles").append(lbl);
  $(".graveyard").append(lbl);
  $(".claims").append(lbl);
}

for(var i=0;i<neut.length;i++) {
  team=neut[i][2];
  role=neut[i][0];
  roleName=neut[i][1];


  var lbl = '<label class="'+team+' '+role+'" role="'+role+'"><input type="checkbox" >'+roleName+'</label>';
  $(".roles").append(lbl);
  $(".graveyard").append(lbl);
  $(".claims").append(lbl);
}

  $(".claims").find("label").append("<input class='txtbox' type='text'>")


  if(false){
      for(var i=0;i<inno.length;i++){

          role = inno[i][0]
          $("."+role).append(" ["+role+"]")
          $("."+role).eq(0).find("input[type='checkbox']").click(zClick)

      }
  }



$(".graveyard").on("change", zAtualizar)
zAtualizar();
zHello();
});

function zClick() {

  id=$(this).parent("label").attr("role");
  if($(this).prop('checked')) {
    console.log(id)
    $("."+id).find("input[type='checkbox']").prop('checked',1);
  } else{console.log("|-"+" oi? "+ "-| - zClick("+id+")")}

  zAtualizar();
}

function zAdd() {
  $(".listagraveyard").show();
  $(".cover").show();



  // var lbl = '<div class="'+team+' " id="'+role+'">'+roleName+'</div>'
}

function zEsconder() {
  $(".listagraveyard").hide();
  $(".cover").hide();
}

function zAtualizar() {
  var random="<span class='random'>"
  var innocent="<span class='inno'>"
  var mafia = "<span class='maf'>"
  var neutral = "<span class='neut'>"
  var fim="</span>"
  $(".contagem").empty();

  var mensagem= innocent+"Townies"+fim+" left: "+  zContagem(inno)
              + "\n"+mafia+"Mafia"+fim+" left: "+   zContagem(maf)
              + "\n"+neutral+"Neutral"+fim+" left: "+ zContagem(neut);
  $(".contagem").append(mensagem);

  var mensagemgeral = ""
  $(".alertasgerais").empty();

  if($(".graveyard").find(".townrandom input[type='checkbox']").prop("checked")) {
    mensagemgeral+= random+"R"+fim+innocent+"T"+fim+" está morto\n";
  }

  if($(".graveyard").find(".townkilling input[type='checkbox']").prop("checked")) {
    mensagemgeral+= innocent+"T"+fim+random+"K"+fim+" está morto\n";
  }

  $(".alertasgerais").append(mensagemgeral);
}

function zContagem(array) {
  var x=0;
  for(var i=0;i<array.length;i++) {
    if(!$(".graveyard").find("."+array[i][0]+" input[type='checkbox']").prop("checked")) {
      x++;
    }
  }
  return x;
}

function zHello() {
  var texto="";
  for(var i=0;i<Hello.length;i++) {
    texto += '<span data-clipboard-text="'+Hello[i]+'"> '+Hello[i]+'</span>';
  }
  $(".hello").empty();
  $(".hello").append(texto);
  var clipboard = new ClipboardJS('.hello span');
  clipboard.on('success', function(e) {
      console.log(e);
      zAlerta("Copiado com sucesso");
  });
  clipboard.on('error', function(e) {
      console.log(e);
  });
}

function zAlerta(texto) {
  $(".alerta").remove();
  var alerta = '<div class="alerta">'+texto+'</div>';
  $(alerta).insertBefore('body');
  $(".alerta").hide();
  $(".alerta").fadeIn().delay(1*1000).fadeOut();
}
