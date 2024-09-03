<template>
  <section class="mt-10">
    <div class="container">
      <h1 class="text-2xl font-bold text-brand-500">
        <span>{{ $t('meta.name') }}</span
        >, <span>{{ $t('welcome.title') }}</span>
      </h1>
      <NuxtLink :to="localePath('info')" class="block mt-4">
        <UButton :label="t('navigation.info')" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

const localePath = useLocalePath()
</script>
