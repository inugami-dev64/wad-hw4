<template>
    <div class="container">
        <div class="sidebar"></div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar'
    }
</script>

<style scoped>

    .container {
        display: flex;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }
    /* Sidebar class, which just wastes 200px of your screen space for no good reason */
    .sidebar {
        width: 200px;
        height: 100vh;
        margin: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        box-sizing: border-box;
        background-color: var(--bg-secondary);
    }


    /* On mobile devices don't show sidebars */
    @media (max-width: 800px) {
        .sidebar { display: none }
        
    }
</style>