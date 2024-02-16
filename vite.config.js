import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Maintenance-Dashboard/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': "/src",
      '@components': "/src/components",
      '@hooks': "/src/components/hooks",
      '@utils': "/src/components/Utils",
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
  }
})
