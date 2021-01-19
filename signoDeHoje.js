let colecaoSignos = [
    {"nome":"Aquário", "dataInicio": "01-20", "dataFim": "02-18"},
    {"nome":"Peixes", "dataInicio": "02-19", "dataFim": "03-20"},
    {"nome":"Áries", "dataInicio": "03-21", "dataFim": "04-19"},
    {"nome":"Touro", "dataInicio": "04-20", "dataFim": "05-20"},
    {"nome":"Gêmeos", "dataInicio": "05-21", "dataFim": "06-21"},
    {"nome":"Cancer", "dataInicio": "06-22", "dataFim": "07-23"},
    {"nome":"Leão", "dataInicio": "07-24", "dataFim": "08-22"},
    {"nome":"Virgem", "dataInicio": "08-23", "dataFim": "09-22"},
    {"nome":"Libra", "dataInicio": "09-23", "dataFim": "10-22"},
    {"nome":"Escorpião", "dataInicio": "10-23", "dataFim": "11-21"},
    {"nome":"Sargitário", "dataInicio": "11-22", "dataFim": "12-21"},
    {"nome":"Capricórnio", "dataInicio": "12-22", "dataFim": "01-19"},
    
];

const verificaDataRange = (data, dataInicio, dataFim, tipoComparacao) =>{
    if(tipoComparacao == "and")
    {
        return (data >= dataInicio && data <= dataFim);
        
    } else if (tipoComparacao == "or")
    {
        return (data >= dataInicio || data <= dataFim);
        
    }
}

const retornaSigno = (signos, data) => {
   

    let ano = data.getFullYear();
    for (const signo of signos)
    {
        let dataInicioSigno = new Date(ano + "-" + signo["dataInicio"] + " 00:00:00");
        let dataFimSigno = new Date(ano + "-" + signo["dataFim"] + " 23:59:59");
    
        let tipoComparacao = signo["dataInicio"] == "12-22" ? "or" : "and";
        
       
        if (verificaDataRange(data,dataFimSigno, dataFimSigno, tipoComparacao))
        {
            return signo["nome"];
        }
        
    }

  
}
let dataApp = new Date();

const nomeSigno = retornaSigno(colecaoSignos, dataApp);
console.log("O Signo de Hoje é: " + nomeSigno);