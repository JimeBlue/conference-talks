<template>
  <footer class="mt-4 border-t">
    <div class="container flex flex-col py-4 lg:flex-row lg:space-x-4">
      <NuxtLink
        to="https://ui.nuxt.com/"
        target="_blank"
        rel="noopener"
        class="transition-all hover:opacity-50"
      >
        {{ $t('footer.imprint') }}
      </NuxtLink>

      <button type="button" class="transition-all hover:opacity-50" @click="openDialog">
        {{ $t('footer.data_privacy') }}
      </button>

      <ElementsDialog :is-open="isDialogOpen" @close="closeDialog">
        <template #title>
          {{ $t('footer.data_privacy') }}
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia ratione amet exercitationem nesciunt quam ipsa laudantium iure, alias et.
      </ElementsDialog>
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
