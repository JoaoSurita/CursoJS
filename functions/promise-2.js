function esperaPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Vish!!')
        },tempo)
    })
};

esperaPor(3000).then(texto => console.log(texto))