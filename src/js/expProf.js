import { idGenerator, contadores, devolverBtnExterno} from './script';
const informacoesAdicionais = document.querySelector("#informacoesAdicionais");

//Evento de click no botão externo Exp Profissional;
export function expProfBtnExterno() {
    const expBtn = document.getElementById("experienciaBtn");
    expBtn.addEventListener('click', function () {
        expBox(); //Adiciona o box de novas experiências profissionais à tela;
        expChildren(); //Adiciona uma nova experiência Profissional ao box pai;
        expBtn.remove(); //Remove o botão externo
    })
}


//box que conterá todos as exp Profissionais
function expBox() {
    let div = document.createElement("div");
    div.classList = 'relative blocosAdicionais flex flex-wrap shadow-lg shadow-neutral-800'
    div.style.paddingBottom = "60px";
    div.id = 'expProfBox';
    div.innerHTML = 
    `
        <h2 class="text-center text-xl w-full">Experiencia Profissional</h2>
        <div id="expProfBtnInterno" class="absolute left-2 bottom-3 hover:shadow-lg shadow-neutral-800 active:shadow-none hover:bg-orange-400 hover:text-neutral-700 cursor-pointer border border-orange-400 text-orange-400 rounded-full flex items-center  w-55 h-10 transition-colors select-none duration-300">
            <svg
                class="border rounded-full bg-neutral-700! absolute left-2" 
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" 
                viewBox="0 -960 960 960" 
                width="24px" 
                fill="darkOrange">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
            <p class="font-semibold absolute left-9">Experência Profissional</p>
        </div>
    `

    //Adicionar a expBox à box informacoesAdicionais
    const referencia = informacoesAdicionais.children[2]; //Pega referencia do segundo item do div
    referencia.insertAdjacentElement('afterbegin', div);  //Adiciona a nova div depois da referencia

    //Adiciona a função de adicionar novos expChildren ao botão interno;
    const btnInterno = document.getElementById("expProfBtnInterno");
    btnInterno.addEventListener("click", function(){
        expChildren();
    })
}


//Exp profissional
function expChildren(){
    contadores.expProfContador++;
    const pai = document.getElementById("expProfBox");
    const newExp = document.createElement("div");
    newExp.id = idGenerator("ExpProf");
    const blockId = newExp.id;
    newExp.style.paddingTop = "18px";
    newExp.classList = "relative w-full blocosAdicionais flex flex-wrap shadow-md shadow-neutral-900";
    newExp.innerHTML = 
    `
        <div class="addInput w-1/2">
            <input type="text" id="empresaNome_${blockId}" name="empresaNome[]" placeholder="Lojas Americanas" required>
            <label for="empresaNome_${blockId}">Nome da Empresa</label>
        </div>
        <div class="addInput w-1/2">
            <input type="text" id="empresaCargo_${blockId}" name="empresaCargo[]" placeholder="Gerente, Atendente..." required>
            <label for="empresaCargo_${blockId}">Cargo</label>
        </div>

        <!--Período-->
        <div class="flex flex-wrap w-full ">
            <div class="addInput w-1/2">
                <input type="date" id="dataInicio_${blockId}" name="dataInicio[]" required>
                <label for="dataInicio_${blockId}">Data de início</label>
            </div>
            <div class="addInput w-1/2">
                <input type="date" id="dataFinal_${blockId}" name="dataFinal[]">
                <label for="dataFinal_${blockId}">Data final</label>
            </div>
        </div>

        <div class="w-full addInput basis-full!">
            <textarea class="textareaInput" name="atividades[]" id="atividades_${blockId}" placeholder="(em tópicos curtos, mostrando impacto)"></textarea>
            <label for="atividades_${blockId}">Principais atividades e resultados</label>
        </div>

        <svg
            id="delete_${blockId}"
            class="absolute right-2 top-2 self-end cursor-pointer active:scale-100 hover:text-red-600 hover:scale-120 transition-all duration-300 rounded"
            xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="currentColor">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
        </svg>
    `

    //Adiciona o expChilden ao box pai
    pai.appendChild(newExp);

    //Adiciona a função de remover o children do box pai ao botão de lixeira
    const lixeira = document.getElementById(`delete_${blockId}`);
    lixeira.addEventListener("click", () => {
        newExp.remove();
        contadores.expProfContador--
        if(contadores.expProfContador === 0){
            pai.remove();
            devolverBtnExterno('expProf');
        };
    })

    //Rola o scroll até o novo elemento
    const scroll = document.getElementById(blockId);
    scroll.scrollIntoView({behavior: 'smooth'});
}

