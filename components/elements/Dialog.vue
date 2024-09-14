<template>
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
            class="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg"
          >
            <div class="flex items-center justify-between">
              <HeadlessDialogTitle class="text-lg font-semibold text-gray-900">
                <slot name="title" />
              </HeadlessDialogTitle>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="rounded bg-transparent px-4 py-2 "
                  @click="closeDialog"
                >
                  <UButton
                    color="gray"
                    variant="soft"
                    size="sm"
                    icon="i-heroicons-x-mark-20-solid"
                    square
                    padded
                  />
                </button>
              </div>
            </div>

            <div class="mt-4">
              <slot />
            </div>
          </HeadlessDialogPanel>
        </HeadlessTransitionChild>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue'
import {
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
  TransitionChild as HeadlessTransitionChild,
  TransitionRoot as HeadlessTransitionRoot,
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
