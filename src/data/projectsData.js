import invoiceImg from '../assets/invoice-reader.png';
import netflixImg from '../assets/netflix1.png';
import hospitalImg from '../assets/hospitalapi.png';

export const projectsData = [
  {
    slug: 'invoice-reader',
    titulo: 'Invoice Reader',
    tipo: 'Projeto Pessoal',
    destaque: true,
    imagem: invoiceImg,
    descricaoCurta: 'Aplicação web que automatiza a leitura e extração de dados de faturas de energia elétrica em PDF via regex e heurísticas, permitindo edição e exportação para Excel.',
    descricaoCompleta: 'O Invoice Reader é uma aplicação web desenvolvida em Python e Flask para resolver o problema do processamento manual de faturas de energia elétrica (como as da Equatorial). O sistema automatiza a leitura de múltiplos arquivos PDF, identifica páginas de fatura, extrai dados cruciais (como Unidade Consumidora, titular, CPF/CNPJ, leituras, consumo kWh e valores monetários) através de heurísticas estruturadas e expressões regulares (regex), permite a edição dos dados extraídos diretamente em uma tabela na interface web e exporta o resultado consolidado para planilhas Excel (.xlsx) formatadas com estilo profissional.',
    problemaSolucao: {
      problema: 'Processar manualmente dezenas de faturas de energia elétrica em PDF para alimentar planilhas corporativas demanda tempo excessivo e é suscetível a erros de digitação.',
      solucao: 'Desenvolvimento de uma ferramenta web automatizada que lê múltiplos PDFs, extrai com precisão os campos financeiros e operacionais via regex e gera uma planilha Excel limpa e padronizada em segundos.'
    },
    tecnologias: ['Python', 'Flask', 'pdfplumber', 'Pandas', 'openpyxl', 'JavaScript', 'HTML/CSS', 'Regex'],
    funcionalidades: [
      'Upload múltiplo de faturas em formato PDF via drag and drop ou seleção de arquivos.',
      'Leitura e extração estruturada de dados usando a biblioteca pdfplumber.',
      'Extração precisa de campos via Expressões Regulares (Regex): UC, Titular, CPF/CNPJ, Datas (Emissão/Vencimento/Referência), Consumo (kWh) e Valores Monetários.',
      'Interface web interativa com tabela que permite revisar e editar qualquer célula antes da exportação.',
      'Console de logs em tempo real indicando status de processamento individual por arquivo.',
      'Exportação premium para Excel (.xlsx) com formatação de moeda BRL, datas reais, autoajuste de colunas e prevenção de duplicatas.'
    ],
    comoFunciona: 'O usuário faz o upload de uma ou várias faturas em PDF na interface web. No backend, o Flask recebe os arquivos e aciona o módulo core construído com pdfplumber. As páginas são filtradas, os dados extraídos por regex e normalizados. O resultado é enviado via JSON para o frontend, onde a tabela de dados permite edição manual imediata antes de gerar a planilha Excel final via Pandas e openpyxl.',
    desafios: '[DESCREVER PRINCIPAIS DESAFIOS: ex. tratar variações de layout em faturas PDF, otimizar regex para capturar valores com formatação brasileira, manipular codificação e formatação no openpyxl.]',
    aprendizados: '[DESCREVER PRINCIPAIS APRENDIZADOS: ex. aprofundamento na biblioteca pdfplumber, criação de arquitetura modular em Python Flask, manuseio avançado de dados com Pandas e Regex.]',
    participacao: 'Projeto desenvolvido individualmente por Matheus Luna, abrangendo desde a concepção do algoritmo de extração em Python até a construção da interface web em Flask e lógica de exportação.',
    github: 'https://github.com/Matheuss07/Leitor_PDF',
    demo: null
  },
  {
    slug: 'api-hospital',
    titulo: 'Api Hospital',
    tipo: 'Projeto Acadêmico — IFAL',
    destaque: false,
    imagem: hospitalImg,
    descricaoCurta: 'API REST desenvolvida em Node.js e SQLite para gerenciamento de entidades hospitalares como médicos, pacientes, consultas e prontuários, com operações de CRUD e validação de dados.',
    descricaoCompleta: 'A Api Hospital é um backend RESTful desenvolvido durante as atividades acadêmicas no IFAL (Instituto Federal de Alagoas). O objetivo foi projetar um sistema robusto para o gerenciamento de um ambiente hospitalar, englobando o cadastro e vínculo entre médicos, pacientes, agendamento de consultas e registro de prontuários médicos. A API implementa operações de CRUD completas, validações de dados e persistência estruturada.',
    problemaSolucao: null,
    tecnologias: ['Node.js', 'Express', 'JavaScript', 'SQLite', 'REST API'],
    funcionalidades: [
      'Gerenciamento completo (CRUD) de Médicos, Pacientes, Consultas e Prontuários.',
      'Relacionamentos entre tabelas (médicos atribuídos a consultas e prontuários vinculados a pacientes).',
      'Validação rigorosa de dados de entrada nas requisições da API.',
      'Estrutura modular de rotas, controllers e persistência em banco de dados SQLite.'
    ],
    comoFunciona: 'A API recebe requisições HTTP (GET, POST, PUT, DELETE) tratadas pelo Express.js. Os dados são validados nas camadas de controladores e persistidos no banco de dados SQLite, permitindo operações ágeis de gestão hospitalar.',
    desafios: '[DESCREVER PRINCIPAIS DESAFIOS: ex. modelagem do banco de dados relacional para entidades hospitalares, validação consistente de chaves estrangeiras e integridade referencial.]',
    aprendizados: '[DESCREVER PRINCIPAIS APRENDIZADOS: ex. arquitetura RESTful com Node.js e Express, manipulação de bancos de dados relacionais e construção de rotas seguras.]',
    participacao: 'Projeto acadêmico desenvolvido no âmbito das disciplinas do IFAL. [DESCREVER SUA PARTICIPAÇÃO DETALHADA OU SE FOI DESENVOLVIDO INDIVIDUALMENTE]',
    github: 'https://github.com/Matheuss07',
    demo: null
  },
  {
    slug: 'api-netflix',
    titulo: 'Api Netflix',
    tipo: 'Projeto Pessoal',
    destaque: false,
    imagem: netflixImg,
    descricaoCurta: 'Aplicação front-end desenvolvida em React, integrada à API do TMDb, para exibição dinâmica de filmes e séries com consumo de dados via Axios.',
    descricaoCompleta: 'A Api Netflix é uma aplicação web desenvolvida em React inspirada na interface da Netflix. O projeto consome a API externa The Movie Database (TMDb) através da biblioteca Axios para renderizar dinamicamente categorias de filmes, lançamentos, séries em alta, banners de destaque e detalhes de produções em tempo real.',
    problemaSolucao: null,
    tecnologias: ['React', 'JavaScript', 'Axios', 'TMDb API', 'CSS'],
    funcionalidades: [
      'Integração assíncrona com a API REST do TMDb usando Axios.',
      'Renderização dinâmica de fileiras de filmes organizados por gêneros e tendências.',
      'Banner principal dinâmico destacando produções populares.',
      'Design responsivo estilizado em CSS no padrão de plataformas de streaming.'
    ],
    comoFunciona: 'Ao carregar a aplicação, componentes React realizam chamadas HTTP para os endpoints da TMDb API através do Axios. Os estados são armazenados via Hooks do React e propagados para os componentes visuais dos carrosséis e banners.',
    desafios: '[DESCREVER PRINCIPAIS DESAFIOS: ex. lidar com chaves de API externas, gerenciar estados assíncronos no React, tratar carregamentos e imagens de alta resolução.]',
    aprendizados: '[DESCREVER PRINCIPAIS APRENDIZADOS: ex. consumo de APIs de terceiros com Axios, gerenciamento de estado e hooks (useEffect/useState), componentização limpa em React.]',
    participacao: 'Projeto desenvolvido individualmente por Matheus Luna para praticar integração de APIs REST e criação de interfaces modernas em React.',
    github: 'https://github.com/Matheuss07',
    demo: null
  }
];
