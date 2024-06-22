// stores/darkModeStore.ts
import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'

export const useDarkModeStore = defineStore('darkMode', () => {
  // Inicializar el estado del modo oscuro desde localStorage
  const isDarkMode = ref(false)

  const initializeDarkMode = () => {
    const savedDarkMode = localStorage.getItem('isDarkMode')
    if (savedDarkMode !== null) {
      isDarkMode.value = JSON.parse(savedDarkMode)
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

  if (process.client) {
    onMounted(() => {
      initializeDarkMode()

      watch(isDarkMode, (newValue) => {
        localStorage.setItem('isDarkMode', JSON.stringify(newValue))
        if (newValue) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      })
    })
  }

  return {
    isDarkMode,
    toggleDarkMode,
  }
})
