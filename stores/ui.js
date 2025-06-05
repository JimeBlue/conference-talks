// src/stores/ui.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  // State
  const isModalOpen = ref(false)
  const selectedTalkId = ref(null)
  const isLoading = ref(false)
  const notifications = ref([])
  const sidebarOpen = ref(false)

  // Getters (computed)
  const hasActiveModal = computed(() => isModalOpen.value && selectedTalkId.value)
  const notificationCount = computed(() => notifications.value.length)
  const hasNotifications = computed(() => notifications.value.length > 0)

  // Actions
  const openModal = (talkId) => {
    selectedTalkId.value = talkId
    isModalOpen.value = true
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    isModalOpen.value = false
    selectedTalkId.value = null
    // Restore body scroll
    document.body.style.overflow = ''
  }

  const toggleModal = (talkId = null) => {
    if (isModalOpen.value) {
      closeModal()
    }
    else if (talkId) {
      openModal(talkId)
    }
  }

  const setLoading = (loading) => {
    isLoading.value = loading
  }

  const addNotification = (notification) => {
    const id = Date.now()
    notifications.value.push({
      id,
      type: 'info', // 'success', 'error', 'warning', 'info'
      message: '',
      duration: 3000, // Auto dismiss after 3 seconds
      ...notification,
    })

    // Auto dismiss notification
    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id)
      }, notification.duration || 3000)
    }

    return id
  }

  const removeNotification = (id) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  const clearNotifications = () => {
    notifications.value = []
  }

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  const closeSidebar = () => {
    sidebarOpen.value = false
  }

  const openSidebar = () => {
    sidebarOpen.value = true
  }

  // Utility methods for common notification types
  const showSuccess = (message, duration = 3000) => {
    return addNotification({ type: 'success', message, duration })
  }

  const showError = (message, duration = 5000) => {
    return addNotification({ type: 'error', message, duration })
  }

  const showWarning = (message, duration = 4000) => {
    return addNotification({ type: 'warning', message, duration })
  }

  const showInfo = (message, duration = 3000) => {
    return addNotification({ type: 'info', message, duration })
  }

  return {
    // State
    isModalOpen,
    selectedTalkId,
    isLoading,
    notifications,
    sidebarOpen,

    // Getters
    hasActiveModal,
    notificationCount,
    hasNotifications,

    // Actions
    openModal,
    closeModal,
    toggleModal,
    setLoading,
    addNotification,
    removeNotification,
    clearNotifications,
    toggleSidebar,
    closeSidebar,
    openSidebar,

    // Utility methods
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }
})
