function main(value) {
    value();
}

// function sub() {
//     console.log("sub");
// }

// main(function sub(){
//     console.log('Sub');
// })

main( () => {
    console.log('Sub');
})