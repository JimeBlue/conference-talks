<template>
  <footer class="mt-4 border-t">
    <div class="container flex flex-col py-4 lg:flex-row lg:space-x-4">
      <NuxtLink
        to="https://ui.nuxt.com/"
        target="_blank"
        rel="noopener"
        class="hover:opacity-50 transition-all"
      >
        {{ $t('footer.imprint') }}
      </NuxtLink>
      <div>
        <button @click="openDialog">{{ $t('footer.data_privacy') }}</button>

        <ElementsDialog :isOpen="isDialogOpen" @close="closeDialog">
          <template #title> Dialog Title </template>
          This is the content of the dialog.
        </ElementsDialog>
      </div>
    </div>
  </footer>
</template>

<script setup>
const isDialogOpen = ref(false)

function openDialog() {
  isDialogOpen.value = true
}

function closeDialog() {
  isDialogOpen.value = false
}
</script>
