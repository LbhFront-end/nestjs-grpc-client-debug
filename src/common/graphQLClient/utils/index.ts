import type { DocumentNode } from 'graphql';

export const getGqlString = (doc: DocumentNode) => {
    return doc && doc.loc && doc.loc.source.body;
}; 