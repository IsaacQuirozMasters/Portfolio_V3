<template>
    <h1 class="text-bold text-5xl">
    YiApp e-commerce of clothing and accessories
    </h1>
   <section class="header">
     <div class="historyBase">
        <div v-if="infoProject.projectType">
            <h2 class="text-regular font-semibold my-2">Tipo de Proyecto</h2>
            <p class="text-sm text-gray-500">{{ infoProject.projectType }}</p>
        </div>
        <div v-if="infoProject.myRole">
            <h2 class="text-regular font-semibold my-2">Mi Rol</h2>
            <p class="text-sm text-gray-500">{{ infoProject.myRole }}</p>
        </div>
        <div v-if="infoProject.contribution">
            <h2 class="text-regular font-semibold my-2">Contribución</h2>
            <p class="text-sm text-gray-500">{{ infoProject.contribution }}</p>
        </div>
        <div v-if="infoProject.outCome">
            <h2 class="text-regular font-semibold my-2">Resultado</h2>
            <p class="text-sm text-gray-500">{{ infoProject.outCome }}</p>
        </div>
        <div v-if="infoProject.timeline">
            <h2 class="text-regular font-semibold my-2">Línea de Tiempo</h2>
            <p class="text-sm text-gray-500">{{ infoProject.timeline }}</p>
        </div>
    </div>
    <div>
        <NuxtImg
            src="/img/yiapp/yofrzpjwfxwjao7e2jub.webp"
            alt="portada de proyecto"
            class="w-full h-auto my-4"
            loading="lazy"
        />
    </div>
   </section>
<p class="description sr-only">
    YiApp es una aplicación móvil de comercio electrónico especializada en ropa y accesorios. La plataforma ofrece una experiencia de compra intuitiva y segura, permitiendo a los usuarios explorar una amplia variedad de productos, realizar compras rápidas y gestionar sus pedidos de manera eficiente. Con un diseño atractivo y funcionalidades avanzadas, YiApp se posiciona como una opción ideal para los amantes de la moda que buscan conveniencia y estilo en un solo lugar.   
</p>

</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    infoProject: {
      type: Object,
    }
});

</script>
<style scoped>
.historyBase {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
}
.header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
}

@media (max-width: 640px) {
    .historyBase {
        grid-template-columns: 1fr;
    }

    .header {
        grid-template-columns: 1fr;
    }
}

</style>