// Cards shown in the quiz, one per theme cluster. Candidates whose plans
// converge on the same core idea for a theme share a single card so the
// user compares ideas, not a wall of near-duplicate proposals. Each card
// still fairly represents every candidate listed in `candidatos` — only
// the common ground is stated, not details unique to just one of them.
// Full per-candidate detail remains on the results screen.
import type { ThemeKey } from "./candidates";

export interface ThemeCard {
  id: string;
  titulo: string;
  resumo: string;
  candidatos: string[];
}

export const THEME_CARDS: Record<ThemeKey, ThemeCard[]> = {
  economia: [
    {
      id: "economia-1",
      titulo:
        "Estado assume o controle dos bancos e de empresas como Petrobras, Eletrobras e Vale",
      resumo:
        "Defendem que o governo assuma o controle dos bancos e de empresas consideradas estratégicas, como Petrobras, Eletrobras e Vale. Propõem cobrar mais impostos de quem ganha mais e das grandes fortunas, e rever ou suspender o pagamento da {{dívida pública|dinheiro que o governo deve a credores}}.",
      candidatos: ["edmilson-costa", "hertz-dias", "rui-costa-pimenta", "samara"],
    },
    {
      id: "economia-2",
      titulo:
        "Ajustar as contas públicas aos poucos, sem cortes bruscos, e apoiar pequenos negócios com crédito",
      resumo:
        "Defendem controlar os gastos do governo aos poucos, sem cortes bruscos, para reduzir a dívida pública e os juros. Também propõem mais crédito, regras mais simples e apoio a pequenas empresas e empreendedores.",
      candidatos: ["augusto-cury", "ronaldo-caiado", "clariana-barao"],
    },
    {
      id: "economia-3",
      titulo:
        "{{Cortar gastos do governo|reduzir o crescimento dos gastos com aposentadorias, benefícios e a máquina pública}} e reduzir impostos para baratear a contratação de trabalhadores",
      resumo:
        "Defendem cortar os gastos do governo de forma mais rápida, reduzir impostos e tornar as regras trabalhistas mais flexíveis, com o objetivo de baratear a contratação de trabalhadores e estimular o crescimento da economia.",
      candidatos: ["renan-santos", "zema", "flavio-bolsonaro"],
    },
    {
      id: "economia-4",
      titulo:
        "Manter as {{regras fiscais|regras que controlam os gastos do governo}} atuais, baixar os juros aos poucos e apoiar a indústria",
      resumo:
        "Quer manter as regras fiscais atuais, baixar a taxa de juros aos poucos mantendo a inflação sob controle, e continuar a reforma tributária em andamento. Propõe financiar indústrias importantes e ampliar o crédito para micro e pequenas empresas.",
      candidatos: ["lula"],
    },
    {
      id: "economia-5",
      titulo:
        "Imposto único sobre {{movimentações financeiras|dinheiro que entra ou sai da conta}}",
      resumo:
        "Quer acabar com nove impostos federais e substituí-los por um único imposto cobrado automaticamente sobre o dinheiro que entra ou sai da conta. Quem ganha até cinco salários mínimos deixaria de pagar Imposto de Renda.",
      candidatos: ["wilson-grassi"],
    },
  ],
  seguranca: [
    {
      id: "seguranca-1",
      titulo:
        "Usar as Forças Armadas contra o crime organizado e aplicar penas mais duras",
      resumo:
        "Defendem tratar as facções criminosas como organizações terroristas, usar as Forças Armadas junto com a polícia para retomar áreas dominadas pelo crime, construir presídios de segurança máxima e reduzir para 16 anos a idade em que alguém pode ser julgado como adulto em crimes graves.",
      candidatos: ["flavio-bolsonaro", "renan-santos", "ronaldo-caiado", "zema"],
    },
    {
      id: "seguranca-2",
      titulo:
        "Unir os dados das polícias e investigar e bloquear o dinheiro do crime organizado",
      resumo:
        "Defendem integrar as diferentes polícias e órgãos de inteligência em um sistema único que compartilha informações, usar tecnologia como inteligência artificial e monitoramento por satélite para vigiar o crime organizado, e investigar e bloquear o dinheiro das facções.",
      candidatos: ["augusto-cury", "lula", "clariana-barao", "wilson-grassi"],
    },
    {
      id: "seguranca-3",
      titulo:
        "Transformar a polícia em uma força civil e tratar o uso de drogas como problema de saúde",
      resumo:
        "Defendem transformar as polícias em uma estrutura civil única, sem caráter militar, e tratar o uso de drogas principalmente como um problema de saúde pública, reduzindo a repressão penal nessa área.",
      candidatos: ["edmilson-costa", "hertz-dias", "samara"],
    },
    {
      id: "seguranca-4",
      titulo:
        "Acabar com a Polícia Militar e criar grupos de {{autodefesa popular|grupos armados formados pela própria população para se proteger}}",
      resumo:
        "Propõe acabar com a Polícia Militar e outras estruturas vistas como forças de repressão do Estado. No lugar delas, defende comitês de autodefesa formados por trabalhadores da cidade, do campo e por comunidades indígenas, com direito de se armarem.",
      candidatos: ["rui-costa-pimenta"],
    },
  ],
  educacao: [
    {
      id: "educacao-1",
      titulo:
        "Tornar toda a educação pública e gratuita, sem parcerias com empresas privadas",
      resumo:
        "Defendem que toda a educação, da creche à pós-graduação, seja pública e gratuita, encerrando parcerias com empresas privadas e, em alguns casos, transformando escolas e faculdades particulares em públicas. Também propõem mais vagas nas redes públicas e melhores salários para professores.",
      candidatos: ["edmilson-costa", "hertz-dias", "rui-costa-pimenta", "samara"],
    },
    {
      id: "educacao-2",
      titulo:
        "Garantir que as crianças aprendam a ler até os 7 ou 8 anos, e valorizar mais os professores",
      resumo:
        "Priorizam garantir que todas as crianças aprendam a ler na idade certa, com aulas de reforço e avaliações para identificar dificuldades. Também defendem melhorar a formação e o salário dos professores, e ampliar o ensino técnico e em tempo integral.",
      candidatos: ["clariana-barao", "augusto-cury", "lula", "ronaldo-caiado"],
    },
    {
      id: "educacao-3",
      titulo:
        "Avaliar professores pelo desempenho dos alunos e dar às famílias liberdade para escolher a escola",
      resumo:
        "Defendem ligar parte do financiamento das escolas a metas de aprendizagem ou comportamento, avaliar professores pelo desempenho e ampliar o ensino técnico em parceria com empresas. Também querem dar mais liberdade para as famílias escolherem o modelo de ensino.",
      candidatos: ["flavio-bolsonaro", "renan-santos", "zema"],
    },
    {
      id: "educacao-4",
      titulo:
        "Manter o programa nacional de alfabetização e ampliar as escolas técnicas federais",
      resumo:
        "Quer manter o programa federal de alfabetização na idade certa, com os resultados de cada escola divulgados ao público, e ampliar as escolas técnicas federais de acordo com a necessidade de cada região.",
      candidatos: ["wilson-grassi"],
    },
  ],
  saude: [
    {
      id: "saude-1",
      titulo: "SUS 100% público, sem gestão privada",
      resumo:
        "Defendem que o SUS seja administrado só pelo governo, encerrando contratos com organizações privadas que hoje cuidam de hospitais públicos e proibindo planos de saúde privados em leitos públicos. Também querem investir mais na produção pública de remédios e vacinas.",
      candidatos: ["edmilson-costa", "hertz-dias", "samara"],
    },
    {
      id: "saude-2",
      titulo: "Reorganizar as filas do SUS por gravidade do caso",
      resumo:
        "Propõem mudar como funcionam as filas do SUS: em vez de atender por ordem de chegada, o atendimento seguiria a gravidade do caso. Também querem um prontuário médico único, que integre postos de saúde, hospitais, laboratórios e farmácias, e ampliar a produção nacional de vacinas e tratamentos.",
      candidatos: ["renan-santos", "ronaldo-caiado"],
    },
    {
      id: "saude-3",
      titulo: "Usar a rede privada para reduzir as filas do SUS",
      resumo:
        "Propõem contratar clínicas e hospitais privados, principalmente em horários ociosos, para reduzir as filas de consultas e exames do SUS. Também defendem criar um prontuário eletrônico único que junte as informações da rede pública e privada, e ampliar a telemedicina.",
      candidatos: ["flavio-bolsonaro", "zema"],
    },
    {
      id: "saude-4",
      titulo: "Fortalecer os postos de saúde e digitalizar o atendimento",
      resumo:
        "Priorizam fortalecer o atendimento nos postos de saúde do dia a dia, digitalizar os prontuários dos pacientes e ampliar a telemedicina. Também dão atenção especial à prevenção de doenças e ao cuidado com a saúde mental.",
      candidatos: ["clariana-barao", "augusto-cury", "lula"],
    },
    {
      id: "saude-5",
      titulo:
        "Mais médicos e hospitais, com gastos do governo em saúde sem limite",
      resumo:
        "Propõe um plano emergencial para construir hospitais e postos de saúde, trazer de volta o programa Mais Médicos e reconhecer na hora diplomas de médicos formados no Brasil e no exterior, sem nenhum limite de gastos do governo com saúde.",
      candidatos: ["rui-costa-pimenta"],
    },
    {
      id: "saude-6",
      titulo:
        "Vigiar doenças transmitidas por animais e criar uma fila pública única de cirurgias",
      resumo:
        "Propõe um programa nacional para vigiar doenças que passam de animais para pessoas, com veterinários trabalhando junto às equipes de saúde dos municípios. Também quer criar uma fila nacional única e pública para cada tipo de cirurgia, com prioridade decidida por critério médico.",
      candidatos: ["wilson-grassi"],
    },
  ],
  meio_ambiente: [
    {
      id: "meio_ambiente-1",
      titulo:
        "Dar terras a famílias sem-terra e demarcar mais terras indígenas e quilombolas",
      resumo:
        "Defendem demarcar terras indígenas e quilombolas, fazer uma reforma agrária que dê terras a famílias sem-terra, e reduzir o apoio do governo ao grande agronegócio. Também querem proteger a Amazônia contra exploração ou controle estrangeiro, e restringir o uso de agrotóxicos.",
      candidatos: ["edmilson-costa", "hertz-dias", "rui-costa-pimenta", "samara"],
    },
    {
      id: "meio_ambiente-2",
      titulo: "Meta de zerar o desmatamento e ampliar o crédito rural",
      resumo:
        "Tem a meta de zerar o desmatamento até 2030, mantendo a fiscalização por satélite e o financiamento contra as mudanças climáticas. Propõe ampliar o crédito e a assistência técnica para pequenos agricultores, além de reforma agrária e seguro rural.",
      candidatos: ["lula"],
    },
    {
      id: "meio_ambiente-3",
      titulo:
        "Fiscalizar o desmatamento por satélite e ampliar o {{mercado de carbono|compra e venda do direito de emitir poluição}}",
      resumo:
        "Propõem fiscalizar o desmatamento ilegal com satélites e tecnologia, sem criar novas exigências para quem já cumpre a lei. Defendem ampliar o pagamento a quem preserva a natureza e o {{mercado de carbono|compra e venda do direito de emitir poluição}}.",
      candidatos: ["flavio-bolsonaro", "ronaldo-caiado", "zema"],
    },
    {
      id: "meio_ambiente-4",
      titulo:
        "Dar regras mais claras e estáveis, e mais tecnologia, para quem produz no campo",
      resumo:
        "Defendem dar mais garantias legais a quem produz no campo, tornar o licenciamento ambiental mais rápido, e usar tecnologia para aumentar a produtividade agropecuária, como o rastreamento do gado e sistemas de monitoramento contra incêndios florestais.",
      candidatos: ["renan-santos", "wilson-grassi", "augusto-cury"],
    },
  ],
  assistencia_social: [
    {
      id: "assistencia_social-1",
      titulo:
        "Manter os programas sociais, ligados a cursos de qualificação profissional",
      resumo:
        "Defendem manter e ampliar os programas de transferência de renda, como o Bolsa Família, ligando-os a cursos de qualificação profissional e ajuda para conseguir emprego. Também querem fortalecer políticas para idosos, pessoas com deficiência e crianças.",
      candidatos: ["flavio-bolsonaro", "ronaldo-caiado", "lula"],
    },
    {
      id: "assistencia_social-2",
      titulo: "Trocar ou condicionar o Bolsa Família à busca por trabalho",
      resumo:
        "Defendem mudar o modelo do Bolsa Família: um propõe substituí-lo por um programa de trabalho remunerado, e o outro quer condicionar o benefício de quem pode trabalhar à busca ativa por emprego, estudo ou qualificação profissional.",
      candidatos: ["renan-santos", "zema"],
    },
    {
      id: "assistencia_social-3",
      titulo:
        "Garantir renda de pelo menos um salário mínimo a quem está desempregado, com preços de alimentos controlados",
      resumo:
        "Defendem uma renda mínima garantida para quem está desempregado, aumentos emergenciais de salário, e mais investimento em proteção social, incluindo controle de preços de alimentos básicos e ampliação da aposentadoria pública.",
      candidatos: ["edmilson-costa", "hertz-dias", "rui-costa-pimenta"],
    },
    {
      id: "assistencia_social-4",
      titulo:
        "Apoiar mulheres vítimas de violência e ampliar creches para famílias de baixa renda",
      resumo:
        "Propõem uma rede de apoio para mulheres em situação de violência, com atendimento e ajuda para ganhar independência financeira. Também defendem ampliar creches, o cuidado com crianças e o apoio a famílias em situação de pobreza.",
      candidatos: ["clariana-barao", "augusto-cury", "samara"],
    },
  ],
  gestao_publica: [
    {
      id: "gestao_publica-1",
      titulo:
        "Definir metas de desempenho para cada área do governo e reduzir {{cargos de confiança|cargos escolhidos livremente pelo governo, sem concurso público}}",
      resumo:
        "Defendem tornar o governo mais eficiente e digital, com metas para cada área, avaliação de resultados e redução de ministérios ou cargos de confiança. Também propõem mais transparência nos gastos públicos e, em alguns casos, mudanças no sistema de governo.",
      candidatos: ["clariana-barao", "augusto-cury", "flavio-bolsonaro", "zema"],
    },
    {
      id: "gestao_publica-2",
      titulo:
        "Reformular o STF e o Congresso, com eleição de juízes e revogação de mandatos pelo voto popular",
      resumo:
        "Defendem mudanças radicais nas instituições políticas, como o fim ou a reformulação do Supremo Tribunal Federal e do Congresso da forma como existem hoje. Propõem dar à população mais poder direto sobre as decisões do país, com eleição de juízes e revogação de mandatos por votação popular.",
      candidatos: ["edmilson-costa", "rui-costa-pimenta"],
    },
    {
      id: "gestao_publica-3",
      titulo:
        "Usar dados para aumentar a transparência do governo e combater a corrupção",
      resumo:
        "Defendem usar dados e tecnologia para identificar fraudes e corrupção em contratos públicos, dar transparência total às emendas parlamentares e ao financiamento de partidos, e cobrar dirigentes públicos por resultados.",
      candidatos: ["lula", "wilson-grassi", "samara", "ronaldo-caiado"],
    },
    {
      id: "gestao_publica-4",
      titulo: "Fundir municípios pequenos e cobrar metas dos prefeitos",
      resumo:
        "Propõe juntar municípios que não conseguem se sustentar financeiramente, podendo reduzir o número total de municípios em até 70%. Também propõe um sistema de metas de desempenho para prefeituras, com consequências para quem não cumprir os indicadores.",
      candidatos: ["renan-santos"],
    },
    {
      id: "gestao_publica-5",
      titulo:
        "Acabar com a {{Lei de Responsabilidade Fiscal|lei que limita os gastos do governo com pessoal e dívidas}} e revisar toda a {{dívida pública|dinheiro que o governo deve a credores}}",
      resumo:
        "Propõe investigar e punir a corrupção, tomando os bens conseguidos de forma ilegal. Quer substituir contratos de terceirização por concursos públicos. Defende também acabar com a {{Lei de Responsabilidade Fiscal|lei que limita os gastos do governo com pessoal e dívidas}} e revisar toda a dívida pública.",
      candidatos: ["hertz-dias"],
    },
  ],
  infraestrutura: [
    {
      id: "infraestrutura-1",
      titulo:
        "Ampliar as {{concessões|quando uma empresa privada administra um serviço público por contrato}} privadas para rodovias, ferrovias e {{saneamento|água tratada e coleta de esgoto}}",
      resumo:
        "Defendem ampliar as concessões e parcerias com empresas privadas para construir e manter rodovias, ferrovias, portos e saneamento básico. Também querem regras estáveis para atrair investimento privado de longo prazo e ampliar o acesso à internet de qualidade.",
      candidatos: ["clariana-barao", "augusto-cury", "flavio-bolsonaro", "ronaldo-caiado", "zema"],
    },
    {
      id: "infraestrutura-2",
      titulo:
        "{{Estatizar|o governo assume o controle de uma empresa ou serviço}} o transporte público, com tarifa zero",
      resumo:
        "Defendem que o transporte público urbano seja administrado pelo governo, com tarifa zero, encerrando concessões privadas. Também propõem que o governo construa moradia popular em grande escala e, em alguns casos, retome o controle de serviços de saneamento e energia.",
      candidatos: ["edmilson-costa", "hertz-dias", "rui-costa-pimenta", "samara"],
    },
    {
      id: "infraestrutura-3",
      titulo:
        "Continuar os programas de moradia, {{saneamento|água tratada e coleta de esgoto}} e energia",
      resumo:
        "Quer manter e ampliar o programa de construção de casas para famílias de baixa e média renda, levar água tratada e esgoto a todas as casas do país, e investir mais em metrôs, trens e corredores de ônibus.",
      candidatos: ["lula"],
    },
    {
      id: "infraestrutura-4",
      titulo:
        "Construir mais ferrovias, ampliar portos e aeroportos no Norte e Nordeste, e {{regularizar favelas|dar documento oficial de posse do terreno para quem já mora lá}}",
      resumo:
        "Propõe aumentar bastante o investimento público em infraestrutura, com metas de construção de ferrovias e ampliação de portos e aeroportos no Norte e Nordeste. Propõe também um programa de dez anos para regularizar terrenos em favelas, dando título de propriedade aos moradores.",
      candidatos: ["renan-santos"],
    },
    {
      id: "infraestrutura-5",
      titulo: "Financiar moradia pelo valor do aluguel e ampliar ferrovias",
      resumo:
        "Quer oferecer financiamento para comprar casa própria, com parcela do mesmo valor que a pessoa já paga de aluguel. Também prevê retomar corredores de trem para transporte de carga e integrar ferrovias com portos.",
      candidatos: ["wilson-grassi"],
    },
  ],
};
