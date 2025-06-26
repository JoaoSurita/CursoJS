function funcionaOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro');
            } else {
                resolve(valor);
            }
        } catch (e) {
            reject(e);
        }
    });
}

funcionaOuNao('Testando...', 0.9)
    .then((v) => console.log(`Valor: ${v}`))
    .then(
        (v) => console.log(v),
        (err) => console.log(`Erro: ${err}`)
    )
    .catch((err) => console.log(`Erro: ${err}`));