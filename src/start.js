import { build } from 'esbuild';
import liveServer from "live-server";

export async function start(entryPoint) {
	await build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: [entryPoint],
		incremental: true,
		minify: false,
		outfile: `${process.cwd()}/public/script.js`,
    watch: true,
	});
  
  liveServer.start({
    open: true,
    port: +process.env.PORT || 3000,
    root: `${process.cwd()}/public`
  });
}
