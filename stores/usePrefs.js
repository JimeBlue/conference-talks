// src/stores/userPrefs.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserPrefsStore = defineStore('userPrefs', () => {
  // State
  const favorites = ref([])
  const recentlyViewed = ref([])
  const preferences = ref({
    theme: 'light', // 'light', 'dark', 'auto'
    viewMode: 'grid', // 'grid', 'list'
    itemsPerPage: 12,
    autoRefresh: true,
    notifications: {
      favorites: true,
      newTalks: true,
      reminders: true,
    },
  })

  // Getters (computed)
  const favoritesCount = computed(() => favorites.value.length)
  const hasFavorites = computed(() => favorites.value.length > 0)
  const recentlyViewedCount = computed(() => recentlyViewed.value.length)
  const isDarkMode = computed(() => preferences.value.theme === 'dark')
  const isGridView = computed(() => preferences.value.viewMode === 'grid')

  // Actions
  const addToFavorites = (talkId) => {
    if (!favorites.value.includes(talkId)) {
      favorites.value.push(talkId)
      saveToLocalStorage()
    }
  }

  const removeFromFavorites = (talkId) => {
    const index = favorites.value.indexOf(talkId)
    if (index > -1) {
      favorites.value.splice(index, 1)
      saveToLocalStorage()
    }
  }

  const toggleFavorite = (talkId) => {
    if (isFavorite(talkId)) {
      removeFromFavorites(talkId)
    }
    else {
      addToFavorites(talkId)
    }
  }

  const isFavorite = (talkId) => {
    return favorites.value.includes(talkId)
  }

  const clearFavorites = () => {
    favorites.value = []
    saveToLocalStorage()
  }

  const addToRecentlyViewed = (talkId) => {
    // Remove if already exists to avoid duplicates
    const index = recentlyViewed.value.indexOf(talkId)
    if (index > -1) {
      recentlyViewed.value.splice(index, 1)
    }

    // Add to beginning of array
    recentlyViewed.value.unshift(talkId)

    // Keep only last 10 items
    if (recentlyViewed.value.length > 10) {
      recentlyViewed.value = recentlyViewed.value.slice(0, 10)
    }

    saveToLocalStorage()
  }

  const clearRecentlyViewed = () => {
    recentlyViewed.value = []
    saveToLocalStorage()
  }

  const setTheme = (theme) => {
    preferences.value.theme = theme
    saveToLocalStorage()
    applyTheme(theme)
  }

  const setViewMode = (mode) => {
    preferences.value.viewMode = mode
    saveToLocalStorage()
  }

  const setItemsPerPage = (count) => {
    preferences.value.itemsPerPage = count
    saveToLocalStorage()
  }

  const toggleAutoRefresh = () => {
    preferences.value.autoRefresh = !preferences.value.autoRefresh
    saveToLocalStorage()
  }

  const updateNotificationPreference = (type, enabled) => {
    preferences.value.notifications[type] = enabled
    saveToLocalStorage()
  }

  // Utility methods
  const saveToLocalStorage = () => {
    try {
      const data = {
        favorites: favorites.value,
        recentlyViewed: recentlyViewed.value,
        preferences: preferences.value,
      }
      localStorage.setItem('userPrefs', JSON.stringify(data))
    }
    catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  const loadFromLocalStorage = () => {
    try {
      const data = localStorage.getItem('userPrefs')
      if (data) {
        const parsed = JSON.parse(data)
        favorites.value = parsed.favorites || []
        recentlyViewed.value = parsed.recentlyViewed || []
        preferences.value = { ...preferences.value, ...parsed.preferences }
        applyTheme(preferences.value.theme)
      }
    }
    catch (error) {
      console.error('Error loading from localStorage:', error)
    }
  }

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    }
    else if (theme === 'auto') {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
      else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const exportPreferences = () => {
    return {
      favorites: favorites.value,
      recentlyViewed: recentlyViewed.value,
      preferences: preferences.value,
      exportDate: new Date().toISOString(),
    }
  }

  const importPreferences = (data) => {
    try {
      if (data.favorites) { favorites.value = data.favorites }
      if (data.recentlyViewed) { recentlyViewed.value = data.recentlyViewed }
      if (data.preferences) { preferences.value = { ...preferences.value, ...data.preferences } }
      saveToLocalStorage()
      applyTheme(preferences.value.theme)
    }
    catch (error) {
      console.error('Error importing preferences:', error)
    }
  }

  // Initialize store
  const init = () => {
    loadFromLocalStorage()
  }

  return {
    // State
    favorites,
    recentlyViewed,
    preferences,

    // Getters
    favoritesCount,
    hasFavorites,
    recentlyViewedCount,
    isDarkMode,
    isGridView,

    // Actions
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    addToRecentlyViewed,
    clearRecentlyViewed,
    setTheme,
    setViewMode,
    setItemsPerPage,
    toggleAutoRefresh,
    updateNotificationPreference,
    exportPreferences,
    importPreferences,
    init,
  }
})
