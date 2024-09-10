<template>
  <ClientOnly>
    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" class="relative z-50" @close="closeDialog">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/50" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 flex items-center justify-center p-4">
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              class="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg"
            >
              <HeadlessDialogTitle class="text-lg font-semibold text-gray-900">
                <slot name="title" />
              </HeadlessDialogTitle>

              <div class="mt-4">
                <slot />
              </div>

              <div class="mt-6 flex justify-end">
                <button
                  type="button"
                  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  @click="closeDialog"
                >
                  Close
                </button>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </ClientOnly>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import {
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
  TransitionRoot as HeadlessTransitionRoot,
  TransitionChild as HeadlessTransitionChild,
} from '@headlessui/vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

function closeDialog() {
  emit('close')
}
</script>
