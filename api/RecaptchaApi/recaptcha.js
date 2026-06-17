import axios from "axios";

export const Recaptcha = async ({ captchaToken }) => {
    const SECRET_KEY = "6LeiDcYsAAAAAHRBAzI2uBFGLHTLWoVtpHd4A0XQ";
    const response = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
            params: {
                secret: SECRET_KEY,
                response: captchaToken,
            },
        }
    );

    return response.data.success;
}