<template>
  <div class="mx-auto w-full pb-[var(--space-8)]">
    <div v-magnet-scope class="no-print mx-auto flex items-center justify-between" style="width:816px;padding:var(--space-4) 56px">
      <NuxtLink v-magnet :to="localePath('/')" class="flex items-center gap-1 text-[11px] uppercase tracking-[.14em]" style="color:var(--color-text)">
        <span aria-hidden="true">←</span> {{ $t('common.projectNav.back') }}
      </NuxtLink>

      <div v-magnet class="seg">
        <label class="seg-opt">
          <input type="radio" name="edicion-cv" value="design" :checked="edition === 'design'" @change="setEdition('design')">
          {{ $t('home.editionSwitch.design') }}
        </label>
        <label class="seg-opt">
          <input type="radio" name="edicion-cv" value="code" :checked="edition === 'code'" @change="setEdition('code')">
          {{ $t('home.editionSwitch.code') }}
        </label>
      </div>

      <button v-magnet type="button" class="btn btn-primary" @click="printCv">
        {{ $t('home.about.cvButton') }}
      </button>
    </div>

    <div class="cv-sheet mx-auto" style="width:816px;padding:var(--space-8) 56px">
      <div style="height:6px;background:var(--color-text)" />

      <div class="flex items-end justify-between gap-[var(--space-4)]" style="padding:var(--space-3) 0 var(--space-2)">
        <h1 class="m-0" style="font-size:44px;line-height:.95">Isaac Quiroz Madrigal</h1>
        <div class="text-right" style="font-size:12.5px;line-height:1.5;color:var(--color-neutral-800)">
          {{ $t('cv.location') }}<br>isaacquirozmadrigal1@gmail.com<br>{{ $t('home.masthead.site') }}
        </div>
      </div>

      <div style="height:1px;background:var(--color-text)" />

      <div v-magnet-scope class="flex justify-between" style="padding:var(--space-2) 0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-700)">
        <span>{{ cvData.role }}</span>
        <span class="flex items-center gap-1">
          <template v-for="(loc, i) in localeLinks" :key="loc.code">
            <span v-if="i > 0">·</span>
            <NuxtLink
              v-magnet
              :to="loc.path"
              class="transition-opacity"
              :class="loc.active ? 'opacity-100' : 'opacity-45 hover:opacity-100'"
              style="color:var(--color-neutral-700)"
            >
              {{ loc.code.toUpperCase() }}
            </NuxtLink>
          </template>
        </span>
      </div>

      <div style="height:3px;background:var(--color-text)" />

      <p style="margin:var(--space-4) 0 0;font-size:14.5px;line-height:1.6;text-wrap:pretty">{{ cvData.summary }}</p>

      <div style="display:grid;grid-template-columns:96px 1fr;gap:var(--space-3) var(--space-4);margin-top:var(--space-6)">
        <div class="cv-label">{{ $t('cv.sections.experience') }}</div>
        <div style="display:grid;gap:var(--space-3)">
          <div v-for="(job, i) in cvData.experience" :key="i">
            <div style="font-size:17px">{{ job.role }}</div>
            <div style="font-size:12.5px;color:var(--color-neutral-700)">{{ job.meta }}</div>
            <ul v-if="job.bullets?.length" style="font-size:14px;line-height:1.55;margin:4px 0 0;padding-left:16px">
              <li v-for="(bullet, bi) in job.bullets" :key="bi">{{ bullet }}</li>
            </ul>
          </div>
        </div>

        <div class="cv-label">{{ $t('cv.sections.projects') }}</div>
        <div style="font-size:14px;line-height:1.7">{{ projectTitles }}</div>

        <div class="cv-label">{{ $t('cv.sections.education') }}</div>
        <div style="display:grid;gap:var(--space-2)">
          <div v-for="(item, i) in cvData.education" :key="i">
            <div style="font-size:16px">{{ item.institution }}</div>
            <div style="font-size:12.5px;color:var(--color-neutral-700)">{{ item.meta }}</div>
          </div>
        </div>

        <div class="cv-label">{{ $t('cv.sections.skills') }}</div>
        <div style="display:grid;gap:6px">
          <div v-for="(skill, i) in cvData.skills" :key="i" style="font-size:14px;line-height:1.6">
            <strong>{{ skill.label }}:</strong> {{ skill.value }}
          </div>
        </div>

        <template v-if="cvData.languages?.length">
          <div class="cv-label">{{ $t('cv.sections.languages') }}</div>
          <div style="display:grid;gap:2px;font-size:14px;line-height:1.6">
            <div v-for="(lang, i) in cvData.languages" :key="i">{{ lang.name }} — {{ lang.level }}</div>
          </div>
        </template>
      </div>

      <div class="flex justify-between" style="margin-top:var(--space-6);border-top:1px solid var(--color-text);padding-top:var(--space-2);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-700)">
        <span>{{ $t('cv.footer.note1') }}</span>
        <span>{{ $t('cv.footer.note2') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { edition, setEdition, initEdition, restoreEdition } = useEdition()
const { locale, locales, tm, rt } = useI18n()

initEdition(route.query.edicion)

const localeLinks = computed(() =>
  locales.value.map((loc) => {
    const code = typeof loc === 'string' ? loc : loc.code
    return { code, path: switchLocalePath(code), active: code === locale.value }
  }),
)

const resolveDeep = (val) => {
  if (Array.isArray(val)) return val.map(resolveDeep)
  if (val && typeof val === 'object') {
    if (typeof val.type === 'number' && val.loc !== undefined) return rt(val)
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, resolveDeep(v)]))
  }
  return val
}

const cvData = computed(() => resolveDeep(tm(`cv.editions.${edition.value}`)))
const projectTitles = computed(() =>
  resolveDeep(tm(`home.projects.${edition.value}`)).map((p) => p.title).join(' · '),
)

useSeoMeta({
  title: () => `${cvData.value.role} — CV`,
  titleTemplate: '%s | Isaac Quiroz Portfolio',
})

const printCv = () => window.print()

onMounted(async () => {
  restoreEdition(route.query.edicion)
  if (route.query.print !== '1') return
  if (document.fonts?.ready) await document.fonts.ready
  window.print()
})
</script>

<style scoped>
.cv-sheet {
  --color-bg: #f3f2f2;
  --color-text: #201e1d;
  --color-neutral-700: #605d5d;
  --color-neutral-800: #444141;
  background: var(--color-bg);
  color: var(--color-text);
}

.cv-label {
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--color-neutral-700);
  padding-top: 3px;
}

@media print {
  @page { margin: 0; }
  .cv-sheet {
    width: 8.5in;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>
