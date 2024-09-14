<template>
  <header class="sticky top-0 z-40 flex w-full flex-col justify-center border-b bg-white">
    <div class="container flex h-20 w-full items-center">
      <div class="flex flex-1 items-center gap-x-6 lg:justify-between lg:gap-x-16">
        <!-- NOTE: logo -->
        <NuxtLink :to="localePath(root)" class="flex">
          <img src="/img/logo-no-background.png" alt="JimeBlue" class="w-28">
        </NuxtLink>

        <!-- NOTE: desktop nav -->
        <nav v-if="pages.length > 1" class="hidden lg:block">
          <ul class="flex flex-wrap gap-x-3">
            <li v-for="{ to, label } in pages" :key="to">
              <NuxtLink
                :to="localePath(to)"
                class="block rounded-md px-4 py-1 hover:text-brand-500 aria-[current=page]:bg-transparent aria-[current=page]:text-brand-500 aria-[current=page]:underline aria-[current=page]:underline-offset-8"
              >
                {{ label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- NOTE: container for language switcher and mobile menu button -->
        <div class="ml-auto flex items-center gap-x-2 lg:ml-0">
          <!-- language switcher with 2 UButton -->
          <div class="flex gap-1">
            <UButton
              v-for="(l, index) in locales"
              :key="l.code"
              color="lightBlue"
              variant="ghost"
              size="sm"
              :class="{ 'bg-blue-100': l.code === locale }"
              @click="switchLocale(index)"
            >
              <UIcon
                :name="l.code === 'en' ? 'i-circle-flags:en' : 'i-circle-flags:de'"
                class="size-5"
              />
            </UButton>
          </div>

          <!-- mobile menu button -->
          <UButton
            size="md"
            color="white"
            variant="soft"
            square
            padded
            class="relative lg:hidden"
            @click="menuOpen = true"
          >
            <template #leading>
              <div class="text-primary grid size-5 transform place-items-center">
                <span
                  aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform rounded-lg bg-current transition duration-300 ease-in-out"
                  :class="{
                    'rotate-45': menuOpen,
                    '-translate-y-1.5': !menuOpen,
                  }"
                />
                <span
                  aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform rounded-lg bg-current transition duration-300 ease-in-out"
                  :class="{ 'opacity-0': menuOpen }"
                />
                <span
                  aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform rounded-lg bg-current transition duration-300 ease-in-out"
                  :class="{
                    '-rotate-45': menuOpen,
                    'translate-y-1.5': !menuOpen,
                  }"
                />
              </div>
            </template>
          </UButton>
        </div>

        <!-- NOTE: mobile nav -->
        <USlideover
          v-model="menuOpen"
          side="right"
          :ui="{ width: 'w-screen max-w-2xl' }"
        >
          <div class="flex flex-1 flex-col">
            <div class="flex h-20 items-center justify-between px-4">
              <NuxtLink :to="localePath(root)" class="flex">
                <img src="/img/logo-no-background.png" alt="JimeBlue" class="w-28">
              </NuxtLink>
              <UButton
                color="gray"
                variant="soft"
                size="sm"
                icon="i-heroicons-x-mark-20-solid"
                square
                padded
                @click="menuOpen = false"
              />
            </div>

            <div class="flex-1 px-4">
              <ul class="space-y-3 overflow-y-scroll p-0.5">
                <li v-for="{ to, label } in pages" :key="to">
                  <NuxtLink
                    :to="localePath(to)"
                    class="block rounded-xl px-2.5 py-3"
                    @click="menuOpen = false"
                  >
                    {{ label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </USlideover>
      </div>
    </div>
  </header>
</template>

<script setup>
const { t } = useI18n()

const root = '/'
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const menuOpen = ref(false)

const pages = computed(() => [
  { label: t('navigation.home'), to: '/' },
  { label: t('navigation.info'), to: '/info' },
])

function switchLocale(index) {
  const selectedLocale = locales.value[index].code
  const newLocalePath = switchLocalePath(selectedLocale)

  const router = useRouter()
  router.push(newLocalePath)
}
</script>
