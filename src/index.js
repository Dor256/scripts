
import fs from 'fs';
import { start } from './start.js';
import { build } from './build.js';

const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, 'utf-8'));

export async function run(args) {
  switch (args[2]) {
    case 'start':
      await start(packageJson.main || 'index.tsx');
      break;
    case 'build':
      await build(packageJson.main || 'index.tsx');
  }
}
