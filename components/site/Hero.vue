<template>
  <section
    id="hero"
    class="relative flex h-full min-h-[28rem] flex-col overflow-hidden bg-cover bg-center"
  >
    <img
      class="pointer-events-none absolute inset-0 size-full select-none object-cover object-center"
      :src="props.image"
      alt="Basic boilerplate"
    >
    <div class=" relative z-10 flex size-full flex-1 flex-col">
      <div class="container mx-auto flex h-full flex-1 items-center py-6">
        <div class="max-w-xl text-white">
          <h1 class="text-3xl font-bold capitalize xl:text-4xl">
            {{ props.title ? props.title : t('meta.name') }}
          </h1>
          <p class="mt-4 text-lg leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            error odit vel minima optio consequuntur atque omnis, repellendus
            eos, rerum totam quas vitae voluptatibus, facere distinctio fugit?
            Nam, iure expedita!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: null },
  image: { type: String, default: '/img/hero.jpg' },
})
const { t } = useI18n()
</script>
