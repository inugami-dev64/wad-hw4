<template>
    <div class="message failure" v-html="content"></div>
</template>

<script>
    export default {
        name: "FailureBanner",
        props: ["content"]
    }
</script>

<!-- Unscoped styling for generally for messages -->
<style>
    .message { 
        padding: 1rem;
        font-family: "Roboto", sans-serif;
        font-size: var(--fs-base);
        color: var(--fg-primary);
        border-radius: 0.5rem;
        width: 100%;
        box-sizing: border-box;
    }

    .failure {
        border: 1px solid var(--border-failure-banner);
        background-color: var(--bg-failure-banner);
    }
</style>