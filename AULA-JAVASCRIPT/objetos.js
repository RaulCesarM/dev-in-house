var carro;
 carro = {
    
    
     motor: "115 cv",
     qtdPortas: 4,
     saudacao: "ola Gol",
     ano: 2009,
     unicoDono: false,
     Quilometragem: 137.000


 };
 function leia(arg){
     console.log("o valor da propriedade é : " + carro[arg] )
 }
 leia("unicoDono");




