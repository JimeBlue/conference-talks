<template>
  <footer class="my-4 border-t">
    <div class="container flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <ul class="flex flex-col py-4 lg:flex-row lg:space-x-4">
        <li>
          <NuxtLink
            to="https://ui.nuxt.com/"
            target="_blank"
            rel="noopener"
            class="transition-all hover:opacity-50"
          >
            {{ $t('footer.imprint') }}
          </NuxtLink>
        </li>
        <li>
          <button type="button" class="transition-all hover:opacity-50" @click="openDialog">
            {{ $t('footer.data_privacy') }}
          </button>
          <ElementsDialog :is-open="isDialogOpen" @close="closeDialog">
            <template #title>
              {{ $t('footer.data_privacy') }}
            </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia ratione amet exercitationem nesciunt quam ipsa laudantium iure, alias et.
          </ElementsDialog>
        </li>
      </ul>
      <p class="text-sm">
        Built with curiosity and creativity by Jimena Miguez <Icon name="mdi:code-tags" class="font-bold text-brand-500 sm:text-xl" />
      </p>
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
