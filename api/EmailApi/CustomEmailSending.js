import axios from 'axios';

export const CustEmailSending = async ({ attachments, emailData }) => {
    console.log("TCL: Cust EmailSending -> emailData", emailData)
    const isLocal = ["localhost", "nzen", "optigoapps.web"]?.includes(window.location.hostname);

    const formData = new FormData();

    attachments?.forEach((item) => {
        if (item.file) {
            formData.append('attachments', item.file);
            formData.append('attachments1', item.file);
        } else if (item.url) {
            formData.append('attachments', item.url);
            formData.append('attachments1', item.url);

        }
    });

    formData.append('fromEmail', emailData?.fromEmail || "");

    ['toEmail', 'cust_toEmail', 'ccEmail', 'cust_ccEmail', 'bccEmail', 'cust_bccEmail'].forEach(key => {
        if (emailData?.[key]) {
            const emails = Array.isArray(emailData[key]) ? emailData[key] : [emailData[key]];
            formData.append(key, JSON.stringify(emails));
        }
    });
    if (emailData?.replyTo) formData.append('replyTo', emailData.replyTo);
    if (emailData?.subject) formData.append('subject', emailData.subject);
    if (emailData?.subject) formData.append('cust_subject', emailData.cust_subject);
    if (emailData?.message) formData.append('message', emailData.message);
    if (emailData?.message) formData.append('cust_message', emailData.cust_message);
    if (emailData?.htmlTemplate) formData.append('htmlTemplate', emailData.htmlTemplate);
    if (emailData?.htmlTemplate) formData.append('cust_htmlTemplate', emailData.cust_htmlTemplate);
    if (emailData?.mode) formData.append('mode', emailData.mode);
    if (emailData?.ufcc) formData.append('ufcc', emailData.ufcc);
    if (emailData?.templateNo !== undefined || emailData?.templateNo !== null || emailData?.templateNo !== "") formData.append('templateNo', emailData.templateNo);

    let APIURL =
        isLocal
            ? 'http://newnextjs.web/api/customsendemail'
            :
            'https://apilx.optigoapps.com/api/customsendemail';

    try {
        const response = await axios.post(APIURL, formData, {
            headers: {
                "Accept": "",
                'Content-Type': 'multipart/form-data',
                'Yearcode': isLocal ? 'e3tuemVufX17ezIwfX17e29yYWlsMjV9fXt7b3JhaWwyNX19' : 'e3tsaXZlLm9wdGlnb2FwcHMuY29tfX17ezIwfX17e3Rlc3Q3NH19e3t0ZXN0NzR9fQ==',
                'sv': isLocal ? '0' : '1'
            },
        });
        return response.data;
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};
