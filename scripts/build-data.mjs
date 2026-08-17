// One-off build script: merges extracted proposal JSON files with candidate
// metadata into a single src/data/candidates.ts file consumed by the app.
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const proposalsDir =
  "C:\\Users\\gisle\\AppData\\Local\\Temp\\claude\\c--Users-gisle-Documents-qual-e-o-meu-candidato\\05aa66e8-f5fe-48a1-b759-ab7186f54283\\scratchpad\\simplified_json";

const META = [
  { slug: "clariana-barao", nome: "Clariana Barão", partido: "DC", numero: 27 },
  { slug: "edmilson-costa", nome: "Edmilson Costa", partido: "PCB", numero: 21 },
  { slug: "augusto-cury", nome: "Augusto Cury", partido: "Avante", numero: 70 },
  { slug: "flavio-bolsonaro", nome: "Flávio Bolsonaro", partido: "PL", numero: 22 },
  { slug: "hertz-dias", nome: "Hertz Dias", partido: "PSTU", numero: 16 },
  { slug: "lula", nome: "Lula", partido: "Brasil Pronto pra Mais", numero: 13 },
  { slug: "renan-santos", nome: "Renan Santos", partido: "Missão", numero: 14 },
  { slug: "ronaldo-caiado", nome: "Ronaldo Caiado", partido: "PSD", numero: 55 },
  { slug: "rui-costa-pimenta", nome: "Rui Costa Pimenta", partido: "PCO", numero: 29 },
  { slug: "samara", nome: "Samara", partido: "UP", numero: 80 },
  { slug: "wilson-grassi", nome: "Veterinário Wilson Grassi", partido: "Democrata", numero: 35 },
  { slug: "zema", nome: "Zema", partido: "Novo", numero: 30 },
];

const THEME_ORDER = [
  "economia",
  "seguranca",
  "educacao",
  "saude",
  "meio_ambiente",
  "assistencia_social",
  "gestao_publica",
  "infraestrutura",
];

// Sanity-checks the {{termo|definição}} glossary markup: no unmatched
// braces, and titulo (a card heading) never carries markup.
function checkMarkup(label, text) {
  const openCount = (text.match(/\{\{/g) || []).length;
  const closeCount = (text.match(/\}\}/g) || []).length;
  if (openCount !== closeCount) {
    throw new Error(`${label}: unbalanced {{ }} markup -> ${text}`);
  }
  const stripped = text.replace(/\{\{[^|}]+\|[^}]+\}\}/g, "");
  if (stripped.includes("{{") || stripped.includes("}}")) {
    throw new Error(`${label}: malformed glossary markup -> ${text}`);
  }
}

const candidates = META.map((m) => {
  const raw = JSON.parse(
    readFileSync(path.join(proposalsDir, `${m.slug}.json`), "utf-8")
  );
  if (raw.slug !== m.slug) {
    throw new Error(`slug mismatch: ${raw.slug} !== ${m.slug}`);
  }
  for (const t of THEME_ORDER) {
    if (!(t in raw.temas)) throw new Error(`missing theme ${t} for ${m.slug}`);
  }

  checkMarkup(`${m.slug}.resumo_perfil`, raw.resumo_perfil);
  for (const t of THEME_ORDER) {
    const tema = raw.temas[t];
    checkMarkup(`${m.slug}.temas.${t}.resumo`, tema.resumo);
    if (tema.titulo.includes("{{")) {
      throw new Error(`${m.slug}.temas.${t}.titulo must not contain glossary markup`);
    }
  }

  return {
    ...m,
    resumoPerfil: raw.resumo_perfil,
    temas: raw.temas,
  };
});

const outPath = path.join(__dirname, "..", "src", "data", "candidates.ts");

const header = `// Dados gerados a partir dos planos de governo oficiais registrados no TSE
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

export const CANDIDATES: Candidate[] = `;

const footer = ";\n";

writeFileSync(outPath, header + JSON.stringify(candidates, null, 2) + footer, "utf-8");
console.log("Wrote", outPath, "with", candidates.length, "candidates");
