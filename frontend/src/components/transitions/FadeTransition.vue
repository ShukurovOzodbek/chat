<template>
    <transition name="slide-fade" mode="out-in">
        <slot></slot>
    </transition>
</template>

<script lang="ts" setup>

</script>

<style>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
</style>