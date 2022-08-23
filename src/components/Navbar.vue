<template>
    <Popover class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto sm:px-6 py-5">
            <nav class=" relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global">
                <div class="flex items-center flex-1 md:inset-y-0 md:left-2">
                    <div class="flex items-center justify-between w-full md:w-auto mr-5">
                        <div class="flex justify-start lg:flex-1">
                            <NuxtLink to="/">
                                <span class="sr-only">Workflow</span>
                                <img class="w-20 sm:w-24 ml-4 sm:h-10" src="https://vidby.com/img/vidby.81999b1a.svg" alt="" />
                            </NuxtLink>
                        </div>
                        <div class="-mr-2 flex items-center md:hidden">
                            <PopoverButton
                                class="bg-gray-50 focus:outline-none rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Open main menu</span>
                                <MenuIcon class="h-6 w-6" aria-hidden="true" />
                            </PopoverButton>
                        </div>
                    </div>
                    <div class="hidden ml-4 md:flex md:space-x-10">
                        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                            class="font-medium text-base text-gray-900 hover:text-gray-500 active:main-active">{{ item.name }}</NuxtLink>
                    </div>
                </div>
                
                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                   <div class="hidden ml-4 md:flex md:space-x-10">
                        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                            class="font-medium text-base text-gray-900 hover:text-gray-500 active:main-active">{{ item.name }}</NuxtLink>
                    </div>
                    <a href="#"
                        class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-main-active hover:bg-main-active-lighter">
                        Login
                    </a>
                </div>
            </nav>
        </div>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus
                class="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden">
                <div class="divide-y shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="px-5 py-4 flex items-center justify-between">
                        <NuxtLink class="focus:outline-none" to="/">
                            <span class="sr-only">Workflow</span>
                            <img class="w-20 text-center sm:h-10" src="https://vidby.com/img/vidby.81999b1a.svg" alt="" />
                        </NuxtLink>
                        <div class="-mr-2">
                            <PopoverButton
                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <XIcon class="h-6 w-6" aria-hidden="true" />
                            </PopoverButton>
                        </div>
                    </div>
                    <div>
                        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                            class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:main-active active:main-active">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                    <a href="#"
                        class="mx-auto w-48 my-3 rounded-lg block px-5 py-3 text-center font-medium text-white bg-main-active">
                        Login </a>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>
<script  lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
const navigation = [
    { name: 'Link1', href: '/link1' },
    { name: 'Link2', href: '/link2' },
]
export default defineComponent({
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MenuIcon,
        XIcon,
    },
    
    setup() {
        return {
            navigation
        }
    },
})
</script>
