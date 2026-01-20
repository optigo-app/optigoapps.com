import { CommonAPI } from "../initialApi/CommonApi";

export const ContactForm = async (formData) => {
    try {
        const body = {
            "con": "{\"id\":\"\",\"mode\":\"contact-us\",\"appuserid\":\"admin@hs.com\"}",
            "p": `{\"FirstName\":\"${formData.firstName}\",\"LastName\":\"${formData.lastName}\",\"Email\":\"${formData.email}\",\"CompanyName\":\"${formData.companyName}\",\"PhoneNo\":\"+${formData.mobileNoCode}-${formData.mobile}\",\"Country\":\"${formData.country}\",\"Industry\":\"${formData.industry}\"}`,
            "f": "Optigo ( Contact )"
        }

        const response = await CommonAPI(body);
        if (response) {
            return response;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
