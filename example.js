function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if ((typeof  a === 'number' && typeof b === 'number')){
            resolve(a+b);
        }else{
            reject('error type of parameters should be number');
        }
    });
}

addPromise(1,1).then(function (sum) {
    console.log('success ',sum);
},function (err) {
    console.log('error',err)
});