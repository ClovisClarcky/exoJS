//Exercice 1-a : afficher message dans la console ########################################

//console.log("Hello Word");

//Exercice 1-b : afficher message dans la console par declaration de variable ####################################

/*var bonjour="Bonjour le monde";
console.log(bonjour);*/

//Exercice 2 : Dans la console, afficher le résultats des opérations suivantes: ########################################
/*console.log(3*3);
console.log(12*0);
console.log(4+9+78);
console.log(12-7);
console.log(5e4);*/

//Exercice 3:un programme qui demande son nom à l'utilisateur puis lui répond un message de bienvenue avec son nom #######################
/*var nom=prompt("Quel est votre nom ?");
alert("Bienvenue "+ nom);*/

//Exercice 4:Afficher le nom et le prenom declarer en variable #######################
/*var nom="Amonchi";
var prenom="Clovis"
console.log("Bonjour " + nom + " " + prenom);*/

//Exercice 5:Transformer un String en Number #######################
/*var myNumber="123";
a=Number("123");
console.log(a);*/

//Exercice 6-a:Transformer un String majuscule #######################
/*var nom="amonchi";
var prenom="clovis"
console.log("Bonjour " + nom.toUpperCase() + " " + prenom.toUpperCase());*/

//Exercice 6-b:Transformer un String en minuscule #######################
/*var nom="AMONCHI";
var prenom="CLOVIS";
console.log("Bonjour " + nom.toLowerCase() + " " + prenom.toLowerCase());*/

//Exercice 8-a:Calcul de l'age #######################
/*var anneeActuel=prompt("En quel année sommes-nous ?");
var anneeNaiss=prompt("Quelle est votre année de naissance");
age=Number(anneeActuel-anneeNaiss);
alert("Vous êtes agé de "+ age +" ans");*/

//Exercice 8-b:Calcul de l'age #######################
/*var anneeActuel=prompt("En quelle année sommes-nous ?");
var anneeNaiss=prompt("Quelle est votre année de naissance");
age=Number(anneeActuel-anneeNaiss);
alert("Vous êtes agé de "+ age +" ans");
var ageVoisin=prompt("Quel est l'age de votre voisin ?");
ageCumul=Number(age)+Number(ageVoisin);
alert("Le cumul de votre âge et celui de votre voisin donne : "+ ageCumul +" ans");*/

//Exercice 9:Calcul du Prix Total des achats #######################
/*var prixChaussure=70;
var prixJean=59;
var prixTshirt=20;
var remise=20/100;
var prixTotal=(70+59+20)*(1-remise);
console.log("Le montant à payer est : "+ prixTotal + " Euros");*/

//Exercice 10:Mini calculette : somme de deux nombres #######################
/*var premierNombre=prompt("Entrez le premier nombre à additionner");
var deuxiemNombre=prompt("Entrez le deuxième nombre à additionner");
somme=Number(premierNombre)+Number(deuxiemNombre);
alert("La somme des deux nombres est : " + somme);*/

//Exercice 12:Determiner Le plus grand nombre parmi Quatre nombres entrez par l'utilisateur #######################
/*alert("Entrez quatre nombres différents");
var premierNbre=prompt("Entrez le premier nombre");
var deuxiemeNbre=prompt("Entrez le deuxième nombre");
var troisiemeNbre=prompt("Entrez le troisieme nombre");
var quatriemeNbre=prompt("Entrez le quatrieme nombre");
var nbrePlusGrand=0;
if (premierNbre>deuxiemeNbre && premierNbre>troisiemeNbre && premierNbre>quatriemeNbre) {
  nbrePlusGrand=Number(premierNbre);
  alert("le nombre le plus élevé est : "+ nbrePlusGrand);
}
if (deuxiemeNbre>premierNbre && deuxiemeNbre>troisiemeNbre && deuxiemeNbre>quatriemeNbre) {
  nbrePlusGrand=Number(deuxiemeNbre);
  alert("le nombre le plus élevé est : "+ nbrePlusGrand);
}
if (troisiemeNbre>premierNbre && troisiemeNbre>deuxiemeNbre && troisiemeNbre>quatriemeNbre) {
  nbrePlusGrand=Number(troisiemeNbre);
  alert("le nombre le plus élevé est : "+ nbrePlusGrand);
}
if (quatriemeNbre>premierNbre && quatriemeNbre>deuxiemeNbre && quatriemeNbre>troisiemeNbre) {
  nbrePlusGrand=Number(quatriemeNbre);
  alert("le nombre le plus élevé est : "+ nbrePlusGrand);
}*/

//Exercice 13:Conditions pour afficher l'age #######################
var age=prompt("Entrez votre age svp :");
if (Number(age)<0) {
  alert("Veuillez entrer un age correct svp");
}
