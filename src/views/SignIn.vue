<template>

    <body>
        <div class="container">
            <div class="row">
                <div class="col" id="first">
                    <img src="../assets/logoblack.png" />
                    <h4>Studbaza to portal umożliwiający
                        komunikację <br> między studentami </h4>
                </div>
                <div class="col-4 " align="center">
                    <LoginForm />
                    <RegisterForm />
                    <button type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Zarejestruj się
                    </button>
                </div>
            </div>
        </div>
    </body>

</template>

<style scoped>
.row {
    margin-top: 20%;
}
</style>

<script>

import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue'

export default {
    components: {
        LoginForm,
        RegisterForm
    }
}

</script>
