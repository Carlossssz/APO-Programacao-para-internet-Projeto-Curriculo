const informacoesAdicionais = document.querySelector("#informacoesAdicionais");
import { devolverBtnExterno } from './script.js'

export function skills(skillId){
    const skillBtn = document.getElementById(skillId);
    skillBtn.addEventListener('click', () => {
        addSkillIntoView(skillId);

        skillBtn.remove();
    })
}

function addSkillIntoView(skillId){
    const options = {
        cursosBtn: {skillHTML: cursosHTMLElement, id: 'cursosInput', lixeiraId: 'lixeiraCursos'},
        hardSkillsBtn: {skillHTML: hardSkillsHTMLElement, id: 'hardSkillsInput', lixeiraId: 'lixeiraHardSkills'},
        softSkillsBtn: {skillHTML: softSkillsHTMLElement, id: 'softSkillsInput', lixeiraId: 'lixeiraSoftSkills'}
    }
    const skill = options[skillId];

    const div = document.createElement('div'); //cria um novo div
    div.innerHTML = skill.skillHTML; //atribui o html da skill, presente nos objetos dentro de options
    div.classList = "addInput relative blocosAdicionais shadow-lg shadow-neutral-800"; //passa as classes para essa div
    div.id = skill.id; //define o id da div
    informacoesAdicionais.append(div); //Adiciona a div à tela

    const lixeira = document.getElementById(skill.lixeiraId);
    lixeira.addEventListener('click', () => {
        div.remove();
        devolverBtnExterno(skillId);
    })

    //Rola o scroll até o elemento
    const scroll = document.getElementById(skill.id);
    scroll.scrollIntoView({behavior: 'smooth'});
}


/////////////////////////skills HTML///////////////////////////////
let cursosHTMLElement =
`
    <input type="text" id="cursos" name="cursos" placeholder="(ex: HTML, CSS, JavaScript, React, etc.)">
    <label for="cursos" class="basis-1/2">Cursos, certificações e treinamentos</label>
    <svg
        id="lixeiraCursos"
        class="absolute right-2 top-1 self-end cursor-pointer hover:text-red-600 hover:scale-120 trnasition-all duration-300 rounded"
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="24px" 
        fill="currentColor">
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
    </svg>
`

let hardSkillsHTMLElement =
`
    <input type="text" id="hardSkills" name="hardSkills" placeholder="(ex: Linguagens, frameworks, ferramentas, softwares, etc.)">
    <label for="hardSkills">Hard Skills</label>
    <svg
        id="lixeiraHardSkills"
        class="absolute right-2 top-1 self-end cursor-pointer hover:text-red-600 hover:scale-120 trnasition-all duration-300 rounded"
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="24px" 
        fill="currentColor">
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
    </svg>
`

let softSkillsHTMLElement =
`
    <input type="text" id="softSkills" name="softSkills" placeholder="(ex: Trabalho em equipe, comunicação, resolução de problemas, etc.)">
    <label for="softSkills">Soft Skills</label>
    <svg
        id="lixeiraSoftSkills"
        class="absolute right-2 top-1 self-end cursor-pointer hover:text-red-600 hover:scale-120 trnasition-all duration-300 rounded"
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="24px" 
        fill="currentColor">
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
    </svg>
`