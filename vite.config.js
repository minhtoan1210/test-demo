import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), ],
    css: {
        preprocessorOptions: {
            css: {
                charset: false,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/constanst': path.resolve(__dirname, 'src/constanst'),
            '@/routes': path.resolve(__dirname, 'src/routes'),
        },
    },
    optimizeDeps: {
        include: ['@fullcalendar/react', '@fullcalendar/daygrid', '@fullcalendar/timegrid', '@fullcalendar/list']
    },
});
