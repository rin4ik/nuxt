<template>
    <div class="relative overflow-hidden">
        <div class="relative">
            <Popover>
                <div class="max-w-7xl mx-auto sm:px-6 py-5">
                    <nav class="relative flex items-center justify-between sm:h-10 md:justify-center"
                        aria-label="Global">
                        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                            <div class="flex items-center justify-between w-full md:w-auto mr-5">
                                <a href="#">
                                    <span class="sr-only">Logo</span>
                                </a>
                                <div class="-mr-2 flex items-center md:hidden">
                                    <PopoverButton
                                        class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span class="sr-only">Open main menu</span>
                                        <MenuIcon class="h-6 w-6" aria-hidden="true" />
                                    </PopoverButton>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:flex md:space-x-10">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                        </div>
                        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="#"
                                class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                            </a>
                            <a href="#"
                                class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Sign up </a>
                        </div>
                    </nav>
                </div>

                <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <PopoverPanel focus
                        class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <!-- place logo here -->
                                </div>
                                <div class="-mr-2">
                                    <PopoverButton
                                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span class="sr-only">Close menu</span>
                                        <XIcon class="h-6 w-6" aria-hidden="true" />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div class="px-2 pt-2 pb-3">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    {{ item.name }}
                                </a>
                            </div>
                            <a href="#"
                                class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                                Log in </a>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>

            <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                <div class="text-center">
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">Place Content</span>
                        {{ ' ' }}
                        <span class="block text-indigo-600 xl:inline">HERE</span>
                    </h1>
                    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                </div>
            </main>
        </div>
    </div>
</template>


<script lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
const navigation = [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Company', href: '#' },
]
export default defineComponent({
    name: "Home",
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MenuIcon,
        XIcon,
    },
    head() {
        return {
            title: "Home Page",
            meta: [
                { name: "twitter:title", content: "Nuxt Async" },
                { name: "twitter:description", content: "Nuxt + ME = 🍕" },
                { name: "twitter:image", content: "https://avatars.dicebear.com/api/avataaars/sssssssssssff.svg" },
                { name: "twitter:card", content: "summary_large_image" }
            ]
        };
    },
    setup() {
        return {
            navigation
        }
    },
})
</script>