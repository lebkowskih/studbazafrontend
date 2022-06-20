<template>

    <body>
        <Form :validation-schema="schema">
            <div class="form-group">
                <label for="email">Adres e-mail</label>
                <Field name="email" type="email" class="form-control" id="email" placeholder="Wprowadź e-mail"
                    v-model="email" />
                <ErrorMessage name="email" class="error-feedback" />

            </div>

            <div class="form-group">
                <label for="password">Hasło</label>
                <Field name="password" type="password" class="form-control" id="password" placeholder="Wprowadź hasło"
                    v-model="password" />
                <ErrorMessage name="password" class="error-feedback" />

            </div>

            <div class="form-group">
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="signIn">Zaloguj się</button>
            </div>
            <p class="text-danger">{{ message }}</p>

        </Form>
    </body>

</template>

<script>

import store from '../store/index.js'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { schema } from '../validations/formValidation.js'

export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        schema
        return {
            message: null,
            loading: false,
            schema,
            email: "",
            passowrd: ""
        }
    },
    computed: {
        loggedIn() {
            return store.state.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/profile");
        }
    },
    methods: {
        signIn() {
            store.dispatch('login', {
                email: this.email,
                password: this.password
            }).then(
                () => {
                    this.$router.push("/profile");
                },
                (error) => {
                    this.loading = false;
                    this.message = "Błąd logowania";
                }
            );
        }
    },

}

</script>

<style scoped>
.form-group {
    margin: 5px;
}

.btn {
    margin: 5px;
}
</style>
