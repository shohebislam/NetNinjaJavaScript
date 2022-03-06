// //dunction declaration --> Declaring a function
//     function greet(){
//         console.log('hello there');
//     }

//function expression --> call the function
    // const speak = function(){
    //     console.log('good day!')
    // };
    // // greet();
    // speak();

        // const speak = function(name, time ){
        //     console.log(`good ${time} ${name}`)
        // };
        // speak("mario", 'morning');

    // const calcArea = function(radius){
    //     return 3.14*radius**2;
    // }
    // const area = calcArea(5)
    // console.log(area) 
 
//arrow function (a cleaner way to write functions) (significantly cleaner then the const area calculation above)
    // const calcArea = (radius) =>  3.14*radius**2;

    // const area= calcArea(5);
    // console.log('Area is: ', area)

//practice of arrow functions
    // const greet = function(){
    //  return 'hello, world';
    // }

    //Arrow version of function:
    // const greet = () => 'hello, world';
    // const result = greet();
    // console.log(result);


    // 1.const bill = function(products, tax){
    //     let total =0;
    //     for(let i =0; i<products.length; i++){
    //         total += products[i] +products[i]*tax;
    //     }
    //     return total;
    // }

    //2. const bill = (products,tax) =>{
    //     let total =0;
    //     for(let i =0; i<products.length; i++){
    //         total += products[i] +products[i]*tax;
    //      }
    //      return total;
    //     }

    // console.log(bill([10,15,30],0.2))
