<template>
  <section class="mt-10 text-brand-500 space-y-6">
    <h1 class="text-2xl font-bold">
      <span>{{ $t('meta.name') }}</span
      >, <span>{{ $t('welcome.title') }}</span>
    </h1>

    <UButton>
      <NuxtLink :to="localePath('info')"> {{ t('navigation.info') }} </NuxtLink>
    </UButton>
  </section>
</template>

<script setup>
const { t } = useI18n()

const localePath = useLocalePath()
</script>
