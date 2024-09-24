import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  dts: true,
  sourcemap: true,
  clean: true,
  // minify: true,
});
