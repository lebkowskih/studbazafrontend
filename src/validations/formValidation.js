import * as yup from "yup";

export const schema = yup.object().shape({
    registerUsername: yup
        .string()
        .required("Nazwa użytkownika jest wymagana")
        .min(6, "Musi byc conajmniej 6 znaków!")
        .max(40, "Musi byc maksymalnie 40 znaków!"),
    registerEmail: yup
        .string()
        .email("Email jest nieprawidłowy!")
        .required("Email jest wymagany!")
        .max(50, "Musi byc maksymalnie 50 znaków!"),
    registerPassword: yup
        .string()
        .required("Hasło jest wymagane!")
        .min(6, "Musi byc conajmniej 6 znaków!")
        .max(40, "Musi byc maksymalnie 40 znaków!"),
    // TODO: add fields for login - they should be different!
})
