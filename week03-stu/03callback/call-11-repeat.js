const repeat = count => {
    for(let idx=1; idx<=count; idx++) {
        console.log(idx);
    }
}

const repeatDouble = count => {
    for(let idx=1; idx<=count; idx++) {
        console.log(idx * 2);
    }
}

const repeatTriple = count => {
    for(let idx=1; idx<=count; idx++) {
        console.log(idx * 3);
    }
}

repeat(5);
repeatDouble(5);
repeatTriple(5);