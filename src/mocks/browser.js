import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Crea el service worker del navegador con los handlers definidos
export const worker = setupWorker(...handlers)
