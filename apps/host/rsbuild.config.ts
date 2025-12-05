import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import fs from 'node:fs';

const remotesConfig = JSON.parse(fs.readFileSync('./remotes.json', 'utf-8'));

const remoteEntries = Object.entries(remotesConfig.remotes).reduce(
  (acc, [name, config]) => {
    const { url } = config as { url: string };
    acc[name] = `${name}@${url}`;
    return acc;
  },
  {} as Record<string, string>
);

const remoteEntryUrl = remotesConfig.remotes.near_social_js?.url ?? '';
const remoteOrigin = remoteEntryUrl ? new URL(remoteEntryUrl).origin : '';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      remotes: remoteEntries,
      dts: false,
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '^19.2.0',
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^19.2.0',
        },
        '@tanstack/react-query': {
          singleton: true,
          eager: true,
        },
        '@tanstack/react-router': {
          singleton: true,
          eager: true,
        },
        'near-kit': {
          singleton: true,
          eager: false,
        },
      },
    }),
  ],
  source: {
    entry: {
      index: './src/index.client.tsx',
    },
  },
  html: {
    template: './index.html',
    templateParameters: {
      remoteOrigin,
      remoteEntryUrl,
    },
  },
  server: {
    port: 3001,
  },
  output: {
    distPath: {
      root: 'dist',
    },
    assetPrefix: 'auto',
  },
});
