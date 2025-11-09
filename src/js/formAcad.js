import { idGenerator, contadores, devolverBtnExterno} from './script';
const informacoesAdicionais = document.querySelector("#informacoesAdicionais");

export function formAcadBtnExterno(){
    const formBtn = document.getElementById("formacaoAcademicaBtn");
    formBtn.addEventListener("click", () => {
        formBox();
        formAcadChildren();
        formBtn.remove();
    })
}

//box que conterá todos as formações acadêmicas;
function formBox() {
    let div = document.createElement("div");
    div.classList = 'relative blocosAdicionais flex flex-wrap shadow-lg shadow-neutral-800'
    div.style.paddingBottom = "60px";
    div.id = 'formAcadBox';
    div.innerHTML = 
    `
        <h2 class="text-center text-xl w-full">Formação Acadêmica</h2>
        <div id="formAcadBtnInterno" class="absolute left-2 bottom-3 hover:shadow-lg shadow-neutral-800 active:shadow-none hover:bg-orange-400 hover:text-neutral-700 cursor-pointer border border-orange-400 text-orange-400 rounded-full flex items-center justify-evenly w-50 h-10 transition-colors select-none duration-300">
            <svg
                class="border rounded-full bg-neutral-700! absolute left-2" 
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" 
                viewBox="0 -960 960 960" 
                width="24px" 
                fill="darkOrange">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
            <p class="font-semibold absolute left-9">Formação acadêmica</p>
        </div>
    `

    //Adicionar a expBox à box informacoesAdicionais
    const referencia = informacoesAdicionais.children[2]; //Pega referencia do segundo item do div
    referencia.insertAdjacentElement('afterbegin', div);  //Adiciona a nova div depois da referencia

    //Adiciona a função de adicionar novos expChildren ao botão interno;
    const btnInterno = document.getElementById("formAcadBtnInterno");
    btnInterno.addEventListener("click", function(){
        formAcadChildren();
    })
}

//Formação acadêmica
function formAcadChildren(){
    contadores.formAcadContador++; //contador para ver se a box pai possui elementos
    const pai = document.getElementById("formAcadBox"); //box pai onde vai ficar as novas formações Acadêmicas
    const newForm = document.createElement("div"); 
    newForm.id = idGenerator("formAcad");
    const blockId = newForm.id;
    newForm.style.paddingTop = "18px";
    newForm.classList = "relative w-full blocosAdicionais flex flex-wrap shadow-md shadow-neutral-900";
    newForm.innerHTML = 
    `
        <div class="addInput w-1/2">
            <input type="text" id="cursoNome_${blockId}" name="cursoNome[]" placeholder="Medicina, contabilidade..." required>
            <label for="cursoNome_${blockId}">Nome do Curso</label>
        </div>
        <div class="addInput w-1/2">
            <input type="text" id="instituicao_${blockId}" name="instituicao[]" placeholder="Unipar..." required>
            <label for="instituicao_${blockId}">Nome da Instituição</label>
        </div>

        <!--Período-->
        <div class="flex flex-wrap w-full ">
            <div class="addInput w-1/2">
                <input type="date" id="dataInicio_${blockId}" name="dataInicioFormAcad[]" required>
                <label for="dataInicio_${blockId}">Data de início</label>
            </div>
            <div class="addInput w-1/2">
                <input type="date" id="dataFinal_${blockId}" name="dataFinalFormAcad[]">
                <label for="dataFinal_${blockId}">Data final</label>
            </div>
        </div>

        <!--Cursando-->
        <div class="select-none flex items-center basis-full! flex-nowrap w-full addInput">
            <div class="relative flex items-center justify-center flex-row-reverse! gap-2 w-1/4  min-w-25 rounded-sm" style="padding: 5px; background-color: gray;">
                <input type="checkbox" id="cursando_${blockId}" name="cursando[]" class="cursor-pointer min-w-4 w-5 h-5 shadow-none">
                <label for="cursando_${blockId}" class="text-black">Cursando</label>
            </div>
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
    pai.appendChild(newForm);

    //Adiciona a função de remover o children do box pai ao botão de lixeira
    const lixeira = document.getElementById(`delete_${blockId}`);
    lixeira.addEventListener("click", () => {
        newForm.remove();
        contadores.formAcadContador--
        if(contadores.formAcadContador === 0){
            pai.remove();
            devolverBtnExterno('formAcad');
        };
    })

    //Rola o scroll até o novo elemento
    const scroll = document.getElementById(blockId);
    scroll.scrollIntoView({behavior: 'smooth'});
}