/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsNameof from 'vite-plugin-ts-nameof';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsNameof(), react()],
});
