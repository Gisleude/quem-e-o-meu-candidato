import type { ThemeKey } from "./candidates";

export interface ThemeConfig {
  key: ThemeKey;
  label: string;
  question: string;
  description: string;
}

export const THEMES: ThemeConfig[] = [
  {
    key: "economia",
    label: "Economia",
    question: "Na economia, o que é mais importante para você?",
    description:
      "Impostos, geração de emprego, crédito, inflação e apoio a empresas.",
  },
  {
    key: "seguranca",
    label: "Segurança Pública",
    question: "Em segurança pública, o que deveria ser prioridade?",
    description:
      "Combate ao crime organizado, polícia, sistema prisional e fronteiras.",
  },
  {
    key: "educacao",
    label: "Educação",
    question: "Na educação, o que mais importa para você?",
    description:
      "Educação básica, ensino técnico e superior, e valorização de professores.",
  },
  {
    key: "saude",
    label: "Saúde",
    question: "Na saúde, o que você mais valoriza?",
    description: "SUS, saúde mental, acesso a medicamentos e hospitais.",
  },
  {
    key: "meio_ambiente",
    label: "Meio Ambiente e Agropecuária",
    question: "Sobre meio ambiente e agropecuária, o que é prioridade?",
    description: "Desmatamento, clima, agronegócio e recursos naturais.",
  },
  {
    key: "assistencia_social",
    label: "Assistência Social",
    question: "Sobre assistência social, o que é mais relevante?",
    description:
      "Combate à pobreza, transferência de renda e apoio a populações vulneráveis.",
  },
  {
    key: "gestao_publica",
    label: "Gestão Pública",
    question:
      "Sobre gestão pública e reforma do Estado, o que importa mais?",
    description:
      "Reforma política, combate à corrupção e eficiência administrativa.",
  },
  {
    key: "infraestrutura",
    label: "Infraestrutura",
    question: "Sobre infraestrutura e habitação, o que é prioridade?",
    description:
      "Transporte, mobilidade urbana, habitação, saneamento e energia.",
  },
];

export const MAX_SELECTIONS_PER_THEME = 2;
