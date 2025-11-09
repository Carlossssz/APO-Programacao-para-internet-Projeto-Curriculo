import * as variaveis from './variaveis.js';
import { expProfBtnExterno } from './expProf.js';
import { formAcadBtnExterno } from './formAcad.js';
import { skills } from './skills.js';

//Contadores para saber se há elemento filhos dentro das box pai de ExpProf e FormAcad
//para poder remover o box pai do Dom caso esteja em 0
export const contadores = {
    expProfContador: 0,
    formAcadContador: 0,
}


//Função para devolver o botão externo após excluir o box pai
export function devolverBtnExterno(element) {
    const extras = document.getElementById("extras"); //Área onde fica os botões externos
    const options = { //O Html dos valores externos e a função para atribuílo ao adicionar na tela novamente
        expProf: [variaveis.expProfBtnExterno, expProfBtnExterno],
        formAcad: [variaveis.formAcademicBtnExterno, formAcadBtnExterno],
        cursosBtn: [variaveis.cursosBtnExternoHTML, skills],
        hardSkillsBtn: [variaveis.hardSkillsBtnExternoHTML, skills],
        softSkillsBtn: [variaveis.softSkillsBtnExternoHTML, skills]
    }

    let btn = document.createElement("div"); //Cria uma div 
    btn.innerHTML = options[element][0]; //Atribui o HTML do botão desejado à div
    extras.appendChild(btn); //Adiciona o botão à área dos botões externos

    //condição ternária                                                         //Aqui, executa a função skills passando o parâmetro 'element'
    (element === 'expProf' || element === 'formAcad') ? options[element][1]() : options[element][1](element) //Passa a função com evento de click ao botão

}

//Gerador de id Aleatório
export function idGenerator(prefixo) {
    let id = prefixo + '_' + Math.random().toString(36).substring(2);
    return id;
}

//Função de click no botão externo: (Experiência Profissional). Presente em expProf.js
expProfBtnExterno();

//Função de click no botão externo: (Formação Acadêmica). Presente em formAcad.js
formAcadBtnExterno();

//Função de click no botão externo: (Cursos / Treinamentos), (Hard Skills), (Soft Skills). Presente em skills.js
skills('cursosBtn');
skills('hardSkillsBtn');
skills('softSkillsBtn');


//Fetch api;

async function sendForm(event) {
    const form = event.target; //Pega o próprio formulário
    const formData = new FormData(form) //pega dos dados do formulário

    //Transforma o FormData em objeto js
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:8080/PHP%20curriculo%20vite/api/curriculo.php', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) //envia o corpo em json
        });
    } catch(error){
        console.error('Erro ao enviar formulário', error);
    }
    
}

const formulario = document.getElementById("container");
formulario.addEventListener("submit", sendForm);