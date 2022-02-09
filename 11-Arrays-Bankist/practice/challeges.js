// console.log('hello world');


const printDogMsg = (arr) => {

    arr.forEach(age => {

        if(age >= 3){
            console.log(`Dog is Adult, with age: ${age}`)
        }
        else{
            console.log('Dog is Puppy')
        }
        
    });

}
const checkDogs = (juliaDogs, kateDogs) => {

    const newJuliaDogs = juliaDogs.slice(1, 4);

    printDogMsg(newJuliaDogs);
    printDogMsg(kateDogs);
}

checkDogs( [3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);