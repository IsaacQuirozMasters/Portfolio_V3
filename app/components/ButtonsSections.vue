<template>
    <section class="flex space-x-4 justify-center my-8">
        <button @click="handleCurrentSection('Desarrollador')" :class="currentSections === 'Desarrollador' ? 'text-white bg-[#304fff] py-2 px-4 rounded-full' : ''">
            Desarrollador
        </button>
        <button @click="handleCurrentSection('Diseñador UX/UI')" :class="currentSections === 'Diseñador UX/UI' ? 'text-white bg-[#304fff] py-2 px-4 rounded-full' : ''">
            Diseñador UX/UI 
        </button>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const currentSections = ref('Desarrollador');
const handleCurrentSection = (section) => {
  currentSections.value = section;
  emit('update:currentSection', section);
};
const emit = defineEmits(['update:currentSection']);
</script>