<script>
import { store } from '../store';

export default {
    name: "AppMain",
    data() {
        return {
            store
        };
    },
    methods: {
        setActive(index) {
            this.store.active = index;
        }
    }
}
</script>

<template>
    <main>
        <div class="flex h-screen container mx-auto items-center pt-20 ">
            <ul class="w-1/4 h-4/5 bg-gray-100 overflow-y-scroll">
                <li class=" py-4 px-4 text-xl hover:bg-sky-800 hover:text-slate-200 transition duration-200 cursor-pointer"
                    v-for="element, index in store.questions" @click="setActive(index)"
                    :class="{ 'bg-sky-800 text-slate-200': index === store.active }">
                    {{ element.domanda }}
                </li>
            </ul>
            <div class="w-3/4 h-4/5 bg-gray-700 p-20 text-slate-100 text-xl">
                <textarea class="w-full h-full bg-transparent resize-none border-none outline-none focus:outline-none"
                    :value="store.questions[store.active].risposta"></textarea>
            </div>
        </div>
    </main>
</template>

<!-- pointer-events-none -->