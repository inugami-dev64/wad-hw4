<template>
    <main class="centered">
        <div class="post-container">
            <failure-banner :content="failureMessage" v-if="failureMessage != ''" v-model="failureMessage"/>
            <auth-form 
                ref="form"
                :message="'Please login to continue'" 
                :actionName="'Login'" 
                :actionCallback="login"
                :alternativeActionURL="'/#signup'"
                :alternativeActionName="'Sign up instead'"/>
        </div>
    </main>
</template>

<script>
    import AuthForm from '@/components/AuthForm.vue';
import FailureBanner from '@/components/messages/FailureBanner.vue'; 
    import SuccessBanner from '@/components/messages/SuccessBanner.vue';

    export default {
        data() {
            return { failureMessage: "" }
        },
        name: "LoginView",
        components: {
            FailureBanner,
            SuccessBanner,
            AuthForm
        },
        methods: {
            async login() {
                const host = process.env.BACKEND_HOST || 'http://localhost:1337'
                const body = { email: this.$refs.form.email, password: this.$refs.form.password };
                fetch(`${host}/api/v1/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                    body: JSON.stringify(body)
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        if ('code' in data) {
                            this.failureMessage = data.msg[0].toUpperCase() + data.msg.slice(1);
                            return;
                        }
                        location.assign("/");
                        console.log("Successfully logged in: ", data);
                    })
                    .catch((e) => {
                        console.log(e);
                        this.failureMessage = "Server error";
                    })
            }
        }
    }
</script>

