<script setup lang="ts">
</script>

<template>
    <nav class="nav">
        <div>
            <h1 class="nav__title">Vite Starter</h1>
        </div>
        <div>
            <router-link to="/" title="Home" class="nav__link">Home</router-link>
            <router-link to="/about" title="About" class="nav__link">About</router-link>
        </div>
    </nav>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin: 0 2em;
    background-color: lightgray;
    border-radius: 12px;
}

.nav__title {
    font-size: xx-large;
    font-weight: 600;
    align-self: flex-start;
    color: green;
}
.nav__link {
    font-size: x-large;
    color: gray;
    margin: 0 1rem;
}
</style>
