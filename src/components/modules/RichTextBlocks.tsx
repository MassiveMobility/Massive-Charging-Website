import React from "react";
/* [MIGRATED] Updated import to use your project's local Text atom */
import Text from "../atoms/Text";

/**
 * Strapi Blocks shape (matches your JSON)
 */
type BlockTextNode = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

type BlockNode =
  | {
      type: "heading";
      level?: number;
      children: BlockTextNode[];
    }
  | {
      type: "paragraph";
      children: BlockTextNode[];
    }
  | {
      type: "list";
      format?: "unordered" | "ordered";
      children: Array<{
        type: "list-item";
        children: BlockTextNode[];
      }>;
    }
  | {
      type: "quote";
      children: BlockTextNode[];
    };

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function renderInline(nodes?: BlockTextNode[]) {
  if (!nodes?.length) return null;

  return nodes.map((n, idx) => {
    const chunks = (n.text ?? "").split("\n");

    const content = chunks.map((chunk, i) => (
      <React.Fragment key={`${idx}-${i}`}>
        {chunk}
        {i < chunks.length - 1 ? <br /> : null}
      </React.Fragment>
    ));

    /* [MIGRATED] Replaced graywiz specific font and color tokens with native variables */
    const inlineStyle: React.CSSProperties = {
      fontWeight: n.bold ? 'var(--weight-900)' : undefined,
      fontStyle: n.italic ? 'italic' : undefined,
      textDecoration: cx(
        n.underline && "underline",
        n.strikethrough && "line-through"
      ) || undefined,
      ...(n.code ? {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.95em',
        paddingInline: '4px',
        borderRadius: 'var(--radius-1)',
        backgroundColor: 'var(--p-gray-50)',
        color: 'var(--p-blue-data)'
      } : {})
    };

    return (
      <span key={idx} style={inlineStyle}>
        {content}
      </span>
    );
  });
}

function extractPlainText(children?: BlockTextNode[]) {
  return (children ?? []).map((c) => c.text ?? "").join("");
}

function isMarkdownTableLine(s: string) {
  const t = s.trim();
  return t.startsWith("|") && t.endsWith("|");
}

export const RichTextBlocks = ({ blocks }: { blocks: BlockNode[] }) => {
  if (!blocks?.length) return null;

  const out: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const b = blocks[i];

    // Merge consecutive "markdown table" paragraphs into a monospace panel
    if (b.type === "paragraph") {
      const line = extractPlainText(b.children);
      if (isMarkdownTableLine(line)) {
        const lines: string[] = [];
        let j = i;

        while (j < blocks.length) {
          const bj = blocks[j];
          if (bj.type !== "paragraph") break;
          const lj = extractPlainText(bj.children);
          if (!isMarkdownTableLine(lj)) break;
          lines.push(lj.trim());
          j += 1;
        }

        /* [MIGRATED] Converted table panel to use surface and machine-inset tokens */
        out.push(
          <div key={`mdtable-${i}`} style={{ marginBlock: 'var(--space-2)' }}>
            <div style={{ 
              borderRadius: 'var(--radius-2)', 
              border: '1px solid var(--stroke-subtle)', 
              backgroundColor: 'var(--p-gray-50)', 
              padding: 'var(--space-2)', 
              overflowX: 'auto' 
            }}>
              <pre style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: 'var(--text-1)', 
                color: 'var(--p-blue-data)', 
                whiteSpace: 'pre' 
              }}>
                {lines.join("\n")}
              </pre>
            </div>
          </div>
        );

        i = j;
        continue;
      }
    }

    // Divider paragraph: '---'
    if (b.type === "paragraph") {
      const t = extractPlainText(b.children).trim();
      if (t === "---") {
        /* [MIGRATED] Divider now uses stroke-subtle variable */
        out.push(<div key={`hr-${i}`} style={{ marginBlock: 'var(--space-3)', height: '1px', width: '100%', backgroundColor: 'var(--stroke-subtle)' }} />);
        i += 1;
        continue;
      }
    }

    switch (b.type) {
      case "heading": {
        const level = b.level ?? 2;
        const sizeMap: Record<number, any> = { 1: "6", 2: "5", 3: "4", 4: "3" };
        
        /* [MIGRATED] Headings now use your numeric size scale and weight-900 */
        out.push(
          <div key={`h-${i}`} style={{ marginTop: level <= 2 ? 'var(--space-4)' : 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
            <Text size={sizeMap[level] || "3"} weight="900" style={{ color: 'var(--p-ink-900)' }}>
              {renderInline(b.children)}
            </Text>
          </div>
        );
        break;
      }

      case "paragraph": {
        const plain = extractPlainText(b.children).trim();
        if (!plain) {
          out.push(<div key={`sp-${i}`} style={{ height: 'var(--space-1)' }} />);
          break;
        }

        /* [MIGRATED] Paragraphs now use text-3 (16px) and color="muted" */
        out.push(
          <div key={`p-${i}`} style={{ marginBottom: 'var(--space-2)' }}>
            <Text size="3" color="muted" style={{ lineHeight: 'var(--lh-2)' }}>
              {renderInline(b.children)}
            </Text>
          </div>
        );
        break;
      }

      case "list": {
        const ordered = b.format === "ordered";
        /* [MIGRATED] Lists integrated with your 8px spacing scale */
        out.push(
          <div key={`list-${i}`} style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-3)' }}>
            <ul style={{ listStyleType: ordered ? 'decimal' : 'disc', padding: 0, margin: 0 }}>
              {b.children?.map((li, k) => (
                <li key={k} style={{ marginBottom: 'var(--space-1)' }}>
                  <Text size="3" color="muted" style={{ lineHeight: 'var(--lh-2)' }}>
                    {renderInline(li.children)}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        );
        break;
      }

      case "quote": {
        /* [MIGRATED] Quotes now use a left-border with blue-data accent */
        out.push(
          <div key={`q-${i}`} style={{ marginBlock: 'var(--space-3)', borderLeft: '4px solid var(--p-blue-data)', paddingLeft: 'var(--space-3)' }}>
            <Text size="3" color="muted" style={{ fontStyle: 'italic', lineHeight: 'var(--lh-2)' }}>
              {renderInline(b.children)}
            </Text>
          </div>
        );
        break;
      }

      default:
        break;
    }

    i += 1;
  }

  return <div>{out}</div>;
};	