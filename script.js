function contains(prikol, rjach){
	for(var i = 0; i < prikol.length; i++){
		if (prikol[i] == rjach){
			return true;
		}
	}
}
var day = 0
$("#gaem").hide();
$("#gameover").hide();
$("#gamenotover").hide();
var naselenie = 500;
var territoria = 1000;
var gamestart = 0;
var gosudarstva = ["Кожания","Грацк","Ржуссия","Рольша", "Гербелия", "Гурния", "Нарция", "Утения", "Экзия", "Клубачия", "Филатвия", "Бескоморния", "республика Петренко", "Казачковия", "Сурдия", "Голиат","Шапкостан","Ивания","Гэйляндия"];
var goswars = [];
var goswarsg = [];
var inwar = 0;
var gosudarstvoname = "undefined";
function changinggosname() {
	gosudarstvoname = $("#gosname").val();
	if(contains(gosudarstva,gosudarstvoname)){
		gosudarstvoname = gosudarstvoname + " 2";
	}
	console.log(gosudarstvoname);
	$("#chusnaem").hide();
	$("#gaem").show();
	$("#gosnamep").text("Государство: " + gosudarstvoname);
	$("#gosinf").text("Население: " + naselenie + " | Территория: " + territoria);
	$("#gosstatus").text("Мир")
	gamestart = 1;
}
function findindex(prikol, prikolstring){
	for(var i=0; i<prikol.length; i++){
		if (prikol[i] == prikolstring){
			return i;
		}
	}
}
function playagain(){
	location.reload();
}

setInterval(function(){
	if (gamestart == 1){
		var gameevent = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
		var novost = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
 		if (gameevent > 100){
 			if(novost == 1){
 				var strana = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
 				var strana2 = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
 				if (contains(goswars, gosudarstva[strana])){
 					console.log("война идет")
 				}else{
 					if (strana != strana2){
 					 	$("#heh").prepend("<option>" + gosudarstva[strana] + " объявила войну " + gosudarstva[strana2] + "." + "</option>");
 					 	goswars.push(gosudarstva[strana], gosudarstva[strana2]);
 					}
 					if (strana == strana2){
 						$("#heh").prepend("<option>" + "В стране " +gosudarstva[strana] + " гражданская война." + "</option>");
 						goswarsg.push(gosudarstva[strana]);
 					}
 				}
 				
 			}
 			if(novost == 2){

 				var strana = Math.floor(Math.random() * (gosudarstva.length - 0 + 1)) + 1;
 				var strana2 = Math.floor(Math.random() * (gosudarstva.length - 0 + 1)) + 1;
 				var powerstrana = Math.floor(Math.random() * (50 - 0)) + 0;
 				var powerstrana2 = Math.floor(Math.random() * (50 - 0)) + 0;
 				if(contains(goswars, gosudarstva[strana])){
 					if (powerstrana > powerstrana2){
 						$("#heh").prepend("<option>" + gosudarstva[strana] + " победила!" + "</option>");
 						delete goswars[findindex(goswars, gosudarstva[strana])];
 					}
 					if (powerstrana < powerstrana2){
 						$("#heh").prepend("<option>" + gosudarstva[strana] + " проиграла..." + "</option>");
 						delete goswars[findindex(goswars, gosudarstva[strana])];
 						delete gosudarstva[strana];
 					}
 				}
 				if(contains(goswarsg, gosudarstva[strana])){
 					if (powerstrana > powerstrana2){
 						$("#heh").prepend("<option>"+ "В " + gosudarstva[strana] + " кончилась гражданская война."  +"</option>")
 					}
 					if (powerstrana < powerstrana2){
 						$("#heh").prepend("<option>"+ gosudarstva[strana] + " исчезла после гражданской войны." + "</option>")
 					}
 				}
 			}
 			if(novost == 3){
 				if (inwar == 0){
 					var strana = Math.floor(Math.random() * (gosudarstva.length - 0 + 1)) + 0;
 					if(contains(goswars, gosudarstva[strana])){
 						console.log("в государстве и так война");
 					}else{
 						$("#heh").prepend("<option>" + gosudarstva[strana] + " объявила войну " + gosudarstvoname + "." + "</option>");
 						alert("Вам объявила войну " + gosudarstva[strana] + "!" );
 						$("#gosstatus").text("Война");
 						inwar = 1;
 					}
 					
 				}
 			}
 			if(novost == 4){
 				var powerstranau = Math.floor(Math.random() * (50 - 0)) + 0;
 				var powerstrana2u = Math.floor(Math.random() * (50 - 0)) + 0;
 				if (inwar == 1){
 					if (powerstranau > powerstrana2u){
 						alert("Вы победили!!!");
 						$("#heh").prepend("<option>" + gosudarstvoname + " победило!" + "</option>");
 						inwar = 0;
 					}else{
 						console.log("битва продолжается");
 					}
 				}
 			}
		}
		day = day + 1
		if (inwar == 0){
			naselenie = naselenie + Math.floor(Math.random() * (3 - 0 + 1)) + 0;
		}
		if (inwar == 1){
			var wragpower = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
			naselenie = naselenie - wragpower;
		}
		$("#gosinf").text("Население: " + naselenie + " | Территория: " + territoria);
		$("#gosday").text("День: " + day);
		console.log(novost);
		if(naselenie < 1){
			$("#gaem").hide();
			$("#gameover").show();
			$("#prichina").text("Ваша страна была стёрта с лица земли.");
			$("#gamerecord").text("Вы продержались " + day + " дней");
			gamestart = 0;
		}
		if(!gosudarstva[1]){
			$("#gaem").hide();
			$("#gamenotover").show();
			$("#gamerecord2").text("Вы продержались " + day + " дней");
			gamestart = 0;
		}
	}

}, 3000);