import { defineNuxtPlugin } from '#app'
import type { Toast } from '@/types/toast'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('useToast', useToast() as Toast)
})
