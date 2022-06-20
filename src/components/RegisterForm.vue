<template>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Rejestracja</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

    <Form :validation-schema="schema">

        <div class="form-group">
            <label for="username">Nazwa użytkownika</label>
            <Field name="username" type="text" class="form-control" id="username" placeholder="Wprowadź nazwę użytkownika" v-model="username" />
            <ErrorMessage name="username" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="email">Adres e-mail</label>
            <Field name="email" type="email" class="form-control" id="email" placeholder="Wprowadź e-mail" v-model="email" />
            <ErrorMessage name="email" class="error-feedback" />
        </div>

         <div class="form-group">
            <label for="password">Hasło</label>
            <Field name="password" type="password" class="form-control"  id="password" placeholder="Wprowadź hasło" v-model="password" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="photo">Zdjęcie</label>
            <Field name="photo" type="file" class="form-control"  id="photo" v-model="photo" />
            <ErrorMessage name="photo" class="error-feedback" />
        </div>


        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
          <button type="button" class="btn btn-primary" @click="handleRegister">Wyślij</button>
        </div>
        <p class="text-danger">{{message}}</p>
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

export default {
  data(){
    schema
    return{
      successful: false,
      loading: false,
      message: "",
      username:"",
      email:"",
      password:"",
      schema
    }
  },
    components:{
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
            {username:this.username,
            email:this.email,
            password:this.password})
            .then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    this.loading = false;
                },
                (error) => {
                    this.message =
                        error.response.data.Message
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
    },
}

</script>
