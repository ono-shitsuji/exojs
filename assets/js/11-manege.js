console.log("as always we wish you a very welcoming back" );


let info = 1;

while( info <= 9){
    document.write("<p style='color:darkblue'>tour  "+ info +"</p>");
    info++;
    document.write("<p style='color:yellowgreen'>fin du tour "+ info +"</p>"); 
}


for (let info = 1; info<= 1; info++){
  document.write("<p style='color:purple'>fin du tour de manège les passagers sont prier de descendre merci de vôtre visite : " + info + "</p>"); 
} 


//correction console.log('hello');

for (let i = 1; i <= 10; i++){
    document.write("<p style='color:red'> C'est le tour de manège n°:"+ i + "</p>");
}

let tourUser = parseInt(prompt("Entrez un nombre de tour","17"));
let tour = 1;

while(tour <= tourUser){
    document.write(`<p>C'est le tour de manège n° ${tour}</p>`)
    tour++
}