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

//Exercice 7:Verifier si une chaine de caractere est vide ou pas #######################
/*var motVerifier=prompt("Entrez une valeur svp");
if (motVerifier.length===0) {
  console.log("False");
}
else {
  console.log("True");
}*/

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

//Exercice 11:Afficher la première et la dernière lettre d'un nom entré par l'utilisateur #######################
/*var premiereLettre;
var derniereLettre;
var prenom=String(prompt("Entrez votre Prénom svp"));
alert("votre prénom commence par " + prenom.charAt(0).toUpperCase() + " et se termine par "+ prenom.substr(prenom.length-1).toUpperCase());
var nom=String(prompt("Entrez votre Nom svp"));
alert("votre nom commence par " + nom.charAt(0).toUpperCase() + " et se termine par "+ nom.substr(nom.length-1).toUpperCase());
var age=Number(prompt("Entrez votre age svp"));
alert("Le résultat de votre âge divisé par 33 est : " + Math.round(age/33));
alert("Merci d'avoir utilisé le programme, à bientôt !");*/


//Exercice 12:Determiner Le plus grand nombre parmi Quatre nombres entrez par l'utilisateur #######################
/* alert("Entrez quatre nombres différents");
var premierNbre=Number(prompt("Entrez le premier nombre"));
var deuxiemeNbre=Number(prompt("Entrez le deuxième nombre"));
var troisiemeNbre=Number(prompt("Entrez le troisieme nombre"));
var quatriemeNbre=Number(prompt("Entrez le quatrieme nombre"));
var nbrePlusGrand=0;
if ((premierNbre>deuxiemeNbre) && (premierNbre>troisiemeNbre) && (premierNbre>quatriemeNbre)) {
  nbrePlusGrand=premierNbre;
  alert("le nombre le plus élevé est : "+ nbrePlusGrand);
}
if ((deuxiemeNbre>premierNbre) && (deuxiemeNbre>troisiemeNbre) && (deuxiemeNbre>quatriemeNbre)) {
  nbrePlusGrand=deuxiemeNbre;
  alert("le nombre le plus élevé est : "+ nbrePlusGrand);
}
if ((troisiemeNbre>premierNbre) && (troisiemeNbre>deuxiemeNbre) && (troisiemeNbre>quatriemeNbre)) {
  nbrePlusGrand=troisiemeNbre;
  alert("le nombre le plus élevé est : "+ nbrePlusGrand);
}
if ((quatriemeNbre>premierNbre) && (quatriemeNbre>deuxiemeNbre) && (quatriemeNbre>troisiemeNbre)) {
  nbrePlusGrand=quatriemeNbre;
  alert("le nombre le plus élevé est : "+ nbrePlusGrand);
}*/

// //Exercice 13:Conditions pour afficher l'age #######################
// var age=Number(prompt("Entrez votre age svp :"));
// if (age<0) {
//   alert("Veuillez entrer un âge correct svp");
// }
// else if (age>=21) {
//   alert("Vous êtes majeur, vous avez donc accès à la plateforme");
// }
//
// // console.log("Début du programme");
// // var nombre = 1;
// // while (nombre <= 5) {
// //     console.log(nombre);
// //     nombre++;
// // }
// // console.log("Fin du programme");



// // Exercice: Réaliser une Matrice #######################
/*for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    if (i===j) {
      console.log(1);
    }
    else {
      console.log(0);
    }
  }
  console.log("-------");
}*/

// Exercice: Vérifier la parité d'un nombre à laide d'une fonction #######################
// fonction qui calcul le modulo d'un nombre
/*function calcul(nbre){
   return nbre%2;
}
// déclaration de variables
var nbreUser=Number(prompt("entrez un nombre svp"));
var modulo=calcul(nbreUser);
// test pour voir si le modulo du nombre entré par le user est égale à 0 ou non
if (modulo===0) {
 alert("le nombre " + nbreUser + " est pair");
}
else {
 alert("le nombre " + nbreUser + " est impair");
}*/

// Exercice sur les tableaux ################################################################
// exrcice : Tableau qui contient les éléments de nos courses

var mesCourses = ["polo","jacket","bermuda","chemise","veste","pantalon","casquette"];
console.log("il ya " + mesCourses.length + " articles dans mon pannier que sont :");
for (var i = 0; i < 7; i++) {
  console.log(mesCourses[i]);
}
console.log("Le premier article de ma liste à acheter est : " + mesCourses[0]);
console.log("Le dernier article de ma liste à acheter est : " + mesCourses[3]);
console.log("Le dernier article de ma liste à acheter est : " + mesCourses[mesCourses.length-1]);


/*//Exercice: réaliser un jeu : Pierre Feuille Ciseaux #######################

    // Principe du Jeu : La pierre détruit les ciseaux, Les ciseaux coupent la feuille, la feuille couvre la pierre.
    //Debut du Jeu
    var pointUser=0;
    var pointOrdi=0;
    //fonction principale du Jeu
    function utilisateurChoisi(){
      var choixUtilisateur=prompt("Veuillez faire un choix entre :" + "\n" + "- pierre" + "\n" + "- feuille" + "\n" + "- ciseaux").toLowerCase();
      if (choixUtilisateur!="pierre" && choixUtilisateur!="feuille" && choixUtilisateur!="ciseaux") {
         choixUtilisateur=prompt("Veuillez faire un choix entre :" + "\n" + "- pierre" + "\n" + "- feuille" + "\n" + "- ciseaux").toLowerCase();
      }
      return choixUtilisateur;
    }

    function ordiChoisi(){
      var choixOrdi=Math.random();
      //assignation de valeurs aléatoire pour le choix de l'ordinateur avec une Condition
      if (choixOrdi<0.34) {
          choixOrdi="pierre";
      }
      else if (choixOrdi<=0.67) {
          choixOrdi="feuille";
      }
      else {
          choixOrdi="ciseaux";
      }
      return choixOrdi;
    }

    function comparaisonRep(){
      if (choixUtilisateur === choixOrdi) {
        alert("Votre choix est égal à celui de l'ordinateur");
      }
      else if ((choixUtilisateur==="pierre") && (choixOrdi==="ciseaux")) {
              alert("Vous avez battu l'ordinateur");
              pointUser=pointUser+1;
      }
      else if ((choixUtilisateur==="pierre") && (choixOrdi==="feuille")) {
              alert("l'ordinateur vous a battu ");
              pointOrdi=pointOrdi+1;
        }
      else if ((choixUtilisateur==="ciseaux") && (choixOrdi==="feuille")) {
              alert("Vous avez battu l'ordinateur");
              pointUser=pointUser+1;
      }
      else if ((choixUtilisateur==="ciseaux") && (choixOrdi==="pierre")) {
              alert("l'ordinateur vous a battu ");
              pointOrdi=pointOrdi+1;
        }

      else if ((choixUtilisateur==="feuille") && (choixOrdi==="ciseaux")) {
              alert("l'ordinateur vous a battu");
              pointOrdi=pointOrdi+1;
      }
      else if ((choixUtilisateur==="feuille") && (choixOrdi==="pierre")) {
              alert("Vous avez battu l'ordinateur");
              pointUser=pointUser+1;
      }

    }

    function scoreFinal(){
      if (pointOrdi===pointUser) {
        alert("Match Nul");
      }
      else if (pointOrdi>pointUser) {
        alert("Vous avez perdu");
      }
      else {
        alert("Vous avez gagné");
      }

    }

alert("Bonjour, voici le principe du jeu Pierre, Feuille, Ciseaux :" + "\n" + "- La Pierre détruit les Ciseaux" + "\n" + "- les Ciseaux coupent la Feuille" + "\n" + "- La Feuille couvre la Pierre");
for (var i = 1; i <=3; i++) {
//déclaration des variables
var choixUtilisateur=utilisateurChoisi();
var choixOrdi=ordiChoisi();

alert("vous avez choisi : "+ choixUtilisateur + "\n" + "l'ordinateur a choisi : " + choixOrdi);
// vérifier léagalité ou la différence des choix à l'aide de conditions
comparaisonRep();
}
scoreFinal();
alert("Merci d'avoir joué. A très bientôt !");*/
