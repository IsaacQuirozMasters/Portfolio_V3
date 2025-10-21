<template>
    <div class="section-studies">
        <div class="studies-list">
        <div 
            v-for="(study, index) in studies" 
            :key="index" 
            class="study-item"
        >
            <div class="study-info">
            <h3 class="study-institution">{{ study.institution }}</h3>
            <p class="study-degree">{{ study.degree }}</p>
            <p class="study-year">{{ study.year }}</p>
            <ul>
                <li class="list-experience" v-for="(experience, index) in study.experience" :key="index" style="list-style-type:disc;" >
                    <p class="study-experience">{{ experience }}</p>
                </li>
            </ul>
            </div>
                        <img 
            v-if="study.photos.length > index" 
            :src="study.photos[index]" 
            :alt="study.institution" 
            class="study-photo"
            />
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
    background-color: #f9f9f9;
}
.studies-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
}
.study-item {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 250px;
    text-align: center;
    padding: 1rem;
}

.study-photo {
    width: 100%;
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