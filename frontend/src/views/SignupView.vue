<template>
    <main class="centered">
        <div class="post-container">
            <failure-banner :content="failureMessage" v-if="failureMessage != ''" v-model="failureMessage"/>
            <form @submit.prevent="validateAndSubmit" class="post-container">
                <h1>Welcome to PostIt</h1>
                <p>Please sign up here</p>
                <input type="email" id="email" name="email" placeholder="Enter your email" v-model="email">
                <input type="password" id="password" name="password" placeholder="Enter your password" v-model="password">
                <input type="submit" class="button" value="Login" @click="validateAndSubmit('login')">
                <p>or</p>
                <input type="submit" class="button" value="Signup" @click="validateAndSubmit('signup')">
            </form>
        </div>
    </main>
</template>

<script>
    import FailureBanner from '@/components/messages/FailureBanner.vue'; 
    import SuccessBanner from '@/components/messages/SuccessBanner.vue';

    export default {
        data() {
            return { failureMessage: "" }
        },
        name: "SignupView",
        components: {
            FailureBanner,
            SuccessBanner,
        },
        methods: {
            async validateAndSubmit(action) {
                if (action === 'signup') {
                    if (!/^[A-Z]/.test(this.password))
                    this.failureMessage = "Password must start with an uppercase character";
                else if (!/[a-z]+.*?[a-z]/.test(this.password))
                    this.failureMessage = "Password must contain at least two lowercase characters";
                else if (!/[0-9]+/.test(this.password))
                    this.failureMessage = "Password must contain at least one numeric character";
                else if (!this.password.includes('_'))
                    this.failureMessage = "Password must contain at least one '_' character";
                else
                    this.$router.push('/'); /// Should direct the user to the signupView again
                } else if (action === 'login') {
                    if (!this.email || !this.password) {
                        this.failureMessage = "Email and password are required to login"
                    } else {
                        this.$router.push('/'); /// Should direct the user to the posts page
                    }
                }
                
            }
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