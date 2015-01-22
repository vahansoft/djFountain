var sim = new Simulator();
$(function () {
	sim.init('canvas'); 	
	$(document).keydown(function(){dijey(event.keyCode);});

	AllToColor(makeColor(0,0,0));
	var radiation_work = 0;
	//Variables
	var ashxatel1 = false;
	var ashxatel2 = false;
	var ashxatel3 = false;
	var ashxatel4 = false;
	var ashxatel5 = false;
	var ashxatel6 = false;
	var ashxatel7 = false;
	var ashxatel8 = false;
	var ashxatel9 = false;
	var ashxatel10 = false;
	var ashxatel = [ashxatel1,ashxatel2,ashxatel3,ashxatel4,ashxatel5,ashxatel6,ashxatel7,ashxatel8,ashxatel9,ashxatel10]


	// Audio
/*
	var audio = new Audio('hit.mp3');
	var audio2 = new Audio('sound2.mp3')
	var audio3 = new Audio('sound3.mp3')
	function playHitSound(sound){
		sound.play();
	}

*/



	function dijey(k){
		if (k == 97){
			if (sim.light(0).getColor().r == 255 && sim.light(0).getColor().g == 55 && sim.light(0).getColor().b == 55)
			{
				AllToColor(makeColor(0,0,0))
			}
			else
			{
			AllToColor(makeColor(255,55,55))
			}
		}
		else if (k == 98){
			if (sim.light(0).getColor().r == 55 && sim.light(0).getColor().g == 255 && sim.light(0).getColor().b == 55)
			{
				AllToColor(makeColor(0,0,0))
			}
			else
			{
				AllToColor(makeColor(55,255,55))
			}
		}
		else if (k == 99){
			if (sim.light(0).getColor().r == 55 && sim.light(0).getColor().g == 55 && sim.light(0).getColor().b == 255)
			{
			AllToColor(makeColor(0,0,0))
			}
			else
			{
			AllToColor(makeColor(55,55,255))
			}
		}
		else if (k == 96){
			AllToColor(sim.randomColor())
		}
		else if (k == 103){
			pluscolorred(true)
		}
		else if (k == 100){
			pluscolorred(false)
		}
		else if (k == 104){
			pluscolorgreen(true)
		}
		else if (k == 101){
			pluscolorgreen(false)
		}
		else if (k == 105){
			pluscolorblue(true)
		}
		else if (k == 102){
			pluscolorblue(false)
		}
		else if (k == 87){
			clearInterval(dkck);
		}
		else if (k == 192){
			turnoffall();
		}
		else if (k == 49){
			$(".interval").click()
		}
		else if (k == 50){
			$(".interval2").click()
		}
		else if (k == 51){
			$(".interval3").click()
		}
		else if (k == 52){
			$(".interval4").click()
		}
		else if (k == 53){
			$(".interval5").click()
		}
		else if (k == 54){
			$(".interval6").click()
		}
		else if (k == 55){
			$(".interval7").click()
		}
		else if (k == 56){
			$(".interval8").click()
		}
		else if (k == 57){
			$(".interval9").click()
		}
		else if (k == 48){
			$(".interval10").click()
		}
	}

	$(".interval").click(function(){
		if (ashxatel1 == false){
			dkck_interval = setInterval(dkck,time('interval1_speed_result','interval1_speed'));
			ashxatel1 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(dkck_interval)
			AllToColor(makeColor(0,0,0))
			ashxatel1 = false;
			$(this).css({background: 'orange'})
		}
	});
	$('.interval2').click(function(){
		if (ashxatel2 == false){
			ck_interval = setInterval(ck,time('interval2_speed_result','interval2_speed'));
			ashxatel2 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(ck_interval)
			AllToColor(makeColor(0,0,0))
			ashxatel2 = false;
			$(this).css({background: 'orange'})
		}
	});
	$('.interval3').click(function(){
		if (ashxatel3 == false){
			txk_interval = setInterval(txk,time('interval3_speed_result','interval3_speed'));
			ashxatel3 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(txk_interval)
			AllToColor(makeColor(0,0,0))
			ashxatel3 = false;
			$(this).css({background: 'orange'})
		}
	});
	$('.interval4').click(function(){
		if (ashxatel4 == false){
			each_interval = setInterval(each,time('interval4_speed_result','interval4_speed'));
			ashxatel4 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(each_interval)
			AllToColor(makeColor(0,0,0))
			ashxatel4 = false;
			$(this).css({background: 'orange'})
		}
	});
	var bajanum = 0;
	$('.interval5').click(function(){
		if (ashxatel5 == false){
			baj_interval = setInterval(bajanum_interval5,time('interval5_speed_result','interval5_speed'));
			ashxatel5 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(baj_interval)
			AllToColor(makeColor(0,0,0))
			ashxatel5 = false;
			$(this).css({background: 'orange'})
		}
	});
	$('.interval6').click(function(){
		if (ashxatel6 == false){
			aliq_interval6 = setInterval(kentronakan_aliq,time('interval6_speed_result','interval6_speed'));
			ashxatel6 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(aliq_interval6)
			AllToColor(makeColor(0,0,0))
			ashxatel6 = false;
			$(this).css({background: 'orange'})
		}
	})
	$('.interval7').click(function(){
		if (ashxatel7 == false){
			xary_interval7 = setInterval(xary,time('interval7_speed_result','interval7_speed'));
			ashxatel7 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(xary_interval7);
			AllToColor(makeColor(0,0,0));
			ashxatel7 = false;
			$(this).css({background: 'orange'})
		}
	})
	$('.interval8').click(function(){
		if (ashxatel8 == false){
			dinam_interval8 = setInterval(dinam,time('interval8_speed_result','interval8_speed'));
			ashxatel8 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(dinam_interval8);
			AllToColor(makeColor(0,0,0));
			ashxatel8 = false;
			$(this).css({background: 'orange'})
		}
	})
	$('.interval9').click(function(){
		if (ashxatel9 == false){
			tsiatsan_interval9 = setInterval(tsiatsan_func,time('interval9_speed_result','interval9_speed'));
			ashxatel9 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(tsiatsan_interval9)
			tsi = 0;
			AllToColor(makeColor(0,0,0))
			ashxatel9 = false;
			$(this).css({background: 'orange'})
		}
	})
	$('.interval10').click(function(){
		if (ashxatel10 == false){
			radiation_interval10 = setInterval(radiation,time('interval10_speed_result','interval10_speed'));
			ashxatel10 = true;
			$(this).css({background: 'red'})
		}
		else {
			clearInterval(radiation_interval10)
			AllToColor(makeColor(0,0,0))
			ashxatel10 = false;
			$(this).css({background: 'orange'})
		}
	})
	

	//------------------------------------------------------------------------------------------------------------//

	// Interval 1 ------------------//
	var dkck_anjatel_miacnel = [];
	var dkck = function (){
				if (dkck_anjatel_miacnel[dkck_anjatel_miacnel.length-1] == 123){
					var rand = sim.randomColor()
					for (var b in range(0,333)){
						sim.light(b).setColor(rand)
					}
					dkck_anjatel_miacnel = []
					//playHitSound(audio)
					sim.display()

				}
				else
				{
					for (var b in range(0,333)){
						sim.light(b).setColor(0,0,0)
					}
					sim.display()
					dkck_anjatel_miacnel.push(123);
					
				}
				
	};

	// Interval 2 --------------------//

	var ck = function(){
		var patahakan = [0,1,2]
		sim.Helpers.shuffle(patahakan);
		haziv(sim.randomColor().r,sim.randomColor().g,sim.randomColor().b,patahakan[0]);
		//playHitSound(audio2)
	}


	// Interval 3 --------------------//

	var txk = function(){
		for (var i in range(0,333)){
			var rand = Math.floor(Math.random()*10);
			if (i%rand == 0){
				sim.light(i).setColor(sim.light(i).getColor().r,sim.light(i).getColor().g,sim.light(i).getColor().b)
			}
			else {
				sim.light(i).setColor(0,0,0)
			}
		}
		//playHitSound(audio3)
		sim.display();

	}
	var o = 0;
	var each = function(){
		sim.light(o).setColor(sim.randomColor());
		sim.light(332-o).setColor(sim.randomColor());
		if (o%15==0){
			sim.display()
		}
		if (o == 332){
			o = 0
			sim.display()
		}
		o++
	}


	var bajanum_interval5 = function(){
		for (var g in range(0,333)){
			if (g%2 == 0){
				sim.light(g).setColor(sim.light(332).getColor().r,sim.light(166).getColor().g,sim.randomColor().b);
			}else{
				sim.light(g).setColor(sim.randomColor().r,sim.light(166).getColor().g,sim.light(332).getColor().b);
			}
		}
		sim.display()
	}

	var rand_al = 0;
	var kentronakan_aliq = function(){
		oxakner(ringer[rand_al],makeColor(sim.light(0).getColor().r,sim.randomColor().g,sim.randomColor().b));
		if (rand_al > 0){
			oxakner(ringer[rand_al-1],makeColor(0,sim.randomColor().g,sim.randomColor().b))
		}
		if (rand_al > 1){
			oxakner(ringer[rand_al-2],makeColor(0,sim.randomColor().g,0))
		}
		if (rand_al > 2){
			oxakner(ringer[rand_al-3],makeColor(0,0,0))
		}
		rand_al++;
		if (rand_al == 7){
			rand_al = 0
		}
		sim.display()
	}

		var tsi = 0;
	var tsiatsan_func = function(){
				arrReader(tsiatsan[tsi],makeColor(255,100,100));
				if ( tsi > 0 ){
					arrReader(tsiatsan[tsi-1],makeColor(255,100,100));
				}
				if ( tsi > 1 ){
					arrReader(tsiatsan[tsi-2],makeColor(255,120,100));
				}
				if ( tsi > 2 ){
					arrReader(tsiatsan[tsi-3],makeColor(255,140,100));
				}
				if ( tsi > 3 ){
					arrReader(tsiatsan[tsi-4],makeColor(255,160,100));
				}
				if ( tsi > 4 ){
					arrReader(tsiatsan[tsi-5],makeColor(255,180,100));
				}
				if ( tsi > 5 ){
					arrReader(tsiatsan[tsi-6],makeColor(255,200,100));
				}
				if ( tsi > 6 ){
					arrReader(tsiatsan[tsi-7],makeColor(255,220,100));
				}
				if ( tsi > 7 ){
					arrReader(tsiatsan[tsi-8],makeColor(255,240,100));
				}
				if ( tsi > 8 ){
					arrReader(tsiatsan[tsi-9],makeColor(255,255,100));
				}
				
				
				//
				if ( tsi > 9 ){
					arrReader(tsiatsan[tsi-10],makeColor(240,255,120));
				}
				if ( tsi > 10 ){
					arrReader(tsiatsan[tsi-11],makeColor(220,255,140));
				}
				if ( tsi > 11 ){
					arrReader(tsiatsan[tsi-12],makeColor(200,255,160));
				}
				if ( tsi > 12 ){
					arrReader(tsiatsan[tsi-13],makeColor(180,255,180));
				}
				if ( tsi > 13 ){
					arrReader(tsiatsan[tsi-14],makeColor(150,255,200));
				}
				if ( tsi > 14 ){
					arrReader(tsiatsan[tsi-15],makeColor(120,255,220));
				}
				if ( tsi > 15 ){
					arrReader(tsiatsan[tsi-16],makeColor(100,255,255));
				}

				if ( tsi > 16){
					arrReader(tsiatsan[tsi-17],makeColor(120,240,255));
				} 
				if ( tsi > 17 ){
					arrReader(tsiatsan[tsi-18],makeColor(140,220,255));
				} 
				if ( tsi > 18 ){
					arrReader(tsiatsan[tsi-19],makeColor(160,200,255));
				} 
				if ( tsi > 19 ){
					arrReader(tsiatsan[tsi-20],makeColor(180,180,255));
				} 
				if ( tsi > 20 ){
					arrReader(tsiatsan[tsi-21],makeColor(200,160,255));
				} 
				if ( tsi > 21 ){
					arrReader(tsiatsan[tsi-22],makeColor(220,140,255));
				} 
				if ( tsi > 22 ){
					arrReader(tsiatsan[tsi-23],makeColor(240,120,255));
				} 
				if ( tsi > 23 ){
					arrReader(tsiatsan[tsi-23],makeColor(240,120,255));
				}
				sim.display()			
			tsi++;
			if (tsi == 55){
				tsi = 0;
			}
	}





	var arr1 = [22,23,24,27,28,29,30,31,32,36,21,18,50,67,109,225,224,223,222,221,220,219,218,217,216,65,48,16,17,49,66,108,107,106,105,104,155,156,157,158,159,160,161,162,12,11,10,7,6,5,29,44,61,93,142,201,87,59,42,28,43,60,92,91,90,89,88,141,140,139,138,137,136,135,200,199,198,197,196,195,194,193,37,54,73,79,56,39,38,55,78,77,76,75,74,125,124,123,122,121,120,119,118,181,179,178,177,176,175,174,173,180];
	var arr2 = [22,23,24,27,28,29,30,31,32,36,21,19,51,68,112,111,110,163,226,227,69,70,71,72,117,172,171,170,169,168,167,230,229,228,164,165,166,113,114,115,116,20,52,53,15,64,47,101,102,103,154,215,214,213,212,211,210,209,208,207,206,205,204,203,202,143,94,95,62,45,13,14,46,63,100,99,98,97,96,144,145,146,147,148,149,150,151,152,153,8,9,40,57,81,80,82,182,183,184,185,186,187,188,189,190,191,192,134,86,85,58,41,84,83,133,132,131,130,129,128,127,126];

	var radiation = function(){

		if (radiation_work%2 == 0){
			for(var i in arr2)
			{
				sim.light(arr2[i]).setColor(sim.light(332).getColor().r,sim.light(332).getColor().g,sim.light(i).getColor().b);
			}
			for(var i in arr1)
			{
				sim.light(arr1[i]).setColor(255,255,sim.light(i).getColor().b);
			}
			sim.display();
			radiation_work++;
		}
		else {
			for(var i in arr1)
			{
				sim.light(arr1[i]).setColor(sim.light(332).getColor().r,sim.light(332).getColor().g,sim.light(i).getColor().b);
			}
			sim.display();

			for(var i in arr2)
			{
				sim.light(arr2[i]).setColor(255,255,sim.light(i).getColor().b);
			}
			sim.display();
			radiation_work++;
		}
	}

	//------------------------------------------------------------------------------------------------------------//



	function AllToColor(guyn){
		for (var b in range(0,333)){
			sim.light(b).setColor(guyn)
		}
		sim.display()
	}
	function pluscolorred(delta){
		if (delta) {var x = 15;}
		else {var x = -15;}
			for (var i in range(0,333)){
				if (parseInt(sim.light(i).getColor().r) + x < 256 && parseInt(sim.light(i).getColor().r) + x > -1){
					sim.light(i).setColor(parseInt(sim.light(i).getColor().r) + x,parseInt(sim.light(i).getColor().g),parseInt(sim.light(i).getColor().b));
				}
			}
			sim.display()
	}
	function pluscolorgreen(delta){
		if (delta) {var x = 15;}
		else {var x = -15;}
			for (var i in range(0,333)){
				if (parseInt(sim.light(i).getColor().g) + x < 256 && parseInt(sim.light(i).getColor().g) + x > -1){
					sim.light(i).setColor(parseInt(sim.light(i).getColor().r),parseInt(sim.light(i).getColor().g) + x,parseInt(sim.light(i).getColor().b));
				}
			}
			sim.display()
	}
	function pluscolorblue(delta){
		if (delta) {var x = 15;}
		else {var x = -15;}
			for (var i in range(0,333)){
				if (parseInt(sim.light(i).getColor().b) + x < 256 && parseInt(sim.light(i).getColor().b) + x > -1){
					sim.light(i).setColor(parseInt(sim.light(i).getColor().r),parseInt(sim.light(i).getColor().g),parseInt(sim.light(i).getColor().b)+x);
				}
			}
			sim.display()
	}

	function turnoffall(){
		for (var i in ashxatel){
			if ( ashxatel[i] == true ){

			}
			
		}
	}
	

//---------------------------------------------------------------------------------------------------------------//

var ring1=range(0,37);
var ring2=range(37,69);
var ring3=range(69,113);
var ring4=range(113,167);
var ring5=range(167,231);
var ring6=range(231,297);
var ring7=range(297,333);
var ringer=[ring1,ring2,ring3,ring4,ring5,ring6,ring7];

function oxakner(ring,guyn)
{
	for (i in ring)
	{
		sim.light(i).setColor(guyn);
	}
}

var shufflerings =[ring3,ring4,ring5,ring6];
var xary = function(){
	sim.Helpers.shuffle(shufflerings);
	oxakner(shufflerings[0],makeColor(255,0,0))
	sim.display();
	oxakner(shufflerings[0],makeColor(sim.light(332).getColor().r,sim.light(332).getColor().g,sim.light(332).getColor().b))
}

function haziv(red,green,blue,hamar,hamar2)
{
	guynn=[red,green,blue]
	for (i in ringer)
	{
		oxakner(ringer[i],makeColor(guynn[0],guynn[1],guynn[2]));
		if (guynn[hamar]+35<256)
		{
			guynn[hamar]=guynn[hamar]+35
		}	
		if (guynn[hamar2] && guynn[hamar2]>=0)
		{
		  	guynn[hamar2]=guynn[hamar2]-35
		}
		sim.display()
  	}
	for (i in ringer)
	{
	  	oxakner(ringer[i],makeColor(guynn[0],guynn[1],guynn[2]));
	  	guynn[hamar]=guynn[hamar]-35
	  	sim.display()
	}
}
var astx0 = [0,1,2,3,4];
var popoq = 0;
function Rgg(s,e,r,g,b,time)
{
	for(var i in range(s,e))
	{
		sim.light(i).setColor(r,g,b)
	}
	sim.display(time);
}
function astx(ast,r,g,b,time)
{
	for (var i in ast)
	{
		sim.light(ast[i]).setColor(r,g,b)
	}
}
var dinam = function()
{
	if ( popoq == 0 ){
		astx(astx0,0,0,255);
	}
	if ( popoq == 1 ){
		Rgg(5,21,40,0,0);
	}
	if (popoq == 2){
		Rgg(5,333,0,0,0);
	}
	if (popoq == 3){
		astx(astx0,0,255,0);
	}
	if (popoq == 4){
	Rgg(5,21,40,0,0);
	}
	if (popoq == 5){
	Rgg(21,37,80,0,0);
	}
	if (popoq == 6){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 7){

	astx(astx0,0,0,255);
	}
	if (popoq == 8){
	Rgg(5,21,40,0,0);
	}
	if (popoq == 9){
	Rgg(21,37,80,0,0);
	}
	if (popoq == 10){
	Rgg(37,52,120,0,0);
	}
	if (popoq == 11){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 12){

	astx(astx0,255,255,0);
	}
	if (popoq == 13){
	Rgg(5,21,40,0,0);
	}
	if (popoq == 14){
	Rgg(21,37,80,0,0);
	}
	if (popoq == 15){
	Rgg(37,52,120,0,0);
	}
	if (popoq == 16){
	Rgg(52,69,160,0,0);
	}
	if (popoq == 17){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 18){

	astx(astx0,255,255,0);
	}
	if (popoq == 19){
	Rgg(5,21,40,0,0);
	}
	if (popoq == 20){
	Rgg(21,37,80,0,0);
	}
	if (popoq == 21){
	Rgg(37,52,120,0,0);
	}
	if (popoq == 22){
	Rgg(52,69,160,0,0);
	}
	if (popoq == 23){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 24){

	astx(astx0,125,125,125);
	}
	if (popoq == 25){
	Rgg(5,21,40,0,0);
	}
	if (popoq == 26){
	Rgg(21,37,80,0,0);
	}
	if (popoq == 27){
	Rgg(37,52,120,0,0);
	}
	if (popoq == 28){
	Rgg(52,69,160,0,0);
	}
	if (popoq == 29){
	Rgg(69,113,200,0,0);
	}
	if (popoq == 30){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 31){

	astx(astx0,125,125,125);
	}
	if (popoq == 32){
	Rgg(5,21,40,0,0);
	}
	if (popoq == 33){
	Rgg(21,37,80,0,0);
	}
	if (popoq == 34){
	Rgg(37,52,120,0,0);
	}
	if (popoq == 35){
	Rgg(52,69,160,0,0);
	}
	if (popoq == 36){
	Rgg(69,113,200,0,0);
	}
	if (popoq == 37){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 38){

	astx(astx0,0,255,255);
	}
	if (popoq == 39){
	Rgg(5,21,40,0,0);
	}
	if (popoq == 40){
	Rgg(21,37,80,0,0);
	}
	if (popoq == 41){
	Rgg(37,52,120,0,0);
	}
	if (popoq == 42){
	Rgg(52,69,160,0,0);
	}
	if (popoq == 43){
	Rgg(69,113,200,0,0);
	}
	if (popoq == 44){
	Rgg(113,167,0,0,255);
	}
	if (popoq == 45){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 46){

	astx(astx0,255,0,255);
	}
	if (popoq == 47){
	Rgg(5,21,255,0,0);
	}
	if (popoq == 48){
	Rgg(21,37,255,0,0);
	}
	if (popoq == 49){
	Rgg(37,52,255,0,0);
	}
	if (popoq == 50){
	Rgg(52,69,255,0,0);
	}
	if (popoq == 51){
	Rgg(69,113,255,0,0);
	}
	if (popoq == 52){
	Rgg(113,167,0,0,255);
	}
	if (popoq == 53){
	Rgg(167,231,0,0,255);
	}
	if (popoq == 54){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 55){

	astx(astx0,255,0,255);
	}
	if (popoq == 56){
	Rgg(5,21,255,0,0);
	}
	if (popoq == 57){
	Rgg(21,37,255,0,0);
	}
	if (popoq == 58){
	Rgg(37,52,255,0,0);
	}
	if (popoq == 59){
	Rgg(52,69,255,0,0);
	}
	if (popoq == 60){
	Rgg(69,113,255,0,0);
	}
	if (popoq == 61){
	Rgg(113,167,0,0,255);
	}
	if (popoq == 62){
	Rgg(167,231,0,0,255);
	}
	if (popoq == 63){
	Rgg(231,297,0,0,255);
	}
	if (popoq == 64){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 65){

	astx(astx0,255,0,255);
	}
	if (popoq == 66){
	Rgg(5,21,255,0,0);
	}
	if (popoq == 67){
	Rgg(21,37,255,0,0);
	}
	if (popoq == 68){
	Rgg(37,52,255,0,0);
	}
	if (popoq == 69){
	Rgg(52,69,255,0,0);
	}
	if (popoq == 70){
	Rgg(69,113,255,0,0);
	}
	if (popoq == 71){
	Rgg(113,167,0,0,255);
	}
	if (popoq == 72){
	Rgg(167,231,0,0,255);
	}
	if (popoq == 73){
	Rgg(5,333,0,0,0);
	}
	if (popoq == 74){

	astx(astx0,0,0,0);
	}
	if (popoq == 75){
	Rgg(5,21,255,0,0);
	}
	if (popoq == 76){
	Rgg(21,37,255,0,0);
	}
	if (popoq == 77){
	Rgg(37,52,255,0,0);
	}
	if (popoq == 78){
	Rgg(52,69,255,0,0);
	}
	if (popoq == 79){
	Rgg(69,113,255,0,0);
	}
	if (popoq == 80){
	Rgg(113,167,0,0,255);
	}
	if (popoq == 81){
	Rgg(167,231,0,0,255);
	}
	if (popoq == 82){
		Rgg(231,297,0,0,255);
	}
	if (popoq == 83){
		Rgg(5,333,0,0,0);
	}
	popoq++
	if (popoq == 84){
		popoq = 0
	}
}

	var tsiatsan1 = [331,318,288,287,286,285,284,283,282,281,317,330,316,289,319]; 
	var tsiatsan2 = [332,320,321,291,290,222,221,220,219,218,217,216,280,279,315,329,215,223]; 
	var tsiatsan3 = [322,292,225,224,293,323,159,158,157,156,160,155,214,278,314,313]; 
	var tsiatsan4 = [324,294,227,226,162,161,154,153,213,277,276,312,212]; 
	var tsiatsan5 = [295,228,163,296,229,164,109,108,107,106,105,104,103,152,211,275,311,151,210,102]; 
	var tsiatsan6 = [231,230,165,110,232,167,166,111,67,66,65,64,101,100,150,209,274]; 
	var tsiatsan7 = [233,168,113,112,169,69,114,234,68,50,49,48,47,99,149,98,148,208,273,34,35,33]; 
	var tsiatsan8 = [235,170,115,70,236,171,116,71,53,51,36,52,19,18,17,16,15,32,31,46,63,97,147,207,272,271,206,146,96]; 
	var tsiatsan9 = [237,172,117,72,118,173,73,54,37,22,20,21,5,4,3,0,2,14,13,30,45,62,95,145,205,270,269,204,144,94]; 
	var tsiatsan10 = [238,174,119,74,239,175,120,75,38,23,6,7,1,11,12,29,44,61,93,143,203,268]; 
	var tsiatsan11 = [240,176,121,76,55,241,177,122,77,39,25,26,27,28,43,24,8,9,10,92,142,202,267,201,266,141,91]; 
	var tsiatsan12 = [242,124,123,178,179,78,56,79,80,57,40,58,41,42,59,60,90,140,200,265,89,139,199]; 
	var tsiatsan13 = [297,243,180,125,81,82,83,84,85,86,87,88,198,264,263,197,126,137,138]; 
	var tsiatsan14 = [298,244,181,182,127,128,129,130,131,132,133,134,135,136,196,262,310,195]; 
	var tsiatsan15 = [299,245,246,183,184,185,187,188,186,189,190,191,192,193,194,260,261,308,309]; 
	var tsiatsan16 = [325,326,300,301,302,303,247,248,249,250,251,252,253,254,255,256,257,258,259,304,305,306,307,328,327];
	var datark = []
	var tsiatsan = [tsiatsan1,tsiatsan2,tsiatsan3,tsiatsan4,tsiatsan5,tsiatsan6,tsiatsan7,tsiatsan8,tsiatsan9,tsiatsan10,tsiatsan11,tsiatsan12,tsiatsan13,tsiatsan14,tsiatsan15,tsiatsan16,tsiatsan1,tsiatsan2,tsiatsan3,tsiatsan4,tsiatsan5,tsiatsan6,tsiatsan7,tsiatsan8,tsiatsan9,tsiatsan10,tsiatsan11,tsiatsan12,tsiatsan13,tsiatsan14,tsiatsan15,tsiatsan16,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark,datark];
	function arrReader(arr,guyn){
		for (var i in arr){
			sim.light(arr[i]).setColor(guyn);
		}
	}

//--------------------------------------------------------------------------------------------------------------//

});