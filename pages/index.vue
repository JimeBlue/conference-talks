<template>
  <SiteHero />
  <section class="py-10">
    <div class="container">
      <h1 class="text-2xl font-bold text-brand-500">
        <span>{{ $t('meta.name') }}</span>, <span>{{ $t('welcome.title') }}</span>
      </h1>
      <p class="mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, et id?
        Cum fugit sed doloremque ex officia molestiae distinctio alias dolores
        enim earum porro voluptas, inventore impedit ut! Delectus aliquid libero
        incidunt officiis odio, atque at architecto dolorum numquam non tempore
        voluptatum quos velit laudantium labore. Corrupti hic sunt iste maiores
        cum optio voluptatem possimus atque eveniet ut. Consequatur perferendis
        rem quos ratione aperiam quia molestias dolorum laborum adipisci illum
        omnis expedita quisquam modi vitae ab, ea perspiciatis, earum tempore
        labore facilis quibusdam ex? Consequatur perferendis
        rem quos ratione aperiam quia molestias dolorum laborum adipisci illum
        omnis expedita quisquam modi vitae ab, ea perspiciatis, earum tempore. Velit quis, non ducimus enim debitis
        possimus! Dolores, illum! Nam, incidunt iure voluptatibus non nesciunt
        odio?
      </p>
      <NuxtLink :to="localePath('info')" class="mt-4 block">
        <UButton :label="t('navigation.info')" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

const localePath = useLocalePath()
</script>
