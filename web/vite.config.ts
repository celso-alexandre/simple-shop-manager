/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsNameof from 'vite-plugin-ts-nameof';
import { antdDayjs } from 'antd-dayjs-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsNameof(), react(), antdDayjs()],
});
