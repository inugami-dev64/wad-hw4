<template>
    <footer>
        <ul class="footer-container">
            <li>This is a footer.</li>
            <li>ik ik very cool right :3</li>
        </ul>

        <ul class="footer-container">
            <li>This is a footer.</li>
            <li>ik ik very cool right :3</li>
            <li>Yoooooooooooo</li>
            <li>I have more elements than others</li>
        </ul>

        <ul class="footer-container">
            <li>This is a footer.</li>
            <li>ik ik very cool right :3</li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>
    /** Footer specific styling **/
    footer {
        position: sticky;
        bottom: 0;
        justify-content: center;
    }

    .footer-container {
        margin: 0 1rem;
        text-align: center;
    }
</style>