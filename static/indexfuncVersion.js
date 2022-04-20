var estructura = [];
var condicion = [];
var rangos =[];
var rangos_tabla = [];
var col_select = ["","","","","","","",""];

SINGLES = {
	'UTG':1,
	'MP':2,
	'CO':3,
	'BTN':4,
	'SB':5,
	'BB':6,
}

DOUBLES = {
	'UTG vs SQ OOP':1,
	'UTG vs SQ IP':2,
	'UTG vs C4bet IP':3,
	'UTG vs C4bet OOP':4,
	'UTG vs 3BET IP':5,
	'UTG vs 3BET OOP':6,
	'MP vs UTG':7,
	'MP vs SQ OOP':8,
	'MP vs SQ IP':9,
	'MP vs C4bet IP':10,
	'MP vs C4bet OOP':11,
	'MP vs 3BET IP':12,
	'MP vs 3BET OOP':13,
	'CO vs UTG':14,
	'CO vs MP':15,
	'CO vs SQ OOP':16,
	'CO vs SQ IP':17,
	'CO vs C4bet IP':18,
	'CO vs C4bet OOP':19,
	'CO vs 3BET IP':20,
	'CO vs 3BET OOP':21,
	'BTN vs UTG':22,
	'BTN vs MP':23,
	'BTN vs CO':24,
	'BTN vs SQ IP':25,
	'BTN vs C4bet IP':26,
	'BTN vs 3BET IP':27,
	'SB vs UTG':28,
	'SB vs MP':29,
	'SB vs CO':30,
	'SB vs BTN':31,
	'SB vs 3BET OOP':32,
	'BB vs UTG':33,
	'BB vs MP':34,
	'BB vs CO':35,
	'BB vs BTN':36,
	'BB vs SB':37,
}
  
TRIPLES = {
	'MP vs UTG vs C4bet IP':1,
	'MP vs UTG vs C4bet OOP':2,
	'MP vs UTG vs Limp':3,
	'CO vs UTG +MP Caller':4,
	'CO vs UTG vs C4bet IP':5,
	'CO vs UTG vs C4bet OOP':6,
	'CO vs UTG vs Limp':7,
	'CO vs MP C4bet IP':8,
	'CO vs MP vs C4bet IP':9,
	'CO vs MP vs C4bet OOP':10,
	'CO vs MP vs Limp':11,
	'BTN vs UTG +MP Caller':12,
	'BTN vs UTG +CO Caller':13,
	'BTN vs UTG vs C4bet IP':14,
	'BTN vs UTG vs Limp':15,
	'BTN vs MP +CO Caller':16,
	'BTN vs MP C4bet IP':17,
	'BTN vs MP vs C4bet IP':18,
	'BTN vs MP vs Limp':19,
	'BTN vs CO C4bet IP':20,
	'BTN vs CO vs C4bet IP':21,
	'BTN vs CO vs Limp':22,
	'SB vs UTG +MP Caller':23,
	'SB vs UTG +CO Caller':24,
	'SB vs UTG +BTN Caller':25,
	'SB vs UTG vs C4bet OOP':26,
	'SB vs UTG vs Limp':27,
	'SB vs MP +CO Caller':28,
	'SB vs MP +BTN Caller':29,
	'SB vs MP C4bet OOP':30,
	'SB vs MP vs C4bet OOP':31,
	'SB vs MP vs Limp':32,
	'SB vs CO +BTN Caller':33,
	'SB vs CO C4bet OOP':34,
	'SB vs CO vs C4bet OOP':35,
	'SB vs CO vs Limp':36,
	'SB vs BTN C4bet OOP':37,
	'SB vs BTN vs C4bet OOP':38,
	'SB vs BTN vs Limp':39,
	'BB vs UTG +MP Caller':40,
	'BB vs UTG +CO Caller':41,
	'BB vs UTG +BTN Caller':42,
	'BB vs UTG +SB Caller':43,
	'BB vs UTG vs 3x':44,
	'BB vs UTG vs 2.5x':45,
	'BB vs UTG vs Limp':46,
	'BB vs MP +CO Caller':47,
	'BB vs MP +BTN Caller':48,
	'BB vs MP +SB Caller':49,
	'BB vs MP C4bet OOP':50,
	'BB vs MP vs 3x':51,
	'BB vs MP vs 2.5x':52,
	'BB vs MP vs Limp':53,
	'BB vs CO +BTN Caller':54,
	'BB vs CO +SB Caller':55,
	'BB vs CO C4bet OOP':56,
	'BB vs CO vs 3x':57,
	'BB vs CO vs 2.5x':58,
	'BB vs CO vs Limp':59,
	'BB vs BTN +SB Caller':60,
	'BB vs BTN C4bet OOP':61,
	'BB vs BTN vs 3x':62,
	'BB vs BTN vs 2.5x':63,
	'BB vs BTN vs Limp':64,
	'BB vs SB C4bet IP':65,
	'BB vs SB vs 3x':66,
	'BB vs SB vs 2.5x':67,
	'BB vs SB vs Limp':68,
}
var	rangos_tabla = [
		['AA','AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s'],
		['AKo','KK','KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s','K2s'],
		['AQo','KQo','QQ','QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s','Q4s','Q3s','Q2s'],
		['AJo','KJo','QJo','JJ','JTs','J9s','J8s','J7s','J6s','J5s','J4s','J3s','J2s'],
		['ATo','KTo','QTo','JTo','TT','T9s','T8s','T7s','T6s','T5s','T4s','T3s','T2s'],
		['A9o','K9o','Q9o','J9o','T9o','99','98s','97s','96s','95s','94s','93s','92s'],
		['A8o','K8o','Q8o','J8o','T8o','98o','88','87s','86s','85s','84s','83s','82s'],
		['A7o','K7o','Q7o','J7o','T7o','97o','87o','77','76s','75s','74s','73s','72s'],
		['A6o','K6o','Q6o','J6o','T6o','96o','86o','76o','66','65s','64s','63s','62s'],
		['A5o','K5o','Q5o','J5o','T5o','95o','85o','75o','65o','55','54s','53s','52s'],
		['A4o','K4o','Q4o','J4o','T4o','94o','84o','74o','64o','54o','44','43s','42s'],
		['A3o','K3o','Q3o','J3o','T3o','93o','83o','73o','63o','53o','43o','33','32s'],
		['A2o','K2o','Q2o','J2o','T2o','92o','82o','72o','62o','52o','42o','32o','22']
	];


/*
window.onload = function(){

cargarcondicion();
crearEstructura();
//llenarRangosTabla();

seleccionPosicion('button_c0r0',0,'UTG');
}*/

function cargarcondicion(){

	estructura.push({
		col_name:"col0",
		col_type:"posicion",
		row:["UTG","","MP","","CO","","BTN","","SB","","BB"]
	});
	estructura.push({
		col_name:"col1",
		col_type:"posicion",
		row:["","vs UTG","","vs MP","","vs CO","","vs BTN","","vs SB"]
	});
	estructura.push({
		col_name:"col2",
		col_type:"posicion",
		row:["+SB Caller","","+BB Caller","","+MP Caller","","+CO Caller","","+BTN Caller","","+SB Caller"]
	});	
	estructura.push({
		col_name:"col3",
		col_type:"accion",
		row:["C4bet IP","","C4bet OOP","","vs SQ OOP","","vs SQ IP","","vs C4bet IP","","vs C4bet OOP"]
	});
	estructura.push({
		col_name:"col4",
		col_type:"accion",
		row:["vs 3BET IP","","vs 3BET OOP"]
	});
	estructura.push({
		col_name:"col5",
		col_type:"porcentaje",
		row:["vs 4x","","vs 3.5x","","vs 3x","","vs 2.5x","","vs 2x","","vs Limp"]
	});

	estructura.push({
		col_name:"col6",
		col_type:"porcentaje",
		row:["vs 3%","","vs 4.8%","","vs 7.4%","","vs 10%","","vs 12%","","vs 15%","","vs 18%","","vs 22%","","vs 25%","","vs 6%","","vs 7.4%"]
	});
	estructura.push({
		col_name:"col7",
		col_type:"monto",
		row:["","vs 8 bb","","vs 9 bb","","vs 10 bb","","vs 11 bb","","vs 12 bb","","vs 13 bb","","vs 14 bb"]
	});



// ------------------ INICIO PREVIAS ----------------- //
// ------------------ INICIO PREVIAS ----------------- //
// ------------------ INICIO PREVIAS ----------------- //
// ------------------ INICIO PREVIAS ----------------- //

	condicion.push({
		condicion_name:"UTG OR",
		col_selected:["UTG","","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	
				[3,[4,5,6,7,8,9,10]],
				[4,[0,1,2]]
		]
		});
		
	condicion.push({
		condicion_name:"MP OR",
		col_selected:["MP","","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[1,[0,1]],
				[3,[4,5,6,7,8,9,10]],
				[4,[0,1,2]]
		]
		});

	condicion.push({
		condicion_name:"CO OR",
		col_selected:["CO","","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[1,[0,1,2,3]],
				[3,[4,5,6,7,8,9,10]],

				[4,[0,1,2]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN OR",
		col_selected:["BTN","","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[1,[0,1,2,3,4,5]],
				[3,[6,7,8]],
				[4,[0]]
		]
		});
	
	condicion.push({
		condicion_name:"SB OR",
		col_selected:["SB","","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[1,[0,1,2,3,4,5,6,7]],
				[4,[2]]
		]
		});
			
	condicion.push({
		condicion_name:"BB vs UTG vs 3x",
		col_selected:["BB","","","","","","",""],
		col_deleted:[],
		pre_selected:[	[1,1],
						[5,4]
		],
		cell:[	[1,[0,1,2,3,4,5,6,7,8,9]],
				[2,[4,5,6,7,8,9,10]],
				[5,[4,5,6,7,10]]
		]
		});
		
// ------------------ INICIO UTG ---------------- //
// ------------------ INICIO UTG ---------------- //
// ------------------ INICIO UTG ---------------- //
// ------------------ INICIO UTG ---------------- //

	// UTG vs C4bet
	// UTG vs C4bet
	// UTG vs C4bet
	// UTG vs C4bet
	// UTG vs C4bet

	condicion.push({
		condicion_name:"UTG vs SQ OOP",
		col_selected:["UTG","","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs SQ IP",
		col_selected:["UTG","","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs C4bet IP",
		col_selected:["UTG","","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"UTG vs C4bet OOP",
		col_selected:["UTG","","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[ ],
		cell:[]
		});
				
	// UTG vs C4bet IP
		
	condicion.push({
		condicion_name:"UTG vs C4bet IP vs 3%",
		col_selected:["UTG","","","vs C4bet IP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs C4bet IP vs 4.8%",
		col_selected:["UTG","","","vs C4bet IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs C4bet IP vs 7.4%",
		col_selected:["UTG","","","vs C4bet IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// UTG vs C4bet OOP
		
	condicion.push({
		condicion_name:"UTG vs C4bet OOP vs 3%",
		col_selected:["UTG","","","vs C4bet OOP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs C4bet OOP vs 4.8%",
		col_selected:["UTG","","","vs C4bet OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs C4bet OOP vs 7.4%",
		col_selected:["UTG","","","vs C4bet OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// UTG vs 3BET IP
	// UTG vs 3BET IP
	// UTG vs 3BET IP
	// UTG vs 3BET IP
	// UTG vs 3BET IP
	// UTG vs 3BET IP
	
	condicion.push({
		condicion_name:"UTG vs 3BET IP",
		col_selected:["UTG","","","","vs 3BET IP","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 3% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 3%",""],
		col_deleted:[],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 7.4% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 10% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 10%",""],
		col_deleted:[],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 12% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 12%",""],
		col_deleted:[],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});

		
	// UTG vs 3BET IP vs 4.8%
	
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 4.8% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 4.8%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// UTG vs 3BET IP vs 3%
	
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 3% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 3%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 3% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 3%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 3% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 3%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 3% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 3%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 3% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 3%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 3% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 3%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 3% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 3%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
	
// UTG vs 3BET IP vs 7.4%
	
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 7.4% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 7.4%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 7.4% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 7.4%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 7.4% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 7.4%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 7.4% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 7.4%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 7.4% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 7.4%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 7.4% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 7.4%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 7.4% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 7.4%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// UTG vs 3BET IP vs 10%
	
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 10% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 10%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 10% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 10%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 10% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 10%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 10% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 10%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 10% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 10%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 10% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 10%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 10% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 10%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// UTG vs 3BET IP vs 12%
	
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 12% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 12%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 12% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 12%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 12% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 12%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 12% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 12%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 12% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 12%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 12% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 12%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET IP vs 12% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET IP","","vs 12%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// UTG vs 3BET OOP
	// UTG vs 3BET OOP
	// UTG vs 3BET OOP
	// UTG vs 3BET OOP
	// UTG vs 3BET OOP
	
	condicion.push({
		condicion_name:"UTG vs 3BET OOP",
		col_selected:["UTG","","","","vs 3BET OOP","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 4.8% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 3% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 3%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 7.4% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 10% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 10%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 12% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 12%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
	
	// UTG vs 3BET OOP vs 4.8%
	
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 4.8% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 4.8%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 4.8% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 4.8%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 4.8% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 4.8%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 4.8% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 4.8%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 4.8% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 4.8%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 4.8% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 4.8%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 4.8% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 4.8%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

// UTG vs 3BET OOP vs 3%
	
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 3% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 3%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 3% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 3%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 3% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 3%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 3% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 3%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 3% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 3%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 3% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 3%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 3% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 3%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
	
// UTG vs 3BET OOP vs 7.4%
	
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 7.4% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 7.4%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 7.4% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 7.4%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 7.4% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 7.4%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 7.4% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 7.4%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 7.4% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 7.4%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 7.4% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 7.4%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 7.4% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 7.4%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// UTG vs 3BET OOP vs 10%
	
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 10% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 10%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 10% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 10%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 10% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 10%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 10% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 10%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 10% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 10%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 10% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 10%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 10% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 10%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// UTG vs 3BET OOP vs 12%
	
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 12% / vs 8bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 12%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 12% / vs 9bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 12%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 12% / vs 10bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 12%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 12% / vs 11bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 12%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 12% / vs 12bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 12%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 12% / vs 13bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 12%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"UTG vs 3BET OOP vs 12% / vs 14bb",
		col_selected:["UTG","","","","vs 3BET OOP","","vs 12%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// ------------------ INICIO MP ----------------- //
// ------------------ INICIO MP ----------------- //
// ------------------ INICIO MP ----------------- //
// ------------------ INICIO MP ----------------- //
		
		
	condicion.push({
		condicion_name:"MP vs UTG",
		col_selected:["MP","vs UTG","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[3,[8,9,10]],
				[5,[10]]
		]
		});

	// MP vs SQ Y C4BET
	// MP vs SQ Y C4BET
	// MP vs SQ Y C4BET
	// MP vs SQ Y C4BET
	// MP vs SQ Y C4BET
	
	
	condicion.push({
		condicion_name:"MP vs SQ OOP",
		col_selected:["MP","","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"MP vs SQ IP",
		col_selected:["MP","","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs C4bet IP",
		col_selected:["MP","","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs C4bet OOP",
		col_selected:["MP","","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
						
	// MP vs UTG
	// MP vs UTG
	// MP vs UTG
	// MP vs UTG
	// MP vs UTG
	
	
	condicion.push({
		condicion_name:"MP vs UTG C4bet IP",
		col_selected:["MP","vs UTG","","C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG C4bet OOP",
		col_selected:["MP","vs UTG","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ OOP vs 4.8%",
		col_selected:["MP","vs UTG","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ IP vs 4.8%",
		col_selected:["MP","vs UTG","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});


	condicion.push({
		condicion_name:"MP vs UTG vs C4bet IP",
		col_selected:["MP","vs UTG","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"MP vs UTG vs C4bet OOP",
		col_selected:["MP","vs UTG","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs 3.5x",
		col_selected:["MP","vs UTG","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs 3x",
		col_selected:["MP","vs UTG","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs 2.5x",
		col_selected:["MP","vs UTG","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs 2x",
		col_selected:["MP","vs UTG","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs Limp",
		message:"* Si el rival es tight, incluso foldear AQs, JJ-TT.<br>* Si existe mas de un limper, el rango de rol debe ser mas tight y eliminar las manos border.",
		col_selected:["MP","vs UTG","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// MP vs UTG vs SQ OOP
	// MP vs UTG vs SQ OOP
	// MP vs UTG vs SQ OOP
	// MP vs UTG vs SQ OOP

		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ OOP vs 4.8%",
		col_selected:["MP","vs UTG","","vs SQ OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ OOP vs 7.4%",
		col_selected:["MP","vs UTG","","vs SQ OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ OOP vs 10%",
		col_selected:["MP","vs UTG","","vs SQ OOP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ OOP vs 12%",
		col_selected:["MP","vs UTG","","vs SQ OOP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// MP vs UTG vs SQ IP
	// MP vs UTG vs SQ IP
	// MP vs UTG vs SQ IP
	// MP vs UTG vs SQ IP

		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ IP vs 4.8%",
		col_selected:["MP","vs UTG","","vs SQ IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ IP vs 7.4%",
		col_selected:["MP","vs UTG","","vs SQ IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ IP vs 10%",
		col_selected:["MP","vs UTG","","vs SQ IP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs SQ IP vs 12%",
		col_selected:["MP","vs UTG","","vs SQ IP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// MP vs UTG vs C4bet IP
	// MP vs UTG vs C4bet IP
	// MP vs UTG vs C4bet IP
	// MP vs UTG vs C4bet IP

		
	condicion.push({
		condicion_name:"MP vs UTG vs C4bet IP vs 3%",
		col_selected:["MP","vs UTG","","vs C4bet IP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs C4bet IP vs 4.8%",
		col_selected:["MP","vs UTG","","vs C4bet IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs C4bet IP vs 7.4%",
		col_selected:["MP","vs UTG","","vs C4bet IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// MP vs UTG vs C4bet OOP
	// MP vs UTG vs C4bet OOP
	// MP vs UTG vs C4bet OOP
	// MP vs UTG vs C4bet OOP
		
	condicion.push({
		condicion_name:"MP vs UTG vs C4bet OOP vs 3%",
		col_selected:["MP","vs UTG","","vs C4bet OOP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs C4bet OOP vs 4.8%",
		col_selected:["MP","vs UTG","","vs C4bet OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs UTG vs C4bet OOP vs 7.4%",
		col_selected:["MP","vs UTG","","vs C4bet OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// MP vs 3BET IP
	// MP vs 3BET IP
	// MP vs 3BET IP
	// MP vs 3BET IP
	// MP vs 3BET IP
	// MP vs 3BET IP
	
	condicion.push({
		condicion_name:"MP vs 3BET IP",
		col_selected:["MP","","","","vs 3BET IP","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 3% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 3%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 7.4% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 7.4%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 10% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 10%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 12% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 12%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});

		
	// MP vs 3BET IP vs 4.8%
	
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 8bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 9bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 10bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 11bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 13bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 4.8% / vs 14bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 4.8%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// MP vs 3BET IP vs 3%
	
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 3% / vs 8bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 3%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 3% / vs 9bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 3%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 3% / vs 10bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 3%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 3% / vs 11bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 3%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 3% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 3%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 3% / vs 13bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 3%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 3% / vs 14bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 3%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
	
// MP vs 3BET IP vs 7.4%
	
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 7.4% / vs 8bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 7.4%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 7.4% / vs 9bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 7.4%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 7.4% / vs 10bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 7.4%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 7.4% / vs 11bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 7.4%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 7.4% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 7.4%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 7.4% / vs 13bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 7.4%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 7.4% / vs 14bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 7.4%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// MP vs 3BET IP vs 10%
	
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 10% / vs 8bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 10%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 10% / vs 9bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 10%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 10% / vs 10bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 10%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 10% / vs 11bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 10%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 10% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 10%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 10% / vs 13bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 10%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 10% / vs 14bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 10%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// MP vs 3BET IP vs 12%
	
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 12% / vs 8bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 12%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 12% / vs 9bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 12%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 12% / vs 10bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 12%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 12% / vs 11bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 12%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 12% / vs 12bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 12%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 12% / vs 13bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 12%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET IP vs 12% / vs 14bb",
		col_selected:["MP","","","","vs 3BET IP","","vs 12%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	// MP vs 3BET OOP
	// MP vs 3BET OOP
	// MP vs 3BET OOP
	// MP vs 3BET OOP
	// MP vs 3BET OOP
	
	condicion.push({
		condicion_name:"MP vs 3BET OOP",
		col_selected:["MP","","","","vs 3BET OOP","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 4.8% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 4.8%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 3% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 3%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 7.4% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 7.4%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 10% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 10%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 12% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 12%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
	
	// MP vs 3BET OOP vs 4.8%
	
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 4.8% / vs 8bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 4.8%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 4.8% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 4.8%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 4.8% / vs 10bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 4.8%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 4.8% / vs 11bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 4.8%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 4.8% / vs 12bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 4.8%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 4.8% / vs 13bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 4.8%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 4.8% / vs 14bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 4.8%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});

// MP vs 3BET OOP vs 3%
	
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 3% / vs 8bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 3%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 3% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 3%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 3% / vs 10bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 3%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 3% / vs 11bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 3%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 3% / vs 12bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 3%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 3% / vs 13bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 3%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 3% / vs 14bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 3%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
	
// MP vs 3BET OOP vs 7.4%
	
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 7.4% / vs 8bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 7.4%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 7.4% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 7.4%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 7.4% / vs 10bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 7.4%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 7.4% / vs 11bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 7.4%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 7.4% / vs 12bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 7.4%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 7.4% / vs 13bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 7.4%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 7.4% / vs 14bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 7.4%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// MP vs 3BET OOP vs 10%
	
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 10% / vs 8bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 10%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 10% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 10%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 10% / vs 10bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 10%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 10% / vs 11bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 10%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 10% / vs 12bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 10%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 10% / vs 13bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 10%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 10% / vs 14bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 10%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// MP vs 3BET OOP vs 12%
	
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 12% / vs 8bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 12%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 12% / vs 9bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 12%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 12% / vs 10bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 12%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 12% / vs 11bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 12%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 12% / vs 12bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 12%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 12% / vs 13bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 12%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"MP vs 3BET OOP vs 12% / vs 14bb",
		col_selected:["MP","","","","vs 3BET OOP","","vs 12%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// --------------- INICIO CO -------------- //
// --------------- INICIO CO -------------- //
// --------------- INICIO CO -------------- //
// --------------- INICIO CO -------------- //


		
	condicion.push({
		condicion_name:"CO vs UTG",
		col_selected:["CO","vs UTG","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[2,[4]],
				[3,[8,9,10]],
				[5,[10]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs MP",
		col_selected:["CO","vs MP","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[3,[0,3,8,9,10]],
				[5,[10]]
		]
		});



    // CO VS SQUEEZE
    // CO VS SQUEEZE
    // CO VS SQUEEZE
    // CO VS SQUEEZE
    // CO VS SQUEEZE
    
    	condicion.push({
		condicion_name:"CO vs SQ OOP",
		message:"* Tabla para jugar vs Call de BTN y Squeeze de alguna ciega",
		col_selected:["CO","","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		
		});

    	condicion.push({
		condicion_name:"CO vs SQ IP",
		message:"* Tabla para jugar vs Call de SB y Squeeze de BB",
		col_selected:["CO","","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		
		});
		
    	condicion.push({
		condicion_name:"CO vs C4bet IP",
		col_selected:["CO","","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		
		});
		
    	condicion.push({
		condicion_name:"CO vs C4bet OOP",
		col_selected:["CO","","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		
		});
		
				
	// CO vs UTG
	// CO vs UTG
	// CO vs UTG
	// CO vs UTG
	// CO vs UTG
	
	condicion.push({
		condicion_name:"CO vs UTG +MP Caller",
		col_selected:["CO","vs UTG","+MP Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
	
	condicion.push({
		condicion_name:"CO vs UTG C4bet IP",
		col_selected:["CO","vs UTG","","C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG C4bet OOP",
		col_selected:["CO","vs UTG","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ OOP vs 4.8%",
		col_selected:["CO","vs UTG","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});
		
		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ IP vs 7.4%",
		col_selected:["CO","vs UTG","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,4]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});


	condicion.push({
		condicion_name:"CO vs UTG vs C4bet IP",
		col_selected:["CO","vs UTG","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"CO vs UTG vs C4bet OOP",
		col_selected:["CO","vs UTG","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs 3.5x",
		col_selected:["CO","vs UTG","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs 3x",
		col_selected:["CO","vs UTG","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs 2.5x",
		col_selected:["CO","vs UTG","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs 2x",
		col_selected:["CO","vs UTG","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs Limp",
		message:"* Si el rival es tight, incluso foldear AQs, JJ-TT.<br>* Si existe mas de un limper, el rango de rol debe ser mas tight y eliminar las manos border.",
		col_selected:["CO","vs UTG","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs UTG vs SQ OOP
	// CO vs UTG vs SQ OOP
	// CO vs UTG vs SQ OOP
	// CO vs UTG vs SQ OOP

		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ OOP vs 4.8%",
		col_selected:["CO","vs UTG","","vs SQ OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ OOP vs 7.4%",
		col_selected:["CO","vs UTG","","vs SQ OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ OOP vs 10%",
		col_selected:["CO","vs UTG","","vs SQ OOP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ OOP vs 12%",
		col_selected:["CO","vs UTG","","vs SQ OOP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs UTG vs SQ IP
	// CO vs UTG vs SQ IP
	// CO vs UTG vs SQ IP
	// CO vs UTG vs SQ IP

		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ IP vs 4.8%",
		col_selected:["CO","vs UTG","","vs SQ IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ IP vs 7.4%",
		col_selected:["CO","vs UTG","","vs SQ IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ IP vs 10%",
		col_selected:["CO","vs UTG","","vs SQ IP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs SQ IP vs 12%",
		col_selected:["CO","vs UTG","","vs SQ IP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// CO vs UTG vs C4bet IP
	// CO vs UTG vs C4bet IP
	// CO vs UTG vs C4bet IP
	// CO vs UTG vs C4bet IP

		
	condicion.push({
		condicion_name:"CO vs UTG vs C4bet IP vs 3%",
		col_selected:["CO","vs UTG","","vs C4bet IP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs C4bet IP vs 4.8%",
		col_selected:["CO","vs UTG","","vs C4bet IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs C4bet IP vs 7.4%",
		col_selected:["CO","vs UTG","","vs C4bet IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs UTG vs C4bet OOP
	// CO vs UTG vs C4bet OOP
	// CO vs UTG vs C4bet OOP
	// CO vs UTG vs C4bet OOP
		
	condicion.push({
		condicion_name:"CO vs UTG vs C4bet OOP vs 3%",
		col_selected:["CO","vs UTG","","vs C4bet OOP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs C4bet OOP vs 4.8%",
		col_selected:["CO","vs UTG","","vs C4bet OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs UTG vs C4bet OOP vs 7.4%",
		col_selected:["CO","vs UTG","","vs C4bet OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs MP
	// CO vs MP
	// CO vs MP
	// CO vs MP
	// CO vs MP
	
	
	condicion.push({
		condicion_name:"CO vs MP C4bet IP",
		col_selected:["CO","vs MP","","C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP C4bet OOP",
		col_selected:["CO","vs MP","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs SQ OOP vs 4.8%",
		col_selected:["CO","vs MP","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});
		
		
	condicion.push({
		condicion_name:"CO vs MP vs SQ IP vs 7.4%",
		col_selected:["CO","vs MP","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,4]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});


	condicion.push({
		condicion_name:"CO vs MP vs C4bet IP",
		col_selected:["CO","vs MP","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"CO vs MP vs C4bet OOP",
		col_selected:["CO","vs MP","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs 3.5x",
		col_selected:["CO","vs MP","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs 3x",
		col_selected:["CO","vs MP","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs 2.5x",
		col_selected:["CO","vs MP","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs 2x",
		col_selected:["CO","vs MP","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs Limp",
		message:"* Si el rival es tight, incluso foldear AQs, JJ-TT.<br>* Si existe mas de un limper, el rango de rol debe ser mas tight y eliminar las manos border.",
		col_selected:["CO","vs MP","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs MP vs SQ OOP
	// CO vs MP vs SQ OOP
	// CO vs MP vs SQ OOP
	// CO vs MP vs SQ OOP

		
	condicion.push({
		condicion_name:"CO vs MP vs SQ OOP vs 4.8%",
		col_selected:["CO","vs MP","","vs SQ OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs SQ OOP vs 7.4%",
		col_selected:["CO","vs MP","","vs SQ OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs SQ OOP vs 10%",
		col_selected:["CO","vs MP","","vs SQ OOP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs SQ OOP vs 12%",
		col_selected:["CO","vs MP","","vs SQ OOP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs MP vs SQ IP
	// CO vs MP vs SQ IP
	// CO vs MP vs SQ IP
	// CO vs MP vs SQ IP

		
	condicion.push({
		condicion_name:"CO vs MP vs SQ IP vs 4.8%",
		col_selected:["CO","vs MP","","vs SQ IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs SQ IP vs 7.4%",
		col_selected:["CO","vs MP","","vs SQ IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs SQ IP vs 10%",
		col_selected:["CO","vs MP","","vs SQ IP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs SQ IP vs 12%",
		col_selected:["CO","vs MP","","vs SQ IP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// CO vs MP vs C4bet IP
	// CO vs MP vs C4bet IP
	// CO vs MP vs C4bet IP
	// CO vs MP vs C4bet IP

		
	condicion.push({
		condicion_name:"CO vs MP vs C4bet IP vs 3%",
		col_selected:["CO","vs MP","","vs C4bet IP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs C4bet IP vs 4.8%",
		col_selected:["CO","vs MP","","vs C4bet IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs C4bet IP vs 7.4%",
		col_selected:["CO","vs MP","","vs C4bet IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs MP vs C4bet OOP
	// CO vs MP vs C4bet OOP
	// CO vs MP vs C4bet OOP
	// CO vs MP vs C4bet OOP
		
	condicion.push({
		condicion_name:"CO vs MP vs C4bet OOP vs 3%",
		col_selected:["CO","vs MP","","vs C4bet OOP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs C4bet OOP vs 4.8%",
		col_selected:["CO","vs MP","","vs C4bet OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs MP vs C4bet OOP vs 7.4%",
		col_selected:["CO","vs MP","","vs C4bet OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs 3BET IP
	// CO vs 3BET IP
	// CO vs 3BET IP
	// CO vs 3BET IP
	// CO vs 3BET IP
	// CO vs 3BET IP
	
	condicion.push({
		condicion_name:"CO vs 3BET IP",
		col_selected:["CO","","","","vs 3BET IP","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 3% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 3%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 7.4% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 7.4%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 10% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 10%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 12% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 12%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,9]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});

		
	// CO vs 3BET IP vs 4.8%
	
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 8bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 9bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 10bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 11bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 13bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 4.8% / vs 14bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 4.8%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// CO vs 3BET IP vs 3%
	
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 3% / vs 8bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 3%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 3% / vs 9bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 3%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 3% / vs 10bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 3%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 3% / vs 11bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 3%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 3% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 3%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 3% / vs 13bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 3%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 3% / vs 14bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 3%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
	
// CO vs 3BET IP vs 7.4%
	
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 7.4% / vs 8bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 7.4%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 7.4% / vs 9bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 7.4%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 7.4% / vs 10bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 7.4%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 7.4% / vs 11bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 7.4%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 7.4% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 7.4%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 7.4% / vs 13bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 7.4%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 7.4% / vs 14bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 7.4%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// CO vs 3BET IP vs 10%
	
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 10% / vs 8bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 10%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 10% / vs 9bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 10%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 10% / vs 10bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 10%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 10% / vs 11bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 10%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 10% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 10%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 10% / vs 13bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 10%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 10% / vs 14bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 10%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// CO vs 3BET IP vs 12%
	
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 12% / vs 8bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 12%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 12% / vs 9bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 12%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 12% / vs 10bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 12%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 12% / vs 11bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 12%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 12% / vs 12bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 12%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 12% / vs 13bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 12%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET IP vs 12% / vs 14bb",
		col_selected:["CO","","","","vs 3BET IP","","vs 12%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	// CO vs 3BET OOP
	// CO vs 3BET OOP
	// CO vs 3BET OOP
	// CO vs 3BET OOP
	// CO vs 3BET OOP
	
	condicion.push({
		condicion_name:"CO vs 3BET OOP",
		col_selected:["CO","","","","vs 3BET OOP","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 4.8% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 4.8%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 3% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 3%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 7.4% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 7.4%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 10% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 10%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 12% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 12%",""],
		col_deleted:[[1]],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
	
	// CO vs 3BET OOP vs 4.8%
	
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 4.8% / vs 8bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 4.8%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 4.8% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 4.8%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 4.8% / vs 10bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 4.8%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 4.8% / vs 11bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 4.8%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 4.8% / vs 12bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 4.8%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 4.8% / vs 13bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 4.8%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 4.8% / vs 14bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 4.8%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});

// CO vs 3BET OOP vs 3%
	
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 3% / vs 8bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 3%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 3% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 3%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 3% / vs 10bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 3%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 3% / vs 11bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 3%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 3% / vs 12bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 3%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 3% / vs 13bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 3%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 3% / vs 14bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 3%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
	
// CO vs 3BET OOP vs 7.4%
	
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 7.4% / vs 8bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 7.4%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 7.4% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 7.4%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 7.4% / vs 10bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 7.4%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 7.4% / vs 11bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 7.4%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 7.4% / vs 12bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 7.4%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 7.4% / vs 13bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 7.4%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 7.4% / vs 14bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 7.4%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// CO vs 3BET OOP vs 10%
	
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 10% / vs 8bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 10%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 10% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 10%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 10% / vs 10bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 10%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 10% / vs 11bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 10%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 10% / vs 12bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 10%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 10% / vs 13bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 10%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 10% / vs 14bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 10%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
// CO vs 3BET OOP vs 12%
	
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 12% / vs 8bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 12%","vs 8 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 12% / vs 9bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 12%","vs 9 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 12% / vs 10bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 12%","vs 10 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 12% / vs 11bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 12%","vs 11 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 12% / vs 12bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 12%","vs 12 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 12% / vs 13bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 12%","vs 13 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"CO vs 3BET OOP vs 12% / vs 14bb",
		col_selected:["CO","","","","vs 3BET OOP","","vs 12%","vs 14 bb"],
		col_deleted:[[1]],
		pre_selected:[],
		cell:[]
		});

		
// --------------- INICIO BTN -------------- //
// --------------- INICIO BTN -------------- //
// --------------- INICIO BTN -------------- //
// --------------- INICIO BTN -------------- //
// --------------- INICIO BTN -------------- //
		
	condicion.push({
		condicion_name:"BTN vs UTG",
		col_selected:["BTN","vs UTG","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[2,[4,5,6]],
				[3,[8]],
				[5,[10]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP",
		col_selected:["BTN","vs MP","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[2,[5,6]],
				[3,[0,1,8]],
				[5,[10]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO",
		col_selected:["BTN","vs CO","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[3,[0,1,8]],
				[5,[10]]
		]
		});
		
	// BTN vs UTG
	// BTN vs UTG
	// BTN vs UTG
	// BTN vs UTG
	// BTN vs UTG
	
	condicion.push({
		condicion_name:"BTN vs UTG +MP Caller",
		col_selected:["BTN","vs UTG","+MP Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BTN vs UTG +CO Caller",
		col_selected:["BTN","vs UTG","+CO Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
			
	condicion.push({
		condicion_name:"BTN vs UTG C4bet IP",
		col_selected:["BTN","vs UTG","","C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
	condicion.push({
		condicion_name:"BTN vs UTG vs SQ IP vs 4.8%",
		col_selected:["BTN","vs UTG","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});

	condicion.push({
		condicion_name:"BTN vs UTG vs C4bet IP",
		col_selected:["BTN","vs UTG","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs 3.5x",
		col_selected:["BTN","vs UTG","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs 3x",
		col_selected:["BTN","vs UTG","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs 2.5x",
		col_selected:["BTN","vs UTG","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs 2x",
		col_selected:["BTN","vs UTG","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs Limp",
		message:"* Si el rival es tight, incluso foldear AQs AJs JJ-99.<br>* Si existe mas de un limper, el rango de rol debe ser mas tight y eliminar las manos border.",
		col_selected:["BTN","vs UTG","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
	
	// BTN SQUEEZE
	// BTN SQUEEZE
	
	condicion.push({
		condicion_name:"BTN vs SQ IP",
		col_selected:["BTN","","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		
		});

	condicion.push({
		condicion_name:"BTN vs C4bet IP",
		col_selected:["BTN","","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		
		});
				
	// BTN vs UTG vs SQ IP
	// BTN vs UTG vs SQ IP
	// BTN vs UTG vs SQ IP
	// BTN vs UTG vs SQ IP

		
	condicion.push({
		condicion_name:"BTN vs UTG vs SQ IP vs 4.8%",
		col_selected:["BTN","vs UTG","","vs SQ IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs SQ IP vs 7.4%",
		col_selected:["BTN","vs UTG","","vs SQ IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs SQ IP vs 10%",
		col_selected:["BTN","vs UTG","","vs SQ IP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs SQ IP vs 12%",
		col_selected:["BTN","vs UTG","","vs SQ IP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// BTN vs UTG vs C4bet IP
	// BTN vs UTG vs C4bet IP
	// BTN vs UTG vs C4bet IP
	// BTN vs UTG vs C4bet IP

		
	condicion.push({
		condicion_name:"BTN vs UTG vs C4bet IP vs 3%",
		col_selected:["BTN","vs UTG","","vs C4bet IP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs C4bet IP vs 4.8%",
		col_selected:["BTN","vs UTG","","vs C4bet IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs UTG vs C4bet IP vs 7.4%",
		col_selected:["BTN","vs UTG","","vs C4bet IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// BTN vs MP
	// BTN vs MP
	// BTN vs MP
	// BTN vs MP
	// BTN vs MP
	

	condicion.push({
		condicion_name:"BTN vs MP +CO Caller",
		col_selected:["BTN","vs MP","+CO Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
			
	condicion.push({
		condicion_name:"BTN vs MP C4bet IP",
		col_selected:["BTN","vs MP","","C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
	condicion.push({
		condicion_name:"BTN vs MP vs SQ IP vs 4.8%",
		col_selected:["BTN","vs MP","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});

	condicion.push({
		condicion_name:"BTN vs MP vs C4bet IP",
		col_selected:["BTN","vs MP","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs 3.5x",
		col_selected:["BTN","vs MP","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs 3x",
		col_selected:["BTN","vs MP","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs 2.5x",
		col_selected:["BTN","vs MP","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs 2x",
		col_selected:["BTN","vs MP","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs Limp",
		message:"* Si el rival es tight, incluso foldear AQs AJs JJ-99.<br>* Si existe mas de un limper, el rango de rol debe ser mas tight y eliminar las manos border.",
		col_selected:["BTN","vs MP","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
			

	// BTN vs MP vs SQ IP
	// BTN vs MP vs SQ IP
	// BTN vs MP vs SQ IP
	// BTN vs MP vs SQ IP

		
	condicion.push({
		condicion_name:"BTN vs MP vs SQ IP vs 4.8%",
		col_selected:["BTN","vs MP","","vs SQ IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs SQ IP vs 7.4%",
		col_selected:["BTN","vs MP","","vs SQ IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs SQ IP vs 10%",
		col_selected:["BTN","vs MP","","vs SQ IP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs SQ IP vs 12%",
		col_selected:["BTN","vs MP","","vs SQ IP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// BTN vs MP vs C4bet IP
	// BTN vs MP vs C4bet IP
	// BTN vs MP vs C4bet IP
	// BTN vs MP vs C4bet IP

		
	condicion.push({
		condicion_name:"BTN vs MP vs C4bet IP vs 3%",
		col_selected:["BTN","vs MP","","vs C4bet IP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs C4bet IP vs 4.8%",
		col_selected:["BTN","vs MP","","vs C4bet IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs C4bet IP vs 7.4%",
		col_selected:["BTN","vs MP","","vs C4bet IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// BTN vs MP
	// BTN vs MP
	// BTN vs MP
	// BTN vs MP
	// BTN vs MP
	

	condicion.push({
		condicion_name:"BTN vs MP +CO Caller",
		col_selected:["BTN","vs MP","+CO Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
			
	condicion.push({
		condicion_name:"BTN vs MP C4bet IP",
		col_selected:["BTN","vs MP","","C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
	condicion.push({
		condicion_name:"BTN vs MP vs SQ IP vs 4.8%",
		col_selected:["BTN","vs MP","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});

	condicion.push({
		condicion_name:"BTN vs MP vs C4bet IP vs 3%",
		col_selected:["BTN","vs MP","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,0]
						],
		cell:[	[6,[0,1,2,3,4]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs 3.5x",
		col_selected:["BTN","vs MP","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs 3x",
		col_selected:["BTN","vs MP","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs 2.5x",
		col_selected:["BTN","vs MP","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs 2x",
		col_selected:["BTN","vs MP","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs MP vs Limp",
		col_selected:["BTN","vs MP","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// BTN vs CO
	// BTN vs CO
	// BTN vs CO
	// BTN vs CO
	// BTN vs CO
	

	condicion.push({
		condicion_name:"BTN vs CO +CO Caller",
		col_selected:["BTN","vs CO","+CO Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
			
	condicion.push({
		condicion_name:"BTN vs CO C4bet IP",
		col_selected:["BTN","vs CO","","C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
	condicion.push({
		condicion_name:"BTN vs CO vs SQ IP vs 7.4%",
		col_selected:["BTN","vs CO","","vs SQ IP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,4]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});

	condicion.push({
		condicion_name:"BTN vs CO vs C4bet IP",
		col_selected:["BTN","vs CO","","vs C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs 3.5x",
		col_selected:["BTN","vs CO","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs 3x",
		col_selected:["BTN","vs CO","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs 2.5x",
		col_selected:["BTN","vs CO","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs 2x",
		col_selected:["BTN","vs CO","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs Limp",
		message:"* Si el rival es tight, incluso foldear AQs AJs JJ-99.<br>* Si existe mas de un limper, el rango de rol debe ser mas tight y eliminar las manos border.",
		col_selected:["BTN","vs CO","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// BTN vs CO vs SQ IP
	// BTN vs CO vs SQ IP
	// BTN vs CO vs SQ IP
	// BTN vs CO vs SQ IP

		
	condicion.push({
		condicion_name:"BTN vs CO vs SQ IP vs 4.8%",
		col_selected:["BTN","vs CO","","vs SQ IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs SQ IP vs 7.4%",
		col_selected:["BTN","vs CO","","vs SQ IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs SQ IP vs 10%",
		col_selected:["BTN","vs CO","","vs SQ IP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs SQ IP vs 12%",
		col_selected:["BTN","vs CO","","vs SQ IP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// BTN vs CO vs C4bet IP
	// BTN vs CO vs C4bet IP
	// BTN vs CO vs C4bet IP
	// BTN vs CO vs C4bet IP

		
	condicion.push({
		condicion_name:"BTN vs CO vs C4bet IP vs 3%",
		col_selected:["BTN","vs CO","","vs C4bet IP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs C4bet IP vs 4.8%",
		col_selected:["BTN","vs CO","","vs C4bet IP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs CO vs C4bet IP vs 7.4%",
		col_selected:["BTN","vs CO","","vs C4bet IP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		

	// BTN vs 3BET IP
	// BTN vs 3BET IP
	// BTN vs 3BET IP
	// BTN vs 3BET IP
	
	condicion.push({
		condicion_name:"BTN vs 3BET IP",
		col_selected:["BTN","","","","vs 3BET IP","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 15% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 3% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 3%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 7.4% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 10% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 10%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 12% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 12%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 18% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 18%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});

		
	// BTN vs 3BET IP vs 15%
	
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 15% / vs 8bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 15% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 15% / vs 10bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 15% / vs 11bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 15% / vs 12bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 15% / vs 13bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 15% / vs 14bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 15%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// BTN vs 3BET IP vs 3%
	
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 3% / vs 8bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 3%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 3% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 3%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 3% / vs 10bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 3%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 3% / vs 11bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 3%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 3% / vs 12bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 3%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 3% / vs 13bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 3%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 3% / vs 14bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 3%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
	
// BTN vs 3BET IP vs 7.4%
	
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 7.4% / vs 8bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 7.4%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 7.4% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 7.4%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 7.4% / vs 10bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 7.4%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 7.4% / vs 11bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 7.4%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 7.4% / vs 12bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 7.4%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 7.4% / vs 13bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 7.4%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 7.4% / vs 14bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 7.4%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// BTN vs 3BET IP vs 10%
	
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 10% / vs 8bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 10%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 10% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 10%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 10% / vs 10bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 10%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 10% / vs 11bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 10%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 10% / vs 12bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 10%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 10% / vs 13bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 10%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 10% / vs 14bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 10%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// BTN vs 3BET IP vs 12%
	
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 12% / vs 8bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 12%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 12% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 12%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 12% / vs 10bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 12%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 12% / vs 11bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 12%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 12% / vs 12bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 12%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 12% / vs 13bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 12%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 12% / vs 14bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 12%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

// BTN vs 3BET IP vs 18%
	
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 18% / vs 8bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 18%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 18% / vs 9bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 18%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 18% / vs 10bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 18%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 18% / vs 11bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 18%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 18% / vs 12bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 18%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 18% / vs 13bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 18%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BTN vs 3BET IP vs 18% / vs 14bb",
		col_selected:["BTN","","","","vs 3BET IP","","vs 18%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
// --------------- INICIO SB -------------- //
// --------------- INICIO SB -------------- //
// --------------- INICIO SB -------------- //
// --------------- INICIO SB -------------- //
// --------------- INICIO SB -------------- //

		
	condicion.push({
		condicion_name:"SB vs UTG",
		col_selected:["SB","vs UTG","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[2,[4,5,6,7,8]],
				[3,[10]],
				[5,[10]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs MP",
		col_selected:["SB","vs MP","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[2,[6,7,8]],
				[3,[2,3,10]],
				[5,[10]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs CO",
		col_selected:["SB","vs CO","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[2,[7,8]],
				[3,[2,3,10]],
				[5,[10]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN",
		col_selected:["SB","vs BTN","","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[	[3,[2,3,10]],
				[5,[10]]
		]
		});
		
	// SB vs UTG
	// SB vs UTG
	// SB vs UTG
	// SB vs UTG
	// SB vs UTG
	
	condicion.push({
		condicion_name:"SB vs UTG +MP Caller",
		col_selected:["SB","vs UTG","+MP Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"SB vs UTG +CO Caller",
		col_selected:["SB","vs UTG","+CO Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG +BTN Caller",
		col_selected:["SB","vs UTG","+BTN Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
			
	condicion.push({
		condicion_name:"SB vs UTG C4bet OOP",
		col_selected:["SB","vs UTG","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
	condicion.push({
		condicion_name:"SB vs UTG vs SQ OOP vs 4.8%",
		col_selected:["SB","vs UTG","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});

	condicion.push({
		condicion_name:"SB vs UTG vs C4bet OOP",
		col_selected:["SB","vs UTG","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs 3.5x",
		col_selected:["SB","vs UTG","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs 3x",
		col_selected:["SB","vs UTG","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs 2.5x",
		col_selected:["SB","vs UTG","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs 2x",
		col_selected:["SB","vs UTG","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// SB vs UTG vs SQ OOP
	// SB vs UTG vs SQ OOP
	// SB vs UTG vs SQ OOP
	// SB vs UTG vs SQ OOP

		
	condicion.push({
		condicion_name:"SB vs UTG vs SQ OOP vs 4.8%",
		col_selected:["SB","vs UTG","","vs SQ OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs SQ OOP vs 7.4%",
		col_selected:["SB","vs UTG","","vs SQ OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs SQ OOP vs 10%",
		col_selected:["SB","vs UTG","","vs SQ OOP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs SQ OOP vs 12%",
		col_selected:["SB","vs UTG","","vs SQ OOP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// SB vs UTG vs C4bet OOP
	// SB vs UTG vs C4bet OOP
	// SB vs UTG vs C4bet OOP
	// SB vs UTG vs C4bet OOP

		
	condicion.push({
		condicion_name:"SB vs UTG vs C4bet OOP vs 3%",
		col_selected:["SB","vs UTG","","vs C4bet OOP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs C4bet OOP vs 4.8%",
		col_selected:["SB","vs UTG","","vs C4bet OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs UTG vs C4bet OOP vs 7.4%",
		col_selected:["SB","vs UTG","","vs C4bet OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// SB vs MP
	// SB vs MP
	// SB vs MP
	// SB vs MP
	// SB vs MP

	condicion.push({
		condicion_name:"SB vs MP +CO Caller",
		col_selected:["SB","vs MP","+CO Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP +BTN Caller",
		col_selected:["SB","vs MP","+BTN Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
			
	condicion.push({
		condicion_name:"SB vs MP C4bet OOP",
		col_selected:["SB","vs MP","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
	condicion.push({
		condicion_name:"SB vs MP vs SQ OOP vs 4.8%",
		col_selected:["SB","vs MP","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,2]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});

	condicion.push({
		condicion_name:"SB vs MP vs C4bet OOP",
		col_selected:["SB","vs MP","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs 3.5x",
		col_selected:["SB","vs MP","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs 3x",
		col_selected:["SB","vs MP","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs 2.5x",
		col_selected:["SB","vs MP","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs 2x",
		col_selected:["SB","vs MP","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs Limp",
		message:"* Si el rival es tight, Foldear manos como AQ-AJs,KQs, JJ TT 99<br>* Si existe mas de un limper, las manos mas border solamente hacer check. Es necesario reducir el rango de ROL.<br>* Si existe mas de un limper, se puede completar la ciega en vez de hacer ROL. Se hace desde las suited a lo mas alto de las manos off.",
		col_selected:["SB","vs MP","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// SB vs MP vs SQ OOP
	// SB vs MP vs SQ OOP
	// SB vs MP vs SQ OOP
	// SB vs MP vs SQ OOP

		
	condicion.push({
		condicion_name:"SB vs MP vs SQ OOP vs 4.8%",
		col_selected:["SB","vs MP","","vs SQ OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs SQ OOP vs 7.4%",
		col_selected:["SB","vs MP","","vs SQ OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs SQ OOP vs 10%",
		col_selected:["SB","vs MP","","vs SQ OOP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs SQ OOP vs 12%",
		col_selected:["SB","vs MP","","vs SQ OOP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// SB vs MP vs C4bet OOP
	// SB vs MP vs C4bet OOP
	// SB vs MP vs C4bet OOP
	// SB vs MP vs C4bet OOP

		
	condicion.push({
		condicion_name:"SB vs MP vs C4bet OOP vs 3%",
		col_selected:["SB","vs MP","","vs C4bet OOP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs C4bet OOP vs 4.8%",
		col_selected:["SB","vs MP","","vs C4bet OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs MP vs C4bet OOP vs 7.4%",
		col_selected:["SB","vs MP","","vs C4bet OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// SB vs CO
	// SB vs CO
	// SB vs CO
	// SB vs CO
	// SB vs CO
	
	condicion.push({
		condicion_name:"SB vs CO +BTN Caller",
		col_selected:["SB","vs CO","+BTN Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
			
	condicion.push({
		condicion_name:"SB vs CO C4bet OOP",
		col_selected:["SB","vs CO","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
	condicion.push({
		condicion_name:"SB vs CO vs SQ OOP vs 7.4%",
		col_selected:["SB","vs CO","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,4]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});

	condicion.push({
		condicion_name:"SB vs CO vs C4bet OOP",
		col_selected:["SB","vs CO","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs 3.5x",
		col_selected:["SB","vs CO","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs 3x",
		col_selected:["SB","vs CO","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs 2.5x",
		col_selected:["SB","vs CO","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs 2x",
		col_selected:["SB","vs CO","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs Limp",
		message:"* Si el rival es tight, Foldear manos como AQ-ATs,KQs KJs JJ - 77<br>* Si existe mas de un limper, las manos mas border solamente hacer check. Es necesario reducir el rango de ROL.<br>* Si existe mas de un limper, se puede completar la ciega en vez de hacer ROL. Se hace desde las suited a lo mas alto de las manos off.",
		col_selected:["SB","vs CO","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// SB vs CO vs SQ OOP
	// SB vs CO vs SQ OOP
	// SB vs CO vs SQ OOP
	// SB vs CO vs SQ OOP

		
	condicion.push({
		condicion_name:"SB vs CO vs SQ OOP vs 4.8%",
		col_selected:["SB","vs CO","","vs SQ OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs SQ OOP vs 7.4%",
		col_selected:["SB","vs CO","","vs SQ OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs SQ OOP vs 10%",
		col_selected:["SB","vs CO","","vs SQ OOP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs SQ OOP vs 12%",
		col_selected:["SB","vs CO","","vs SQ OOP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// SB vs CO vs C4bet OOP
	// SB vs CO vs C4bet OOP
	// SB vs CO vs C4bet OOP
	// SB vs CO vs C4bet OOP

		
	condicion.push({
		condicion_name:"SB vs CO vs C4bet OOP vs 3%",
		col_selected:["SB","vs CO","","vs C4bet OOP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs C4bet OOP vs 4.8%",
		col_selected:["SB","vs CO","","vs C4bet OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs CO vs C4bet OOP vs 7.4%",
		col_selected:["SB","vs CO","","vs C4bet OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// SB vs BTN
	// SB vs BTN
	// SB vs BTN
	// SB vs BTN
	// SB vs BTN
			
	condicion.push({
		condicion_name:"SB vs BTN C4bet OOP",
		col_selected:["SB","vs BTN","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
	condicion.push({
		condicion_name:"SB vs BTN vs SQ OOP vs 7.4%",
		col_selected:["SB","vs BTN","","vs SQ OOP","","","",""],
		col_deleted:[],
		pre_selected:[  [6,4]
						],
		cell:[	[6,[2,3,4,5,6,7,8]]
		]
		});

	condicion.push({
		condicion_name:"SB vs BTN vs C4bet OOP",
		message:"* Tabla versus un Cold4bet en BB de 6%",
		col_selected:["SB","vs BTN","","vs C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs 3.5x",
		col_selected:["SB","vs BTN","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs 3x",
		col_selected:["SB","vs BTN","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs 2.5x",
		col_selected:["SB","vs BTN","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs 2x",
		col_selected:["SB","vs BTN","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs Limp",
		message:"* Si el rival es tight, Foldear manos como AQ-ATs,KQs KJs JJ - 77.<br>* Si existe mas de un limper, las manos mas border solamente hacer check. Es necesario reducir el rango de ROL.<br>* Si existe mas de un limper, se puede completar la ciega en vez de hacer ROL. Se hace desde las suited a lo mas alto de las manos off.",
		col_selected:["SB","vs BTN","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// SB vs BTN vs SQ OOP
	// SB vs BTN vs SQ OOP
	// SB vs BTN vs SQ OOP
	// SB vs BTN vs SQ OOP

		
	condicion.push({
		condicion_name:"SB vs BTN vs SQ OOP vs 4.8%",
		col_selected:["SB","vs BTN","","vs SQ OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs SQ OOP vs 7.4%",
		col_selected:["SB","vs BTN","","vs SQ OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs SQ OOP vs 10%",
		col_selected:["SB","vs BTN","","vs SQ OOP","","","vs 10%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs SQ OOP vs 12%",
		col_selected:["SB","vs BTN","","vs SQ OOP","","","vs 12%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	// SB vs BTN vs C4bet OOP
	// SB vs BTN vs C4bet OOP
	// SB vs BTN vs C4bet OOP
	// SB vs BTN vs C4bet OOP

		
	condicion.push({
		condicion_name:"SB vs BTN vs C4bet OOP vs 3%",
		col_selected:["SB","vs BTN","","vs C4bet OOP","","","vs 3%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs C4bet OOP vs 4.8%",
		col_selected:["SB","vs BTN","","vs C4bet OOP","","","vs 4.8%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs C4bet OOP vs 6%",
		col_selected:["SB","vs BTN","","vs C4bet OOP","","","vs 6%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs BTN vs C4bet OOP vs 7.4%",
		col_selected:["SB","vs BTN","","vs C4bet OOP","","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});		

	// SB vs 3BET OOP
	// SB vs 3BET OOP
	// SB vs 3BET OOP
	// SB vs 3BET OOP
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP",
		col_selected:["SB","","","","vs 3BET OOP","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 3% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 3%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 7.4% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 7.4%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 10% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 10%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 12% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 12%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 18% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 18%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 22% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 22%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 25% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 25%",""],
		col_deleted:[],
		pre_selected:[  [7,3]
						],
		cell:[	[7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]]
		]
		});

		
	// SB vs 3BET OOP vs 15%
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 8bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 10bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 11bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 12bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 13bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 15% / vs 14bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 15%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// SB vs 3BET OOP vs 3%
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 3% / vs 8bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 3%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 3% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 3%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 3% / vs 10bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 3%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 3% / vs 11bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 3%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 3% / vs 12bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 3%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 3% / vs 13bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 3%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 3% / vs 14bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 3%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
	
// SB vs 3BET OOP vs 7.4%
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 7.4% / vs 8bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 7.4%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 7.4% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 7.4%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 7.4% / vs 10bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 7.4%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 7.4% / vs 11bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 7.4%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 7.4% / vs 12bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 7.4%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 7.4% / vs 13bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 7.4%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 7.4% / vs 14bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 7.4%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// SB vs 3BET OOP vs 10%
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 10% / vs 8bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 10%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 10% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 10%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 10% / vs 10bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 10%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 10% / vs 11bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 10%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 10% / vs 12bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 10%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 10% / vs 13bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 10%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 10% / vs 14bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 10%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// SB vs 3BET OOP vs 12%
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 12% / vs 8bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 12%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 12% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 12%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 12% / vs 10bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 12%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 12% / vs 11bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 12%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 12% / vs 12bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 12%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 12% / vs 13bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 12%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 12% / vs 14bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 12%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

// SB vs 3BET OOP vs 18%
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 18% / vs 8bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 18%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 18% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 18%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 18% / vs 10bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 18%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 18% / vs 11bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 18%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 18% / vs 12bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 18%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 18% / vs 13bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 18%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 18% / vs 14bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 18%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	

// SB vs 3BET OOP vs 22%
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 22% / vs 8bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 22%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 22% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 22%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 22% / vs 10bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 22%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 22% / vs 11bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 22%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 22% / vs 12bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 22%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 22% / vs 13bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 22%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 22% / vs 14bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 22%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
		
// SB vs 3BET OOP vs 25%
	
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 25% / vs 8bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 25%","vs 8 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 25% / vs 9bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 25%","vs 9 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 25% / vs 10bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 25%","vs 10 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 25% / vs 11bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 25%","vs 11 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 25% / vs 12bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 25%","vs 12 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 25% / vs 13bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 25%","vs 13 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"SB vs 3BET OOP vs 25% / vs 14bb",
		col_selected:["SB","","","","vs 3BET OOP","","vs 25%","vs 14 bb"],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});	
	
	condicion.push({
		condicion_name:"SB vs UTG vs Limp",
		message:"* Si el rival es tight, Foldear manos como AQ-AJs,KQs, JJ TT 99<br>* Si existe mas de un limper, las manos mas border solamente hacer check. Es necesario reducir el rango de ROL.<br>* Si existe mas de un limper, se puede completar la ciega en vez de hacer ROL. Se hace desde las suited a lo mas alto de las manos off.",
		col_selected:["SB","vs UTG","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
// --------------- INICIO BB -------------- //
// --------------- INICIO BB -------------- //
// --------------- INICIO BB -------------- //
// --------------- INICIO BB -------------- //
// --------------- INICIO BB -------------- //
	
		
	condicion.push({
		condicion_name:"BB vs UTG vs 3x",
		col_selected:["BB","vs UTG","","","","","",""],
		col_deleted:[],
		pre_selected:[	[5,4]
		],
		cell:[	[1,[0,1,2,3,4,5,6,7,8,9]],
				[2,[4,5,6,7,8,9,10]],
				[5,[4,5,6,7,10]]
		]
		});
		
	condicion.push({
		condicion_name:"BB vs MP vs 3x",
		col_selected:["BB","vs MP","","","","","",""],
		col_deleted:[],
		pre_selected:[	[5,4]
		],
		cell:[	[1,[0,1,2,3,4,5,6,7,8,9]],
				[2,[6,7,8,9,10]],
				[3,[2]],
				[5,[4,5,6,7,10]]
		]
		});
		
	condicion.push({
		condicion_name:"BB vs CO vs 3x",
		col_selected:["BB","vs CO","","","","","",""],
		col_deleted:[],
		pre_selected:[	[5,4]
		],
		cell:[	[1,[0,1,2,3,4,5,6,7,8,9]],
				[2,[8,9,10]],
				[3,[2]],
				[5,[4,5,6,7,10]]
		]
		});
		
	condicion.push({
		condicion_name:"BB vs BTN vs 2.5x",
		col_selected:["BB","vs BTN","","","","","",""],
		col_deleted:[],
		pre_selected:[	[5,6]
		],
		cell:[	[1,[0,1,2,3,4,5,6,7,8,9]],
				[2,[9,10]],
				[3,[2]],
				[5,[4,5,6,7,10]]
		]
		});
		
	condicion.push({
		condicion_name:"BB vs SB vs 3x",
		col_selected:["BB","vs SB","","","","","",""],
		col_deleted:[],
		pre_selected:[	[5,4]
		],
		cell:[	[1,[0,1,2,3,4,5,6,7,8,9]],
				[3,[0]],
				[5,[4,5,6,7,10]]
		]
		});
		
	// BB vs UTG
	// BB vs UTG
	// BB vs UTG
	// BB vs UTG
	// BB vs UTG
	
	condicion.push({
		condicion_name:"BB vs UTG +MP Caller",
		col_selected:["BB","vs UTG","+MP Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs UTG +CO Caller",
		col_selected:["BB","vs UTG","+CO Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs UTG +BTN Caller",
		col_selected:["BB","vs UTG","+BTN Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs UTG +SB Caller",
		col_selected:["BB","vs UTG","+SB Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs UTG C4bet OOP",
		col_selected:["BB","vs UTG","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs UTG vs 3.5x",
		col_selected:["BB","vs UTG","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs UTG vs 3x",
		col_selected:["BB","vs UTG","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs UTG vs 2.5x",
		col_selected:["BB","vs UTG","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs UTG vs 2x",
		col_selected:["BB","vs UTG","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs UTG vs Limp",
		message:"* Si el rival es tight, Foldear manos como AQ-AJs,KQs, JJ TT 99<br>* Si existe mas de un limper, las manos mas border solamente hacer check. Es necesario reducir el rango de ROL.",
		col_selected:["BB","vs UTG","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// BB vs MP
	// BB vs MP
	// BB vs MP
	// BB vs MP
	// BB vs MP

	condicion.push({
		condicion_name:"BB vs MP +CO Caller",
		col_selected:["BB","vs MP","+CO Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs MP +BTN Caller",
		col_selected:["BB","vs MP","+BTN Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs MP +SB Caller",
		col_selected:["BB","vs MP","+SB Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs MP C4bet OOP",
		col_selected:["BB","vs MP","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs MP vs 3.5x",
		col_selected:["BB","vs MP","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs MP vs 3x",
		col_selected:["BB","vs MP","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs MP vs 2.5x",
		col_selected:["BB","vs MP","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs MP vs 2x",
		col_selected:["BB","vs MP","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs MP vs Limp",
		message:"* Si el rival es tight, Foldear manos como AQ-AJs,KQs, JJ TT 99.<br>* Si existe mas de un limper, las manos mas border solamente hacer check. Es necesario reducir el rango de ROL.",
		col_selected:["BB","vs MP","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});		

	// BB vs CO
	// BB vs CO
	// BB vs CO
	// BB vs CO
	// BB vs CO

		
	condicion.push({
		condicion_name:"BB vs CO +BTN Caller",
		col_selected:["BB","vs CO","+BTN Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs CO +SB Caller",
		col_selected:["BB","vs CO","+SB Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs CO C4bet OOP",
		col_selected:["BB","vs CO","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs CO vs 3.5x",
		col_selected:["BB","vs CO","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs CO vs 3x",
		col_selected:["BB","vs CO","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs CO vs 2.5x",
		col_selected:["BB","vs CO","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs CO vs 2x",
		col_selected:["BB","vs CO","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs CO vs Limp",
		message:"* Si el rival es tight, solamente continuar con JJ+ AK. Y algunas de ellas pueden ser call en vez de 4bet.<br>* Si existe mas de un limper, las manos mas border solamente hacer check. Es necesario reducir el rango de ROL.",
		col_selected:["BB","vs CO","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// BB vs BTN
	// BB vs BTN
	// BB vs BTN
	// BB vs BTN
	// BB vs BTN
	
		
	condicion.push({
		condicion_name:"BB vs BTN +SB Caller",
		col_selected:["BB","vs BTN","+SB Caller","","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs BTN C4bet OOP",
		col_selected:["BB","vs BTN","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs BTN vs 3.5x",
		col_selected:["BB","vs BTN","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs BTN vs 3x",
		col_selected:["BB","vs BTN","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs BTN vs 2.5x",
		col_selected:["BB","vs BTN","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs BTN vs 2x",
		col_selected:["BB","vs BTN","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs BTN vs Limp",
		message:"*Si el rival es tight, solamente continuar con JJ+ AK. Y algunas de ellas pueden ser call en vez de 4bet.<br>* Si existe mas de un limper, las manos mas border solamente hacer check. Es necesario reducir el rango de ROL.",
		col_selected:["BB","vs BTN","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// BB vs SB
	// BB vs SB
	// BB vs SB
	// BB vs SB
	// BB vs SB
	
	condicion.push({
		condicion_name:"BB vs SB C4bet IP",
		message:"* Tabla de Cold4bet cuando SB hace un 3BET a BTN",
		col_selected:["BB","vs SB","","C4bet IP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs SB C4bet OOP",
		col_selected:["BB","vs SB","","C4bet OOP","","","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});

	condicion.push({
		condicion_name:"BB vs SB vs 3.5x",
		col_selected:["BB","vs SB","","","","vs 3.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs SB vs 3x",
		col_selected:["BB","vs SB","","","","vs 3x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs SB vs 2.5x",
		col_selected:["BB","vs SB","","","","vs 2.5x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs SB vs 2x",
		col_selected:["BB","vs SB","","","","vs 2x","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	condicion.push({
		condicion_name:"BB vs SB vs Limp",
		message:"* Si rival es tight, foldear las letras naranjas y si es loose pagar luego de hacer ROL.<br>* Si rival es regular, letras naranjas pagar luego de hacer ROL.",
		col_selected:["BB","vs SB","","","","vs Limp","",""],
		col_deleted:[],
		pre_selected:[],
		cell:[]
		});
		
	// ESTRUCTURA DE COLORES
	
	rangos.push({
		title: "UTG OR",
		tag:[	[5,"O.R: UTG"]
			],
		cell:[
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,0,0,0,0,0,0,0],
				[5,5,5,5,5,5,0,0,0,0,0,0,0],
				[5,5,0,5,5,5,0,0,0,0,0,0,0],
				[5,0,0,0,5,5,0,0,0,0,0,0,0],
				[0,0,0,0,0,5,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,5,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "MP OR",
		tag:[	[5,"O.R: MP"]
			],
		cell:[
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,5,5,0,0,0,0,0,0,0],
				[5,5,5,5,5,5,0,0,0,0,0,0,0],
				[5,5,0,0,5,5,0,0,0,0,0,0,0],
				[0,0,0,0,0,5,5,0,0,0,0,0,0],
				[0,0,0,0,0,0,5,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO OR",
		tag:[	[5,"O.R: CO"]
			],
		cell:[
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,5,5,5,5,0,0,0],
				[5,5,5,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,5,5,5,0,0,0,0,0,0],
				[5,0,0,0,0,5,5,5,0,0,0,0,0],
				[0,0,0,0,0,0,5,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB OR",
		tag:[	[5,"O.R: SB"]
			],
		cell:[
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,5,5,5,0,0,0,0],
				[5,5,5,5,5,5,5,5,5,0,0,0,0],
				[5,5,5,5,5,5,5,5,5,5,0,0,0],
				[5,0,0,0,0,0,0,5,5,5,5,0,0],
				[5,0,0,0,0,0,0,0,5,5,5,0,0],
				[5,0,0,0,0,0,0,0,0,5,5,5,0],
				[5,0,0,0,0,0,0,0,0,0,5,5,0],
				[5,0,0,0,0,0,0,0,0,0,0,5,0],
				[5,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});

	rangos.push({
		title: "BTN OR",
		tag:[	[5,"O.R: BTN"]
			],
		cell:[
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,5,5,5,5,5,5,5,5,5,0,0,0],
				[5,5,5,5,5,5,5,5,5,0,0,0,0],
				[5,5,5,5,5,5,5,5,5,0,0,0,0],
				[5,5,5,5,5,5,5,5,5,0,0,0,0],
				[5,5,0,0,0,5,5,5,5,5,0,0,0],
				[5,0,0,0,0,0,0,5,5,5,0,0,0],
				[5,0,0,0,0,0,0,0,5,5,5,0,0],
				[5,0,0,0,0,0,0,0,0,5,5,5,0],
				[5,0,0,0,0,0,0,0,0,0,5,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
	rangos.push({
		title: "MP vs UTG vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,0],
				[1,1,3,0,0,0,0,0,0,0,0,0,0],
				[3,0,2,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "MP vs UTG",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "MP vs UTG vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,0],
				[1,1,3,0,0,0,0,0,0,0,0,0,0],
				[3,0,2,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "MP vs UTG vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,0],
				[1,1,3,0,0,0,0,0,0,0,0,0,0],
				[3,0,2,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "UTG vs 3BET IP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,4,4,4,4,0,0,0,0,3,0,0,0],
				[4,4,4,4,0,0,0,0,0,0,0,0,0],
				[0,0,4,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "UTG vs 3BET OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,0,0,0,0,3,0,0,0],
				[4,1,4,4,0,0,0,0,0,0,0,0,0],
				[3,0,4,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	
	rangos.push({
		title: "UTG vs 3BET OOP vs 7.4% / vs 9bb",
		tag:[	[1,"4bet/All in"],
				[101,"All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,0,0,0,0,3,3,3,0],
				[101,1,4,4,3,0,0,0,0,0,0,0,0],
				[0,0,1,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "UTG vs 3BET OOP vs 10% / vs 9bb",
		tag:[	[1,"4bet/All in"],
				[101,"All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,3,3,0,0,0,3,3,3,0],
				[101,1,4,4,3,0,0,0,0,0,0,0,0],
				[4,0,1,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "MP vs 3BET IP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,0,0,0,0,3,3,3,0],
				[4,1,4,4,0,0,0,0,0,0,0,0,0],
				[0,0,4,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "MP vs 3BET OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,0,0,0,0,3,3,3,3],
				[1,1,4,4,0,0,0,0,0,0,0,0,0],
				[3,0,1,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "MP vs 3BET OOP vs 7.4% / vs 9bb",
		tag:[	[1,"4bet/All in"],
				[101,"All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,0,0,0,0,3,3,3,0],
				[101,1,4,4,3,0,0,0,0,0,0,0,0],
				[0,0,1,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "MP vs 3BET OOP vs 10% / vs 9bb",
		tag:[	[1,"4bet/All in"],
				[101,"All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,3,3,0,0,0,3,3,3,0],
				[101,1,4,4,3,0,0,0,0,0,0,0,0],
				[4,0,1,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs 3BET IP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,4,3,3,3,4,4,3,3],
				[1,1,4,4,4,0,0,0,0,0,0,0,0],
				[4,4,1,4,4,0,0,0,0,0,0,0,0],
				[3,0,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs 3BET OOP vs 4.8% / vs 9bb",
		tag:[	[1,"4bet/All in"],
				[101,"All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,101,4,0,0,0,0,0,0,3,0,0,0],
				[101,101,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,4,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs 3BET OOP vs 7.4% / vs 9bb",
		tag:[	[1,"4bet/All in"],
				[101,"All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,0,0,0,0,3,3,3,0],
				[101,1,4,4,3,0,0,0,0,0,0,0,0],
				[0,0,1,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});	
	
	rangos.push({
		title: "CO vs 3BET OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,0,0,0,0,4,4,3,3],
				[1,1,4,4,3,0,0,0,0,0,0,0,0],
				[3,0,1,4,4,0,0,0,0,0,0,0,0],
				[3,0,0,1,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});	
	
	rangos.push({
		title: "BTN vs 3BET IP vs 12% / vs 9bb",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,4,0,0,0,4,4,0,3],
				[1,1,4,4,4,0,0,0,0,0,0,3,3],
				[4,4,1,4,4,0,0,0,0,0,0,0,0],
				[4,0,0,4,4,4,0,0,0,0,0,0,0],
				[3,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});	
	
	rangos.push({
		title: "BTN vs 3BET IP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,4,4,4,4,3,3,3,4,4,4,3],
				[1,1,4,4,4,4,4,0,0,3,0,0,0],
				[4,4,1,4,4,4,0,0,0,0,0,0,0],
				[4,0,0,4,4,4,4,0,0,0,0,0,0],
				[3,0,0,0,4,4,4,0,0,0,0,0,0],
				[0,0,0,0,0,4,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
	rangos.push({
		title: "SB vs 3BET OOP vs 12% / vs 9bb",
		tag:[	[1,"4bet/All in"],
				[101,"All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,3,4,4,0,0,0,0,0,0,0],
				[101,1,3,4,4,0,0,0,0,0,0,0,0],
				[3,0,1,4,4,0,0,0,0,0,0,0,0],
				[3,0,0,1,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});	
	
	rangos.push({
		title: "SB vs 3BET OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 3bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,4,4,4,4,4,4,4,4,3,3],
				[1,1,4,4,4,4,4,3,3,3,0,0,0],
				[4,4,1,4,4,4,0,0,0,0,0,0,0],
				[3,4,0,1,4,4,4,0,0,0,0,0,0],
				[3,0,0,0,1,4,4,0,0,0,0,0,0],
				[0,0,0,0,0,4,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
	rangos.push({
		title: "CO vs UTG vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs UTG",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs SQ IP",
		tag:[	[1,"Reesqueeze/All in"],
				[4,"Call"],
				[3,"Reesqueeze/Fold"]
			],
		cell:[
				[1,1,4,4,3,0,0,0,0,3,0,0,0],
				[1,1,4,3,3,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs SQ OOP",
		tag:[	[1,"Reesqueeze/All in"],
				[3,"Reesqueeze/Fold"]
			],
		cell:[
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs UTG vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs UTG vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs MP vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs MP",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,2,3,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,2,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs MP vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "CO vs MP vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs UTG vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[0,3,2,0,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,3,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs UTG",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,2,3,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs SQ IP",
		tag:[	[1,"Reesqueeze/All in"],
				[4,"Call"],
				[3,"Reesqueeze/Fold"]
			],
		cell:[
				[4,1,3,4,4,3,3,0,0,4,0,0,0],
				[1,1,4,4,4,0,0,0,0,0,0,0,0],
				[4,3,1,4,4,0,0,0,0,0,0,0,0],
				[3,0,0,1,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs UTG vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[4,3,2,4,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,3,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs UTG vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[4,3,2,4,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,3,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs MP vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[0,3,2,0,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,3,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs MP",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,2,3,3,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,2,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs MP vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[4,3,2,4,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,3,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs MP vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"]
			],
		cell:[
				[2,2,4,3,3,0,0,0,0,3,3,3,3],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[4,3,2,4,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,3,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs CO vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,2,2,4,3,3,3,3,3,3,3,3,3],
				[1,1,3,4,3,0,0,0,0,0,0,0,0],
				[4,3,1,4,0,0,0,0,0,0,0,0,0],
				[3,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,6,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,6,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs CO",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[2,1,2,2,3,3,3,0,0,3,3,0,0],
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[2,3,1,3,3,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,2,3,0,0,0,0],
				[0,0,0,0,0,0,0,0,2,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,2,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs CO vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,2,2,4,3,3,3,3,3,3,3,3,3],
				[1,1,3,4,3,0,0,0,0,0,0,0,0],
				[4,3,1,4,0,0,0,0,0,0,0,0,0],
				[3,0,0,1,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,6,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,6,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "BTN vs CO vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,2,2,4,3,3,3,3,3,3,3,3,3],
				[1,1,3,4,3,0,0,0,0,0,0,0,0],
				[4,3,1,4,4,0,0,0,0,0,0,0,0],
				[3,0,0,1,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,6,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,6,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs UTG vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,6,3,3,0,0,0,0,3,3,0,0],
				[1,1,3,0,0,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,6,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,6,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs UTG",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,2,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs UTG vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,6,3,3,0,0,0,0,3,3,0,0],
				[1,1,3,4,0,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,6,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,6,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs UTG vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,6,3,3,4,0,0,0,3,3,0,0],
				[1,1,3,4,4,0,0,0,0,0,0,0,0],
				[3,4,1,4,4,0,0,0,0,0,0,0,0],
				[4,0,0,6,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,6,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs MP vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,6,3,3,0,0,0,0,3,3,0,0],
				[1,1,3,0,0,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,6,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,6,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs MP",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs MP vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,6,3,3,0,0,0,0,3,3,0,0],
				[1,1,3,4,0,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,6,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,6,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs MP vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,6,3,3,4,0,0,0,3,3,0,0],
				[1,1,3,4,4,0,0,0,0,0,0,0,0],
				[3,4,1,4,4,0,0,0,0,0,0,0,0],
				[4,0,0,6,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,6,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs CO vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,2,6,6,3,3,0,0,3,3,3,0],
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,1,6,3,0,0,0,0,0,0,0,0],
				[3,0,0,2,6,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,6,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,6,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,6,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs CO",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[2,1,2,3,3,0,0,0,0,3,3,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,2,3,3,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,3,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs CO vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,2,6,6,3,3,0,0,3,3,3,0],
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,1,6,3,0,0,0,0,0,0,0,0],
				[3,0,0,2,6,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,6,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,6,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,6,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs CO vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,2,6,6,3,3,0,0,3,3,3,0],
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,1,6,3,0,0,0,0,0,0,0,0],
				[3,0,0,2,6,4,0,0,0,0,0,0,0],
				[0,0,0,0,2,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,6,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,6,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,6,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs BTN vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,2,2,2,3,3,3,3,3,3,3,3],
				[1,1,2,2,6,3,0,0,0,0,0,0,0],
				[6,3,1,2,6,3,0,0,0,0,0,0,0],
				[3,3,3,1,2,6,0,0,0,0,0,0,0],
				[3,0,0,0,2,6,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,6,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,6,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs BTN",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"]
			],
		cell:[
				[2,1,2,2,2,3,3,3,3,3,3,3,3],
				[1,1,2,2,3,3,0,0,0,0,0,0,0],
				[2,3,2,2,3,3,0,0,0,0,0,0,0],
				[3,3,0,2,3,3,0,0,0,0,0,0,0],
				[3,0,0,0,2,3,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,2,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,3,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs BTN vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,2,2,2,3,3,3,3,3,3,3,3],
				[1,1,2,2,6,3,0,0,0,0,0,0,0],
				[6,3,1,2,6,3,0,0,0,0,0,0,0],
				[3,3,3,1,2,6,0,0,0,0,0,0,0],
				[3,0,0,0,2,6,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,6,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,6,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	rangos.push({
		title: "SB vs BTN vs 2x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2"],
				[6,"3bet/Pensar"]
			],
		cell:[
				[2,1,2,2,6,3,3,3,3,3,3,3,3],
				[1,1,2,6,3,4,0,0,0,0,0,0,0],
				[3,3,1,2,6,3,0,0,0,0,0,0,0],
				[3,3,3,1,2,6,0,0,0,0,0,0,0],
				[3,0,0,0,2,6,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,6,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,6,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});

	
		rangos.push({
		title: "BB vs UTG vs 3x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3"]
			],
		cell:[
				[2,2,3,3,4,4,4,4,4,3,4,4,4],
				[2,2,3,4,4,4,0,0,0,0,0,0,0],
				[4,4,2,3,4,4,0,0,0,0,0,0,0],
				[4,4,4,2,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs UTG vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[2,2,3,3,4,4,4,4,4,3,4,4,4],
				[2,2,3,4,4,4,4,4,4,0,0,0,0],
				[4,4,2,3,4,4,4,0,0,0,0,0,0],
				[4,4,4,2,4,4,4,0,0,0,0,0,0],
				[4,0,0,0,4,4,4,4,0,0,0,0,0],
				[0,0,0,0,0,4,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,4,0],
				[0,0,0,0,0,0,0,0,0,0,4,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs UTG vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,2,5,5,5,5,5,5,5,5,5],
				[2,1,2,5,5,5,5,5,5,5,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,0,0,0,0,2,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,5,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
	
		rangos.push({
		title: "BB vs MP vs 3x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3"]
			],
		cell:[
				[2,2,3,3,3,4,4,4,4,3,4,4,4],
				[2,2,3,4,4,4,4,4,0,0,0,0,0],
				[4,4,2,3,4,4,0,0,0,0,0,0,0],
				[4,4,4,2,4,4,0,0,0,0,0,0,0],
				[0,0,0,0,4,4,4,0,0,0,0,0,0],
				[0,0,0,0,0,4,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs MP vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[2,2,3,3,3,4,4,4,4,3,4,4,4],
				[2,2,3,4,4,4,4,4,4,4,4,0,0],
				[4,4,2,3,4,4,4,0,0,0,0,0,0],
				[4,4,4,2,4,4,4,0,0,0,0,0,0],
				[4,4,4,0,4,4,4,4,0,0,0,0,0],
				[0,0,0,0,0,4,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,4,0],
				[0,0,0,0,0,0,0,0,0,0,4,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs MP vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,2,5,5,5,5,5,5,5,5,5],
				[2,1,2,5,5,5,5,5,5,5,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,0,0,0,0,2,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,5,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
	
		rangos.push({
		title: "BB vs CO vs 3x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3"]
			],
		cell:[
				[1,1,2,2,3,3,4,4,4,3,3,4,4],
				[2,1,3,3,4,4,4,4,4,4,4,0,0],
				[3,4,2,3,3,4,4,0,0,0,0,0,0],
				[4,4,4,2,3,4,4,0,0,0,0,0,0],
				[4,4,0,4,2,3,4,4,0,0,0,0,0],
				[0,0,0,0,0,4,4,4,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,4,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs CO vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[1,1,2,2,3,3,4,4,4,3,3,4,4],
				[2,1,3,3,4,4,4,4,4,4,4,4,4],
				[3,4,2,3,3,4,4,4,4,4,0,0,0],
				[4,4,4,2,3,4,4,4,0,0,0,0,0],
				[4,4,4,4,2,3,4,4,0,0,0,0,0],
				[4,0,0,0,4,4,4,4,4,0,0,0,0],
				[0,0,0,0,0,0,4,4,4,4,0,0,0],
				[0,0,0,0,0,0,0,4,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,4,0,0],
				[4,0,0,0,0,0,0,0,0,4,4,4,0],
				[4,0,0,0,0,0,0,0,0,0,4,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs CO vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,1,2,2,2,5,5,5,5,5,5,5,5],
				[1,1,2,2,5,5,5,5,5,5,5,5,5],
				[2,5,1,2,5,5,5,5,5,0,0,0,0],
				[5,5,5,2,2,5,5,5,0,0,0,0,0],
				[5,5,5,5,2,5,5,5,0,0,0,0,0],
				[5,5,5,5,5,2,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,2,5,5,0,0,0,0],
				[5,0,0,0,0,0,0,2,5,5,0,0,0],
				[5,0,0,0,0,0,0,0,5,5,5,0,0],
				[5,0,0,0,0,0,0,0,0,5,5,0,0],
				[5,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
	rangos.push({
		title: "BB vs BTN vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[6,"3bet/Pensar"],
				[4,"Call x3.5"]
			],
		cell:[
				[2,1,2,2,6,3,4,4,4,3,3,3,3],
				[1,1,2,6,6,4,4,0,0,0,0,0,0],
				[6,3,1,2,6,4,0,0,0,0,0,0,0],
				[3,4,4,1,6,4,4,0,0,0,0,0,0],
				[4,0,0,0,2,6,4,0,0,0,0,0,0],
				[4,0,0,0,0,2,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,6,4,0,0,0,0,0],
				[0,0,0,0,0,0,0,6,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs BTN vs 3x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3"]
			],
		cell:[
				[1,1,2,2,2,4,4,4,4,3,3,3,4],
				[1,1,2,2,3,4,4,4,4,4,4,4,4],
				[2,3,1,2,3,4,4,4,4,0,0,0,0],
				[3,4,4,2,3,3,3,4,0,0,0,0,0],
				[4,4,4,4,2,3,3,4,0,0,0,0,0],
				[4,0,0,0,4,2,3,4,4,0,0,0,0],
				[4,0,0,0,0,0,2,3,4,4,0,0,0],
				[4,0,0,0,0,0,0,4,3,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,4,0,0],
				[4,0,0,0,0,0,0,0,0,4,4,4,0],
				[0,0,0,0,0,0,0,0,0,0,4,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs BTN vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[1,1,2,2,2,4,4,4,4,3,3,3,4],
				[1,1,2,2,3,4,4,4,4,4,4,4,4],
				[2,3,1,2,3,4,4,4,4,4,4,4,4],
				[3,4,4,2,3,3,3,4,4,4,4,4,0],
				[4,4,4,4,2,3,3,4,4,0,0,0,0],
				[4,4,4,4,4,2,3,4,4,0,0,0,0],
				[4,0,0,0,4,4,2,3,4,4,0,0,0],
				[4,0,0,0,0,0,4,4,3,4,4,0,0],
				[4,0,0,0,0,0,0,0,4,4,4,4,0],
				[4,0,0,0,0,0,0,0,0,4,4,4,4],
				[4,0,0,0,0,0,0,0,0,0,4,4,4],
				[4,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs BTN vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,1,2,2,2,5,5,5,5,5,5,5,5],
				[1,1,2,2,5,5,5,5,5,5,5,5,5],
				[2,5,1,2,5,5,5,5,5,5,5,0,0],
				[5,5,5,2,2,5,5,5,0,0,0,0,0],
				[5,5,5,5,2,5,5,5,0,0,0,0,0],
				[5,5,5,5,5,2,5,5,0,0,0,0,0],
				[5,5,0,0,0,0,2,5,5,0,0,0,0],
				[5,0,0,0,0,0,0,2,5,5,0,0,0],
				[5,0,0,0,0,0,0,0,5,5,5,0,0],
				[5,0,0,0,0,0,0,0,0,5,5,0,0],
				[5,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
	rangos.push({
		title: "BB vs SB vs 3.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[6,"3bet/Pensar"],
				[4,"Call x3.5"]
			],
		cell:[
				[2,2,2,2,2,4,4,4,4,6,6,6,6],
				[1,1,2,2,6,4,4,4,4,4,4,4,4],
				[6,4,1,2,6,4,4,4,4,4,4,4,4],
				[4,4,4,1,2,4,4,4,4,4,4,4,4],
				[4,4,4,4,2,2,4,4,4,4,0,0,0],
				[4,3,3,4,3,2,2,4,4,4,0,0,0],
				[4,3,0,0,4,3,2,2,4,4,0,0,0],
				[0,0,0,0,0,0,4,4,2,4,4,0,0],
				[0,0,0,0,0,0,0,0,4,2,4,4,0],
				[3,0,0,0,0,0,0,0,0,4,2,4,4],
				[3,0,0,0,0,0,0,0,0,0,4,4,4],
				[0,0,0,0,0,0,0,0,0,0,0,4,4],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs SB vs 3x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x3"]
			],
		cell:[
				[1,1,2,2,2,4,4,4,4,3,3,3,4],
				[1,1,2,2,3,4,4,4,4,4,4,4,4],
				[2,4,1,2,3,4,4,4,4,4,3,3,3],
				[4,4,4,2,3,4,4,4,4,4,3,3,3],
				[4,4,4,4,2,3,4,4,4,4,4,4,4],
				[4,4,4,4,4,2,3,4,4,4,4,0,0],
				[4,4,4,4,4,4,2,2,4,4,4,0,0],
				[4,4,0,0,4,4,4,4,2,4,4,4,0],
				[4,4,0,0,0,0,0,4,4,2,4,4,0],
				[3,0,0,0,0,0,0,0,0,4,4,4,4],
				[3,0,0,0,0,0,0,0,0,0,4,4,4],
				[3,0,0,0,0,0,0,0,0,0,0,4,4],
				[3,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs SB vs 2.5x",
		tag:[	[1,"3bet/5bet"],
				[2,"3bet/Call4bet"],
				[3,"3bet/Fold"],
				[4,"Call x2.5"]
			],
		cell:[
				[1,1,2,2,2,4,4,4,4,3,3,3,4],
				[1,1,2,2,3,4,4,4,4,4,4,4,4],
				[2,4,1,2,3,4,4,4,4,4,3,3,3],
				[4,4,4,2,3,4,4,4,4,4,3,3,3],
				[4,4,4,4,2,3,4,4,4,4,4,4,4],
				[4,4,4,4,4,2,3,4,4,4,4,4,4],
				[4,4,4,4,4,4,2,2,4,4,4,4,4],
				[4,4,0,0,4,4,4,4,2,4,4,4,4],
				[4,4,0,0,0,0,4,4,4,2,4,4,4],
				[3,4,0,0,0,0,0,4,4,4,4,4,4],
				[3,0,0,0,0,0,0,0,4,4,4,4,4],
				[3,0,0,0,0,0,0,0,0,0,0,4,4],
				[3,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs SB vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,1,2,2,2,105,105,5,5,2,2,5,5],
				[1,1,2,2,2,105,5,5,5,5,5,5,5],
				[2,105,1,2,2,105,5,5,5,5,5,5,5],
				[105,105,105,2,2,105,5,5,5,5,5,5,0],
				[105,5,5,5,2,2,105,5,5,5,5,0,0],
				[5,5,5,5,5,2,105,5,5,5,5,0,0],
				[5,5,5,5,5,5,2,105,5,5,5,0,0],
				[5,5,5,5,5,5,5,2,105,5,5,5,0],
				[5,0,0,0,0,0,0,5,105,105,5,5,5],
				[5,0,0,0,0,0,0,0,5,105,105,5,5],
				[5,0,0,0,0,0,0,0,0,0,5,5,5],
				[5,0,0,0,0,0,0,0,0,0,0,5,5],
				[5,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
	// BB VS UTG CALLER
	
		rangos.push({
		title: "BB vs UTG +MP Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,2,3,3,4,4,4,4,4,4,4,4,4],
				[2,2,3,4,4,4,16,16,16,0,0,0,0],
				[4,4,2,3,4,4,16,0,0,0,0,0,0],
				[4,4,4,3,4,4,16,0,0,0,0,0,0],
				[16,0,0,0,3,4,16,16,0,0,0,0,0],
				[0,0,0,0,0,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,16,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs UTG +CO Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,2,3,3,4,4,4,4,4,4,4,4,4],
				[2,2,3,4,4,4,16,16,16,0,0,0,0],
				[4,4,2,3,4,4,16,0,0,0,0,0,0],
				[4,4,4,3,4,4,16,0,0,0,0,0,0],
				[16,0,0,0,3,4,16,16,0,0,0,0,0],
				[0,0,0,0,0,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,16,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs UTG +BTN Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,2,3,3,4,4,4,4,4,4,4,4,4],
				[2,2,3,4,4,4,16,16,16,0,0,0,0],
				[4,4,2,3,4,4,16,0,0,0,0,0,0],
				[4,4,4,3,4,4,16,0,0,0,0,0,0],
				[16,0,0,0,3,4,16,16,0,0,0,0,0],
				[0,0,0,0,0,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,16,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs UTG +SB Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,2,3,3,4,4,4,4,4,4,4,4,4],
				[2,2,3,4,4,4,16,16,16,0,0,0,0],
				[4,4,2,3,4,4,16,0,0,0,0,0,0],
				[4,4,4,3,4,4,16,0,0,0,0,0,0],
				[16,0,0,0,3,4,16,16,0,0,0,0,0],
				[0,0,0,0,0,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,16,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
	// BB VS MP CALLER
	
		rangos.push({
		title: "BB vs MP +CO Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,2,3,3,4,4,4,4,4,4,4,4,4],
				[2,2,3,4,4,4,4,4,16,16,16,0,0],
				[4,4,2,3,4,4,16,0,0,0,0,0,0],
				[4,4,4,3,4,4,16,0,0,0,0,0,0],
				[16,16,0,0,3,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,16,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs MP +BTN Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,2,3,3,4,4,4,4,4,4,4,4,4],
				[2,2,3,4,4,4,4,4,16,16,16,0,0],
				[4,4,2,3,4,4,16,0,0,0,0,0,0],
				[4,4,4,3,4,4,16,0,0,0,0,0,0],
				[16,16,0,0,3,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,16,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs MP +SB Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,2,3,3,4,4,4,4,4,4,4,4,4],
				[2,2,3,4,4,4,4,4,16,16,16,0,0],
				[4,4,2,3,4,4,16,0,0,0,0,0,0],
				[4,4,4,3,4,4,16,0,0,0,0,0,0],
				[16,16,0,0,3,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,4,4,16,0,0,0,0,0],
				[0,0,0,0,0,0,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,0,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,16,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
	// BB VS CO CALLER
	
		rangos.push({
		title: "BB vs CO +BTN Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,1,2,2,3,4,4,4,4,4,4,4,4],
				[1,1,3,3,4,4,4,4,4,4,4,16,16],
				[3,4,2,3,3,4,4,16,16,16,0,0,0],
				[4,4,4,2,3,4,4,16,0,0,0,0,0],
				[4,4,0,0,2,3,4,4,0,0,0,0,0],
				[16,0,0,0,0,3,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,3,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,3,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
		rangos.push({
		title: "BB vs CO +SB Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,1,2,2,3,4,4,4,4,4,4,4,4],
				[1,1,3,3,4,4,4,4,4,4,4,16,16],
				[3,4,2,3,3,4,4,16,16,16,0,0,0],
				[4,4,4,2,3,4,4,16,0,0,0,0,0],
				[4,4,0,0,2,3,4,4,0,0,0,0,0],
				[16,0,0,0,0,3,4,4,16,0,0,0,0],
				[0,0,0,0,0,0,3,4,4,16,0,0,0],
				[0,0,0,0,0,0,0,3,4,4,0,0,0],
				[0,0,0,0,0,0,0,0,4,4,4,0,0],
				[0,0,0,0,0,0,0,0,0,4,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,4,16,0],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
	// BB VS BTN CALLER
	
	
		rangos.push({
		title: "BB vs BTN +SB Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"],
				[4,"Call x3"],
				[16,"Call x2.5"]
			],
		cell:[
				[1,1,2,2,2,4,4,4,4,3,3,4,4],
				[1,1,2,2,3,4,4,4,4,4,4,4,4],
				[2,3,1,2,3,4,4,4,4,16,16,0,0],
				[3,4,4,2,3,3,4,4,16,0,0,0,0],
				[4,4,4,4,2,3,4,4,16,0,0,0,0],
				[4,16,16,16,16,2,3,4,4,16,0,0,0],
				[4,0,0,0,0,16,2,3,4,16,0,0,0],
				[4,0,0,0,0,0,16,3,3,4,16,0,0],
				[0,0,0,0,0,0,0,0,3,3,4,16,0],
				[0,0,0,0,0,0,0,0,0,4,4,4,16],
				[0,0,0,0,0,0,0,0,0,0,4,4,16],
				[0,0,0,0,0,0,0,0,0,0,0,4,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,4]
			]
	});
	
	// SB VS UTG CALLER
	
		rangos.push({
		title: "SB vs UTG +MP Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,3,3,0,0],
				[2,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,2,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs UTG +CO Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,3,3,0,0],
				[2,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,2,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs UTG +BTN Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,3,3,0,0],
				[2,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,2,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	// SB VS MP CALLER

	
		rangos.push({
		title: "SB vs MP +CO Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,3,3,0,0],
				[2,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs MP +BTN Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,3,3,0,0],
				[2,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,2,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	// SB VS CO CALLER
	
		rangos.push({
		title: "SB vs CO +BTN Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[2,1,2,3,3,0,0,0,0,3,3,3,0],
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,1,3,3,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,3,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	// BTN VS UTG CALLER
	
		rangos.push({
		title: "BTN vs UTG +MP Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,2,3,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs UTG +CO Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,2,3,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	// BTN VS MP CALLER
	
		rangos.push({
		title: "BTN vs MP +CO Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,2,3,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,2,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	// CO VS UTG CALLER

		rangos.push({
		title: "CO vs UTG +MP Caller",
		tag:[	[1,"SQ/All In"],
				[2,"SQ/Call"],
				[3,"Squeeze/Fold"]
			],
		cell:[
				[1,2,2,3,3,0,0,0,0,0,0,0,0],
				[2,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,3,2,3,0,0,0,0,0,0,0,0,0],
				[3,0,0,2,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
	// VS C4BEET

		rangos.push({
		title: "MP vs UTG vs C4bet IP",
		tag:[	[4,"Call 4bet"]
			],
		cell:[
				[4,4,0,0,0,0,0,0,0,0,0,0,0],
				[4,4,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,4,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs UTG vs C4bet OOP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs UTG vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,5,5,5,5,5,5,5,5,5,5],
				[2,1,5,5,5,5,0,0,0,0,0,0,0],
				[5,5,2,5,5,5,0,0,0,0,0,0,0],
				[5,5,5,2,5,5,0,0,0,0,0,0,0],
				[5,0,0,0,2,5,0,0,0,0,0,0,0],
				[0,0,0,0,0,5,5,0,0,0,0,0,0],
				[0,0,0,0,0,0,5,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs C4bet IP",
		tag:[	[4,"Call 4bet"]
			],
		cell:[
				[4,4,0,0,0,0,0,0,0,0,0,0,0],
				[4,4,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,4,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs C4bet OOP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs UTG vs C4bet OOP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs UTG vs C4bet IP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs UTG vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,5,5,5,5,5,5,5,5,5,5],
				[2,1,5,5,5,5,5,0,0,0,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,0,0,0,0,5,5,0,0,0,0,0,0],
				[0,0,0,0,0,0,5,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs MP vs C4bet IP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs MP vs C4bet OOP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs MP vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,5,5,5,5,5,5,5,5,5,5],
				[2,1,5,5,5,5,5,0,0,0,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,0,0,0,0,5,5,0,0,0,0,0,0],
				[0,0,0,0,0,0,5,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs C4bet IP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs C4bet OOP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs UTG vs C4bet IP",
		tag:[	[1,"All In"],
				[4,"Call 4bet"]
			],
		cell:[
				[4,4,4,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs UTG vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,2,5,5,5,5,5,5,5,5,5],
				[2,1,5,5,5,5,5,5,5,5,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,5,5,5,5,2,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,0,5,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
		rangos.push({
		title: "SB vs BTN vs C4bet OOP",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"]
			],
		cell:[
				[4,1,4,4,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs BTN vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"],
			],
		cell:[
				[1,1,2,2,2,5,5,5,5,5,5,5,5],
				[1,1,2,2,5,5,5,5,5,5,5,5,5],
				[2,5,1,2,5,5,5,5,5,5,0,0,0],
				[5,5,5,2,2,5,5,5,0,0,0,0,0],
				[5,5,5,5,2,5,5,5,0,0,0,0,0],
				[5,5,5,5,5,2,5,5,0,0,0,0,0],
				[5,5,0,0,0,0,2,5,0,0,0,0,0],
				[5,5,0,0,0,0,0,2,5,0,0,0,0],
				[5,0,0,0,0,0,0,0,5,5,0,0,0],
				[5,0,0,0,0,0,0,0,0,5,0,0,0],
				[5,0,0,0,0,0,0,0,0,0,5,0,0],
				[5,0,0,0,0,0,0,0,0,0,0,5,0],
				[5,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
		rangos.push({
		title: "SB vs BTN vs C4bet OOP vs 4.8%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"],
				[6,"Pensar"]
			],
		cell:[
				[1,1,4,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,6,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,6,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs BTN vs C4bet OOP vs 3%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"],
				[6,"Pensar"]
			],
		cell:[
				[4,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,4,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "UTG vs SQ OOP",
		tag:[	[1,"Reesqueeze/All in"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "UTG vs SQ IP",
		tag:[	[1,"Reesqueeze/All in"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "UTG vs C4bet IP",
		tag:[	[4,"Call 4bet"]
			],
		cell:[
				[4,4,0,0,0,0,0,0,0,0,0,0,0],
				[4,4,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,4,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "UTG vs C4bet OOP",
		tag:[	[1,"5bet"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "UTG vs C4bet OOP vs 3%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"]
			],
		cell:[
				[1,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs C4bet IP vs 3%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"]
			],
		cell:[
				[1,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs C4bet OOP vs 3%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"]
			],
		cell:[
				[1,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs C4bet IP vs 3%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"]
			],
		cell:[
				[1,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs UTG vs C4bet IP vs 4.8%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"]
			],
		cell:[
				[4,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,4,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs UTG vs C4bet OOP vs 4.8%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"],
				[6,"Pensar"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[6,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});

		rangos.push({
		title: "MP vs SQ OOP",
		tag:[	[1,"Reesqueeze/All in"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs SQ IP",
		tag:[	[1,"Reesqueeze/All in"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
		
		rangos.push({
		title: "MP vs UTG C4bet IP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 4bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,3,3,0,0,0,0,0,0,0,0,0,0],
				[0,4,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,4,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "MP vs UTG C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 4bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,3,0,0,0,0,0,0,0,0,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs UTG C4bet IP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs UTG C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 4bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,3,0,0,0,0,0,0,0,0,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs MP C4bet IP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs MP C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 4bet"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,3,0,0,0,0,0,0,0,0,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs MP vs C4bet IP vs 4.8%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"]
			],
		cell:[
				[4,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,4,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "CO vs MP vs C4bet OOP vs 4.8%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"],
				[6,"Pensar"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[6,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs UTG C4bet IP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs MP C4bet IP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs CO C4bet IP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[3,1,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs MP vs C4bet IP vs 4.8%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"],
				[6,"Pensar"]
			],
		cell:[
				[4,1,6,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,6,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,6,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,6,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});

		rangos.push({
		title: "BTN vs MP vs C4bet IP",
		tag:[	[1,"All In"],
				[4,"Call 4bet"]
			],
		cell:[
				[4,4,4,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs MP vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,2,5,5,5,5,5,5,5,5,5],
				[2,1,5,5,5,5,5,5,5,5,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,5,5,5,5,2,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,0,5,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
		
		rangos.push({
		title: "BTN vs CO vs C4bet IP",
		tag:[	[1,"All In"],
				[4,"Call 4bet"]
			],
		cell:[
				[4,1,4,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs CO vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,2,5,5,5,5,5,5,5,5,5],
				[2,1,5,5,5,5,5,5,5,5,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,5,5,5,5,2,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,0,5,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
		rangos.push({
		title: "BTN vs C4bet IP",
		tag:[	[1,"All In"],
				[4,"Call 4bet"]
			],
		cell:[
				[4,1,4,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,4,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,4,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BTN vs CO vs C4bet IP vs 4.8%",
		tag:[	[1,"5bet"],
				[4,"Call 4bet"],
				[6,"Pensar"]
			],
		cell:[
				[4,1,6,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,6,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,6,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,6,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,6,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs UTG C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 4bet"],
				[3,"4bet/Fold"],
				[6,"4bet/Fold ocasional"]
			],
		cell:[
				[1,3,3,0,0,0,0,0,0,6,6,0,0],
				[6,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs MP C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs CO C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[3,1,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs UTG vs C4bet OOP",
		tag:[	[1,"4bet/All in"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs UTG vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,2,5,5,5,5,5,5,5,5,5],
				[2,1,2,5,5,5,5,5,0,0,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,0,0,0,0,2,5,0,0,0,0,0,0],
				[5,0,0,0,0,0,5,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
		rangos.push({
		title: "SB vs MP vs C4bet OOP",
		tag:[	[1,"4bet/All in"]
			],
		cell:[
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs MP vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,2,2,2,5,5,5,5,5,5,5,5,5],
				[2,1,2,5,5,5,5,5,0,0,0,0,0],
				[5,5,2,5,5,5,5,0,0,0,0,0,0],
				[5,5,5,2,5,5,5,0,0,0,0,0,0],
				[5,5,5,5,2,5,5,0,0,0,0,0,0],
				[5,0,0,0,0,2,5,0,0,0,0,0,0],
				[5,0,0,0,0,0,5,5,0,0,0,0,0],
				[0,0,0,0,0,0,0,5,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,5,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,5,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,5,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,5,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
		rangos.push({
		title: "SB vs CO vs C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[4,"Call 4bet"]
			],
		cell:[
				[4,1,4,4,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,4,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,4,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,4,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "SB vs CO vs Limp",
		tag:[	[1,"Rol/Raise"],
				[2,"Rol/Call"],
				[5,"Rol/Fold"]
			],
		cell:[
				[1,1,2,2,2,5,5,5,5,5,5,5,5],
				[1,1,2,2,5,5,5,5,5,5,5,5,5],
				[2,5,1,2,5,5,5,5,5,5,0,0,0],
				[5,5,5,2,2,5,5,5,0,0,0,0,0],
				[5,5,5,5,2,5,5,5,0,0,0,0,0],
				[5,5,5,5,5,2,5,5,0,0,0,0,0],
				[5,0,0,0,0,0,2,5,0,0,0,0,0],
				[5,0,0,0,0,0,0,2,5,0,0,0,0],
				[5,0,0,0,0,0,0,0,5,5,0,0,0],
				[5,0,0,0,0,0,0,0,0,5,0,0,0],
				[5,0,0,0,0,0,0,0,0,0,5,0,0],
				[5,0,0,0,0,0,0,0,0,0,0,5,0],
				[5,0,0,0,0,0,0,0,0,0,0,0,5]
			]
	});
	
		rangos.push({
		title: "SB vs BTN C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BB vs UTG C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"],
				[6,"4bet/Call ocasional"]
			],
		cell:[
				[1,3,3,3,0,0,0,0,0,0,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,6,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BB vs MP C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[3,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BB vs CO C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,0,0,0,0,0,0,3,0,0,0],
				[1,1,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,3,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BB vs BTN C4bet OOP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[1,1,3,3,0,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,3,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});
	
		rangos.push({
		title: "BB vs SB C4bet IP",
		tag:[	[1,"4bet/All in"],
				[3,"4bet/Fold"]
			],
		cell:[
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[1,1,3,3,3,0,0,0,0,0,0,0,0],
				[3,0,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,3,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
	});

}



function llenarRangosTabla(){
	//Funcion que genera la matriz base de la tabla
	var table = document.getElementById("rangos_tabla");
	for(var i=0; i<rangos_tabla.length; i++){
		var row = table.insertRow(i);
		for(var j=0; j<rangos_tabla[i].length; j++){
			var cell = row.insertCell(j);
			cell.innerHTML = rangos_tabla[i][j];
			cell.id = "range_r"+i+"c"+j;
			cell.align = "center";
		}
	}
}

function borrarClassTable(){
	
	for(var i=0; i<rangos_tabla.length; i++){
				
		for(var j=0; j<rangos_tabla[i].length; j++){
						
			document.getElementById("range_r"+i+"c"+j).className = "";
			
		}
		
	}
	
}

function crearEstructura(){
	var html = "";

	for(var i = 0; i < estructura.length; i++)  {
		
		html = html+'<div class="column is-one-fifth" id="col'+i+'">';
		
		for(var j = 0; j < estructura[i].row.length; j++)  {
			var row = "";

			if(estructura[i].row[j] != ""){
				name = "'"+estructura[i].row[j]+"'";
				row = "<div class='row' id='c"+i+"r"+j+"'>";
				row = row+'<a class="button is-info is-small" id="button_c'+i+'r'+j+'" style="display:block" onclick="seleccionPosicion(this.id,'+i+','+name+')">'+estructura[i].row[j]+'</a>';
				row = row+'</div>';

				}
				else{
				row = '<div class="row" id="c'+i+'r'+j+'"><span id="button_c'+i+'r'+j+'" class="button is-static is-small"></span></div>';
				}
			html = html + row;
		}
		html = html+'</div>';
		}
	
	document.getElementById("estructura").innerHTML = html;
}

function crearTagsRangos(rangos_tag){
	
	var html = "";
	
	
	if(typeof rangos_tag != 'undefined'){
			
		for(var i = 0; i < rangos_tag.length; i++)  {
			
			var text_tag = "";
			
			if(rangos_tag[i][0]==101){text_tag = "A"};
			
			html = html + '<div id="hand'+i+'" class="column is-one-fifth control">';
			html = html + '<div class="tags has-addons">';
			html = html + '<span class="tag is-colored color'+rangos_tag[i][0]+'">'+text_tag+'</span>';
			html = html + '<span id="hand'+i+'_text" class="tag is-grey">'+rangos_tag[i][1]+'</span>';
			html = html + '</div>';
			html = html + '</div>';		
		}	
	}
	
	document.getElementById("rangos_tag").innerHTML = html;
	
}

function ocultarColumnas(inicial){
	//console.log("ocultarColumnas");
	//console.log("inicial: %s",inicial)
	for(var i = 0; i < estructura.length; i++)  {
		if (i>inicial){//Columna 0 nunca se debe ocultar
			/*	busca la estructura [i] y la oculta
				luego revisa cuantas filas hay en esa estructura y tambien las oculta
			*/
			document.getElementById("col"+i).style.display = "none";
			//columna = document.getElementById("col"+i)
			//console.log("OCULTAR: %s",i);
			//console.log(columna);
			//estructuraRow = estructura[i].row.length;
			//console.log("ESTRUCTURA ROW: %s",estructuraRow);
			//console.log("Ocultando de col %s",i);
			//console.log(estructura[i]);
			for(var j = 0; j<estructura[i].row.length; j++){
				//console.log("ROW: %s",j);
				document.getElementById("c"+i+"r"+j).style.display = "none";
				document.getElementById("button_c"+i+"r"+j).style.display = "none";
			}
		}

	}
}

function ocultarColumnasPrevias(col_eliminadas){
	
		for(var i = 0; i < col_eliminadas.length; i++)  {
			
			var col = col_eliminadas[i];
			document.getElementById("col"+col).style.display = "none";
			
			for(var j = 0; j<estructura[col].row.length; j++){
				document.getElementById("c"+col+"r"+j).style.display = "none";
				document.getElementById("button_c"+col+"r"+j).style.display = "none";
			}

	}
	
}
function activarCelda(id,col){
	/*cambia el color del boton seleccionado */
	//console.log("Cambiar color\nID BUTTON: %s | COLUMNA: %s",id,col);
	for(var i=col;i<estructura.length;i++){
		for(var j=0; j<estructura[i].row.length; j++){
			document.getElementById("button_c"+i+"r"+j).classList.remove('is-success');
			document.getElementById("button_c"+i+"r"+j).classList.add("is-info");		
		}		
	}

	document.getElementById(id).classList.remove('is-info');
	document.getElementById(id).classList.add("is-success");
	
	
}

function guardarSeleccionCol(col,cell_name){
	//Guardar el nombre y columna seleccionada
	//console.log("guardarSeleccionCol\n")
	//console.log("col: %s\nCell_name: %s",col,cell_name);
	//console.log("variable: %s",col_select);
	col_select[col] = cell_name;
	//console.log("variable Modificada: %s",col_select);
	for(var i=(col+1);i<estructura.length;i++){
		col_select[i] = "";		
	}
}

function asignarTituloRango(titulo){
	
	if(typeof titulo != 'undefined'){
		document.getElementById("rangos-title").innerHTML = titulo;
			
	}
	
}

function asignarRangoEstiloCelda(titulo,colors){
	//console.log("asignarrandoestilocelda");
	var rangos_cell = [];
	var rangos_tag = [];
	borrarClassTable();

	//console.log("Rangos",rangos);
	for(var i=0; i<rangos.length; i++){
		
		if(titulo == rangos[i].title){
			rangos_cell = rangos[i].cell;
			rangos_tag = rangos[i].tag;
			break;
		}
	}
	
	crearTagsRangos(rangos_tag);
	
	for(var i=0; i<rangos_cell.length; i++){
		
		for(var j=0; j<rangos_cell[i].length; j++){
			
				var id = "range_r"+i+"c"+j;
			
				document.getElementById(id).classList.add("color"+colors[i][j]);
			
		}
	}
	
	//console.log(rangos_cell);
}

function asignarMensajeTabla(message){
	document.getElementById("table_message").style.display = "none";

	if(typeof message != 'undefined'){
	
		document.getElementById("table_message").style.display = "block";
		document.getElementById("table_message").innerHTML = message;
	}
	
}


function formatColors(textColors){
	let separated = textColors.split('|');
	let text = separated[0].slice(0,-1).split('.');
	let columns = [];
	text.forEach(element =>{
		columns.push(element.split('-'));
	})
	if(separated[1]){
		var versions = separated[1].slice(0,-1).split('-');
		return [columns,versions];
	}
	return [columns,null];
}

function clearVersions(){
	let versionx = $('#versionsSelect');	
	versionx.empty();
	versionx.append(`<option value="0">Version Principal</option>`);
}

function changeVersions(data){
	if(data){
		let selectVersions = document.getElementById('versionsSelect');
		data.forEach(element =>{
			let separa = element.split(':')
			selectVersions.add(new Option(separa[0],separa[1]));
		});
	}
}

//VERSION
function loadnewTable(){
	let tabla = document.getElementById('rangos_tabla').cloneNode(true);
	let newBody = document.getElementById('newBody');
	newBody.innerHTML ='';
	document.getElementById('newBody').appendChild(tabla);
}

//VERSION
function loadTableVersion(name,colors){
	//format colors
	let text = colors.slice(0,-1).split('.');
	let columns = [];
	text.forEach(element =>{
		columns.push(element.split('-'));
	})
	borrarClassTable();
	for(var i=0; i<columns.length; i++){
		for(var j=0; j<columns[i].length; j++){
				var id = "range_r"+i+"c"+j;
				document.getElementById(id).classList.add("color"+columns[i][j]);
		}
	}
}

//VERSION
function loadJSVersion(name,version,typeMove){
	let result = SINGLES[name];	
	$.get('QJSVersion?move='+result+'&version='+version+'&typeMove='+typeMove,function(response){
		loadTableVersion(name,response);
	});
}

function getDelURL(){
	//arma el nombre de la jugada elegida
	let typeMove = 0;
	let findName = '';
	col_select.forEach(element=>{
		if(element){
			typeMove+=1;
			findName+=element+' '
		}
	})
	var result =0;
	//nombre de la jugada
	findName=findName.slice(0,-1);
	if(typeMove == 1){
		result = SINGLES[findName]
	}
	else if(typeMove == 2){
		result = DOUBLES[findName]
	}
	else if(typeMove == 3){
		result = TRIPLES[findName]
	}
	return [typeMove,result];
}

//VERSION
function buscarVersion(version){
	//arma el nombre de la jugada elegida
	let typeMove = 0;
	let findName = '';
	col_select.forEach(element=>{
		if(element){
			typeMove+=1;
			findName+=element+' '
		}
	})
	//nombre de la jugada
	findName=findName.slice(0,-1);
	//carga la version seleccionada de la jugada
	loadJSVersion(findName,version,typeMove);
}


function loadSingle(name,condition){
	//consulta colores de la jugada
	//rellena la tabla
	let result = SINGLES[name]
	$.get('QSingle?move='+result+'&version=True',function(response){
		var formatedCols = formatColors(response);
		changeVersions(formatedCols[1])
		asignarRangoEstiloCelda(condition,formatedCols[0]);
	});
}	

function loadDouble(name,condition){
	//consulta colores de la jugada
	//rellena la tabla
	let result = DOUBLES[name];
	$.get('QDouble?'+'&move='+result+'&version=True',function(response){
		var formatedCols = formatColors(response);
		changeVersions(formatedCols[1])
		asignarRangoEstiloCelda(condition,formatedCols[0]);
	});
}

function loadTriple(name,condition){
	//consulta colores de la jugada
	//rellena la tabla
	let result = TRIPLES[name];
	$.get('QTriple?move='+result+'&version=True',function(response){
		var formatedCols = formatColors(response);
		changeVersions(formatedCols[1])
		asignarRangoEstiloCelda(condition,formatedCols[0]);
	});
}



function buscarJugada(data,condition){
	//arma el nombre de la jugada elegida
	let typeMove = 0;
	let findName = ''
	data.forEach(element=>{
		if(element){
			typeMove+=1;
			findName+=element+' '
		}
	})
	//nombre de la jugada
	findName=findName.slice(0,-1);

	//carga el tipo de jugada en base al nombre
	if(typeMove==1){
		loadSingle(findName,condition);
	}
	
	else if(typeMove==2){
		loadDouble(findName,condition);
	}
	
	else if(typeMove==3){
		loadTriple(findName,condition);
	}
}



function seleccionPosicion(id,col,cell_name){
	//console.log("EJECUTANDO SELECCION posicion version");
	//console.log("ID del boton: %s\nColumna: %s\nNombre: %s",id,col,cell_name);
	var condicion_name = "";

	// MOSTRAR LAS COLUMNAS CORRESPONDIENTES
	guardarSeleccionCol(col,cell_name);//Detecta las seleccionadas
	ocultarColumnas(col);
	activarCelda(id,col);
	
	//Muestro la columna en la que estoy
	document.getElementById("col"+col).style.display = "block";
	//console.log(SINGLES);
	var condicion_cell = [];
	//console.log("condiciones",condicion.length);
	//console.log("COL_SELECT",col_select);
	


	//Recorro todas las condiciones
	for(var i=0; i<condicion.length; i++){
		
		if(condicion[i].col_selected.equals(col_select) === true){
			//console.log("COINCIDENCIA %s y %s",condicion[i].col_selected,col_select)
			// DESPLEGAR LAS NUEVAS CELDAS Y COLUMNAS SEGUN LA COINCIDENCIA ENCONTRADA
			condicion_cell = condicion[i].cell;
			
			for(var j=0;j<condicion_cell.length; j++){
				
				document.getElementById("col"+condicion_cell[j][0]).style.display = "block";
				
				for(var k=0;k<condicion_cell[j][1].length; k++){
					
					document.getElementById("c"+condicion_cell[j][0]+"r"+condicion_cell[j][1][k]).style.display = "block";
					document.getElementById("button_c"+condicion_cell[j][0]+"r"+condicion_cell[j][1][k]).style.display = "block";
					
				}
				
			}
			
			// ELIMINAR COLUMNAS PREVIAS
			
			columnas_previas = condicion[i].col_deleted;
			//console.log("Largo col eliminadas "+columnas_previas.length);
			ocultarColumnasPrevias(columnas_previas);
			
			// ASIGNAR LAS "PRE SELECCIONES"
			condicion_pre_selected = condicion[i].pre_selected;
			//console.log("Largo preselected "+condicion_pre_selected.length);
			
			for(var j=0;j<condicion_pre_selected.length; j++){
				
				activarCelda("button_c"+condicion_pre_selected[j][0]+"r"+condicion_pre_selected[j][1],condicion_pre_selected[j][0]);
				guardarSeleccionCol(condicion_pre_selected[j][0],estructura[condicion_pre_selected[j][0]].row[condicion_pre_selected[j][1]]);
			}
			
			condicion_name = condicion[i].condicion_name;
			message = condicion[i].message;
			//console.log("Mensaje este si: "+message);
					
			break;
		}
	}	
	
	//console.log(col_select);
	//console.log("Nombre de lo que se debe mostrar: %s",condicion_name)

	asignarTituloRango(condicion_name);
	asignarMensajeTabla(message);
	//asignarRangoEstiloCelda(condicion_name);
	//detecta la jugada luego llena la tabla
	clearVersions();
	buscarJugada(col_select,condicion_name);
}



// FUNCION PARA AGREGAR COMPARACION DE ARRAYS

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});