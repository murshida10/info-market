function random(list){
return list[Math.floor(Math.random()*list.length)];
}

function scanToken(){

let trust=[
"AI Trust Score: 82%",
"AI Trust Score: 60%",
"AI Trust Score: 41%",
"AI Trust Score: 91%"
];

let liquidity=[
"Liquidity Risk: Low",
"Liquidity Risk: Medium",
"Liquidity Risk: High"
];

let whale=[
"Whale Concentration: Low",
"Whale Concentration: Medium",
"Whale Concentration: High"
];

let contract=[
"Contract Safety: Safe",
"Contract Risk: Moderate",
"Contract Risk: High"
];

document.getElementById("result").innerHTML=

random(trust)+"<br>"+
random(liquidity)+"<br>"+
random(whale)+"<br>"+
random(contract);

}

function marketSentiment(){

let sentiment=[
"Market Sentiment: Bullish",
"Market Sentiment: Neutral",
"Market Sentiment: Bearish"
];

document.getElementById("sentiment").innerText=random(sentiment);

}

setInterval(marketSentiment,3000);
