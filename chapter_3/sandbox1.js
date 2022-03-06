//for loops 
    // for (let i = 0; i<5; i++){
    //     console.log('in loop',i);
    // }
    // console.log('loop finished')

    // const names = ['shaun', 'mario', 'luigi'];
    // for(let i = 0; i<names.length; i++){
    //     console.log(names[i])
    //     let html = `<div>${names[i]}</div>`;
    //     console.log(html)
    // }


//while loops
  //change for into while
  //keep only one of the statemtents (i<5)instead of the 3 different ones
  //Add i++;
    // const names = ['shaun', 'mario', 'luigi']
    // let i = 0;

    // // while(i<5){
    // //     console.log('in loop', i)
    // //     i++;
    // // }

    // while(i<names.length){
    //     console.log(names[i]);
    //     i++;
    // }

//Do While loops
    //For when we want the code to run atleast once even if the condition is not true
    //*Remember to add semi colons and ad the do before the while
    // let i = 3;
    // do{
    //     console.log('val of i is: ', i);
    //     i++;
    // }
    // while (i<5)

// Breaks and Continues
    const scores =[50, 25, 0, 30, 100, 20, 10];
    for(let i = 0; i<scores.length;i++){

        if(scores[i]===0){
            continue;
        }

        console.log('Your score: ', scores[i])
        if(scores[i]===100){
            console.log('congratulations, you got the top score!')
            break;
        
        }
    }

    