import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

import TheButton from './UI/TheButton.vue';
import TheContainer from './UI/TheContainer.vue';
import AddFood from './components/addSomething/AddFood.vue';
import ShowFood from './components/food/ShowFood.vue';
import AddIngredient from './components/addSomething/AddIngredient.vue';
import ShowIngredients from './components/ingredients/ShowIngredients.vue';
import PageError from './components/notFound/PageError.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/recipe' },
        { path: '/addRecipe', component: AddFood },
        { path: '/addIngredient', component: AddIngredient },
        { path: '/recipe', component: ShowFood },
        { path: '/ingredient', component: ShowIngredients },
        { path: '/:notFound(.*)', component: PageError },

    ]
});

const app = createApp(App);
app.component('the-button', TheButton);
app.component('the-container', TheContainer);
app.use(router);
app.mount('#app');
