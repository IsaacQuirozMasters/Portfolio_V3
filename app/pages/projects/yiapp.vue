<template>
    <div class="container">
        <header-project :infoProject="aboutProject" />
        <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-4">Overview</h2>
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-2xl text-black-700 font-semibold">Background</h2>
            </section>
            <section class="grid-2fr">
                <h3 class="text-xl text-blue-700 dark:text-blue-500">
                    <nuxt-img src="/img/yiapp/firjjiyx6rihyzbici9m.webp" alt="imagen de yiapp" :width="'800'"
                        :height="'450'" class="w-full h-auto my-4" loading="lazy"></nuxt-img>
                    <NuxtImg src="/img/yiapp/p2yi.gif" alt="imagen de yiapp" format="gif"></NuxtImg>
                </h3>
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h3 class="text-2xl text-black-700 font-semibold">The Process</h3>
            </section>
            <section class="grid-2fr">
                <nuxt-img src="/img/yiapp/p3yi.gif" alt="process of project" class="w-full h-auto my-4" format="gif" />
                <NuxtImg src="/img/yiapp/qmntwea0jfrg840wtfrn.webp" alt="process of project" class="w-full h-auto my-4"
                    format="webp" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-4">Research</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-sm text-gray-500 italic font-semibold my-2">
                    What’s the point of exploring this solution? Which user’s interactions are involved? Let's see how
                    common user behaviors and patterns can help to enforce these design concepts.
                </p>

                <h3 class="text-2xl text-black-700 font-semibold mt-6">METHOD</h3>
                <ul class="list-disc ml-5 text-gray-600 dark:text-white">
                    <li>USER INTERVIEWS</li>
                    <li>FIELD RESEARCH</li>
                </ul>

                <h4 class="text-lg text-black-700 font-bold mt-4">Goals</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    To understand the user's needs we conducted a user interview to identify their normal flow in an
                    application, find out what problem they would like to solve and understand how an enhanced wearable
                    application can help. With the research we tried to identify areas of opportunity to create in our
                    application.
                </p>

                <h4 class="text-lg text-black-700 font-bold mt-4">Result</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    Thanks to that research we were able to identify the common path of a user to achieve their purchase
                    objective. With the field research we were able to identify the areas of opportunity and from the
                    result we came up with themes such as Multiple Addresses, Multiple Payment Methods and found that
                    the whole multi-click checkout process could be simplified into a single view.
                </p>

                <NuxtImg src="/img/yiapp/wumzenzxgcz6sddpewis.webp"
                    alt="Case study of online clothing sales application" class="w-full h-auto my-4" loading="lazy" />
                <NuxtImg src="/img/yiapp/ppcamo0nasqajxby72v1.webp" alt="Research result" class="w-full h-auto my-4"
                    loading="lazy" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Persona Creation</h2>
            </section>
            <section class="grid-2fr">
                <NuxtImg src="/img/yiapp/mzzbv70ubn4qneqxknzg.webp"
                    alt="Persona Creation 1" class="w-full h-auto my-4" loading="lazy" />
                <NuxtImg src="/img/yiapp/isbrnrbgcfa6i0tdpbaz.webp"
                    alt="Persona Creation 2" class="w-full h-auto my-4" loading="lazy" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">User Journey Map</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    To empathize with users, we also create empathy maps and a user journey map to delve into each stage
                    our personas go through when buying a product.
                </p>
                <NuxtImg src="/img/yiapp/kjw9wrzk4ofhga5k1se1.webp" alt="User Journey Map" class="w-full h-auto my-4"
                    loading="lazy" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">User Flow</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    To understand how we would build the experience we designed the main user flows for the Yi
                    application, The user flow allowed us to see the whole application experience on a holistic level
                    and thus make decisions
                </p>
                <NuxtImg src="/img/yiapp/ppcamo0nasqajxby72v1.webp" alt="User Flow" class="w-full h-auto my-4" loading="lazy" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Architecture Design</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    Once we had gathered the topics and identified the user flows, it was time to start creating an
                    architecture map of how the information would be organized in the design, we brainstormed ideas,
                    separating what did not meet the objectives and saving it for future ideas.
                </p>
                <NuxtImg src="/img/yiapp/acebs7prldg43oi1u0ds.webp" alt="Architecture Design Brainstorming"
                    class="w-full h-auto my-4" loading="lazy" />
                <p class="text-base text-gray-600 dark:text-white my-2">
                    After the brainstorming we could clearly complete the information architecture by organizing each
                    view according to its data, this also allows us to scale the application in the future and divide it
                    into components making it easier to iterate and improve if required.
                </p>
                <NuxtImg src="/img/yiapp/English.svg" alt="Information Architecture" class="w-full h-auto my-4"
                    loading="lazy" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Crazy Eight</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    Once we had all the information ready and organized we started to create our mockups based on an
                    exercise called "Crazy Eight" this helped us to extend the panorama of identifying different ways of
                    views and based on that to choose a final design gathering elements from the other views evaluating
                    simplicity, accessibility, inclusiveness and finally the design.
                </p>
                <NuxtImg src="/img/yiapp/ucye57h5arwlad59kssg.webp" alt="Crazy Eight"
                    class="w-full h-auto my-4" loading="lazy" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Wireframes</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    Iterating on the paper wireframes we started to create the digital wireframes, this helped us to
                    identify real spaces within a device, it also clarified our ideas of where the final design was
                    going, at this stage I learned that the elements must be understandable for all people and not just
                    for me, so every thing that people didn't understand had a label.
                </p>
            </section>
        </section>
        <NuxtImg src="/img/yiapp/ehsyzoprlpi8q0e5fvba.webp" alt="Wireframes Portrait" class="w-full h-auto my-4"
            loading="lazy" />
        <NuxtImg src="/img/yiapp/Wireframe.png" alt="Wireframes Landscape" class="w-full h-auto my-4"
            loading="lazy" />
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Low Fidelity Prototype</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    After confirming our scenarios we started to put together some fundamentals of Yi, we wanted the
                    user to choose their product and buy it, as if each step was a small part of the whole thing. The
                    low fidelity wireframes helped us rule out some features that were not as fundamental as the
                    shopping cart search.
                </p>
                <NuxtImg src="/img/yiapp/prototypeLow.gif" alt="Low Fidelity Prototype" class="w-full h-auto my-4"
                    format="gif" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Usability Testing Plan</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    We ran several participants through our low-fidelity prototype to better understand their patterns
                    of interaction patterns. Each of them was given the simple task to buy a product. It wasn't the
                    difficult task, but it was how they thought through the process of buying a product we were
                    interested in.
                </p>

                <h4 class="text-lg text-black-700 font-bold mt-4">📝 Design usability study survey</h4>
                <ul class="list-none space-y-2 mt-2 text-gray-600 dark:text-white">
                    <li>❓ Did you find it <strong>easy or difficult</strong> to buy a product? If your answer is very
                        difficult or moderately difficult, <strong>what made it difficult for you</strong></li>
                    <li>❓ If you could change anything about the process, what would you change?</li>
                    <li>❓ Did you find it easy or difficult to add the product to your wish list?</li>
                    <li>❓ I find it easy to navigate the application. <span class="font-semibold">KPI</span></li>
                    <li>❓ There are inconsistencies within the app. <span class="font-semibold">KPI</span></li>
                    <li>❓ I would imagine that most people would learn to use this app quickly. <span
                            class="font-semibold">KPI</span></li>
                    <li>❓ I think I would use this app frequently. <span class="font-semibold">KPI</span></li>
                </ul>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    During the survey we learned that the user expected a deeper accessibility that translates into easy
                    navigation and thanks to that we came up with themes and then the following solutions until we have
                    solved the problem.
                </p>
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Mockups</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    After solidifying the foundational framework, we were able to take the feedback from our testing
                    sessions and start to form our final comps. We used color sparingly throughout the product to help
                    communicate interactable elements to the user and guide it sequentially to the main objective.
                </p>
            </section>
        </section>
                <NuxtImg src="/img/yiapp/dac8tpkejvrr86z1nvpi.webp" alt="Mockups" class="w-full h-auto my-4" loading="lazy" />

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Design System</h2>
            </section>
            <section class="grid-2fr">
                <h4 class="text-lg text-black-700 font-bold mt-2">Creativity, Money and Freshness</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    The green color was selected to show creativity and innovation on each product that is sold, the
                    semicircular corners represent fun but confidence by not being so circular.
                </p>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    The brand logo is a creation of two names Yohana Isaac, the bag in the cart is the identity of the
                    brand as objectively the purchases in the application can be organized by bags and then add to cart
                    but you can also add the products individually.
                </p>
            </section>
        </section>
 <NuxtImg src="/img/yiapp/yzwtywyema8uvmztgj3a.webp" alt="Design System" class="w-full h-auto my-4"
                    loading="lazy" />
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">High Fidelity Prototype</h2>
            </section>
            <section class="grid-2fr">
                <NuxtImg src="/img/yiapp/202402102303.gif" alt="High Fidelity Prototype" class="w-1/2 h-auto my-4"
                    format="gif" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">Conclusion</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    Yi is a multi-brand, multi-payment, multi-shipping address, multi-packaging apparel retail app.
                </p>
            </section>
        </section>
    </div>

</template>
<script setup>
import HeaderProject from '@/components/HeaderProject.vue'
import { ref } from 'vue';

const aboutProject = ref({
    projectType: 'Mobile App - This design is a multi-brand and multi-delivery online clothing store application for the general public.',
    contribution: 'UI/UX Design, Prototipado, Investigación de usuarios',
    myRole: 'UI/UX Designer',
    timeline: 'January 2023 - April 2023',
    title: 'YiApp e-commerce of clothing and accessories',
    image: '/img/yiapp/yofrzpjwfxwjao7e2jub.webp',
    description: 'YiApp es una aplicación móvil de comercio electrónico especializada en ropa y accesorios. La plataforma ofrece una experiencia de compra intuitiva y segura, permitiendo a los usuarios explorar una amplia variedad de productos, realizar compras rápidas y gestionar sus pedidos de manera eficiente. Con un diseño atractivo y funcionalidades avanzadas, YiApp se posiciona como una opción ideal para los amantes de la moda que buscan conveniencia y estilo en un solo lugar.'
})
</script>
<style scoped>
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 20px;
}
</style>