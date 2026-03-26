import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:         resolve(__dirname, 'index.html'),
        tours:        resolve(__dirname, 'tours.html'),
        goldLabel:    resolve(__dirname, 'gold-label.html'),
        extras:       resolve(__dirname, 'extras.html'),
        concierge:    resolve(__dirname, 'concierge.html'),
        analytics:    resolve(__dirname, 'analytics.html'),
        integration:  resolve(__dirname, 'integration.html'),
        socialProof:  resolve(__dirname, 'social-proof.html'),
        businessPlan: resolve(__dirname, 'business-plan.html'),
        partnership:  resolve(__dirname, 'partnership.html'),
        afterDark:    resolve(__dirname, 'after-dark.html'),
        corporate:    resolve(__dirname, 'corporate.html'),
        byPassion:    resolve(__dirname, 'by-passion.html'),
      }
    }
  }
})
