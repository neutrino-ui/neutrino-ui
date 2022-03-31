---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import {FC} from 'react';

export interface <%= h.changeCase.pascalCase(name) %>Props {}

export const <%= h.changeCase.pascalCase(name) %>: FC<<%= h.changeCase.pascalCase(name) %>Props> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
