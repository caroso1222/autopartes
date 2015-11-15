
/*$(document).ready(function(){
	var i = 0;
	for(i= 1; i< 7;i++){
		$(".brands-".concat(i)).mouseover(function(){
			var j = 0;
			for(j = 1; j < 7; j++){
				if(j!=i){
					$(".brands-".concat(j)).css('padding','5px');
				}
			}
		});
	}
	var i = 0;
	for(i= 1; i< 7;i++){
		$(".brands-".concat(i)).mouseout(function(){
			var j = 0;
			for(j = 1; j < 7; j++){
				if(j!=i){
					$(".brands-".concat(j)).css('padding','0px');
				}
			}
		});
	}

});

 $zopim(function() {
     $zopim.livechat.window.show();
  });*/

$(".chat").click(function(){
	$zopim.livechat.window.show();
});

$("#buscar-btn").click(function(){
$zopim.livechat.say("Hola, estoy interesado en buscar una referencia en su catálogo.");
/*$zopim.livechat.window.hide();*/
});

$("#btn-industrial").click(function(){
$zopim.livechat.say("Hola, quiero conocer más acerca de la línea industrial.");
/*$zopim.livechat.window.hide();*/
});

$("#btn-automotriz").click(function(){
$zopim.livechat.say("Hola, quiero conocer más acerca de la línea automotriz.");
/*$zopim.livechat.window.hide();*/
});

$("#btn-agricola").click(function(){
$zopim.livechat.say("Hola, quiero conocer más acerca de la línea agrícola.");
/*$zopim.livechat.window.hide();*/
});