function add(a, b, callback) { // callback함수를 사용시 return문이 필요 없다.
    var result = a + b;
    callback(result);
};

add(3, 7, function(result) {
    console.log('더하기 결과(콜백함수): ', result);
});