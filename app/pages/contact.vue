<template>
  <div class="relative mx-auto w-full max-w-[1120px] px-4 pb-[var(--space-8)] sm:px-[var(--space-8)]">
    <!-- Top rail navigation -->
    <div
      v-magnet-scope
      class="flex items-center justify-between py-[var(--space-4)] text-[11.5px] uppercase tracking-[.16em]"
      style="color:var(--color-neutral-700)"
    >
      <NuxtLink v-magnet :to="localePath('/')" class="transition-colors hover:text-[var(--color-accent)]">
        {{ $t('home.contactPage.railHome') }}
      </NuxtLink>
      <span>{{ $t('home.contactPage.railCurrent') }}</span>
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
    </div>

    <div class="h-[3px] w-full" style="background:var(--color-text)" />

    <!-- Main grid -->
    <div class="grid grid-cols-1 items-start gap-[var(--space-8)] pt-[var(--space-8)] md:grid-cols-12">
      <!-- Left Column: Form -->
      <div class="md:col-span-7">
        <h1 v-reveal class="m-0 text-[54px] leading-[.86] tracking-[-.03em] sm:text-[76px] md:text-[92px]">
          {{ $t('home.contactPage.heading') }}<span style="color:var(--color-accent-700)">.</span>
        </h1>
        <p v-reveal="{ delay: 60 }" class="my-[var(--space-4)] mb-[var(--space-6)] max-w-[44ch] text-[18px] leading-[1.6]" style="color:var(--color-neutral-800)">
          {{ $t('home.contactPage.lead') }}
        </p>

        <form v-reveal="{ delay: 120 }" class="grid max-w-[640px] gap-[var(--space-4)]" @submit.prevent="handleSubmit">
          <div class="field">
            <label for="c-name" class="block text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
              {{ $t('home.contactPage.form.nameLabel') }}
            </label>
            <input
              id="c-name"
              v-model="form.name"
              type="text"
              required
              :placeholder="$t('home.contactPage.form.namePlaceholder')"
              class="contact-input w-full rounded-none border-0 border-b border-[var(--color-divider)] bg-transparent py-[var(--space-2)] text-[22px] outline-none transition-colors"
            >
          </div>

          <div class="field">
            <label for="c-mail" class="block text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
              {{ $t('home.contactPage.form.emailLabel') }}
            </label>
            <input
              id="c-mail"
              v-model="form.email"
              type="email"
              required
              :placeholder="$t('home.contactPage.form.emailPlaceholder')"
              class="contact-input w-full rounded-none border-0 border-b border-[var(--color-divider)] bg-transparent py-[var(--space-2)] text-[22px] outline-none transition-colors"
            >
          </div>

          <div class="field">
            <label for="c-msg" class="block text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
              {{ $t('home.contactPage.form.projectLabel') }}
            </label>
            <textarea
              id="c-msg"
              v-model="form.message"
              rows="4"
              required
              :placeholder="$t('home.contactPage.form.projectPlaceholder')"
              class="contact-input w-full resize-y rounded-none border-0 border-b border-[var(--color-divider)] bg-transparent py-[var(--space-2)] text-[20px] leading-[1.5] outline-none transition-colors"
            />
          </div>

          <!-- Contact types tag row -->
          <div class="flex flex-wrap items-center gap-[var(--space-2)]">
            <span class="w-full text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
              {{ $t('home.contactPage.form.typeLabel') }}
            </span>
            <button
              v-for="typeKey in ['freelance', 'fulltime', 'consulting', 'frontend']"
              :key="typeKey"
              v-magnet
              type="button"
              class="tag cursor-pointer transition-all duration-200"
              :class="selectedType === typeKey ? 'tag-accent' : 'tag-outline'"
              @click="selectedType = typeKey"
            >
              {{ $t(`home.contactPage.form.types.${typeKey}`) }}
            </button>
          </div>

          <!-- Submit button & response state -->
          <div class="mt-[var(--space-2)] flex flex-wrap items-center gap-[var(--space-4)]">
            <button
              v-magnet
              type="submit"
              class="btn btn-primary min-w-[230px] justify-center px-[28px] py-[14px] text-[18px] transition-all duration-300"
              :disabled="sendingState === 'sending'"
            >
              <span v-if="sendingState === 'idle'">{{ $t('home.contactPage.form.buttonIdle') }}</span>
              <span v-else-if="sendingState === 'sending'">{{ $t('home.contactPage.form.buttonSending') }}</span>
              <span v-else-if="sendingState === 'sent'">{{ $t('home.contactPage.form.buttonSent') }}</span>
              <span v-else>{{ $t('home.contactPage.form.buttonError') }}</span>
            </button>

            <span
              class="text-[14px] italic transition-opacity duration-400"
              :class="[
                sendingState === 'sent' ? 'opacity-100 text-[var(--color-accent-700)]' :
                sendingState === 'error' ? 'opacity-100 text-[var(--color-accent-2-700)]' : 'opacity-0'
              ]"
            >
              {{ sendingState === 'error' ? $t('home.contactPage.form.errorNote') : $t('home.contactPage.form.sentNote') }}
            </span>
          </div>
        </form>
      </div>

      <!-- Right Column: Info -->
      <div v-reveal="{ delay: 180 }" class="flex flex-col gap-[var(--space-6)] md:col-span-5 md:border-l md:border-[var(--color-divider)] md:pl-[var(--space-6)]">
        <div>
          <div class="text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
            {{ $t('home.contactPage.info.locationLabel') }}
          </div>
          <div class="mt-1.5 whitespace-pre-line text-[21px] leading-snug">
            {{ $t('home.contactPage.info.locationValue') }}
          </div>
        </div>

        <div>
          <div class="text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
            {{ $t('home.contactPage.info.languagesLabel') }}
          </div>
          <div class="mt-1.5 text-[21px]">
            {{ $t('home.contactPage.info.languagesValue') }}
          </div>
        </div>

        <div>
          <div class="text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
            {{ $t('home.contactPage.info.responseLabel') }}
          </div>
          <div class="mt-1.5">
            <CmykNum value="24h" class="!text-[52px]" />
          </div>
        </div>

        <div>
          <div class="text-[11px] uppercase tracking-[.16em]" style="color:var(--color-neutral-700)">
            {{ $t('home.contactPage.info.directLabel') }}
          </div>
          <div class="mt-1.5 grid gap-0.5 text-[19px]">
            <a v-magnet :href="`mailto:${$t('home.contactPage.info.email')}`" class="hover:underline">
              {{ $t('home.contactPage.info.email') }}
            </a>
            <a v-magnet href="https://linkedin.com/in/isaac-quiroz-madrigal" target="_blank" rel="noopener" class="hover:underline">
              {{ $t('home.contactPage.info.linkedin') }}
            </a>
            <a v-magnet href="https://github.com/IsaacQuirozMasters" target="_blank" rel="noopener" class="hover:underline">
              {{ $t('home.contactPage.info.github') }}
            </a>
            <a v-magnet href="https://www.behance.net/isaacquiroz2" target="_blank" rel="noopener" class="hover:underline">
              {{ $t('home.contactPage.info.behance') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div v-reveal class="mt-[var(--space-8)] flex flex-col items-start justify-between gap-4 border-t-[6px] border-[var(--color-text)] pt-[var(--space-3)] sm:flex-row sm:items-baseline">
      <div class="text-[15px]" style="color:var(--color-neutral-700)">
        {{ $t('home.contactPage.footer.scheduleText') }}
      </div>
      <button
        v-magnet
        type="button"
        class="btn btn-secondary cursor-pointer"
        @click="isCalModalOpen = true"
      >
        {{ $t('home.contactPage.footer.scheduleCta') }}
      </button>
    </div>

    <!-- Cal.com Modal -->
    <CalModal v-model="isCalModalOpen" cal-link="isaac-quiroz-madrigal-pj3g6k" />
  </div>
</template>

<script setup>
import CmykNum from '@/components/broadsheet/CmykNum.vue'
import CalModal from '@/components/CalModal.vue'

const { locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const isCalModalOpen = ref(false)

const form = ref({
  name: '',
  email: '',
  message: '',
})

const selectedType = ref('freelance')
const sendingState = ref('idle')

const localeLinks = computed(() => [
  { code: 'es', path: switchLocalePath('es'), active: locale.value === 'es' },
  { code: 'en', path: switchLocalePath('en'), active: locale.value === 'en' },
  { code: 'pt', path: switchLocalePath('pt'), active: locale.value === 'pt' },
])

const handleSubmit = () => {
  if (sendingState.value !== 'idle') return
  sendingState.value = 'sending'

  setTimeout(() => {
    sendingState.value = 'sent'
    form.value = { name: '', email: '', message: '' }
  }, 1100)

  setTimeout(() => {
    sendingState.value = 'idle'
  }, 5700)
}

useSeoMeta({
  title: 'Contacto | Isaac Quiroz Portfolio',
  description: 'Ponte en contacto con Isaac Quiroz Madrigal para proyectos de diseño UX/UI o desarrollo front-end.',
})
</script>

<style scoped>
.contact-input:focus {
  border-bottom-color: var(--color-accent) !important;
}
</style>
