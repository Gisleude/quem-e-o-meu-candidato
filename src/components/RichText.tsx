import { Fragment } from "react";
import { Term } from "./Term";

// Renders text that may contain {{termo|definição}} glossary markup as
// underlined terms with a hover/focus tooltip explaining the meaning.
export function RichText({ text }: { text: string }) {
  const termRe = /\{\{([^|}]+)\|([^}]+)\}\}/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  let match: RegExpExecArray | null;
  while ((match = termRe.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(
        <Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>
      );
    }
    nodes.push(
      <Term key={key++} def={match[2]}>
        {match[1]}
      </Term>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{nodes}</>;
}
