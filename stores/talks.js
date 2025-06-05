// src/stores/talks.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTalksStore = defineStore('talks', () => {
  // State
  const talks = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  const filters = ref({
    timeFilter: 'all', // 'all', 'today', 'tomorrow', 'week'
    searchTerm: '',
    category: 'all',
  })

  // Getters (computed)
  const filteredTalks = computed(() => {
    let filtered = talks.value

    // Apply time filter
    if (filters.value.timeFilter !== 'all') {
      filtered = filtered.filter((talk) => {
        // TODO: Implement time filtering logic based on talk.dateTime
        return true
      })
    }

    // Apply search filter
    if (filters.value.searchTerm) {
      const term = filters.value.searchTerm.toLowerCase()
      filtered = filtered.filter(talk =>
        talk.title.toLowerCase().includes(term)
        || talk.speaker.toLowerCase().includes(term)
        || talk.description.toLowerCase().includes(term),
      )
    }

    // Apply category filter
    if (filters.value.category !== 'all') {
      filtered = filtered.filter(talk => talk.category === filters.value.category)
    }

    return filtered
  })

  const talksCount = computed(() => talks.value.length)
  const filteredTalksCount = computed(() => filteredTalks.value.length)

  // Actions
  const fetchTalks = async () => {
    isLoading.value = true
    error.value = null

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/talks')
      // const data = await response.json()
      // talks.value = data

      // Placeholder for now
      console.log('Fetching talks...')
    }
    catch (err) {
      error.value = err.message
      console.error('Error fetching talks:', err)
    }
    finally {
      isLoading.value = false
    }
  }

  const setTimeFilter = (filter) => {
    filters.value.timeFilter = filter
  }

  const setSearchTerm = (term) => {
    filters.value.searchTerm = term
  }

  const setCategoryFilter = (category) => {
    filters.value.category = category
  }

  const clearFilters = () => {
    filters.value = {
      timeFilter: 'all',
      searchTerm: '',
      category: 'all',
    }
  }

  const getTalkById = (id) => {
    return talks.value.find(talk => talk.id === id)
  }

  return {
    // State
    talks,
    isLoading,
    error,
    filters,

    // Getters
    filteredTalks,
    talksCount,
    filteredTalksCount,

    // Actions
    fetchTalks,
    setTimeFilter,
    setSearchTerm,
    setCategoryFilter,
    clearFilters,
    getTalkById,
  }
})
