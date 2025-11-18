<template>
<div class="container">
    <h1 class="text-bold text-5xl">
    YiApp e-commerce of clothing and accessories
    </h1>
   <section class="header">
     <div class="historyBase">
        <div>
            <h2 class="text-xl font-semibold my-2">Tipo de Proyecto</h2>
            <p class="text-md">{{ infoProject.projectType }}</p>
        </div>
        <div>
            <h2 class="text-xl font-semibold my-2">Mi Rol</h2>
            <p class="text-md">{{ infoProject.myRole }}</p>
        </div>
        <div>
            <h2 class="text-xl font-semibold my-2">Contribución</h2>
            <p class="text-md">{{ infoProject.contribution }}</p>
        </div>
        <div>
            <h2 class="text-xl font-semibold my-2">Resultado</h2>
            <p class="text-md">{{ infoProject.outCome }}</p>
        </div>
        <div>
            <h2 class="text-xl font-semibold my-2">Línea de Tiempo</h2>
            <p class="text-md">{{ infoProject.timeline }}</p>
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
</div>
</template>
<script>
import { defineProps } from 'vue';

const props = defineProps({
    infoProject: {
      type: Object,
    }
});

</script>
<style scoped>

.container {
    max-width: 800px;
    margin: 4rem auto;
    padding: 20px;
}
.historyBase {
    display: grid;
    grid-template-columns: 100px 100px;
    gap: 10px;
}
.header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
}
</style>