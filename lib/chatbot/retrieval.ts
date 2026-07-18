// lib/chatbot/retrieval.ts
//
// Lightweight keyword-overlap retriever. For a corpus this small (a handful
// of chunks), this gets you ~the same relevance as embeddings + cosine
// similarity without needing an embeddings API call or a vector store.
//
// If the knowledge base grows a lot (dozens+ of chunks, long documents),
// swap this for real embeddings — e.g. call an embeddings endpoint once at
// build time to precompute vectors for each chunk, store them alongside the
// chunk, and at query time embed the user's message and rank by cosine
// similarity. The rest of the pipeline (route.ts) doesn't need to change.

import { knowledgeBase, type KnowledgeChunk } from "./knowledge";

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * Scores every chunk against the query and returns the top `limit` chunks,
 * ranked by relevance. Falls back to returning the company-overview chunk
 * if nothing scores above zero, so the model always has some grounding.
 */
export function retrieveRelevantChunks(
  query: string,
  limit = 3
): KnowledgeChunk[] {
  const queryTokens = new Set(tokenize(query));

  const scored = knowledgeBase.map((chunk) => {
    let score = 0;
    for (const keyword of chunk.keywords) {
      const keywordTokens = tokenize(keyword);
      const matchesAll = keywordTokens.every((t) => queryTokens.has(t));
      if (matchesAll) {
        // Multi-word keyword matches are stronger signal than single words.
        score += keywordTokens.length > 1 ? 3 : 1;
      }
    }
    // Small boost for direct title word matches.
    for (const t of tokenize(chunk.title)) {
      if (queryTokens.has(t)) score += 0.5;
    }
    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const top = scored.filter((s) => s.score > 0).slice(0, limit);

  if (top.length === 0) {
    const overview = knowledgeBase.find((c) => c.id === "company-overview");
    return overview ? [overview] : knowledgeBase.slice(0, limit);
  }

  return top.map((s) => s.chunk);
}
