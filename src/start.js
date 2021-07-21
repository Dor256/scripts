import { build } from 'esbuild';
import chokidar from "chokidar";
import liveServer from "live-server";

export async function start(entryPoint) {
	const builder = await build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: [entryPoint],
		incremental: true,
		minify: false,
		outfile: `${process.cwd()}/public/script.js`,
	});

  chokidar
    .watch("src/**/*.{ts,tsx}", {
      interval: 0,
    })
    .on("all", () => {
      builder.rebuild()
    });
  
  liveServer.start({
    open: true,
    port: +process.env.PORT || 3000,
    root: `${process.cwd()}/public`
  });
}
