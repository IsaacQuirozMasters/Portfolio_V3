<template>
  <header>
    <div class="fp-rule fp-rule--3" />

    <div
      v-magnet-scope
      class="flex items-center justify-between gap-[var(--space-4)] px-[var(--space-8)] py-[var(--space-2)] text-[11.5px] uppercase tracking-[.14em]"
      style="color:var(--color-neutral-700)"
    >
      <NuxtLink v-magnet :to="localePath('/')" class="flex items-center gap-1" style="color:var(--color-text)">
        <span aria-hidden="true">←</span> {{ $t('common.projectNav.back') }}
      </NuxtLink>

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

        <NuxtLink v-magnet :to="nextProjectPath" class="flex items-center gap-1" style="color:var(--color-text)">
          {{ $t('common.projectNav.next') }} <span aria-hidden="true">→</span>
        </NuxtLink>
      </span>
    </div>

    <div class="fp-rule fp-rule--1" />
  </header>
</template>

<script setup>
const { night, toggleNight } = useNightEdition()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const { nextProjectPath } = useProjectNav()

const localeLinks = computed(() =>
  locales.value.map((loc) => {
    const code = typeof loc === 'string' ? loc : loc.code
    return { code, path: switchLocalePath(code), active: code === locale.value }
  }),
)
</script>
