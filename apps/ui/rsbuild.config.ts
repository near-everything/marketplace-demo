import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';
import pkg from './package.json';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'marketplace',
      filename: 'remoteEntry.js',
      dts: false,
      exposes: {
        './App': './src/bootstrap.tsx',
        './Router': './src/router.tsx',
        './components': './src/components/index.ts',
        './providers': './src/providers/index.tsx',
        './types': './src/types/index.ts',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['react-dom'],
        },
        '@tanstack/react-query': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['@tanstack/react-query'],
        },
        '@tanstack/react-router': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['@tanstack/react-router'],
        },
        '@hot-labs/near-connect': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['@hot-labs/near-connect'],
        },
        'near-kit': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['near-kit'],
        },
      },
    }),
  ],
  source: {
    entry: {
      index: './src/main.tsx',
      remote: './src/remote.tsx',
    },
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
  html: {
    template: './index.html',
  },
  dev: {
    lazyCompilation: false,
  },
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  },
  tools: {
    rspack: {
      target: 'web',
      externalsType: 'module',
      externals: {
        fs: 'commonjs fs',
        path: 'commonjs path',
        crypto: 'commonjs crypto',
        'node:fs': 'commonjs node:fs',
        'node:fs/promises': 'commonjs node:fs/promises',
        'node:path': 'commonjs node:path',
        'node:crypto': 'commonjs node:crypto',
      },
      plugins: [
        TanStackRouterRspack({
          target: 'react',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
  output: {
    assetPrefix: 'auto',
    filename: {
      css: 'static/css/[name].css',
    },
  },
});
