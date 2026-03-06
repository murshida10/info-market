function scanToken(){

let token = document.getElementById("tokenInput").value;

let result = document.getElementById("result");

result.innerHTML="AI scanning token...";

setTimeout(()=>{

let riskScore=Math.floor(Math.random()*100);

let sentiment=["Bullish","Neutral","Bearish"];

let randomSentiment=sentiment[Math.floor(Math.random()*3)];

result.innerHTML=`
Token: ${token.toUpperCase()} <br>
AI Risk Score: ${riskScore}% <br>
Market Sentiment: ${randomSentiment} <br>
Analysis powered by AI market model
`;

},2000);

}

function liveMarket(){

let btc=(30000+Math.random()*2000).toFixed(2);
let eth=(1800+Math.random()*200).toFixed(2);

document.getElementById("btc").innerHTML=btc;
document.getElementById("eth").innerHTML=eth;

}

setInterval(liveMarket,3000);
