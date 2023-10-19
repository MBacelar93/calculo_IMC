function meuEscopo () {
    const form = document.querySelector('#form');
    
    
    form.addEventListener('submit', function(evento){
        evento.preventDefault();
        const inputPeso = evento.target.querySelector('#peso');
        const inputAltura = evento.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        if(!peso){
            setResultado('Peso inválido', false);
            return;
        }
        if(!altura){
            setResultado('Altura inválida', false);
            return;
        }
        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);
    
        const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    
        setResultado(msg, true);
    });



    function getImc(peso, altura){
        const imc = peso/ (altura*altura);
        return imc.toFixed(2);
    };

    function getNivelImc (imc){
        const nivel = ['Abaixo do peso', 'Peso normal','Sobrepeso', 
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        if(imc>= 39.9)return nivel[5];
        if(imc>= 34.9)return nivel[4];
        if(imc>= 29.9)return nivel[3];
        if(imc>= 24.9)return nivel[2];
        if(imc>= 18.5)return nivel[1];
        if(imc< 18.5) return nivel[0];
        
        
    }

    function criaP(){
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, Isvalid){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML='';

        
        const p = criaP();
        
        if(Isvalid){ 
            p. classList.add('paragrafo-elemento');
        } else {
            p.classList.add('paragrafo-elemento-vermelho');
        }

        p.innerHTML =  msg;
        resultado.appendChild(p);
        
    }

    
    


}
meuEscopo();