<template>
  <header ref="root">
    <div class="fp-rule fp-rule--6" />

    <div class="flex items-end justify-between gap-[var(--space-6)] py-[var(--space-3)]">
      <h1 class="m-0 grid justify-items-start text-[76px]" style="line-height:.86;letter-spacing:-.02em">
        <span data-typewriter>Isaac Quiroz</span>
        <span data-typewriter data-typewriter-after>Madrigal</span>
      </h1>
      <div
        v-reveal="80"
        class="text-right text-[14px] leading-[1.5]"
        style="color:var(--color-neutral-800)"
      >
        <div class="text-[19px] italic" style="color:var(--color-text)">{{ $t('home.masthead.role') }}</div>
        <div>{{ $t('home.masthead.location') }}</div>
        <div>{{ $t('home.masthead.site') }}</div>
      </div>
    </div>

    <div class="fp-rule fp-rule--1" />

    <div
      v-magnet-scope
      class="flex items-center justify-between gap-[var(--space-4)] py-[var(--space-2)] text-[11.5px] uppercase tracking-[.14em]"
      style="color:var(--color-neutral-700)"
    >

      <span class="flex gap-[var(--space-3)]">
        <a href="#proyectos">{{ $t('home.masthead.nav.projects') }}</a>
        <a href="#sobre-mi">{{ $t('home.masthead.nav.about') }}</a>
        <a href="#estudios">{{ $t('home.masthead.nav.studies') }}</a>
        <NuxtLink :to="localePath('/contact')" style="color:var(--color-accent-2-700)">{{ $t('home.masthead.nav.contact') }}</NuxtLink>
      </span>

      <span class="flex items-center gap-[var(--space-3)] tracking-[.1em]">
        <span class="flex items-center gap-1">
          <template v-for="(loc, i) in localeLinks" :key="loc.code">
            <span v-if="i > 0">·</span>
            <NuxtLink
              :to="loc.path"
              class="transition-opacity"
              :class="loc.active ? 'opacity-100' : 'opacity-45 hover:opacity-100'"
              style="color:var(--color-neutral-700)"
            >
              {{ loc.code.toUpperCase() }}
            </NuxtLink>
          </template>
        </span>
        <button
          v-magnet
          type="button"
          class="flex cursor-pointer items-center gap-[7px] rounded-[var(--radius-md)] border px-[10px] py-[5px] text-[11px] uppercase tracking-[.14em] transition-colors hover:border-[var(--color-accent)]! hover:text-[var(--color-accent-700)]!"
          style="background:transparent;border-color:var(--color-divider);color:var(--color-text);font-family:inherit"
          @click="toggleNight"
        >
          <span class="h-[9px] w-[9px] rounded-full" style="background:var(--color-text)" />
          {{ night ? $t('home.masthead.night.on') : $t('home.masthead.night.off') }}
        </button>
      </span>
    </div>

    <div class="fp-rule fp-rule--3" />
  </header>
</template>

<script setup>
const { edition } = useEdition()
const { night, toggleNight } = useNightEdition()
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const editionLabel = computed(() => t(`home.masthead.editionLabel.${edition.value}`))

const root = ref(null)

const localeLinks = computed(() =>
  locales.value.map((loc) => {
    const code = typeof loc === 'string' ? loc : loc.code
    return { code, path: switchLocalePath(code), active: code === locale.value }
  }),
)

onMounted(() => {
  if (root.value) initTypewriter(root.value)
})
</script>
