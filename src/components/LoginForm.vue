<template>
  <body>
    <Form :validation-schema="schema">
      <div class="form-group">
        <label for="loginEmail">Adres e-mail</label>
        <Field
          name="loginEmail"
          type="email"
          class="form-control"
          id="loginEmail"
          placeholder="Wprowadź e-mail"
          v-model="loginEmail"
        />
        <ErrorMessage name="loginEmail" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="loginPassword">Hasło</label>
        <Field
          name="loginPassword"
          type="password"
          class="form-control"
          id="loginPassword"
          placeholder="Wprowadź hasło"
          v-model="loginPassword"
        />
        <ErrorMessage name="loginPassword" class="error-feedback" />
      </div>

      <div class="form-group">
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          @click="signIn"
        >
          Zaloguj się
        </button>
      </div>
      <p class="text-danger">{{ message }}</p>
    </Form>
  </body>
</template>

<script>
import store from "../store/index.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { schema } from "../validations/formValidation.js";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    schema;
    return {
      message: null,
      loading: false,
      schema,
      loginEmail: "",
      loginPassword: "",
    };
  },

  methods: {
    signIn() {
      store
        .dispatch("login", {
          email: this.loginEmail,
          password: this.loginPassword,
        })
        .then(
          () => {
            this.$router.push("/yourprofile");
          },
          (error) => {
            this.loading = false;
            this.message = "Błąd logowania";
          }
        );
    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 5px;
}

.btn {
  margin: 5px;
}
</style>
