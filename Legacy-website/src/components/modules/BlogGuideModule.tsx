import React from "react";
/* [MIGRATED] Updated imports to use your project's local atoms */
import Surface from "../atoms/Surface";
import Text from "../atoms/Text";
import { RichTextBlocks } from "./RichTextBlocks";

type BlogEntry = {
  id: number;
  Title?: string;
  Body?: any[];
  Author?: string | null;
  Category?: string | null;
  Published_On?: string | null;
};

type BlogGuideModuleProps = {
  blog: BlogEntry | null;
};

export const BlogGuideModule = ({ blog }: BlogGuideModuleProps) => {
  if (!blog) {
    return (
      /* [MIGRATED] Replaced graywiz-lg/surface with native radius-3 and surface-card */
      <Surface 
        style={{ 
          borderRadius: 'var(--radius-3)', 
          border: '1px solid var(--stroke-subtle)', 
          backgroundColor: 'var(--surface-card)', 
          padding: 'var(--space-6)' 
        }}
      >
        <Text color="muted" size="3">
          No guide article found for this EV.
        </Text>
      </Surface>
    );
  }

  return (
    /* [MIGRATED] Switched to surface-base for better editorial reading contrast */
    <Surface 
      style={{ 
        borderRadius: 'var(--radius-3)', 
        border: '1px solid var(--stroke-subtle)', 
        backgroundColor: 'var(--surface-base)', 
        padding: 'var(--space-6)',
        boxShadow: 'var(--shadow-low)' 
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        {!!blog.Category && (
          /* [MIGRATED] Using blue-data for the category accent color */
          <Text 
            size="1" 
            weight="900" 
            style={{ color: 'var(--p-blue-data)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            {blog.Category}
          </Text>
        )}

        <Text 
          size="5" 
          weight="900" 
          style={{ color: 'var(--p-ink-900)', marginTop: 'var(--space-1)', display: 'block' }}
        >
          {blog.Title}
        </Text>

        {(blog.Author || blog.Published_On) && (
          <div style={{ marginTop: 'var(--space-2)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            {!!blog.Author && (
              <Text color="muted" size="1">
                By {blog.Author}
              </Text>
            )}
            {!!blog.Published_On && (
              <Text color="muted" size="1">
                {blog.Published_On}
              </Text>
            )}
          </div>
        )}

        {/* [MIGRATED] Switched divider to stroke-subtle variable */}
        <div style={{ marginTop: 'var(--space-4)', height: '1px', width: '100%', backgroundColor: 'var(--stroke-subtle)' }} />
      </div>

      {/* Body */}
      <div style={{ marginTop: 'var(--space-4)' }}>
        {!!blog.Body?.length ? (
          <RichTextBlocks blocks={blog.Body as any[]} />
        ) : (
          <Text color="muted" size="2">
            Article body is empty.
          </Text>
        )}
      </div>
    </Surface>
  );
};