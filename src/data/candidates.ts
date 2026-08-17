// Dados gerados a partir dos planos de governo oficiais registrados no TSE
// (pasta "Planos de Governo"), resumidos de forma neutra por tema.
// Não editar manualmente os resumos sem checar a fonte original.

export type ThemeKey =
  | "economia"
  | "seguranca"
  | "educacao"
  | "saude"
  | "meio_ambiente"
  | "assistencia_social"
  | "gestao_publica"
  | "infraestrutura";

export interface ThemeProposal {
  coberto: boolean;
  titulo: string;
  resumo: string;
}

export interface Candidate {
  slug: string;
  nome: string;
  partido: string;
  numero: number;
  resumoPerfil: string;
  temas: Record<ThemeKey, ThemeProposal>;
}

export const CANDIDATES: Candidate[] = [
  {
    "slug": "clariana-barao",
    "nome": "Clariana Barão",
    "partido": "DC",
    "numero": 27,
    "resumoPerfil": "O plano tem seis partes principais: proteção de mulheres e crianças, economia, educação, segurança, saúde e reforma do Estado. Cada parte traz objetivos gerais, formas de acompanhar os resultados e um cronograma para colocar as ideias em prática durante o mandato, mas não traz metas numéricas específicas.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Regras mais simples e crédito para pequenos negócios",
        "resumo": "O plano quer tornar mais simples abrir e administrar empresas. A ideia é digitalizar processos e dar mais clareza e segurança nas regras. Para pequenos negócios, o plano prevê mais crédito para produção, com garantias, além de cursos de gestão e tecnologia. Também quer que micro e pequenas empresas vendam mais para o governo."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Vigiar fronteiras e combater facções criminosas",
        "resumo": "O plano prevê vigiar as fronteiras com sensores, radares e drones ligados a centros de comando. Também prevê ações de inteligência contra o tráfico de drogas e de armas, com ajuda entre estados e outros países. Propõe rastrear o dinheiro das facções criminosas e tomar seus bens, além de usar dados para planejar o policiamento. No sistema prisional, quer separar os líderes das facções e bloquear comunicações ilegais entre presos."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Alfabetização na idade certa e ensino técnico regional",
        "resumo": "O plano foca em alfabetizar as crianças na idade certa, com aulas de reforço para quem ficou atrasado e avaliações frequentes. Também quer mais qualidade na educação infantil. Prevê valorizar os professores com cursos de formação e um plano de carreira melhor, uso responsável de tecnologia e inteligência artificial nas aulas, e mais escolas técnicas ligadas às atividades econômicas de cada região."
      },
      "saude": {
        "coberto": true,
        "titulo": "Postos de saúde, telemedicina e tratamentos no SUS",
        "resumo": "O plano dá prioridade aos postos de saúde do dia a dia, com equipes completas, {{prontuário eletrônico|histórico médico do paciente guardado no computador}} integrado e acompanhamento de doenças crônicas. Também prevê ações de prevenção, como vacinação e cuidado da mãe e do bebê. Quer incluir novos tratamentos e tecnologias no SUS depois de avaliação científica sobre segurança, eficácia e {{custo-benefício|se o tratamento vale o dinheiro gasto}}. Prevê ainda mais telemedicina e controle digital das filas de atendimento."
      },
      "meio_ambiente": {
        "coberto": false,
        "titulo": "",
        "resumo": ""
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Proteção para mulheres, crianças e famílias vulneráveis",
        "resumo": "O plano tem uma parte dedicada à proteção de mulheres e crianças. Prevê uma rede de atendimento para vítimas de violência, regras para acompanhar casos de risco e busca ativa de crianças que estão fora da escola. Também prevê apoio a famílias vulneráveis com creches, cuidado antes e depois do nascimento do bebê, além de cursos profissionalizantes, crédito e uma rede de apoio para ajudar as mulheres a ter mais independência financeira."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Gestão por metas, transparência e acordos com estados",
        "resumo": "O plano propõe revisar os gastos do governo e os {{subsídios|ajudas financeiras que o governo dá a empresas ou setores}}, com um planejamento de vários anos e metas claras. Também quer digitalizar os serviços públicos, juntando os dados e criando uma identidade única para o cidadão. Prevê gerenciar o governo por metas, com painéis para acompanhar os resultados, avaliação dos programas e até o fim de programas que não funcionam. Quer ainda compras do governo mais transparentes, dados abertos ao público, e acordos com estados e municípios que ligam o repasse de dinheiro aos resultados alcançados."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Concessões em transporte, energia e internet",
        "resumo": "O plano prevê manter as estradas em bom estado, com pagamento ligado à qualidade do serviço, e expandir ferrovias, hidrovias, portos e o transporte marítimo entre portos brasileiros. Para isso, prevê usar {{concessões|quando uma empresa privada administra um serviço público por contrato}} e parcerias entre o governo e empresas privadas para investimentos de longo prazo. Propõe também ações para tornar o fornecimento de energia mais seguro e confiável, além de levar mais internet de qualidade para o país."
      }
    }
  },
  {
    "slug": "edmilson-costa",
    "nome": "Edmilson Costa",
    "partido": "PCB",
    "numero": 21,
    "resumoPerfil": "O plano propõe mudar a economia e o Estado brasileiro para um modelo socialista. Isso inclui colocar sob controle do governo setores importantes, como bancos, energia, saúde, educação, comunicações e transportes. Também propõe dar mais espaço para o povo participar diretamente das decisões do governo. E quer oferecer serviços públicos gratuitos para todos.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Governo assume controle da economia e dos bancos",
        "resumo": "O plano propõe que o governo assuma o controle dos bancos e do dinheiro do país. Também quer criar um banco público para cuidar do dinheiro da aposentadoria dos trabalhadores. A {{dívida pública|dinheiro que o governo deve}} seria reorganizada. O pagamento de juros seria parado por um tempo, enquanto se investiga de onde essa dívida veio. O plano também quer que o governo retome empresas que foram vendidas ao setor privado. Propõe ainda que o governo controle o {{câmbio|troca do real por moeda estrangeira}} e o comércio com outros países. Propõe mudar os impostos para que quem ganha mais pague mais. Também quer isentar de imposto de renda quem ganha até um salário mínimo. Por fim, o Banco Central deixaria de ter autonomia, isto é, passaria a seguir as decisões do governo."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Mudança nas polícias e na política de drogas",
        "resumo": "O plano propõe tirar o caráter militar das polícias e unir todas elas em uma só força. Prevê que todo policial passe pelo mesmo tipo de formação, do início ao fim da carreira. Também propõe que as forças de segurança deixem de estar ligadas ao Exército. Defende que usar drogas deixe de ser crime, e que a maconha seja liberada em pouco tempo. Também quer acabar com a política de combater as drogas só com repressão. Propõe medidas contra prender tantas pessoas na cadeia, e o fim de presídios administrados por empresas privadas. Por fim, quer que o governo ocupe áreas dominadas por grupos criminosos, levando serviços públicos para essas regiões."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Educação pública e gratuita em todos os níveis",
        "resumo": "O plano propõe que toda a educação seja pública e gratuita, da creche até a pós-graduação. As escolas e faculdades particulares passariam a ser do governo. Prevê o fim do vestibular nas universidades federais. Também prevê mais vagas por cotas: 54% para pessoas negras. E de 70% a 80% para quem estudou em escola pública. Propõe também um piso salarial nacional para professores da educação básica. E quer mais institutos federais e escolas técnicas no interior do país."
      },
      "saude": {
        "coberto": true,
        "titulo": "Sistema de saúde totalmente público",
        "resumo": "O plano propõe que todo o sistema de saúde seja público. Os planos de saúde e hospitais privados passariam a ser do governo, e contratos com {{organizações sociais|empresas privadas que hoje administram parte de hospitais públicos}} seriam cancelados. Prevê investir o equivalente a 10% do {{PIB|soma de tudo que o país produz}} na saúde pública. Também quer ampliar a Fiocruz e o Instituto Butantan, que fabricam vacinas e remédios. Propõe proibir as {{comunidades terapêuticas|locais que internam pessoas para tratar dependência de drogas}}, e fortalecer os postos de saúde do dia a dia. Também quer criar conselhos eleitos pelos próprios trabalhadores, para fiscalizar o sistema em todos os níveis."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Menos desmatamento e taxa para quem polui",
        "resumo": "O plano propõe combater o desmatamento e a mineração ilegal, e ampliar as áreas protegidas e as reservas de floresta. Prevê plantar árvores nativas nas áreas desmatadas, e demarcar terras de povos indígenas, quilombolas e outras comunidades tradicionais. Propõe cobrar uma taxa de quem polui o ar e causa outros danos ao meio ambiente. Também quer diminuir a criação de gado em grande escala e o uso de {{combustíveis fósseis|petróleo, carvão e gás, que poluem ao serem usados}} para gerar energia. Prevê restringir o uso de plásticos descartáveis, e investir em fontes de energia renovável, como solar e eólica."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Restaurantes populares e mais proteção social",
        "resumo": "O plano propõe criar restaurantes e mercados populares nos municípios, comprando alimentos direto de quem produz. Prevê aumentar os estoques de alimentos guardados pela {{Conab|órgão do governo que guarda e controla o estoque de alimentos}}, para ajudar a controlar o preço de itens básicos. Propõe ampliar a aposentadoria pública para cobrir todos os trabalhadores. Também quer fortalecer os centros de apoio psicológico. E ampliar os abrigos para pessoas em situação de rua e vítimas de violência. Também quer aumentar o tempo e o valor do seguro-desemprego, e legalizar o aborto, com atendimento pelo SUS."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Mudanças no sistema político e na Justiça",
        "resumo": "O plano propõe que a população decida diretamente como o dinheiro público será usado. Prevê convocar uma nova {{assembleia constituinte|reunião de representantes eleitos para escrever uma nova Constituição}} em até dois anos. Também quer trocar o Senado por um Congresso com uma única câmara. Propõe também criar formas da população poder tirar políticos eleitos do cargo por meio de votação popular. Quer mudar o Judiciário, com mandato fixo de dez anos para juízes dos tribunais superiores. Esses juízes ficariam sujeitos à fiscalização da sociedade. Por fim, propõe acabar com salários de servidores que ultrapassem o {{teto constitucional|limite máximo de salário permitido no serviço público}}."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Transporte grátis e governo controlando serviços básicos",
        "resumo": "O plano propõe transporte coletivo gratuito em todo o país. Prevê mais linhas de trem e de barco, e ônibus funcionando por mais horas nas cidades médias e grandes. Prevê que empresas de {{saneamento|serviços de água e esgoto}} e de energia, hoje privadas, voltem a ser do governo. Propõe que o governo seja o único a atuar nos setores de gás e telecomunicações. Também quer um programa de moradia que use prédios públicos vazios. O objetivo é acabar com a falta de moradia no país."
      }
    }
  },
  {
    "slug": "augusto-cury",
    "nome": "Augusto Cury",
    "partido": "Avante",
    "numero": 70,
    "resumoPerfil": "O plano de governo fala bastante sobre a polarização política e o controle das emoções. Também traz propostas de {{responsabilidade fiscal|controlar bem os gastos do governo}}, apoio a quem quer abrir um negócio, integração das forças de segurança, valorização dos professores e mais telemedicina no SUS. Propõe ainda mudanças como o {{semipresidencialismo|sistema em que presidente e primeiro-ministro dividem o poder}} e mudanças na composição do STF.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Menos gastos, impostos simples e apoio a empreendedores",
        "resumo": "O plano quer que o governo quase não gaste mais do que arrecada, controlando os gastos e reduzindo aos poucos a dívida pública. Também quer simplificar o sistema de impostos e diminuir o valor pago ao final da mudança. Propõe um banco de crédito para pequenos empreendedores, uma rede nacional de escolas de empreendedorismo e uma forma mais simples de abrir empresas. A meta é formar 10 milhões de novos empreendedores e instalar 10 mil novas indústrias no país."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "União das polícias contra o crime organizado",
        "resumo": "Propõe recriar o Ministério da Segurança Pública. A ideia é unir a Polícia Federal, as polícias civis e militares e as guardas municipais em um sistema único que compartilha dados, com uma força municipal extra, formada por 5% dos funcionários das prefeituras. O plano quer usar inteligência artificial para monitorar o crime, colocar as Forças Armadas para controlar as fronteiras, atacar o dinheiro do crime organizado e mudar o sistema prisional para ajudar presos a voltar à sociedade."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Foco na educação básica e inclusão escolar",
        "resumo": "Coloca a educação básica como prioridade principal. O plano foca em alfabetizar as crianças na idade certa, aumentar o salário dos professores, oferecer formação contínua para eles e ampliar o ensino técnico dentro do ensino médio. Inclui também um programa nas escolas para cuidar das emoções dos alunos, prevenindo ansiedade, bullying e automutilação. Prevê ainda uma política de inclusão para estudantes com autismo, TDAH e dislexia, com formação de professores e mudanças na forma de ensinar."
      },
      "saude": {
        "coberto": true,
        "titulo": "Modernizar o SUS e ampliar a telemedicina",
        "resumo": "Propõe fortalecer o atendimento básico do SUS e modernizar sua gestão, colocando os prontuários dos pacientes no sistema digital e conectando os sistemas de saúde. Quer ampliar a telemedicina para que cerca de 80% das consultas básicas sejam feitas à distância, o que reduziria o tempo de espera por especialistas. Prevê também uma política nacional de saúde mental para prevenir ansiedade, depressão, automutilação e suicídio nas escolas, empresas e unidades de saúde."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Produção agropecuária, energia limpa e florestas protegidas",
        "resumo": "Propõe dobrar a produção do campo (agricultura e pecuária) na próxima década, usando tecnologia e prazos legais mais claros para o {{licenciamento ambiental|autorização do governo para atividades que afetam o meio ambiente}}. Quer que fontes de energia renovável cheguem a 90% da {{matriz energética|conjunto de fontes de energia usadas no país}} até 2040, com investimento em hidrogênio verde. Inclui um sistema para detectar incêndios florestais usando satélites e drones, pagamento a produtores que preservam a vegetação nativa e programas de renda para as populações que vivem às margens dos rios, como forma de reduzir o desmatamento."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Proteção à mulher, combate à fome e inclusão",
        "resumo": "Propõe um programa de proteção para mulheres que sofrem violência, com um aplicativo de emergência que mostra a localização, policiamento nos bairros para prevenir crimes e ações para dar independência financeira e crédito para mulheres que querem empreender. Prevê também um plano para combater a fome no mundo, pago com parte do dinheiro do comércio global e da indústria de armas. Inclui ainda programas para ajudar jovens a conseguir o primeiro emprego e para incluir famílias pobres na economia, com trabalho e renda."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Reforma do governo e combate à corrupção",
        "resumo": "Propõe uma reforma para tornar o governo mais eficiente e digital, com metas anuais para cada ministério e uso de inteligência artificial para descobrir fraudes e desperdício de dinheiro em contratos públicos. Defende também mudar o sistema de governo para o {{semipresidencialismo|sistema em que presidente e primeiro-ministro dividem o poder}}, mandato de oito anos para ministros do STF escolhidos por critérios técnicos, e uma revisão do {{pacto federativo tributário|regras de divisão dos impostos entre governo federal, estados e municípios}} para dar mais dinheiro às prefeituras."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Mais concessões, saneamento e energia limpa",
        "resumo": "Prevê mais {{concessões|contratos que passam obras públicas para empresas privadas administrarem}} e {{parcerias público-privadas|acordos entre governo e empresas para fazer obras juntos}} para acelerar obras de estradas, ferrovias, portos e armazéns. Também quer levar internet rápida para todas as escolas, hospitais e áreas rurais do país. Coloca o saneamento básico como prioridade nacional e propõe transformar o Brasil em referência mundial em energia limpa, com metas de expansão da energia solar, eólica e hidrogênio verde."
      }
    }
  },
  {
    "slug": "flavio-bolsonaro",
    "nome": "Flávio Bolsonaro",
    "partido": "PL",
    "numero": 22,
    "resumoPerfil": "O plano de governo tem propostas em várias áreas. Uma delas é segurança pública e combate ao crime organizado. Outra é cortar gastos e impostos para diminuir o tamanho do governo. Também propõe digitalizar e simplificar os serviços públicos. Quer estimular o crescimento econômico com investimento privado em infraestrutura, energia e agronegócio. Além disso, tem um grupo de políticas voltadas para as mulheres.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Menos impostos, mais crédito e emprego formal",
        "resumo": "O plano quer mudar a reforma tributária que já está em andamento. A ideia é diminuir o {{IVA|novo imposto único que vai juntar vários outros impostos}} e as exceções de impostos. Também quer cortar impostos sobre consumo, energia e combustíveis. E quer reduzir aos poucos o custo de contratar trabalhador com carteira assinada. Propõe contratos diferentes para jovens no primeiro emprego e para pessoas com mais de 50 anos. Quer ampliar o crédito e dar orientação financeira para famílias e pequenos negócios, usando bancos públicos."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Combate ao crime organizado e penas mais duras",
        "resumo": "O plano quer classificar facções criminosas como organizações terroristas. Também quer reduzir a {{maioridade penal|idade a partir da qual alguém pode ser julgado e preso como adulto}} de 18 para 16 anos. Propõe criar uma força militar de elite para as fronteiras. Também quer construir novas prisões de segurança máxima, com meta de 500 mil novas vagas em quatro anos. Prevê tornozeleira eletrônica para quem agride mulheres. Também quer o fim da {{progressão de pena|passar para regime de prisão mais leve antes de cumprir a pena toda}} em crimes muito graves. Propõe castração química para estupradores e abusadores de crianças condenados."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Alfabetização com método fônico e ensino técnico",
        "resumo": "O plano dá prioridade à alfabetização pelo {{método fônico|jeito de ensinar a ler juntando o som das letras}}. Cria um programa que paga alunos para dar reforço escolar a outros alunos. Liga parte do dinheiro das escolas ao cumprimento de metas de aprendizagem. Propõe ampliar o ensino técnico em parceria com empresas. Quer criar um novo financiamento estudantil em que o pagamento depende da renda da pessoa depois de formada. Também quer dar vale para matrícula em escola particular quando não houver vaga na escola pública."
      },
      "saude": {
        "coberto": true,
        "titulo": "Correção de valores do SUS e mais tecnologia",
        "resumo": "O plano quer corrigir os valores pagos pelo SUS aos hospitais e médicos, que estão desatualizados. Propõe ampliar a {{Estratégia Saúde da Família|programa do SUS com equipes que atendem os bairros}}. Também quer contratar exames e serviços de clínicas privadas nos horários em que elas estão sem uso, para diminuir as filas. Prevê um prontuário eletrônico único, que junte informações da rede pública e privada. Quer usar inteligência artificial para marcar consultas, entregar remédios em casa e fortalecer o atendimento em saúde mental."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Fim do desmatamento ilegal e mercado de carbono",
        "resumo": "O plano tem a meta de acabar com o desmatamento ilegal até 2029. Quer fiscalizar por satélite e usar inteligência artificial para identificar quem comanda o crime ambiental. Não pretende criar novas regras para produtores rurais que já cumprem a lei. Propõe organizar um {{mercado de carbono|sistema em que empresas compram e vendem o direito de emitir poluição}} regulado pelo governo. Quer ampliar o pagamento a quem preserva a mata nativa e apoiar a {{bioeconomia|uso econômico sustentável da natureza, sem destruir a floresta}} na Amazônia."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Continuação dos programas sociais e qualificação profissional",
        "resumo": "O plano quer manter os programas sociais que já existem, combatendo fraudes. Quer dar prioridade às pessoas que recebem benefícios em cursos de qualificação profissional e ajuda para conseguir emprego. Se a pessoa perder o emprego conseguido, poderá voltar a receber o benefício sem entrar em fila. Propõe ampliar as creches e dar vale-creche quando faltar vaga. Quer criar uma rede de cuidado para idosos e pessoas com deficiência, e programas de proteção, capacitação e crédito para mulheres."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Corte de ministérios e mudanças no Judiciário",
        "resumo": "O plano quer cortar pelo menos 10 ministérios e reduzir cargos de confiança no governo. Também quer revisar {{normas infralegais|regras internas do governo que não passam pelo Congresso}} para baratear a máquina pública. Também quer exigir mais qualificação técnica na escolha de dirigentes de estatais e agências reguladoras. Prevê mudar as regras fiscais para reduzir a dívida pública. Quer limitar os casos que o STF pode julgar diretamente, sem passar por outra instância. Também quer limitar as decisões tomadas por apenas um ministro do STF, sem votação dos demais. Quer acabar com a reeleição para presidente e dar mais transparência às emendas parlamentares."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Investimento em estradas, ferrovias e saneamento básico",
        "resumo": "O plano prevê investir R$ 900 bilhões em quatro anos em rodovias, ferrovias, portos, hidrovias e aeroportos. A ideia é criar rotas de transporte de cargas e fazer contratos com empresas privadas. Quer retomar um programa de moradia popular, com meta de 2,5 milhões de casas. Propõe acelerar até 2033 a chegada de água tratada e coleta de esgoto a todas as casas do país. Quer ampliar a rede que leva energia elétrica pelo país. Também quer garantir que as regras para grandes projetos não mudem por até 20 anos."
      }
    }
  },
  {
    "slug": "hertz-dias",
    "nome": "Hertz Dias",
    "partido": "PSTU",
    "numero": 16,
    "resumoPerfil": "O plano tem como base colocar sob controle do Estado empresas e setores considerados estratégicos, como petróleo, mineração, energia e bancos — o que o texto chama de {{estatização|quando o Estado passa a ser dono da empresa}}. Também defende reduzir a jornada de trabalho e tirar da gestão privada serviços públicos como saúde, educação, moradia e transporte, colocando-os sob administração de conselhos de trabalhadores. O plano adota ainda uma postura de enfrentamento ao que chama de {{imperialismo|domínio de países ricos sobre os mais pobres}}.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Estado assume controle de setores estratégicos",
        "resumo": "O plano quer que o Estado assuma empresas de mineração, petróleo, energia e siderurgia. Também quer limitar em 25% a parte do lucro que as grandes empresas privadas podem pagar aos seus donos, os chamados {{dividendos|parte do lucro distribuída aos donos da empresa}}, e reunir todo o crédito em um único banco público. Defende cobrar mais impostos de quem ganha mais e de fortunas acima de R$ 1 bilhão, acabar com descontos de impostos para empresas, reduzir a jornada de trabalho para 36 horas por semana sem cortar o salário, e dobrar o valor do salário mínimo."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Fim da polícia militar, combate ao crime",
        "resumo": "O plano defende dar prioridade a investigar o dinheiro e tomar os bens de organizações criminosas, em vez de fazer operações policiais nas ruas. Também quer descriminalizar as drogas e revogar (cancelar) a lei antidrogas que existe hoje. Propõe unir as polícias em uma só instituição civil, sem caráter militar, com comandantes escolhidos por eleição. Defende ainda tornar obrigatório o uso de câmeras no uniforme dos policiais e acabar com a {{Justiça Militar|tribunais que julgam crimes cometidos por militares}}."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Fim de parcerias privadas, mais valor aos professores",
        "resumo": "O plano propõe acabar com parcerias entre o poder público e empresas privadas na educação, com a terceirização de serviços e com a compra de materiais de empresas educacionais pelas escolas públicas. Também quer revogar (cancelar) as regras curriculares que definem hoje o que é ensinado na educação básica. Defende criar mais vagas em creches, escolas e universidades públicas, dar apoio para o aluno continuar estudando (transporte, alimentação, bolsas) e criar planos de carreira e salário para os profissionais da educação."
      },
      "saude": {
        "coberto": true,
        "titulo": "SUS totalmente público, sem gestão privada",
        "resumo": "O plano defende um SUS totalmente público, para todos e gratuito, acabando com a gestão feita por {{organizações sociais|entidades privadas sem fins lucrativos que administram serviços públicos}}, fundações e parcerias entre o poder público e empresas privadas. Também quer proibir que leitos públicos sejam usados por planos de saúde privados. Propõe investir mais na atenção básica (postos de saúde) e na saúde mental, produzir remédios pelo próprio governo, ampliar hospitais e unidades básicas, e contratar profissionais por concurso público."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Fim de ajuda ao agronegócio, mais terras demarcadas",
        "resumo": "O plano propõe acabar com créditos e ajudas do governo para o grande agronegócio, recuperar áreas de terra degradadas e acelerar a demarcação de terras indígenas e a entrega de títulos de terra a comunidades quilombolas. Também se opõe à exploração de petróleo na {{Margem Equatorial|área do litoral norte do Brasil rica em petróleo}} e à privatização de rios da Amazônia. Defende uma reforma agrária, redistribuindo terras que não são usadas ou que foram tomadas de forma ilegal, e incentiva o plantio sem uso de agrotóxicos."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Renda mínima e apoio a quem mais precisa",
        "resumo": "O plano prevê pagar um valor igual a um salário mínimo para trabalhadores desempregados, enquanto não houver emprego para todos. Propõe criar delegacias especializadas e casas de abrigo abertas 24 horas para mulheres que sofrem violência, além de mais creches e serviços públicos de cuidado, para diminuir a sobrecarga das tarefas domésticas. Defende também mais cotas e acessibilidade para pessoas com deficiência, e regularizar a situação de imigrantes que vivem no país sem documentos."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Combate à corrupção e fim da terceirização",
        "resumo": "O plano propõe investigar e punir pessoas do governo e de empresas envolvidas em corrupção, tomando os bens conseguidos de forma ilegal. Quer substituir contratos de terceirização por concursos públicos, para preencher vagas fixas no serviço público. Defende também acabar com a {{Lei de Responsabilidade Fiscal|lei que limita gastos do governo com pessoal e dívidas}} e fazer uma revisão completa da dívida pública, suspendendo o pagamento dessa dívida a grandes investidores."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Transporte público estatal e gratuito",
        "resumo": "O plano propõe transporte público urbano gratuito e sob controle do Estado, tirando das mãos de empresas privadas as {{concessões|autorização que o governo dá para uma empresa explorar um serviço público}} de metrôs, estradas e ferrovias, e acabando com ajudas financeiras a empresas privadas do setor. Defende construir moradia popular em grande escala por meio de uma empresa pública de obras, levar saneamento básico (água tratada e esgoto) para todo o país, e criar um plano nacional de obras públicas para gerar empregos."
      }
    }
  },
  {
    "slug": "lula",
    "nome": "Lula",
    "partido": "Brasil Pronto pra Mais",
    "numero": 13,
    "resumoPerfil": "O plano de governo continua as políticas do governo atual. Ele une controle dos gastos públicos com mais investimento em infraestrutura e apoio à indústria. Também quer fortalecer o SUS e a educação pública, reduzir o desmatamento, ampliar os programas sociais e defender a soberania do país nas relações externas e na defesa.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Economia e apoio à indústria",
        "resumo": "O plano quer manter as {{regras fiscais atuais|regras que limitam os gastos do governo}} de hoje. Também quer baixar aos poucos a taxa de juros, mantendo a inflação sob controle. Quer continuar a reforma que junta cinco impostos sobre consumo em dois. E quer aumentar os impostos de quem ganha mais. Propõe financiar indústrias importantes com dinheiro público e privado, e ampliar crédito e garantias para micro e pequenas empresas."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Combate ao crime organizado e controle de armas",
        "resumo": "O plano propõe criar um Ministério da Segurança Pública. Ele quer mais cooperação entre o governo federal, os estados e as cidades. Também quer fortalecer os sistemas de inteligência e as investigações financeiras contra o crime organizado. Prevê manter o controle sobre armas e munições, melhorar a gestão das prisões, reforçar a vigilância nas fronteiras e na Amazônia, e ampliar o uso de câmeras nos uniformes dos policiais."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Mais ensino técnico, superior e alfabetização",
        "resumo": "O plano quer manter a meta de alfabetizar as crianças na idade certa. Também quer ampliar a educação em tempo integral e o número de creches, além de expandir os institutos federais de ensino técnico. Prevê manter programas que ajudam financeiramente os alunos a continuarem no ensino médio. Quer também financiar as universidades federais, dar bolsas de estudo e valorizar os professores com o {{piso salarial|salário mínimo garantido para essa profissão}} e programas de formação."
      },
      "saude": {
        "coberto": true,
        "titulo": "Fortalecer o SUS e reduzir filas",
        "resumo": "O plano quer reduzir as filas de consultas, exames e cirurgias. Para isso, propõe mutirões de atendimento, parcerias com hospitais privados e um sistema digital para organizar o acesso a especialistas. Também quer ampliar os postos de saúde, manter os remédios gratuitos, expandir a vacinação e investir em centros de tratamento de câncer. Prevê ainda fortalecer o cuidado com a saúde mental e a produção de remédios e insumos no país."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Meta de desmatamento zero e crédito rural",
        "resumo": "O plano tem a meta de chegar ao {{desmatamento líquido zero|quando a floresta recuperada compensa a floresta destruída}} até 2030. Para isso, quer manter o financiamento para ações contra as mudanças climáticas, a fiscalização por satélite e a recuperação de florestas. Propõe ampliar o crédito para pequenos agricultores e a ajuda técnica a eles, além da reforma agrária, do seguro rural e de programas para recuperar pastagens degradadas. A ideia é unir a produção agropecuária a práticas que agridem menos o meio ambiente."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Ajuda financeira a famílias e grupos vulneráveis",
        "resumo": "O plano quer manter e ampliar o programa que transfere dinheiro para famílias de baixa renda, e continuar aumentando o valor do salário mínimo. Também quer fortalecer a rede de assistência social. Prevê políticas específicas para idosos, pessoas com deficiência, povos indígenas e quilombolas. Quer ainda combater a violência contra as mulheres, ampliando as casas de acolhimento e tornando mais rápidas as medidas de proteção."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Modernização do Estado e combate à corrupção",
        "resumo": "O plano quer abrir para debate público o sistema de {{emendas parlamentares|dinheiro que deputados e senadores destinam a obras e projetos}}. Também quer que mais pessoas participem da elaboração do orçamento do governo, e manter encontros nacionais sobre políticas públicas. Prevê continuar o combate à corrupção, modernizar o portal de transparência usando inteligência artificial, e melhorar a gestão de pessoas e a negociação com servidores públicos."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Investimentos em habitação, saneamento, transporte e energia",
        "resumo": "O plano quer manter e ampliar o programa de construção de casas para famílias de baixa e média renda. Também quer levar água tratada e esgoto a todas as casas do país, e investir mais em metrôs, trens e corredores de ônibus. Prevê continuar investindo em geração e transmissão de energia, ampliar as fontes de energia renovável e reduzir a falta de internet por fibra óptica e internet móvel no país."
      }
    }
  },
  {
    "slug": "renan-santos",
    "nome": "Renan Santos",
    "partido": "Missão",
    "numero": 14,
    "resumoPerfil": "O plano tem três partes principais. A primeira é mudar o Estado: ajustar as contas do governo e reorganizar o {{pacto federativo|como União, estados e municípios dividem poder e dinheiro}}, além de mudar a gestão das prefeituras. A segunda é reformar áreas como economia, infraestrutura, saúde e educação. A terceira é fazer projetos de longo prazo, como zonas econômicas especiais, exploração de {{terras raras|minerais usados em tecnologia, como celulares e baterias}}, agronegócio, inteligência artificial, política externa e um programa para regularizar favelas. O plano dá destaque especial ao ajuste das contas públicas e ao combate ao crime organizado, com regras penais diferentes das aplicadas aos demais cidadãos.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Corte de gastos públicos e produtividade",
        "resumo": "O plano propõe cortar gastos do governo já na troca de governo. Os benefícios de aposentadoria e assistência social deixariam de subir junto com o salário mínimo; passariam a subir só pela inflação. O plano também quer reduzir {{isenções fiscais|quando o governo deixa de cobrar impostos de alguém}} e cortar salários de servidores que ganham acima do {{teto|limite máximo de salário permitido para servidores públicos}}. A economia esperada é de R$ 1,1 trilhão até 2031. Propõe ainda deixar as regras trabalhistas mais flexíveis, simplificar os impostos e criar zonas com regras especiais para atrair indústrias, principalmente no Nordeste."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Regras penais mais duras contra o crime organizado",
        "resumo": "O plano propõe aplicar regras diferentes das usadas para os demais cidadãos a pessoas comprovadamente ligadas a organizações criminosas. Isso inclui proibir facções por decisão da Justiça, tirar direitos políticos e civis dessas pessoas, e usar a {{inversão do ônus da prova|a pessoa acusada precisa provar que seus bens não vêm do crime}} para tomar bens ligados ao crime. Também prevê o uso das Forças Armadas para retomar territórios dominados por criminosos. O plano quer construir presídios de segurança máxima em lugares remotos, reforçar o controle de fronteiras, portos e aeroportos, e usar drones e reconhecimento facial no policiamento."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Reforma do ensino básico e superior",
        "resumo": "O plano propõe usar em todo o país o {{método fônico|forma de ensinar a ler juntando o som das letras}} de alfabetização e o modelo de gestão de escolas usado no Ceará. Quer criar um código nacional de disciplina para os alunos, com punições previstas, e ligar parte do dinheiro repassado às escolas ao comportamento dos alunos. Escolas com muita violência seriam transformadas em escolas cívico-militares. No ensino superior, o plano quer trocar as cotas por bolsas de mérito, dadas por desempenho, e criar mais vagas em cursos de ciência, tecnologia, engenharia e matemática."
      },
      "saude": {
        "coberto": true,
        "titulo": "Mudança no acesso e digitalização do SUS",
        "resumo": "O plano propõe mudar como funcionam as filas do SUS: em vez de atender por ordem de chegada, o atendimento seguiria a gravidade do caso, o risco de a doença piorar e a situação social da pessoa. Também quer criar um {{prontuário eletrônico|histórico médico digital do paciente, acessível em qualquer unidade de saúde}} nacional que conecte postos de saúde, hospitais, laboratórios e farmácias. Prevê ainda atendimento por telemedicina, uso de inteligência artificial para ajudar no diagnóstico, um banco de dados genético nacional, e repasses de dinheiro às prefeituras que dependeriam de metas de desempenho."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Política de terras e produção do agronegócio",
        "resumo": "Para o setor agropecuário, o plano quer dar mais garantias legais a quem produz no campo, aumentar a punição para quem invade propriedades rurais e só permitir novos assentamentos de reforma agrária depois de provar que os assentamentos já existentes são produtivos. Também quer reduzir a dependência de fertilizantes comprados de fora do país, que hoje são 85% do consumo nacional. O plano propõe ainda tornar mais rápido e simples o {{licenciamento ambiental|autorização do governo para obras que podem afetar o meio ambiente}} de projetos de infraestrutura e mineração, seguindo padrões de mineração de baixo carbono."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Troca do Bolsa Família por trabalho pago",
        "resumo": "O plano propõe trocar o Bolsa Família por um programa de trabalho remunerado, em que as pessoas em idade de trabalhar fariam projetos de utilidade pública em troca do benefício. Propõe também que os benefícios de aposentadoria e assistência social parem de subir junto com o salário mínimo, passando a subir só pela inflação, e quer revisar o {{abono salarial|pagamento extra anual a trabalhadores de baixa renda}}. Essas mudanças fazem parte de uma reformulação geral do modelo de transferência de renda."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Mudança na gestão de municípios e estados",
        "resumo": "O plano propõe juntar municípios que não conseguem se sustentar financeiramente, podendo reduzir o número total de municípios em até 70%. As antigas cidades virariam distritos, mantendo autonomia cultural. Propõe também um sistema de metas de desempenho para prefeituras: prefeitos que não cumprirem os indicadores poderiam sofrer intervenção do governo federal, perder o cargo ou ficar impedidos de disputar eleições. O repasse de dinheiro dos fundos partidário e eleitoral também passaria a depender da qualidade da gestão dos prefeitos eleitos por cada partido."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Investimento em transporte, energia e favelas",
        "resumo": "O plano propõe aumentar o investimento público em infraestrutura de cerca de 2% para pelo menos 4% do PIB, com a meta de construir 40 mil km de ferrovias, ampliar portos e aeroportos no Norte e Nordeste, e mudar as regras de transmissão de energia elétrica. Propõe também um programa de dez anos para regularizar a situação de terrenos em favelas, dando título de propriedade aos moradores, construindo infraestrutura básica e levando serviços públicos aos bairros formalizados."
      }
    }
  },
  {
    "slug": "ronaldo-caiado",
    "nome": "Ronaldo Caiado",
    "partido": "PSD",
    "numero": 55,
    "resumoPerfil": "O plano do candidato tem 26 temas principais. Ele dá atenção especial à segurança pública, com uma proposta de lei nova que trata facções e milícias como {{organizações terroristas domésticas|grupos criminosos tratados como terrorismo dentro do país}}. Também propõe um ajuste nas contas do governo ao longo de vários anos, sem aumentar impostos de forma geral. Prevê ainda reorganizar o SUS para atender primeiro quem tem casos mais graves, além de propostas detalhadas para agronegócio, indústria e obras de infraestrutura de longo prazo.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Ajuste nas contas públicas e crescimento econômico",
        "resumo": "O plano defende ajustar as contas do governo ao longo de vários anos, sem aumentar impostos de forma geral. Propõe fazer os gastos obrigatórios do governo crescerem mais devagar. Quer rever subsídios e benefícios de impostos que não trazem resultado comprovado. Defende também respeitar de verdade o {{teto de remuneração|limite máximo de salário pago a servidores públicos}} no setor público. O plano propõe aumentar o investimento total no país, de cerca de 17% para perto de 25% do {{PIB|soma de tudo que o país produz em bens e serviços}}. Quer ainda reduzir o custo do crédito de longo prazo, facilitar as regras para pequenas empresas e ampliar acordos comerciais com outros países."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Combate ao crime organizado e reforma penal",
        "resumo": "O plano propõe criar um ministério de segurança pública. Quer um sistema nacional que junte as polícias e a inteligência do país. Facções e milícias que controlam territórios seriam tratadas como {{organizações terroristas domésticas|grupos criminosos tratados como terrorismo dentro do país}}, com penas mínimas de 35 a 45 anos para líderes e financiadores. O plano prevê tomar mais rápido os bens do crime organizado e aplicar regras mais duras para presos de alta periculosidade. Por fim, quer reduzir a {{maioridade penal|idade mínima para ser julgado como adulto na Justiça}} para 16 anos em crimes graves."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Alfabetização na idade certa e reforço escolar",
        "resumo": "O plano coloca como prioridade que as crianças aprendam a ler e a fazer contas até o fim do 2º ano do ensino fundamental. Para isso, quer melhorar a formação de professores, oferecer aulas de reforço e usar avaliações para descobrir o que cada aluno ainda não aprendeu. Propõe ampliar a educação em tempo integral e o ensino técnico, mudar a forma como os professores são formados e ligar bolsas de permanência na escola à frequência dos alunos de baixa renda. Também quer exigir mais qualidade das faculdades e universidades."
      },
      "saude": {
        "coberto": true,
        "titulo": "Fila do SUS organizada por gravidade",
        "resumo": "O plano propõe reorganizar o SUS com um sistema nacional que organiza as filas por gravidade do caso, e não só pela ordem de chegada. Quer criar redes especializadas para infarto, AVC e câncer, com prazos definidos para diagnóstico e tratamento. Propõe também fortalecer os postos de saúde, com um prontuário médico único e integrado. O plano quer ampliar a produção nacional de vacinas, remédios e tratamentos avançados. Estabelece metas públicas para reduzir as filas e a mortalidade de mães e bebês até 2030."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Fiscalização ambiental, regularização e créditos de carbono",
        "resumo": "O plano combina fiscalização contra desmatamento, {{grilagem|ocupação ilegal de terras públicas ou de outras pessoas}} e garimpo ilegal com apoio para regularizar pequenos produtores. Propõe que o {{licenciamento ambiental|autorização do governo para atividades que podem afetar a natureza}} tenha prazos definidos, de acordo com o risco de cada atividade. Quer também ampliar o pagamento a quem preserva a natureza e expandir o {{mercado de créditos de carbono|compra e venda de créditos por reduzir poluição}}. O plano prevê monitoramento por satélite e inteligência artificial, prevenção a incêndios florestais e acelerar o acesso de todos a água tratada e esgoto."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Transferência de renda ligada a qualificação e cuidado",
        "resumo": "O plano mantém os programas de transferência de renda e passa a ligá-los a cursos de qualificação profissional, creche e ajuda para conseguir emprego. Quem passa a ganhar um salário formal perderia o benefício aos poucos, não de uma vez. O plano coloca a infância e a adolescência como prioridade no orçamento do governo, com acompanhamento desde a gravidez. Prevê ainda políticas específicas de cuidado de longa duração para idosos, inclusão de pessoas com deficiência e atendimento à população em situação de rua."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Fim da reeleição e combate à corrupção",
        "resumo": "O plano defende acabar com a reeleição para presidente, governadores e prefeitos. Propõe escolher os dirigentes de órgãos públicos por competência técnica e integridade, não por indicação política. Quer transparência total sobre as {{emendas parlamentares|verbas que deputados e senadores destinam a obras e projetos}} e sobre o financiamento de partidos. Propõe um sistema nacional de combate à corrupção que usa dados para identificar fraudes em contratos públicos. Quer também uma lei contra o {{enriquecimento ilícito|quando um agente público tem bens que seu salário não explica}}, para agentes com patrimônio maior do que seu salário justifica. Por fim, propõe mudar o sistema eleitoral para o modelo {{distrital misto|parte dos deputados eleitos por região, parte por partido}}."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Planejamento de longo prazo e mais concessões",
        "resumo": "O plano prevê um planejamento nacional de infraestrutura pensado para os próximos 30 anos. Quer priorizar a conclusão de obras paradas, a manutenção do que já existe e mais {{concessões e parcerias público-privadas|contratos em que empresas privadas administram obras e serviços públicos}} em rodovias, ferrovias, portos e saneamento. Propõe financiar o transporte público das cidades sem criar um novo imposto geral. Quer levar água tratada e esgoto a todo o país até 2033 e expandir a internet a todos os municípios."
      }
    }
  },
  {
    "slug": "rui-costa-pimenta",
    "nome": "Rui Costa Pimenta",
    "partido": "PCO",
    "numero": 29,
    "resumoPerfil": "O plano de governo do Partido da Causa Operária foca em pedidos trabalhistas urgentes: aumento de salário, redução da jornada de trabalho e o fim das reformas trabalhista e da previdência. Também defende que o governo assuma setores importantes da economia, como petróleo, mineração, bancos, telecomunicações e meios de comunicação. Propõe ainda mudanças profundas nas instituições, como o fim da Polícia Militar, o fim do Supremo Tribunal Federal e a eleição direta de juízes. O plano se apresenta como uma etapa de transição para um governo formado por organizações de trabalhadores urbanos e rurais.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Bancos estatais e impostos para os ricos",
        "resumo": "Propõe transformar todos os bancos em um banco único, controlado pelos trabalhadores. Quer reduzir os juros na hora e cancelar as dívidas do Brasil com outros países e dentro do país. Defende acabar com impostos sobre consumo e salário, cobrando impostos só dos lucros de empresários e das grandes fortunas. Também propõe cortar o preço dos combustíveis pela metade e voltar a colocar sob controle do Estado empresas que foram {{privatizadas|vendidas pelo governo para empresas particulares}}, como Petrobras, Eletrobras, Vale, bancos e telefonia."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Fim da Polícia Militar e autodefesa popular",
        "resumo": "Propõe acabar com a Polícia Militar e outras estruturas vistas como forças de repressão do Estado. No lugar delas, defende a criação de comitês de autodefesa formados por trabalhadores da cidade, do campo e por comunidades indígenas. Defende também o direito desses grupos de se armarem para se defender."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Fim do vestibular e gestão comunitária das escolas",
        "resumo": "Propõe acabar com o vestibular, permitindo entrada livre nas universidades públicas. Quer um salário mínimo de R$ 8,5 mil para professores e jornada de trabalho de no máximo 30 horas por semana. Defende que diretores de escolas e reitores de universidades sejam escolhidos por eleição direta, mais dinheiro para o ensino público e que escolas e faculdades particulares passem a ser controladas pelo governo."
      },
      "saude": {
        "coberto": true,
        "titulo": "Mais SUS e volta do programa Mais Médicos",
        "resumo": "Propõe um plano de emergência para construir hospitais e postos de saúde. Quer trazer de volta o programa Mais Médicos e reconhecer na hora os diplomas de médicos formados no Brasil e no exterior. Defende a criação de novos cursos de medicina e enfermagem com entrada livre nas universidades públicas, salário mínimo de R$ 8 mil para profissionais da saúde e nenhum limite de gastos do governo com saúde."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Reforma agrária e controle brasileiro da Amazônia",
        "resumo": "Propõe assentar trabalhadores sem-terra usando terras tomadas de grandes fazendas, além de demarcar terras indígenas, destinando essas áreas para produzir alimentos. Defende que o Brasil mantenha o controle total da Amazônia, sendo contra qualquer ideia de a região ser administrada por outros países. Propõe também que organizações populares e povos indígenas controlem a exploração dos recursos naturais da região."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Aumento de salário e renda mínima emergencial",
        "resumo": "Propõe repor todas as perdas de salário com um aumento emergencial de 50%. Quer criar um salário mínimo vital de pelo menos R$ 7.500 e pagar o Bolsa Família em valor igual a pelo menos um salário mínimo, enquanto durar a crise econômica atual. Defende também cancelar as dívidas dos trabalhadores com bancos e financeiras."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Fim do teto de gastos e juízes eleitos",
        "resumo": "Propõe acabar com o {{teto de gastos|regra que limita o quanto o governo pode gastar}} e com a {{Lei de Responsabilidade Fiscal|lei que controla os gastos do governo}}. Quer dar estabilidade a funcionários públicos terceirizados e fazer concursos públicos regularmente para preencher vagas. No campo das instituições, defende o fim do Supremo Tribunal Federal, a eleição de juízes e procuradores pelo voto popular, com mandatos que podem ser cancelados pela população, e a revogação de leis como a lei da ficha limpa e a {{cláusula de barreira|regra que limita quais partidos podem ter representantes eleitos}}."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Construção de moradias populares e internet gratuita",
        "resumo": "Propõe um plano nacional para construir milhões de casas populares, tomando imóveis vazios de especuladores e proibindo despejos. Defende também acabar com o domínio de grandes empresas de telecomunicações sobre a internet, oferecendo acesso gratuito para toda a população."
      }
    }
  },
  {
    "slug": "samara",
    "nome": "Samara",
    "partido": "UP",
    "numero": 80,
    "resumoPerfil": "O plano de governo é socialista. As principais propostas são: tornar estatais os bancos e as empresas mais importantes do país (como Petrobras, Eletrobras e Vale); parar de pagar a {{dívida pública|dinheiro que o governo deve a credores}} e fazer uma auditoria nela; dobrar o valor do salário mínimo e reduzir a jornada de trabalho; e tornar estatais serviços como saúde, educação, transporte e comunicação.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Salário mínimo mais alto e estatizações",
        "resumo": "Propõe dobrar o salário mínimo imediatamente. Quer reduzir a jornada de trabalho para 30 horas por semana, sem cortar o salário, e acabar com a escala 6x1. Defende parar de pagar a {{dívida pública|dinheiro que o governo deve a credores}} e fazer uma auditoria com participação da população. Quer uma reforma tributária que isente trabalhadores do imposto de renda e cobre mais imposto de quem tem grandes fortunas. Também defende tornar os bancos estatais e transformar Petrobras, Eletrobras e Vale de novo em empresas do governo."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Fim da polícia militar e guerra às drogas",
        "resumo": "Defende acabar com a polícia militar e unir as polícias em uma só estrutura civil, voltada a proteger a população. Quer trocar a guerra às drogas por um jeito de cuidar do problema como questão de saúde pública. Propõe que juízes e ministros dos {{tribunais superiores|os tribunais mais altos do país, como o STF}} sejam escolhidos por voto direto. Defende também o fim de privilégios salariais para juízes, e transformar presídios em lugares de reeducação, com acompanhamento psicológico e ensino de profissões."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Educação pública e gratuita em todos os níveis",
        "resumo": "Defende educação pública e gratuita em todos os níveis, com pelo menos 10% do {{PIB|soma de tudo que o país produz e ganha em um ano}} investido nessa área. Quer parar de usar dinheiro público para pagar escolas e faculdades privadas, e revogar o Novo Ensino Médio. Propõe perdoar as dívidas de quem fez o {{Fies|financiamento do governo para pagar faculdade particular}}, aumentar o orçamento das universidades federais, melhorar o salário de professores e outros profissionais da educação, e criar um programa para acabar com o analfabetismo."
      },
      "saude": {
        "coberto": true,
        "titulo": "SUS 100% estatal e fim dos planos privados",
        "resumo": "Propõe que toda a rede do SUS seja administrada diretamente pelo governo, encerrando contratos com {{Organizações Sociais|empresas privadas sem fins lucrativos que hoje administram hospitais públicos}} e fundações privadas. Defende o fim dos planos de saúde privados. Quer fortalecer laboratórios públicos para produzir remédios e vacinas no Brasil, além de abrir concursos públicos e melhorar o salário de quem trabalha na saúde."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Combate ao desmatamento e reforma agrária",
        "resumo": "Defende o combate ao desmatamento ilegal, ao garimpo ilegal e à {{grilagem|ocupação ilegal de terras públicas ou de outras pessoas}} de terras. Quer proteger todos os biomas brasileiros e proibir agrotóxicos que já são banidos em outros países, incentivando a produção sem uso de veneno. Propõe demarcar logo as terras indígenas e quilombolas como parte da política ambiental. Defende também uma reforma agrária que dê terras improdutivas para famílias sem-terra e fortaleça a agricultura familiar."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Mais apoio a pessoas com deficiência e cuidados",
        "resumo": "Propõe ampliar o {{BPC|benefício pago pelo governo a pessoas com deficiência ou idosos de baixa renda}}, revendo os critérios de renda para receber o benefício. Quer criar uma rede pública de cuidados, com creches, lavanderias comunitárias e restaurantes populares. Defende mais delegacias da mulher e casas-abrigo, cotas de emprego para pessoas com deficiência, e prioridade para mulheres em programas de emprego, crédito e moradia."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Combate à corrupção e fim de privilégios",
        "resumo": "Defende tomar os bens de corruptos e de quem sonega impostos, prender quem a lei mandar prender, e devolver todo o dinheiro roubado aos cofres públicos. Quer acabar com salários e {{penduricalhos|pagamentos extras somados ao salário que ultrapassam o limite legal}} acima do teto para autoridades do Judiciário, Legislativo e Executivo. Propõe também proibir doações de empresas por caminhos indiretos e emendas usadas para trocar favores políticos. Defende dar à população mais controle sobre o orçamento público, com conselhos populares e plebiscitos."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Estatização do transporte e tarifa zero",
        "resumo": "Propõe tornar estatais as empresas de transporte coletivo, encerrando os contratos com empresas privadas. Quer caminhar aos poucos para tarifa zero em ônibus, trens e metrôs, e investir em mais linhas de trem e metrô. Defende construir mais moradias populares pelo governo, urbanizar favelas, regularizar a posse de terrenos e tornar estatais setores como saneamento (água e esgoto) e energia elétrica."
      }
    }
  },
  {
    "slug": "wilson-grassi",
    "nome": "Veterinário Wilson Grassi",
    "partido": "Democrata",
    "numero": 35,
    "resumoPerfil": "O plano tem como base uma reforma tributária federal, que troca vários impostos por um único imposto cobrado sobre movimentações financeiras. Ele também trata de segurança pública, com foco no crime organizado, e propõe unir saúde humana, animal e ambiental em uma só estratégia. Por fim, prevê fazer os dados do governo conversarem entre si, a chamada {{interoperabilidade de dados|sistemas de governo compartilhando informações automaticamente}}, e responsabilizar gestores públicos que não cumprirem prazos.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Imposto único sobre transações financeiras",
        "resumo": "O plano quer acabar com nove impostos federais. Entre eles estão a contribuição da empresa sobre os salários dos funcionários. Também entram o {{Cofins|imposto federal cobrado das empresas}}, o {{CSLL|imposto sobre o lucro das empresas}}, o IPI e o {{IOF|imposto sobre operações financeiras, como empréstimos e câmbio}}. No lugar deles, entraria um único imposto. Ele seria cobrado automaticamente toda vez que o dinheiro entra ou sai da conta. A taxa de referência seria de 2% em cada movimentação. Quem ganha até cinco salários mínimos deixaria de pagar Imposto de Renda. O imposto sobre o lucro das empresas cairia de 34% para 25%. Pequenos negócios teriam menos burocracia para cumprir."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Isolar líderes do crime e bloquear seu dinheiro",
        "resumo": "O plano quer isolar os chefes de facções criminosas em presídios federais de segurança máxima. Também quer bloquear o dinheiro dessas organizações, unindo os órgãos que investigam o patrimônio dos criminosos. Prevê reforçar o controle de fronteiras, portos e armas. E quer obrigar, na prática, que os estados troquem entre si os dados de segurança. O plano também prevê uma consulta popular sobre criar um modelo de prisão de segurança máxima só para líderes de facções, mantendo os direitos garantidos pela Constituição."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Alfabetização, ensino técnico e carreira de pesquisador",
        "resumo": "O plano quer manter o programa federal de alfabetização na idade certa, mas com os resultados de cada escola divulgados ao público. Também quer ampliar as escolas técnicas federais, de acordo com a necessidade de mão de obra de cada região. Além disso, propõe enviar ao Congresso uma {{emenda constitucional|mudança no texto da Constituição}} para transformar pesquisadores que hoje recebem bolsa em servidores públicos concursados, com carreira e salário fixo, no lugar do sistema atual de bolsas."
      },
      "saude": {
        "coberto": true,
        "titulo": "Vigilância de doenças animais e fila de cirurgias",
        "resumo": "O plano quer criar um programa nacional permanente para vigiar doenças que passam de animais para pessoas, as chamadas {{zoonoses|doenças transmitidas de animais para pessoas}}. Veterinários passariam a trabalhar junto com as equipes de saúde dos municípios, e haveria campanhas de vacinação contra raiva. O plano também prevê mais dinheiro federal fixo para a atenção básica de saúde. E quer criar uma fila nacional única e pública para cada tipo de cirurgia, em que o paciente pode consultar sua posição. A prioridade na fila seria decidida por critério médico."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Identificar o gado e regular mineração indígena",
        "resumo": "O plano quer antecipar o prazo para identificar cada boi individualmente, para atender exigências internacionais de rastreio da carne. Também quer combater o desmatamento ilegal, monitorando toda a cadeia de produção e responsabilizando financeiramente quem desmata. Propõe enviar ao Congresso um projeto de lei para regular a mineração em terras indígenas. Essa mineração só poderia acontecer com consulta prévia às comunidades indígenas, participação delas nos ganhos econômicos, e proibição do uso de mercúrio. O plano também prevê o {{licenciamento ambiental|autorização do governo para atividades que afetam o meio ambiente}} com prazos definidos e responsáveis identificados."
      },
      "assistencia_social": {
        "coberto": false,
        "titulo": "",
        "resumo": ""
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Dados que conversam entre si e mais transparência",
        "resumo": "O plano quer fazer valer, na prática, a lei que já manda os bancos de dados do governo federal conversarem entre si, a {{interoperabilidade|sistemas de governo compartilhando informações automaticamente}} de dados. Haveria auditoria pública para checar se cada órgão está cumprindo essa regra, com consequências para os dirigentes que não cumprirem os prazos. O plano também prevê divulgar em tempo real os gastos do governo, os contratos e as metas de cada área. A agenda do governo no Congresso ficaria limitada a cinco projetos prioritários por semestre. E os ministros seriam escolhidos por critérios técnicos, divulgados publicamente."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Financiar moradia pelo aluguel e ampliar ferrovias",
        "resumo": "O plano quer oferecer financiamento para comprar casa própria, com parcela do mesmo valor que a pessoa já paga de aluguel. A pessoa escolheria o imóvel, e o dinheiro viria do {{FGTS|fundo formado pelos depósitos mensais que as empresas fazem para os trabalhadores}} e do Sistema Brasileiro de Poupança e Empréstimo. O plano também prevê retomar corredores de trem para transporte de carga, integrar ferrovias com portos e permitir que empresas privadas operem ferrovias. Por fim, quer cobrar o cumprimento das metas de saneamento básico para todo o país, que já estão previstas em lei."
      }
    }
  },
  {
    "slug": "zema",
    "nome": "Zema",
    "partido": "Novo",
    "numero": 30,
    "resumoPerfil": "O plano foca em diminuir o tamanho e o custo do governo, fazer um {{ajuste fiscal|equilibrar as contas do governo, gastando menos ou arrecadando mais}}, abrir mais a economia (a chamada {{liberalização econômica|menos regras e mais liberdade para empresas e negócios}}) e combater o crime organizado. Também traz propostas sobre reforma política, gestão pública com foco em resultados, educação, saúde, meio ambiente e assistência social voltada à {{inclusão produtiva|ajudar as pessoas a conseguir emprego e renda}}.",
    "temas": {
      "economia": {
        "coberto": true,
        "titulo": "Cortar gastos, baixar impostos e abrir a economia",
        "resumo": "Propõe cortar gastos do governo, reformar a administração pública e a previdência, vender estatais e reduzir aos poucos os impostos, inclusive o imposto de renda das empresas. Defende baixar os juros ajustando as contas do governo, reduzir o {{IOF|imposto sobre operações financeiras, como empréstimos e compras no exterior}} e diminuir a interferência política nos empréstimos bancários. Também quer criar um novo tipo de contrato de trabalho, diferente da {{CLT|lei que regula os direitos trabalhistas no Brasil}}, negociado direto entre patrão e empregado, além de abrir mais o comércio com outros países e buscar a entrada do Brasil na {{OCDE|grupo de países desenvolvidos que define padrões econômicos}}."
      },
      "seguranca": {
        "coberto": true,
        "titulo": "Combate ao crime organizado e penas mais duras",
        "resumo": "Propõe tratar as facções criminosas como organizações terroristas. Defende usar as Forças Armadas junto com as polícias para retomar áreas dominadas pelo crime e construir presídios de segurança máxima. Quer acabar com a soltura automática de {{reincidentes|pessoas que cometem crime de novo}} nas {{audiências de custódia|quando o preso é apresentado a um juiz logo após a prisão}}, reduzir a {{maioridade penal|idade em que a pessoa passa a responder como adulto por crimes}} para 16 anos, aumentar as penas no Código Penal e ampliar as delegacias e patrulhas de proteção à mulher."
      },
      "educacao": {
        "coberto": true,
        "titulo": "Foco no aprendizado básico e ensino técnico",
        "resumo": "Propõe criar mais vagas em creches com ajuda de empresas privadas e fortalecer as provas nacionais que avaliam o aprendizado dos alunos. Defende priorizar a alfabetização na idade certa e mudar a forma de formar e avaliar os professores, dando mais peso ao desempenho do que ao tempo de trabalho. Também quer ampliar o ensino técnico ligado ao mercado de trabalho, dar mais liberdade para as famílias escolherem o modelo de ensino, incluindo o ensino em casa, e passar a gestão das universidades para outro ministério."
      },
      "saude": {
        "coberto": true,
        "titulo": "Digitalizar o SUS e parcerias com o privado",
        "resumo": "Propõe criar um prontuário eletrônico nacional de saúde que uniria informações dos sistemas público e privado, ampliar o atendimento por telemedicina e fortalecer a {{atenção primária|postos de saúde e prevenção, antes de precisar de hospital}} para evitar internações que poderiam ser evitadas. Defende diminuir as filas do SUS com parcerias com clínicas e hospitais particulares, criar mais vagas de residência médica, fortalecer a rede de saúde mental e mudar as regras dos planos de saúde para dar mais opções aos clientes."
      },
      "meio_ambiente": {
        "coberto": true,
        "titulo": "Proteção ambiental junto com a produção agrícola",
        "resumo": "Propõe combater o desmatamento ilegal e a {{grilagem|ocupação ilegal de terras públicas ou de outras pessoas}} com monitoramento por satélite, aplicar de verdade a nova lei de {{licenciamento ambiental|autorização que o governo dá para obras e atividades que afetam o meio ambiente}} e ampliar a participação do Brasil no mercado internacional de {{créditos de carbono|títulos que empresas compram para compensar a poluição que emitem}}. Para o agronegócio, defende reduzir a burocracia e os custos de transporte, ampliar o seguro rural e a irrigação, e facilitar a liberação de defensivos e insumos agrícolas, mantendo o cumprimento do Código Florestal."
      },
      "assistencia_social": {
        "coberto": true,
        "titulo": "Programas sociais ligados à busca de emprego",
        "resumo": "Propõe reorganizar o apoio às famílias mais pobres, com planos individuais de capacitação e ajuda para conseguir trabalho. Quer condicionar a permanência de adultos que podem trabalhar no Bolsa Família à busca de emprego, estudo ou qualificação profissional. Defende unificar os critérios que definem quem é pobre e os programas de transferência de renda, combater fraudes no cadastro usado para esses programas, ampliar moradias populares para pessoas em situação de rua e mudar o programa habitacional popular que já existe."
      },
      "gestao_publica": {
        "coberto": true,
        "titulo": "Reforma do Estado e combate a privilégios",
        "resumo": "Propõe reduzir o número de ministérios e cargos de confiança no governo, digitalizar os serviços públicos, dar mais transparência aos gastos públicos e ligar a avaliação dos servidores aos resultados do trabalho, permitindo demitir quem tem baixo desempenho. Defende limitar o {{foro privilegiado|direito de autoridades serem julgadas só por tribunais superiores}} e o poder de {{decisões monocráticas|quando um só ministro do STF decide sozinho}}, acabar com o financiamento público de partidos e campanhas, adotar o {{voto distrital misto|sistema em que parte dos deputados é eleita por região}} e reduzir o uso de emendas parlamentares."
      },
      "infraestrutura": {
        "coberto": true,
        "titulo": "Concessões privadas para infraestrutura e energia",
        "resumo": "Propõe ampliar as concessões e as {{parcerias público-privadas|quando empresas privadas ajudam a construir e cuidar de obras públicas}} em rodovias, ferrovias, portos, hidrovias e saneamento básico, simplificar a autorização para construir obras e fortalecer a independência das {{agências reguladoras|órgãos do governo que fiscalizam setores como energia e telecomunicações}}. Defende reduzir os {{encargos e subsídios|taxas e ajudas do governo que pesam na conta de luz}} embutidos na conta de energia elétrica, abrir o setor de petróleo e gás à concorrência, separando as operações da Petrobras, e ampliar o acesso à internet de qualidade em áreas rurais e isoladas."
      }
    }
  }
];
