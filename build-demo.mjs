#!/usr/bin/env node
// Builds the Gatsby example. BUILD_DEMO=1 toggles gatsby-config.js to set
// pathPrefix; --prefix-paths makes Gatsby actually emit prefixed asset URLs.
import { execSync } from 'node:child_process';
import { rmSync, renameSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(ROOT, 'demo-dist');

const sh = (cmd, cwd = ROOT, env = {}) => {
    console.log('$', cmd, `(${cwd})`);
    execSync(cmd, { stdio: 'inherit', cwd, env: { ...process.env, ...env } });
};

sh('npm ci');
sh('./node_modules/.bin/gatsby build --prefix-paths', ROOT, { BUILD_DEMO: '1' });

rmSync(OUT, { recursive: true, force: true });
renameSync(resolve(ROOT, 'public'), OUT);
console.log('Built fastcomments-gatsbyjs demo at', OUT);
