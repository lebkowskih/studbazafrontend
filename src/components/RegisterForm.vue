<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Rejestracja</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <Form :validation-schema="schema">

            <div class="form-group">
              <label for="registerUsername">Nazwa użytkownika</label>
              <Field name="registerUsername" type="text" class="form-control" id="registerUsername"
                placeholder="Wprowadź nazwę użytkownika" v-model="registerUsername" />
              <ErrorMessage name="registerUsername" class="error-feedback" />
            </div>

            <div class="form-group">
              <label for="registerEmail">Adres e-mail</label>
              <Field name="registerEmail" type="registerEmail" class="form-control" id="registerEmail"
                placeholder="Wprowadź e-mail" v-model="registerEmail" />
              <ErrorMessage name="registerEmail" class="error-feedback" />
            </div>

            <div class="form-group">
              <label for="registerPassword">Hasło</label>
              <Field name="registerPassword" type="registerPassword" class="form-control" id="registerPassword"
                placeholder="Wprowadź hasło" v-model="registerPassword" />
              <ErrorMessage name="registerPassword" class="error-feedback" />
            </div>

            <div class="form-group">
              <label for="registerPicture">Zdjęcie</label>
              <Field name="registerPicture" type="file" class="form-control" id="registerPicture"
                v-model="registerPicture" />
              <ErrorMessage name="registerPicture" class="error-feedback" />
            </div>


            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
              <button type="button" class="btn btn-primary" @click="handleRegister">Wyślij</button>
            </div>
            <p class="text-danger">{{ message }}</p>
          </Form>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from '../validations/formValidation';
import store from '../store/index'
import router from '../router'


export default {
  data() {
    schema
    return {
      successful: false,
      loading: false,
      message: "",
      registerUsername: "",
      registerEmail: "",
      registerPassword: "",
      registerPicture: "",
      schema
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.successful = false;
      this.loading = true;
      store.dispatch("register",
        {
          username: this.registerUsername,
          email: this.registerEmail,
          password: this.registerPassword
          // TODO: handle pictures
        })
        .then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message = error.response.data.Message
            this.successful = false;
            this.loading = false;
          }
        );
    },
  },
}

</script>
