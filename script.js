function calc() {
    let n1 = Number(window.prompt('Primeiro valor'));
    let n2 = Number(window.prompt('Segundo valor'));
    let op = Number(window.prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1]Somar \n[2]Subtrair \n[3]Multiplicar \n[4]Dividir`));
    
    let res = document.getElementById('resultado');
    res.innerHTML = 'Calculando... <br>';

    switch(op) {
        case 1: 
        res.innerHTML += `${n1} + ${n2} = ${n1+n2}`;
        break;

        case 2:
        res.innerHTML += `${n1} - ${n2} = ${n1-n2}`;
        break;

        case 3:
        res.innerHTML += `${n1} * ${n2} = ${n1 * n2}`;
        break;

        case 4:
        res.innerHTML += `${n1} / ${n2} = ${n1 / n2}`;
        break;

        default: res.innerHTML = `OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`;
    }
}

