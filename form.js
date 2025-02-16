document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const emailInput = document.getElementById("email");
    const confirmarEmailInput = document.getElementById("confirmEmail");
    const cepInput = document.getElementById("cep");
    const ruaInput = document.getElementById("rua");
    const bairroInput = document.getElementById("bairro");
    const cidadeInput = document.getElementById("cidade");
    const estadoInput = document.getElementById("estado");

    form.addEventListener("submit", (event) => {
        let formIsValid = true;

        if (!conferirEmail()) {
            formIsValid = true;
        }

        if (!validarCPF(cpfInput.value)) {
            formIsValid = false;
        }

        if (!formIsValid) {
            event.preventDefault();
        }

    })

    /* A função conferirEmail() valida se os email digitado no primeiro campo conferem com o digitado no segundo campo*/
    function conferirEmail() {
        const email = emailInput.value.trim();
        const confirmarEmail = confirmarEmailInput.value.trim();
        let msgError = document.getElementById("error-message-email");

        if (email !== confirmarEmail) {
            msgError.textContent = "Os emails digitados não conferem";
            msgError.style.display = "block";
            return false;
        }

        msgError.style.display = "none";
        return true;
    }

    emailInput.addEventListener("blur", conferirEmail);
    confirmarEmailInput.addEventListener("blur", conferirEmail);

    /* Integração de API Via CEP para validação do endereço através do preenchimento do CEP, trazendo a rua, bairro, cidade e UF. 
    
    A função bloquearCamposCep() utiliza o atributo readonly que bloqueia ou desbloqueia a edição dos campos de acordo com o status do CEP
    
    A função limparCamposCep() realiza o reset dos campos quando o input do CEP for resetado, resetando também a classe específica do campo que fica destacado quando os dados são integrados via API.
    
    A funçao bucarCep() utiliza a integração com API VIA CEP trazendo o preenchimento automático dos campos definidos*/
    function bloquearCamposCep(status) {
        ruaInput.readOnly = status;
        bairroInput.readOnly = status;
        cidadeInput.readOnly = status;
        estadoInput.readOnly = status;
    }

    function limparCamposCep() {
        ruaInput.value = "";
        bairroInput.value = "";
        cidadeInput.value = "";
        estadoInput.value = "";

        ruaInput.classList.remove("preenchimento-automatico");
        bairroInput.classList.remove("preenchimento-automatico");
        cidadeInput.classList.remove("preenchimento-automatico");
        estadoInput.classList.remove("preenchimento-automatico");

        bloquearCamposCep(false);
    }

    async function buscarCep() {
        let cep = cepInput.value.replace(/\D/g, "");
        let msgErrorCep = document.getElementById("error-msg-cep");

        if (cep.length !== 8) {
            bloquearCamposCep(false);
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                msgErrorCep.textContent = "CEP inválido. Verifique e tente novamente.";
                msgErrorCep.style.display = "block";
                limparCamposCep();
                bloquearCamposCep(false);
            } else {
                msgErrorCep.textContent = "";
                ruaInput.value = data.logradouro;
                bairroInput.value = data.bairro;
                cidadeInput.value = data.localidade;
                estadoInput.value = data.uf;

                ruaInput.classList.add("preenchimento-automatico");
                bairroInput.classList.add("preenchimento-automatico");
                cidadeInput.classList.add("preenchimento-automatico");
                estadoInput.classList.add("preenchimento-automatico");

                bloquearCamposCep(true);
            }
        } catch (error) {
            msgErrorCep.textContent = "Erro ao buscar o CEP. Tente novamente.";
            msgErrorCep.style.display = "block";
            limparCamposCep();
        }
    }

    cepInput.addEventListener("blur", buscarCep);

    //Utiliza de forma efetiva a função limparCamposCep quando os dados de input do CEP forem limpados.
    cepInput.addEventListener("input", () => {
        if (cepInput.value === "") {
            limparCamposCep();
            msgErrorCep.style.display = "none";
        }
    })

    //Adicionando máscaras aos campos - Usando o IMask, foi criada um máscara para o preenchimento dos campos do CEP, CPF e Telefone.
    //Máscara do CEP
    IMask(cepInput, { mask: '00000-000' });

    //Máscara do CPF
    const cpfInput = document.getElementById('cpf');
    IMask(cpfInput, { mask: '000.000.000-00' });

    //Aqui foi criada uma mensagem que será exibida caso o CPF seja inválido
    cpfInput.addEventListener("blur", () => {
        let cpfValido = validarCPF(cpfInput.value);
        let errorMsgCpf = document.getElementById('error-message');

        if (!cpfValido) {
            errorMsgCpf.style.visibility = "visible";
            errorMsgCpf.textContent = "CPF Inválido";
        } else {
            errorMsgCpf.style.visibility = "hidden";
        }
    })

    //Função para validar se o CPF digitado é válido.
    /* Na função validarCPF() trouxe com ajuda de 100% de IA, visto que a estrutura de validação do CPF é global e complexa. Ou seja, além de entender a construção do código, precisei entender como funciona a regra de validação do CPF de acordo com as regras da Receita Federal do Brasil*/
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica se todos os números são iguais

        let soma = 0, resto;

        // Validação do primeiro dígito verificador
        for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf[9])) return false;

        soma = 0;

        // Validação do segundo dígito verificador
        for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf[10])) return false;

        return true;
    }

    //Máscara para telefone
    const phoneInput = document.getElementById('phone');
    IMask(phoneInput, {
        mask: [
            { mask: '(00) 00000-0000' },
            { mask: '(00) 0000-0000' }]
    });

})



