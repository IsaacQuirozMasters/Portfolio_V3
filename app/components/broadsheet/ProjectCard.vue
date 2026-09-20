<template>
  <div v-reveal="{ delay }" :style="{ gridColumn: `span ${project.span}` }">
    <NuxtLink
      v-magnet
      :to="to"
      class="card card-lift group h-full overflow-hidden"
      style="display:block;color:var(--color-text)"
    >
      <div class="relative flex items-center justify-center overflow-hidden" style="aspect-ratio:16/10;background:var(--color-surface)">
        <img
          :src="project.image"
          :alt="project.title"
          class="block h-full w-full object-cover transition-transform duration-[.8s] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
        >
        <span v-dot-screen />
      </div>
      <div class="p-[var(--space-3)]">
        <div class="flex items-start justify-between gap-2">
          <div class="card-kicker" style="font-size:10.5px;letter-spacing:.16em;color:var(--color-accent-700)">{{ project.kicker }}</div>
          <a
            v-if="project.link"
            :href="project.link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="tag tag-outline shrink-0 items-center gap-1"
            style="font-size:10px"
            :aria-label="project.link.type === 'github' ? $t('common.viewCode') : $t('common.viewSite')"
            @click.stop
          >
            <Icon :name="project.link.type === 'github' ? 'ph:github-logo' : 'ph:arrow-square-out'" size="12px" />
            {{ project.link.type === 'github' ? $t('common.viewCode') : $t('common.viewSite') }}
          </a>
          <span v-else-if="project.private" class="tag tag-neutral shrink-0 items-center gap-1" style="font-size:10px">
            <Icon name="ph:lock-simple" size="12px" />
            {{ $t('common.private') }}
          </span>
        </div>
        <div class="card-title mt-1" style="font-size:22px">{{ project.title }}</div>
        <div class="card-body mt-1.5 leading-[1.5]" style="font-size:14px;color:var(--color-neutral-800)">{{ project.blurb }}</div>
        <div v-if="project.tags && project.tags.length" class="flex flex-wrap gap-1.5 mt-2">
          <span v-for="(tech, i) in project.tags" :key="i" class="tag tag-accent-2" style="font-size:10px">{{ tech }}</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
  to: { type: String, required: true },
  delay: { type: Number, default: 0 },
})
</script>
