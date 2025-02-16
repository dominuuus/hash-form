# Hash Form - Projeto do Curso JavaScript Impressionador

Este projeto faz parte da primeira etapa do curso JavaScript Impressionador da Hashtag Treinamentos. O objetivo principal era replicar um formulário construído durante o curso, aplicando os fundamentos básicos do JavaScript, como variáveis, funções, métodos, desenvolvimento web e manipulação do DOM.

No entanto, decidi ir além e implementar algumas funcionalidades adicionais que me despertaram curiosidade. Esses incrementos foram desenvolvidos com base em pesquisas em documentações, fóruns de desenvolvedores e, em alguns casos, com a ajuda de IA para refinar soluções que não consegui resolver facilmente. 

## Funcionalidades Implementadas
1. Máscaras para Campos de CPF, Telefone e CEP
Utilizei a biblioteca IMask para adicionar máscaras aos campos de CPF, Telefone e CEP. Isso melhora a experiência do usuário, garantindo que os dados sejam inseridos no formato correto.

Exemplo: O campo de CPF é formatado automaticamente como 000.000.000-00.

3. Validação de CPF
Além da máscara, implementei a função validarCpf() para verificar se o CPF digitado é válido, seguindo as regras da Receita Federal.

Caso o CPF seja inválido, uma notificação é exibida ao usuário.

3. Validação de Email
Adicionei os campos de email e confirmação de email, que não estavam presentes no projeto original.

Implementei a função conferirEmail() para comparar os emails digitados e notificar o usuário caso não coincidam.

4. Integração com API de Consulta de CEP
Integrei a API ViaCEP para preenchimento automático dos campos de endereço (rua, bairro, cidade e UF) ao digitar o CEP.

Utilizei a função buscarCep() para realizar a consulta e preencher os campos automaticamente.

5. Bloqueio e Limpeza de Campos de Endereço
Implementei as funções bloquearCamposCep() e limparCamposCep() para bloquear a edição dos campos preenchidos automaticamente e limpar os dados caso o CEP seja alterado.

Adicionei uma classe CSS para destacar visualmente os campos preenchidos automaticamente.

## Estrutura do Projeto
HTML: Construí toda a estrutura HTML de forma autônoma, aplicando as tags semânticas corretas para melhorar a acessibilidade e organização do código. Mantive a estrutura que criei, mesmo após comparar com o gabarito do curso, realizando apenas ajustes pontuais para garantir a funcionalidade.

CSS: Desenvolvi a estilização do projeto de forma independente, utilizando o modo de desenvolvedor para inspecionar e entender a construção dos elementos. Respeitei a identidade visual da Hashtag Treinamentos, mantendo as cores e estilos propostos no curso.

JavaScript: Implementei todas as funcionalidades descritas acima, utilizando conceitos como:
- Manipulação do DOM.
- Funções assíncronas (async/await) para integração com a API ViaCEP.
- Validações de campos e exibição de mensagens de erro.

## Desafios e Aprendizados
- Autonomia: Cerca de 70% do projeto foi desenvolvido de forma autônoma, utilizando anotações do curso e consultas à documentação oficial.
- Pesquisa e IA: Para os 30% restantes, utilizei a IA e fóruns de desenvolvedores de forma estratégica, solicitando exemplos e explicações para entender como implementar determinadas funcionalidades, sem receber o código pronto.
- Curiosidade e Inovação: A decisão de incrementar o projeto com funcionalidades adicionais me permitiu explorar novos conceitos e aprofundar meus conhecimentos em JavaScript.

## Como Executar o Projeto
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/hash-form.git
Abra o arquivo index.html no seu navegador.

## Tecnologias Utilizadas
- HTML5: Estrutura semântica do formulário.
- CSS3: Estilização e responsividade.
- JavaScript: Funcionalidades dinâmicas e integração com API.
- IMask: Biblioteca para máscaras de campos.
- ViaCEP API: Consulta de endereço por CEP.


Este projeto foi uma grande conquista pessoal, e estou muito feliz com o resultado final. Espero que ele inspire outros estudantes a explorar além do básico e a buscar sempre novas formas de aprender e inovar!
