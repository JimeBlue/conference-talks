<template>
  <div class="flex min-h-screen flex-1 flex-col font-body">
    <SiteHeader />
    <main class="flex flex-1 flex-col">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
