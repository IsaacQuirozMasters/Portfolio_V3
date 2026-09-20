<template>
  <div class="relative mx-auto w-full max-w-[1120px] pb-[var(--space-8)]">
    <div class="bg-dots absolute -right-[60px] -top-[40px] z-0 h-[420px] w-[420px]" />

    <div class="relative z-[1]">
      <div class="px-[var(--space-8)]">
        <Masthead />
      </div>

      <div v-magnet-scope class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <div v-magnet class="seg flex items-center p-1.5 bg-[var(--color-bg)]/85 backdrop-blur-xl border border-[var(--color-divider)] shadow-2xl rounded-full transition-all duration-300 hover:shadow-accent/20">
          <label
            class="seg-opt !border-l-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer select-none"
            :class="edition === 'design' ? 'bg-[var(--color-accent)] text-white shadow-md scale-[1.02]' : 'text-[var(--color-neutral-700)] hover:text-[var(--color-text)] hover:bg-black/5 dark:hover:bg-white/5'"
          >
            <input type="radio" name="edicion-home" value="design" :checked="edition === 'design'" @change="setEdition('design')">
            <Icon name="ph:palette" size="18px" />
            <span>{{ $t('home.editionSwitch.design') }}</span>
          </label>

          <label
            class="seg-opt !border-l-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer select-none"
            :class="edition === 'code' ? 'bg-[var(--color-accent)] text-white shadow-md scale-[1.02]' : 'text-[var(--color-neutral-700)] hover:text-[var(--color-text)] hover:bg-black/5 dark:hover:bg-white/5'"
          >
            <input type="radio" name="edicion-home" value="code" :checked="edition === 'code'" @change="setEdition('code')">
            <Icon name="ph:code" size="18px" />
            <span>{{ $t('home.editionSwitch.code') }}</span>
          </label>
        </div>
      </div>

      <div class="grid grid-cols-12 items-start gap-[var(--space-6)] px-[var(--space-8)] pt-[var(--space-6)]">
        <div v-reveal="{ delay: 120 }" class="relative col-span-4">
          <div class="avatar-halo" style="left:-8%;right:-8%;top:-4%;bottom:6%" />
          <FaceTracker :alt="$t('home.avatar.alt')" />
        </div>

        <div id="sobre-mi" v-reveal="{ delay: 180 }" class="col-span-5 scroll-mt-8">
          <div class="mb-[var(--space-2)] text-[11px] uppercase tracking-[.16em]" style="color:var(--color-accent-700)">
            {{ $t('home.about.kicker') }}
          </div>
          <p class="m-0 mb-[var(--space-3)] text-[26px] leading-[1.28]" style="text-wrap:pretty">{{ $t('home.about.lead') }}</p>
          <p class="m-0 text-[15px] leading-[1.62]" style="color:var(--color-neutral-800);text-wrap:pretty">{{ $t('home.about.body') }}</p>
          <div v-magnet-scope class="mt-[var(--space-4)] flex gap-[var(--space-4)]">
            <NuxtLink v-magnet :to="localePath(`/cv?print=1&edicion=${editionQuery}`)" class="btn btn-primary">{{ $t('home.about.cvButton') }}</NuxtLink>
            <NuxtLink v-magnet :to="localePath(`/cv?edicion=${editionQuery}`)" class="btn btn-ghost">{{ $t('home.about.cvGhost') }}</NuxtLink>
          </div>
        </div>

        <div v-reveal="{ delay: 240 }" class="col-span-3">
          <div class="mb-[var(--space-2)] text-[11px] uppercase tracking-[.16em] transition-colors duration-300" style="color:var(--color-neutral-700)">
            {{ $t('home.availability.kicker') }}
          </div>
          <CmykNum :value="$t('home.availability.value')" :class="edition === 'code' ? 'cmyk-code' : 'cmyk-design'" />
          <p class="mt-[var(--space-3)] text-[14px] leading-[1.55] transition-colors duration-300" style="color:var(--color-neutral-800)">{{ $t('home.availability.body') }}</p>
          <div class="mt-[var(--space-3)] flex flex-wrap gap-[var(--space-1)]">
            <span
              v-for="(tag, i) in $tm('home.availability.tags')"
              :key="i"
              class="tag transition-all duration-300"
              :class="edition === 'code' ? 'tag-accent-2' : 'tag-outline'"
            >{{ rt(tag) }}</span>
          </div>
        </div>
      </div>

      <div id="proyectos" class="scroll-mt-8 px-[var(--space-8)] pt-[var(--space-8)]">
        <div class="flex items-baseline justify-between pt-[var(--space-2)]" style="border-top:3px solid var(--color-text)">
          <h2 class="m-0 text-[34px]">{{ $t('home.projects.heading') }}</h2>
          <span class="text-[12px] uppercase tracking-[.14em]" style="color:var(--color-neutral-700)">
            {{ $t('home.projects.count', { count: projects.length, edition: editionLabel }) }}
          </span>
        </div>
        <div ref="projectsGrid" v-magnet-scope class="mt-[var(--space-4)] grid grid-cols-6 gap-[var(--space-4)]">
          <ProjectCard
            v-for="(project, i) in projects"
            :key="project.id"
            :project="project"
            :to="projectRoute(project.id)"
            :delay="i * 70"
          />
        </div>
      </div>

      <div class="pt-[var(--space-8)]">
        <div class="px-[var(--space-8)] text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
          {{ $t('home.tools.heading') }} · {{ editionLabel }}
        </div>
        <div class="tools-container group relative mt-[var(--space-2)] overflow-hidden py-[var(--space-3)] transition-all duration-300" style="border-top:1px solid var(--color-divider);border-bottom:1px solid var(--color-divider)">
          <div class="tools-marquee-wrapper marquee-track flex flex-nowrap">
            <div class="tools-track flex flex-nowrap items-center whitespace-nowrap">
              <template v-for="(tool, index) in toolsList" :key="index">
                <span class="tool-item-wrap inline-flex items-center">
                  <span class="tool-item inline-block text-[28px] sm:text-[32px] italic cursor-pointer px-1 py-0.5">
                    {{ tool }}
                  </span>
                  <span class="tool-separator pr-5 text-[22px] opacity-40 select-none">·</span>
                </span>
              </template>
            </div>
            <div class="tools-track-dup flex flex-nowrap items-center whitespace-nowrap" aria-hidden="true">
              <template v-for="(tool, index) in toolsList" :key="'dup-' + index">
                <span class="tool-item-wrap inline-flex items-center">
                  <span class="tool-item inline-block text-[28px] sm:text-[32px] italic cursor-pointer px-1 py-0.5">
                    {{ tool }}
                  </span>
                  <span class="tool-separator pr-5 text-[22px] opacity-40 select-none">·</span>
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 items-start gap-[var(--space-6)] px-[var(--space-8)] pt-[var(--space-8)]">
        <div v-reveal class="col-span-7">
          <h2 class="m-0 mb-[var(--space-3)] pt-[var(--space-2)] text-[30px]" style="border-top:3px solid var(--color-text)">
            {{ $t('home.experience.heading') }}
          </h2>
          <table class="table" style="font-size:14.5px">
            <tbody>
              <tr v-for="row in experienceRows" :key="row.role">
                <td class="w-[150px] align-top" style="color:var(--color-neutral-700)">{{ row.date }}</td>
                <td>
                  <strong>{{ row.role }}</strong>
                  <div style="color:var(--color-neutral-700)">{{ row.detail }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="estudios" v-reveal="{ delay: 80 }" class="col-span-5 scroll-mt-8">
          <h2 class="m-0 mb-[var(--space-3)] pt-[var(--space-2)] text-[30px]" style="border-top:3px solid var(--color-text)">
            {{ $t('home.studies.heading') }}
          </h2>
          <div class="flex flex-col gap-[var(--space-3)]">
            <div v-for="item in studiesItems" :key="item.institution">
              <div class="text-[19px]">{{ item.institution }}</div>
              <div class="text-[14px]" style="color:var(--color-neutral-700)">{{ item.meta }}</div>    <div class="mt-[var(--space-4)] flex gap-[var(--space-2)]">
            <a v-if="item.link" v-magnet class="tag tag-outline" :href="item.link" target="_blank" rel="noopener">
              {{ $t('home.studies.certificatesLink') }}
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal class="mx-[var(--space-8)] mt-[var(--space-8)] flex items-center justify-between gap-[var(--space-6)] pt-[var(--space-4)]" style="border-top:6px solid var(--color-text)">
        <div>
          <div class="text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">{{ $t('home.contact.kicker') }}</div>
          <div class="mt-1.5 text-[40px] leading-[1.1]">{{ $t('home.contact.title') }}</div>
        </div>
        <NuxtLink v-magnet :to="localePath('/contact')" class="btn btn-primary" style="font-size:17px;padding:14px 26px">
          {{ $t('home.contact.cta') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import Masthead from '@/components/broadsheet/Masthead.vue'
import ProjectCard from '@/components/broadsheet/ProjectCard.vue'
import CmykNum from '@/components/broadsheet/CmykNum.vue'

const { t, tm, rt } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const { edition, setEdition, initEdition, restoreEdition } = useEdition()

// Deterministic from the URL — safe during SSR, keeps hydration consistent.
initEdition(route.query.edicion)

useSeoMeta({
  title: 'Isaac Quiroz Portfolio',
  titleTemplate: '%s | Isaac Quiroz Portfolio',
  description: 'Isaac Quiroz Madrigal — Diseñador UX/UI & Front-end en Cancún, México.',
  ogTitle: 'Isaac Quiroz Portfolio',
  ogDescription: 'Isaac Quiroz Madrigal — Diseñador UX/UI & Front-end en Cancún, México.',
  ogImage: 'https://isaacquirozmadrigal.com/group.png',
  ogUrl: 'https://isaacquirozmadrigal.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Isaac Quiroz Portfolio',
  twitterDescription: 'Isaac Quiroz Madrigal — Diseñador UX/UI & Front-end en Cancún, México.',
  twitterImage: 'https://isaacquirozmadrigal.com/group.png',
})

// tm() returns compiled message AST nodes for every string leaf, not raw
// strings — only rt() evaluates a leaf back into text. Anything from tm()
// that's used as more than display text (object keys, v-bind values, grid
// spans) must be resolved through this before use, or it crashes on access.
const resolveMessageDeep = (val) => {
  if (Array.isArray(val)) return val.map(resolveMessageDeep)
  if (val && typeof val === 'object') {
    if (typeof val.type === 'number' && val.loc !== undefined) return rt(val)
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, resolveMessageDeep(v)]))
  }
  return val
}

const editionLabel = computed(() => t(`home.masthead.editionLabel.${edition.value}`))
const editionQuery = computed(() => (edition.value === 'code' ? 'codigo' : 'diseno'))
const projects = computed(() => resolveMessageDeep(tm(`home.projects.${edition.value}`)))
const toolsRun = computed(() => t(`home.tools.${edition.value}`))
const toolsList = computed(() =>
  toolsRun.value
    ? toolsRun.value.split('·').map((s) => s.trim()).filter(Boolean)
    : []
)
const experienceRows = computed(() => resolveMessageDeep(tm('home.experience.rows')))
const studiesItems = computed(() => resolveMessageDeep(tm('home.studies.items')))

const PROJECT_ROUTES = {
  yiapp: '/projects/yiapp',
  freelearn: '/projects/freelearn',
  citizen: '/projects/citizen',
  otif: '/projects/otif',
  propiedades: '/projects/propiedades',
  propiedadesDev: '/projects/front-end/propiedades',
  virturecrm: '/projects/front-end/virture-crm',
  estancias: '/projects/front-end/estancias',
  zooapp: '/projects/front-end/zoo-app',
  nineth: '/projects/front-end/nineth',
}
const projectRoute = (id) => localePath(PROJECT_ROUTES[id] || '/projects')

const projectsGrid = ref(null)

const reducedMotion = () => import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const replate = () => {
  if (reducedMotion()) return
  const grid = projectsGrid.value
  if (!grid) return
  ;[...grid.children].forEach((el, i) => {
    el.style.animation = 'none'
    // eslint-disable-next-line no-void
    void el.offsetWidth
    el.style.animation = `bs-replate .6s ${i * 45}ms cubic-bezier(.2,.8,.2,1) both`
  })
}

watch(edition, async () => {
  await nextTick()
  replate()
})

onMounted(() => {
  restoreEdition(route.query.edicion)
})
</script>
