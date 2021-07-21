
import { build as esbuild } from "esbuild";
import sassPlugin from 'esbuild-plugin-sass';

export async function build(entryPoint) {
  await esbuild({
    bundle: true,
    define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production") },
    entryPoints: [entryPoint],
    incremental: false,
    minify: true,
    outfile: `${process.cwd()}/build/bundle.js`,
    plugins: [sassPlugin]
  });
}
