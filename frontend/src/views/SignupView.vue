<template>
    <main class="centered">
        <div class="post-container">
            <failure-banner :content="failureMessage" v-if="failureMessage != ''" v-model="failureMessage"/>
            <auth-form 
                ref="form"
                :message="'Please register to continue'" 
                :actionName="'Register'" 
                :actionCallback="register"
                :alternativeActionURL="'/#login'"
                :alternativeActionName="'Login instead'"/>
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
            async register() {
                const host = process.env.VUE_APP_BACKEND_HOST || 'http://localhost:1337';
                const body = { email: this.$refs.form.email, password: this.$refs.form.password };
                fetch(`${host}/api/v1/auth/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                    body: JSON.stringify(form)
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        if ('code' in data) {
                            this.failureMessage = data.msg[0].toUppercase() + data.msg.slice(1);
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

