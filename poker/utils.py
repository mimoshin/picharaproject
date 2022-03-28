TABLA = [
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
	]

BASE = [{'id':1,'name':"UTG",'colors':'AA|4-AKs|4-AQs|4-AJs|4-ATs|4-A9s|4-A8s|4-A7s|4-A6s|4-A5s|4-A4s|4-A3s|4-A2s|4.AKo|4-KK|4-KQs|4-KJs|4-KTs|4-K9s|4-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|4-KQo|4-QQ|4-QJs|4-QTs|4-Q9s|4-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|4-KJo|4-QJo|11-JJ|4-JTs|4-J9s|4-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|4-KTo|11-QTo|11-JTo|11-TT|4-T9s|4-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|4-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|4-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|4-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|4-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
		{'id':2,'name':"MP",'colors':'AA|4-AKs|4-AQs|4-AJs|4-ATs|4-A9s|4-A8s|4-A7s|4-A6s|4-A5s|4-A4s|4-A3s|4-A2s|4.AKo|4-KK|4-KQs|4-KJs|4-KTs|4-K9s|4-K8s|4-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|4-KQo|4-QQ|4-QJs|4-QTs|4-Q9s|4-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|4-KJo|4-QJo|4-JJ|4-JTs|4-J9s|4-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|4-KTo|4-QTo|11-JTo|11-TT|4-T9s|4-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|4-98s|4-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|4-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|4-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|4-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|4-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
		{'id':3,'name':"CO",'colors':'AA|4-AKs|4-AQs|4-AJs|4-ATs|4-A9s|4-A8s|4-A7s|4-A6s|4-A5s|4-A4s|4-A3s|4-A2s|4.AKo|4-KK|4-KQs|4-KJs|4-KTs|4-K9s|4-K8s|4-K7s|4-K6s|4-K5s|4-K4s|11-K3s|11-K2s|11.AQo|4-KQo|4-QQ|4-QJs|4-QTs|4-Q9s|4-Q8s|4-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|4-KJo|4-QJo|4-JJ|4-JTs|4-J9s|4-J8s|4-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|4-KTo|4-QTo|4-JTo|4-TT|4-T9s|4-T8s|4-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|4-K9o|11-Q9o|11-J9o|11-T9o|11-99|4-98s|4-97s|4-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|4-87s|4-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|4-76s|4-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|4-65s|4-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|4-54s|4-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|4-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
		{'id':4,'name':"BTN",'colors':'AA|4-AKs|4-AQs|4-AJs|4-ATs|4-A9s|4-A8s|4-A7s|4-A6s|4-A5s|4-A4s|4-A3s|4-A2s|4.AKo|4-KK|4-KQs|4-KJs|4-KTs|4-K9s|4-K8s|4-K7s|4-K6s|4-K5s|4-K4s|4-K3s|4-K2s|4.AQo|4-KQo|4-QQ|4-QJs|4-QTs|4-Q9s|4-Q8s|4-Q7s|4-Q6s|4-Q5s|4-Q4s|11-Q3s|11-Q2s|11.AJo|4-KJo|4-QJo|4-JJ|4-JTs|4-J9s|4-J8s|4-J7s|4-J6s|4-J5s|11-J4s|11-J3s|11-J2s|11.ATo|4-KTo|4-QTo|4-JTo|4-TT|4-T9s|4-T8s|4-T7s|4-T6s|4-T5s|11-T4s|11-T3s|11-T2s|11.A9o|4-K9o|4-Q9o|4-J9o|4-T9o|4-99|4-98s|4-97s|4-96s|4-95s|11-94s|11-93s|11-92s|11.A8o|4-K8o|4-Q8o|11-J8o|11-T8o|11-98o|4-88|4-87s|4-86s|4-85s|4-84s|11-83s|11-82s|11.A7o|4-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|4-76s|4-75s|4-74s|11-73s|11-72s|11.A6o|4-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|4-65s|4-64s|4-63s|11-62s|11.A5o|4-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|4-54s|4-53s|4-52s|11.A4o|4-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|4-43s|4-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|4-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|4'},
		{'id':5,'name':"SB",'colors':'AA|4-AKs|4-AQs|4-AJs|4-ATs|4-A9s|4-A8s|4-A7s|4-A6s|4-A5s|4-A4s|4-A3s|4-A2s|4.AKo|4-KK|4-KQs|4-KJs|4-KTs|4-K9s|4-K8s|4-K7s|4-K6s|4-K5s|4-K4s|4-K3s|4-K2s|4.AQo|4-KQo|4-QQ|4-QJs|4-QTs|4-Q9s|4-Q8s|4-Q7s|4-Q6s|4-Q5s|4-Q4s|4-Q3s|4-Q2s|4.AJo|4-KJo|4-QJo|4-JJ|4-JTs|4-J9s|4-J8s|4-J7s|4-J6s|4-J5s|4-J4s|4-J3s|4-J2s|4.ATo|4-KTo|4-QTo|4-JTo|4-TT|4-T9s|4-T8s|4-T7s|4-T6s|4-T5s|11-T4s|11-T3s|11-T2s|11.A9o|4-K9o|4-Q9o|4-J9o|4-T9o|4-99|4-98s|4-97s|4-96s|4-95s|11-94s|11-93s|11-92s|11.A8o|4-K8o|4-Q8o|4-J8o|4-T8o|4-98o|4-88|4-87s|4-86s|4-85s|11-84s|11-83s|11-82s|11.A7o|4-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|4-76s|4-75s|4-74s|4-73s|11-72s|11.A6o|4-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|4-65s|4-64s|4-63s|11-62s|11.A5o|4-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|4-54s|4-53s|4-52s|11.A4o|4-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|4-43s|4-42s|11.A3o|4-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|4-32s|11.A2o|4-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|4'},
		{'id':6,'name':"BB",'colors':'AA|1-AKs|1-AQs|2-AJs|2-ATs|3-A9s|3-A8s|3-A7s|3-A6s|3-A5s|2-A4s|3-A3s|3-A2s|3.AKo|1-KK|1-KQs|2-KJs|3-KTs|3-K9s|3-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|3-KQo|3-QQ|1-QJs|2-QTs|3-Q9s|3-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|3-KJo|3-QJo|3-JJ|1-JTs|3-J9s|3-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|3-T9s|3-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|3-98s|3-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|3-87s|3-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|3-76s|3-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|3-65s|3-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|3-54s|3-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|3-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|3-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|3'}
		]

DOUBLE = [	{'base':1,'comps': #UTG
				[{'id':1,'name':"vs SQ OOP",'colors':'AA|0-AKs|0-AQs|11-AJs|11-ATs|11-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|0-KK|0-KQs|11-KJs|11-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|0-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|11-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|11-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|11-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|11-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':2,'name':"vs SQ IP",'colors':'AA|0-AKs|0-AQs|11-AJs|11-ATs|11-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|0-KK|0-KQs|11-KJs|11-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|0-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|11-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|11-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|11-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|11-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':3,'name':"vs C4bet IP",'colors':'AA|3-AKs|3-AQs|11-AJs|11-ATs|11-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|3-KK|3-KQs|11-KJs|11-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|3-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|11-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|11-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|11-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|11-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':4,'name':"vs C4bet OOP",'colors':'AA|0-AKs|0-AQs|11-AJs|11-ATs|11-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|0-KK|0-KQs|11-KJs|11-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|0-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|11-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|11-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|11-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|11-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':5,'name':"vs 3Bet IP",'colors':'AA|0-AKs|3-AQs|3-AJs|3-ATs|3-A9s|11-A8s|11-A7s|11-A6s|11-A5s|2-A4s|11-A3s|11-A2s|11.AKo|3-KK|3-KQs|3-KJs|3-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|3-QJs|3-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|3-JTs|3-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|3-T9s|3-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|3-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|3-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|3-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|3-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':6,'name':"vs 3Bet OOP",'colors':'AA|0-AKs|0-AQs|3-AJs|3-ATs|3-A9s|11-A8s|11-A7s|11-A6s|11-A5s|2-A4s|11-A3s|11-A2s|11.AKo|3-KK|0-KQs|3-KJs|3-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|2-KQo|11-QQ|3-QJs|3-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|3-JTs|3-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|3-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|3-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|3-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|3-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'}
				 ]
			},
			{'base':2,'comps':#MP
		 		[{'id':7,'name':"vs UTG",'colors':'AA|0-AKs|1-AQs|1-AJs|2-ATs|2-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|1-KK|0-KQs|2-KJs|2-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|2-KQo|11-QQ|1-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|2-KJo|11-QJo|11-JJ|1-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|1-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|1-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|2-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':8,'name':"vs SQ OOP",'colors':'AA|0-AKs|0-AQs|11-AJs|11-ATs|11-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|0-KK|0-KQs|11-KJs|11-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|0-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|11-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|11-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|11-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|11-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':9,'name':"vs SQ IP",'colors':'AA|0-AKs|0-AQs|11-AJs|11-ATs|11-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|0-KK|0-KQs|11-KJs|11-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|0-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|11-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|11-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|11-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|11-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':10,'name':"vs C4bet IP",'colors':'AA|3-AKs|3-AQs|11-AJs|11-ATs|11-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|3-KK|3-KQs|11-KJs|11-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|3-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|11-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|11-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|11-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|11-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':11,'name':"vs C4bet OOP",'colors':'AA|0-AKs|0-AQs|11-AJs|11-ATs|11-A9s|11-A8s|11-A7s|11-A6s|11-A5s|11-A4s|11-A3s|11-A2s|11.AKo|0-KK|0-KQs|11-KJs|11-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|0-QJs|11-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|11-JTs|11-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|11-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|11-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|11-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|11-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':12,'name':"vs 3Bet IP",'colors':'AA|0-AKs|0-AQs|3-AJs|3-ATs|3-A9s|11-A8s|11-A7s|11-A6s|11-A5s|2-A4s|2-A3s|2-A2s|11.AKo|3-KK|0-KQs|3-KJs|3-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|11-KQo|11-QQ|3-QJs|3-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|3-JTs|3-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|3-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|3-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|3-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|3-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|3-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|3-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'},
				 {'id':13,'name':"vs 3Bet OOP",'colors':'AA|0-AKs|0-AQs|3-AJs|3-ATs|3-A9s|11-A8s|11-A7s|11-A6s|11-A5s|2-A4s|2-A3s|2-A2s|2.AKo|0-KK|0-KQs|3-KJs|3-KTs|11-K9s|11-K8s|11-K7s|11-K6s|11-K5s|11-K4s|11-K3s|11-K2s|11.AQo|2-KQo|11-QQ|0-QJs|3-QTs|11-Q9s|11-Q8s|11-Q7s|11-Q6s|11-Q5s|11-Q4s|11-Q3s|11-Q2s|11.AJo|11-KJo|11-QJo|11-JJ|3-JTs|3-J9s|11-J8s|11-J7s|11-J6s|11-J5s|11-J4s|11-J3s|11-J2s|11.ATo|11-KTo|11-QTo|11-JTo|11-TT|3-T9s|11-T8s|11-T7s|11-T6s|11-T5s|11-T4s|11-T3s|11-T2s|11.A9o|11-K9o|11-Q9o|11-J9o|11-T9o|11-99|3-98s|11-97s|11-96s|11-95s|11-94s|11-93s|11-92s|11.A8o|11-K8o|11-Q8o|11-J8o|11-T8o|11-98o|11-88|3-87s|11-86s|11-85s|11-84s|11-83s|11-82s|11.A7o|11-K7o|11-Q7o|11-J7o|11-T7o|11-97o|11-87o|11-77|3-76s|11-75s|11-74s|11-73s|11-72s|11.A6o|11-K6o|11-Q6o|11-J6o|11-T6o|11-96o|11-86o|11-76o|11-66|11-65s|11-64s|11-63s|11-62s|11.A5o|11-K5o|11-Q5o|11-J5o|11-T5o|11-95o|11-85o|11-75o|11-65o|11-55|11-54s|11-53s|11-52s|11.A4o|11-K4o|11-Q4o|11-J4o|11-T4o|11-94o|11-84o|11-74o|11-64o|11-54o|11-44|11-43s|11-42s|11.A3o|11-K3o|11-Q3o|11-J3o|11-T3o|11-93o|11-83o|11-73o|11-63o|11-53o|11-43o|11-33|11-32s|11.A2o|11-K2o|11-Q2o|11-J2o|11-T2o|11-92o|11-82o|11-72o|11-62o|11-52o|11-42o|11-32o|11-22|11'}]
			},
			{'base':3,'comps':#CO
		 		[{'id':14,'name':"vs UTG"},
				 {'id':15,'name':"vs MP"},
				 {'id':16,'name':"vs SQ OOP"},
				 {'id':17,'name':"vs SQ IP"},
				 {'id':18,'name':"vs C4bet IP"},
				 {'id':19,'name':"vs C4bet OOP"},
				 {'id':20,'name':"vs 3Bet IP"},
				 {'id':21,'name':"vs 3Bet OOP"}]
			},
			{'base':4,'comps':#BTN
		 		[{'id':22,'name':"vs UTG"},
				 {'id':23,'name':"vs MP"},
				 {'id':24,'name':"vs CO"},
				 {'id':25,'name':"vs SQ IP"},
				 {'id':26,'name':"vs C4bet IP"},
				 {'id':27,'name':"vs 3Bet IP"}]
			},
			{'base':5,'comps':#SB
		 		[{'id':28,'name':"vs UTG"},
				 {'id':29,'name':"vs MP"},
				 {'id':30,'name':"vs CO"},
				 {'id':31,'name':"vs BTN"},
				 {'id':32,'name':"vs 3Bet OOP"}]
			},
			{'base':6,'comps':#BB
		 		[{'id':33,'name':"vs UTG"},
				 {'id':34,'name':"vs MP"},
				 {'id':35,'name':"vs CO"},
				 {'id':36,'name':"vs BTN"},
				 {'id':37,'name':"vs SB"}]
			}
		]

TRIPLE = [	{'base':7,'comps':
		 		[{'id':1,'name':"vs C4bet IP"},
				 {'id':2,'name':"vs Limp"},
				 {'id':3,'name':"vs C4bet OOP"}]
			},
			{'base':14,'comps':
		 		[{'id':4,'name':"+MP Caller"},
				 {'id':5,'name':"vs C4bet IP"},
				 {'id':6,'name':"vs Limp"},
				 {'id':7,'name':"vs C4bet OOP"}]
			},
			{'base':15,'comps':
		 		[{'id':8,'name':"C4bet IP"},
				 {'id':9,'name':"vs C4bet IP"},
				 {'id':10,'name':"vs Limp"},
				 {'id':11,'name':"vs C4bet OOP"}]
			},
			{'base':22,'comps':
		 		[{'id':12,'name':"+MP Caller"},
				 {'id':13,'name':"vs C4bet IP"},
				 {'id':14,'name':"vs Limp"},
				 {'id':15,'name':"+CO Caller"}]
			},
			{'base':23,'comps':
		 		[{'id':16,'name':"+CO Caller"},
				 {'id':17,'name':"C4bet IP"},
				 {'id':18,'name':"vs Limp"},
				 {'id':19,'name':"vs C4bet IP"}]
			},
			{'base':24,'comps':
		 		[{'id':20,'name':"C4bet IP"},
				 {'id':21,'name':"vs Limp"},
				 {'id':22,'name':"vs C4bet IP"}]
			},
			{'base':28,'comps':
		 		[{'id':23,'name':"+MP Caller"},
				 {'id':24,'name':"+CO Caller"},
				 {'id':25,'name':"+BTN Caller"},
				 {'id':26,'name':"vs C4bet OOP"},
				 {'id':27,'name':"vs Limp"},]
			},
			{'base':29,'comps':
		 		[{'id':28,'name':"+CO Caller"},
				 {'id':29,'name':"+BTN Caller"},
				 {'id':30,'name':"C4bet OOP"},
				 {'id':31,'name':"vs C4bet OOP"},
				 {'id':32,'name':"vs Limp"}]
			},
			{'base':30,'comps':
		 		[{'id':33,'name':"+BTN Caller"},
				 {'id':34,'name':"C4bet OOP"},
				 {'id':35,'name':"vs Limp"},
				 {'id':36,'name':"vs C4bet OOP"}]
			},
			{'base':31,'comps':
		 		[{'id':37,'name':"C4bet OOP"},
				 {'id':38,'name':"vs Limp"},
				 {'id':39,'name':"vs C4bet OOP"}]
			},
			{'base':33,'comps':
		 		[{'id':40,'name':"+MP Caller"},
				 {'id':41,'name':"+CO Caller"},
				 {'id':42,'name':"+BTN Caller"},
				 {'id':43,'name':"+SB Caller"},
				 {'id':44,'name':"vs 3x"},
				 {'id':45,'name':"vs 2.5x"},
				 {'id':46,'name':"vs Limp"}]
			},
			{'base':34,'comps':
		 		[{'id':47,'name':"+CO Caller"},
				 {'id':48,'name':"+BTN Caller"},
				 {'id':49,'name':"+SB Caller"},
				 {'id':50,'name':"C4bet OOP"},
				 {'id':51,'name':"vs 3x"},
				 {'id':52,'name':"vs 2.5x"},
				 {'id':53,'name':"vs Limp"}]
			},
			{'base':35,'comps':
		 		[{'id':54,'name':"+BTN Caller"},
				 {'id':55,'name':"+SB Caller"},
				 {'id':56,'name':"C4bet OOP"},
				 {'id':57,'name':"vs 3x"},
				 {'id':58,'name':"vs 2.5x"},
				 {'id':59,'name':"vs Limp"}]
			},
			{'base':36,'comps':
		 		[{'id':60,'name':"+SB Caller"},
				 {'id':61,'name':"C4bet OOP"},
				 {'id':62,'name':"vs 3x"},
				 {'id':63,'name':"vs 2.5x"},
				 {'id':64,'name':"vs Limp"}]
			},
			{'base':37,'comps':
		 		[{'id':65,'name':"C4bet IP"},
				 {'id':66,'name':"vs 3x"},
				 {'id':67,'name':"vs 2.5x"},
				 {'id':68,'name':"vs Limp"}]
			}
		]

COLORS = ['#00b050','#92d050','#ff0000','#ffff00','#0070c0','#00b0f0','#f2f2f2','#ff5543','#fC9f6c','#bfbfbf','#ff9d42','#292929']