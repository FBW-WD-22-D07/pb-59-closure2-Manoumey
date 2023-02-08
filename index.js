//1. Was ist das Ergebnis, wenn du diesen Code ausführst und warum?

 // ```js
  console.log("Frage 1: fehler")  // erst initialisieren und danach rufen

  function closureOne() {

     console.log(a);
     console.log(foo());

     const a = 1;
     function foo() {
        return 2;
     }
  }

  
  //closureOne();  // erst initialisieren und danach rufen

 // ```


 //## 2. Was ist das Ergebnis?

  //```js
  console.log("Frage 2: passiert nichts")  // fehlt console.log(result);
  let a = 1; 

  function closureTwo(number) {
    function inner(input) {
      return a;
    }

    a = 5;

    return inner;
  }

  let resultOfClosureTwo = closureTwo(9);
  let result = resultOfClosureTwo(2);
  
  //console.log(result);

  //## 3. Was ist das Ergebnis des folgenden Codes? Erkläre deine Antwort.

  //```js

  console.log("Frage 3: test ist undefined");  //let test = user.name.getFullname();  //  console.log(test);
  const fullname = 'John Doe';
  let user = {
     fullname: 'Colin Ihrig',
     name: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  console.log(user.name.getFullname());

  let test = user.name.getFullname;  //  let test = user.name.getFullname();
  console.log(test());   //  console.log(test);

 // ```


 //## 4. Was siehst du in der Konsole für das folgende Beispiel?

 // ```js
  console.log("Frage 4: Nach return wird die Funktion beendet, interesting bleibt dann 1 ")
  let interesting = 1; 
  function doSomeStuff() { 
      interesting = 10 
      return;  
      function interesting() {} 
  } 
  doSomeStuff(); 
  console.log(interesting);
  

 //```
