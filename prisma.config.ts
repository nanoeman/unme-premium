import { defineConfig } from 'prisma/config';

export default defineConfig({
  earlyAccess: true,
  schema: './prisma/schema.prisma',
  datasource: {
    provider: 'sqlite',
    url: 'file:./dev.db',
  },
});