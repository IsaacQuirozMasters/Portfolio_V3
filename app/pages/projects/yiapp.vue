<template>
    <div class="container">
            <header-project :infoProject="aboutProject" />
              <h2 class="text-xl text-blue-700 mt-4">Overview</h2>
    <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
        <section class="grid-1fr">
          <h2 class="text-2xl text-black-700 font-semibold">Background</h2>
        </section>
        <section class="grid-2fr">
            <h3 class="text-xl text-blue-700">
                <nuxt-img 
                src="/img/yiapp/firjjiyx6rihyzbici9m.webp"
                alt="imagen de yiapp"
                :width="'800'"
                :height="'450'"
                class="w-full h-auto my-4"
                loading="lazy"
                ></nuxt-img>
                <NuxtImg 
                src="/img/yiapp/p2yi.gif"
                alt="imagen de yiapp"
                format="gif"
                ></NuxtImg>
            </h3>
        </section>
    </section>
        <section class="flex flex-col my-4">
          <h3 class="text-2xl text-black-700 font-semibold">The Process</h3>
          <nuxt-img
            src="/img/yiapp/p3yi.gif"
            alt="process of project"
            class="w-full h-auto my-4"
            format="gif"
        />
        <NuxtImg
            src="/img/yiapp/qmntwea0jfrg840wtfrn.webp"
            alt="process of project"
            class="w-full h-auto my-4"
            format="webp"
        />
        </section>
        <h2 class="text-xl text-blue-700 mt-4">Research</h2>
        <span class="text-sm text-gray-500">What’s the point of exploring this solution? Which user’s interactions are involved? Let's see how common user behaviors and patterns can help to enforce these design concepts.</span>
        <h3 class="text-2xl text-black-700 font-semibold">Method</h3>
        <ul><li>User Interviews</li><li>Field Research</li></ul>
    </div>

</template>
<script setup>
import HeaderProject from '@/components/HeaderProject.vue'
import { ref } from 'vue';

const aboutProject = ref({
    projectType: 'Mobile App - This design is a multi-brand and multi-delivery online clothing store application for the general public.',
    contribution: 'UI/UX Design, Prototipado, Investigación de usuarios',
    myRole: 'UI/UX Designer',
    timeline: 'January 2023 - April 2023'}
)
</script>
<style scoped>
.container {
    max-width: 900px;
    margin: 4rem auto;
    padding: 20px;
}
</style>