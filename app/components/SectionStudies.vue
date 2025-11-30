<template>
    <div class="section-studies dark:bg-gray-700 bg-gray-100">
        <div class="studies-list ">
        <div 
            v-for="(study, index) in studies" 
            :key="index" 
            class="study-item dark:bg-gray-900 bg-white"
        >
            <div class="study-info dark:text-white">
            <h3 class="study-institution dark:text-white dark:border-white text-gray-700">{{ study.institution }}</h3>
            <p class="study-degree dark:text-white dark:border-white text-gray-700">{{ study.degree }}</p>
            <p class="study-year dark:text-white dark:border-white text-gray-700">{{ study.year }}</p>
            <ul>
                <li class="list-experience dark:text-white dark:border-white" v-for="(experience, index) in study.experience" :key="index" style="list-style-type:disc;" >
                    <p class="study-experience dark:text-white dark:border-white text-gray-700">{{ experience }}</p>
                </li>
            </ul>
            </div>
            <div class="flex flex-col md:flex-row gap-4">
            <img 
            v-for="(photos, indice) in study.photos"
            :src="photos" 
            :alt="study.institution" 
            class="study-photo dark:border-white dark:border-2"
            />
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
        const props = defineProps({ 
            studies: {
                type: Array,
                required: true
            },
            })
</script>
<style scoped>
.section-studies {
    padding: 2rem;
}
.studies-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
}
.study-item {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: auto;
    text-align: center;
    padding: 1rem;
}

.study-photo {
    width: 300px;
    height: auto;
    border-bottom: 1px solid #eee;
    margin-bottom: 1rem;
}
.study-institution {
    font-size: 1.2rem;
    margin: 0.5rem 0;
}
.study-degree {
    font-size: 1rem;
    color: #666;
    margin: 0.25rem 0;
    text-align: start;
}
.study-year {
    font-size: 0.9rem;
    color: #999;
}

.study-info {
    margin-bottom: 1rem;
    justify-items: start;
}

.list-experience {
    text-align: start;
    margin-left: 1rem;
    color: #444;
    letter-spacing: normal;
    line-height: 1.4;
}
</style>