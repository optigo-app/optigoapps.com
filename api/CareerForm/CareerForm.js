import { CommonAPI } from "../initialApi/CommonApi";

export const CareerFormApi = async (formData) => {
    try {
        const body = {
            "con": "{\"id\":\"\",\"mode\":\"career\",\"appuserid\":\"admin@hs.com\"}",
            "p": `{\"FirstName\":\"${formData.firstName}\",\"MiddleName\":\"${formData.middleName}\",\"LastName\":\"${formData.lastName}\",\"Gender\":\"${formData.gender}\",\"Email\":\"${formData.email}\",\"PhoneNo\":\"+${formData.mobileNoCode}-${formData.mobile}\",\"Experience\":\"${formData.years}\",\"DaysToJoin\":${formData.joinDays},\"CurrentLocation\":\"${formData.currentLocation}\",\"Department\":\"${formData.department}\",\"FileName\":\"${formData.fileName}\"}`,
            "f": "Optigo ( career )"
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
