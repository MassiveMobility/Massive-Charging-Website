# Articles Data Source

This folder is the single source of truth for article-related data used by marketing routes.

## Where article data is stored
- `legacy/vehicle_guide.json`: legacy article, vehicle, and category mappings.
- `legacy/core_message_block.json`: legacy article block content (headings, paragraphs, tables, lists).
- `legacy-guide-data.ts`: typed parsing + normalized selectors/query helpers.
- `guide-data.ts`: modern seeded guide article records and vehicle catalogue samples.
- `article-previews.ts`: lightweight preview cards rendered on `/articles`.

## How data is used
1. Raw JSON is imported only by `legacy-guide-data.ts`.
2. `legacy-guide-data.ts` normalizes records and exposes query helpers.
3. Route files (`/charging-guide`, `/charging-guide/[slug]`, `/charging-guide/ev-cars`) consume helpers from `@/data/articles`.

## Why this exists
- Keeps pages focused on rendering and metadata.
- Keeps data loading/query logic in one maintainable place.
- Makes future CMS migration easier because data contracts are centralized.
