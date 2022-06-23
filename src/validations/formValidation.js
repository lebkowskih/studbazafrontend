import * as yup from "yup";

export const formSchema = yup.object().shape({
    username: yup
        .string()
        .required("Nazwa użytkownika jest wymagana")
        .min(6, "Musi być conajmniej 6 znaków!")
        .max(40, "Musi być maksymalnie 40 znaków!"),
    email: yup
        .string()
        .email("Email jest nieprawidłowy!")
        .required("Email jest wymagany!")
        .max(50, "Musi być maksymalnie 50 znaków!"),
    password: yup
        .string()
        .required("Hasło jest wymagane!")
        .min(6, "Musi być conajmniej 6 znaków!")
        .max(40, "Musi być maksymalnie 40 znaków!"),
})
