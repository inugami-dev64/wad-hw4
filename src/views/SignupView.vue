<template>
    <main class="centered">
        <div class="post-container">
            <success-banner content="Everything is fire!!!"/>
            <failure-banner content="Help me please!!!"/>
            <form method="GET" action="/" class="post-container">
                <h1>Welcome to PostIt</h1>
                <p>Please sign up here</p>
                <input type="email" id="email" name="email" placeholder="Enter your email">
                <input type="password" id="password" name="password" placeholder="Enter your password">
                <input type="submit" class="button" value="Signup">
            </form>
        </div>
    </main>
</template>

<script>
    import FailureBanner from '@/components/messages/FailureBanner.vue';
    import SuccessBanner from '@/components/messages/SuccessBanner.vue';
    
    export default {
        name: "SignupView",
        components: {
            FailureBanner,
            SuccessBanner
        }
    }
</script>

<style>

.centered {
    display: block;
}

/* Styling for the text area in addPost */
/** I'll use general sibling selector here because why not **/
form textarea {
    width: 100%;
    box-sizing: border-box;
    color: white;
    resize: none;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: var(--bg-primary);
}

form {
    text-align: center;
    margin: auto !important;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--bg-tertiary);
}

form > a:hover {
    color: cyan;
    cursor: pointer;
}

form input {
    width: 100%;
    height: 30px;
    margin: 0.2rem 0;
    border-radius: 0.33rem;
    box-sizing: border-box;
    border: none;
    background-color: var(--bg-primary);
    color: white;
    text-align: center;
}

form .button {
    border: none;
    border-radius: 5px;
    background-color:rgb(29, 29, 243);
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
}

form .button:hover {
    background-color: rgb(2, 2, 128);
    cursor: pointer;
}
</style>