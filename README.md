Hash Form - Projeto do Curso JavaScript Impressionador

📌 Introdução
Este projeto faz parte da primeira etapa do curso JavaScript Impressionador da Hashtag Treinamentos. O objetivo inicial era replicar um formulário construído durante o curso, aplicando conceitos fundamentais de JavaScript, como:

Variáveis
Funções
Métodos
Desenvolvimento web
Manipulação do DOM
Entretanto, decidi ir além, implementando funcionalidades adicionais para aprimorar a experiência do usuário e explorar novos conceitos.

📑 Índice
Funcionalidades Implementadas
Estrutura do Projeto
Desafios e Aprendizados
Como Executar o Projeto
Tecnologias Utilizadas
🚀 Funcionalidades Implementadas
✅ Máscaras para CPF, Telefone e CEP

Utilização da biblioteca IMask para garantir que os campos sigam o formato correto.
Exemplo: O campo de CPF é formatado automaticamente como 000.000.000-00.
✅ Validação de CPF

Implementação da função validarCpf() para verificar se o CPF digitado é válido, conforme as regras da Receita Federal.
Caso o CPF seja inválido, uma notificação é exibida ao usuário.
✅ Validação de Email

Adição dos campos email e confirmação de email, que não estavam no projeto original.
Implementação da função conferirEmail() para comparar os emails digitados e alertar o usuário caso não coincidam.
✅ Integração com API de Consulta de CEP

Utilização da API ViaCEP para preenchimento automático dos campos de endereço (rua, bairro, cidade e UF) ao digitar um CEP válido.
Implementação da função buscarCep() para realizar a consulta e preencher os campos automaticamente.
✅ Bloqueio e Limpeza de Campos de Endereço

Implementação das funções bloquearCamposCep() e limparCamposCep() para:
Bloquear a edição dos campos preenchidos automaticamente.
Limpar os dados caso o CEP seja alterado.
Aplicação de uma classe CSS para destacar os campos preenchidos automaticamente.
🏗 Estrutura do Projeto
📌 HTML:

Estrutura construída com tags semânticas, garantindo acessibilidade e organização.
Mantive minha estrutura inicial, comparando com o gabarito do curso e realizando ajustes pontuais.
🎨 CSS:

Estilização desenvolvida de forma independente, respeitando a identidade visual da Hashtag Treinamentos.
Utilização do modo desenvolvedor para inspecionar e entender a construção dos elementos.
💻 JavaScript:

Implementação de todas as funcionalidades descritas, utilizando conceitos como:
Manipulação do DOM
Funções assíncronas (async/await) para integração com API
Validações de campos e exibição de mensagens de erro
🎯 Desafios e Aprendizados
✔ Autonomia: Aproximadamente 70% do projeto foi desenvolvido com base em anotações do curso e consultas à documentação oficial.
✔ Pesquisa e IA: Para os 30% restantes, utilizei IA e fóruns para entender e implementar funcionalidades específicas, sem copiar código pronto.
✔ Curiosidade e Inovação: A decisão de expandir o projeto me permitiu aprofundar conhecimentos e explorar novas soluções em JavaScript.

▶ Como Executar o Projeto
1️⃣ Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/hash-form.git
2️⃣ Acesse a pasta do projeto e abra o arquivo index.html no navegador.

🛠 Tecnologias Utilizadas
HTML5: Estrutura semântica do formulário.
CSS3: Estilização e responsividade.
JavaScript: Funcionalidades dinâmicas e integração com API.
IMask: Biblioteca para máscaras de campos.
ViaCEP API: Consulta de endereço por CEP.
📢 Considerações Finais
Este projeto foi uma grande conquista pessoal, e estou muito feliz com o resultado final. Espero que ele inspire outros estudantes a explorarem além do básico, sempre buscando novas formas de aprender e inovar! 🚀💡

🔗 Repositório: GitHub - seu-usuario/hash-form