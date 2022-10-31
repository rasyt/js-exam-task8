/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function sum(a, b){
             
               var total =  a + b;

               return total;
               }
               console.log(sum(1,2));

               function subtraction(a, b){
             
                           var total =  a-b;
                           
                            return total;
                          }
   console.log(subtraction(4,2));

   function multiplication(a, b){
             
  
                           var total =  a *b;
                           
                            return total;
                           }
   console.log(multiplication(1,2));

   function division(a, b){
                          var total = a / b;
   
                            return total;
                           }
   console.log(division(4,2));