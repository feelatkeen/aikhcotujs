function contains(prikol, rjach){
	for(var i = 0; i < prikol.length; i++){
		if (prikol[i] == rjach){
			return true;
		}
	}
}
var day = 0
$(".logoold").hide();
$("#gaem").hide();
$("#gameover").hide();
$("#gamenotover").hide();
var naselenie = 500;
var territoria = 1000;
var gamestart = 0;
var gosudarstva = ["Кожания","Грацк","Ржуссия","Рольша", "Гербелия", "Гурния", "Нарция", "Утения", "Экзия", "Клубачия", "Филатвия", "Бескоморния", "республика Петренко", "Казачковия", "Сурдия", "Голиат","Шапкостан","Ивания","Гэйляндия"];
var goswars = [];
var goswarsg = [];
var warall = 0;
var warallg = "";
var warallgn = "";
var waralliswar = 0
var inwar = 0;
var inwarg = "";
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
	$("#gosstatus").text("Мир");
	$(".logonew").hide();
	$(".logoold").show();
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
function gosudarstvaisdead(array){
_.each(array , function (gos){
if (gos == 'Killed'){
return true;
}
}
});}
setInterval(function(){
	if (gamestart == 1){
		var gameevent = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
		var novost = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
		if (gameevent == 42){
			var strana = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
			$("#gaem").hide();
			$("#gameover").show();
			$("#prichina").text("Страна " + gosudarstva[strana] + " взорвала самую мощную ядерную бомбу.");
			$("#gamerecord").text("Мир продержался " + day + " дней");
			gamestart = 0;
		}
		if (gameevent == 2){
			var strana = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
			$("#gaem").hide();
			$("#gameover").show();
			$("#prichina").text("В стране " + gosudarstva[strana] + " пробудился ктулху. Мир был уничтожен ");
			$("#gamerecord").text("Мир продержался " + day + " дней");
			gamestart = 0;
		}
		if (gameevent == 1487){
			var strana = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
			$("#gaem").hide();
			$("#gameover").show();
			$("#prichina").text("Внезапно все стали какать бабочками и есть радугу. Во всем мире - мир и никто воевать не хочет. ");
			$("#gamerecord").text("Мир прожил с войной и злом " + day + " дней, сейчас же просто мир во всем мире. Все победили.");
			gamestart = 0;
		}
		if (gameevent > 3000){
			var strana = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
			if (gosudarstva[strana] != "killed"){
				if (warall = 0){
					warall = 1;
					warallg = gosudarstva[strana];
					gosudarstva[strana] = "killed";
					$("#heh").prepend("<option>" + "Государство " + warallg + " объявила войну ВСЕМ." + "</option>");
				}
			}

		}
 		if (gameevent > 100){
 			if(novost == 1){
 				var strana = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
 				var strana2 = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
 				if (gosudarstva[strana] != "killed"){
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
 				
 			}
 			if(novost == 2){

 				var strana = Math.floor(Math.random() * (gosudarstva.length - 0 + 1)) + 1;
 				var strana2 = Math.floor(Math.random() * (gosudarstva.length - 0 + 1)) + 1;
 				var powerstrana = Math.floor(Math.random() * (50 - 0)) + 0;
 				var powerstrana2 = Math.floor(Math.random() * (50 - 0)) + 0;
 				if(contains(goswars, gosudarstva[strana])){
 					if (gosudarstva[strana] != "killed" && goswars != "killed"){
 						if (powerstrana > powerstrana2){
 							$("#heh").prepend("<option>" + gosudarstva[strana] + " победила!" + "</option>");
 							delete goswars[findindex(goswars, gosudarstva[strana])];
 						}
 						if (powerstrana < powerstrana2){
 							$("#heh").prepend("<option>" + gosudarstva[strana] + " проиграла..." + "</option>");
 							goswars[findindex(goswars, gosudarstva[strana])] = "killed";
 							gosudarstva[strana] = "killed";
 						}
 					}
 				}
 				if(contains(goswarsg, gosudarstva[strana])){
 					if (gosudarstva[strana] != "killed"){
 						if (powerstrana > powerstrana2){
 							$("#heh").prepend("<option>"+ "В " + gosudarstva[strana] + " кончилась гражданская война."  +"</option>");
 							goswarsg[findindex(goswarsg, gosudarstva[strana])] = "killed";
 						}
 						if (powerstrana < powerstrana2){
 							$("#heh").prepend("<option>"+ gosudarstva[strana] + " исчезла после гражданской войны." + "</option>");
 							territoria = territoria + Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
 							gosudarstva[strana] = "killed";
 							goswarsg[findindex(goswarsg, gosudarstva[strana])] = "killed";
 						}
 					}
 					
 				}
 			}
 			if(novost == 3){
 				if (inwar == 0){
 					var strana = Math.floor(Math.random() * (gosudarstva.length - 0 + 1)) + 0;
 					if (gosudarstva[strana] != "killed"){
 						if(contains(goswars, gosudarstva[strana])){
 							console.log("в государстве и так война");
 						}else{
 							$("#heh").prepend("<option>" + gosudarstva[strana] + " объявила войну " + gosudarstvoname + "." + "</option>");
 							alert("Вам объявила войну " + gosudarstva[strana] + "!" );
 							$("#gosstatus").text("Война");
 							inwarg = gosudarstva[strana]
 							inwar = 1;
 						}
 					}
 					
 				}
 			}
 			if(novost == 4){
 				var powerstranau = Math.floor(Math.random() * (50 - 0)) + 0;
 				var powerstrana2u = Math.floor(Math.random() * (50 - 0)) + 0;
 				if (inwar == 1){
 					if (powerstranau > powerstrana2u){
 						if (inwarg != ""){
 							alert("Вы победили в войне с " + inwarg + "!!!" );
 							$("gosstatus").text("Мир");
 							$("#heh").prepend("<option>" + gosudarstvoname + " победило в войне с " + inwarg + "</option>");
 							territoria = territoria + Math.floor(Math.random() * (2000 - 200 + 1)) + 200;
 							inwar = 0;
 							gosudarstva[findindex(gosudarstva, inwarg)] = "killed";
 							inwarg = "";
 						}
 					}else{
 						console.log("битва продолжается");
 					}
 				}
 			}
 			if (novost == 5){
 				if (warall == 1){
 					if (waralliswar == 0){
 						var strana = Math.floor(Math.random() * (gosudarstva.length - 1 + 1)) + 1;
 						if (gosudarstva[strana] != "killed"){
 							$("#heh").prepend("<option>" + warallg + " напало на " + gosudarstva[strana] + "." + "</option>");
 							warallgn = gosudarstva[strana];
 							waralliswar = 1;
 						}
 					}
 				}
 			}
 			if (novost == 6){
 				if (warall == 1){
 					if(waralliswar == 1){
 						 var powerstrana = Math.floor(Math.random() * (150 - 0)) + 0;
 						 var powerstrana2 = Math.floor(Math.random() * (100 - 0)) + 0;
 						 if(powerstrana > powerstrana2){
 						 	$("#heh").prepend("<option>" + warallg + " завоевало " + warallgn + "." +"</option>");
 						 	warallgn = "";
 						 	waralliswar = 0;
 						 	gosudarstva[findindex(gosudarstva, warallgn)] = "killed";
 						 }
 						 if(powerstrana < powerstrana2){
 						 	$("#heh").prepend("<option>" + warallgn +  " уничтожило " + warallg + " в мире праздник." +"</option");
 						 	warallgn = "";
 						 	warall = 0;
 						 	waralliswar = 0;
 						 }
 					}
 				}
 			}
		}
		if (novost == 7){
			if(inwar == 0){
				if(warall == 1){
					if(waralliswar == 0){
						$("#heh").prepend("<option>" + warallg + " напало на " + gosudarstvoname + "</option>");
						alert(warallg + " НА ВАС НАПАЛО.");
						waralliswar = 1;
						inwar = 1;
					}
				}
			}
		}
		day = day + 1;
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
		if(gosudarstvaisdead(gosudarstva)){
			$("#gaem").hide();
			$("#gamenotover").show();
			$("#gamerecord2").text("Вы продержались " + day + " дней");
			gamestart = 0;
		}
	}

}, 3000);
