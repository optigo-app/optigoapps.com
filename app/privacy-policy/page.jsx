import React from 'react';
import './page.scss';
import Link from 'next/link';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages["/privacy-policy"])

const page = () => {
    return (
        <div className="privacy-policy">
            <main className="privacy-policy__main">
                <div className="privacy-policy__container">
                    <h1 className="privacy-policy__title">Privacy Policy</h1>

                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">General</h2>
                        <p className="privacy-policy__text">
                            At Orail, we respect your need for online privacy and protect any Personal Information that you may share with us, in an appropriate manner. Our practice with respect to use of your Personal Information is as set forth below in this Privacy Policy Statement. As a condition to use of Orail Services, you consent to the terms of the Privacy Policy Statement as it may be updated from time to time. This Privacy Policy Statement applies exclusively to
                            &nbsp;<Link href="https://www.optigoapps.com">www.optigoapps.com</Link>.
                        </p>

                        <p className="privacy-policy__text">
                            If you have questions regarding our privacy policy or practices, please contact us at Mailing Address: 523, World trade Center, Ring Road, Surat, (GuJ) India. We can be reached via email at <Link href="mailto:privacy@orail.in">privacy@orail.in</Link> or you can reach Orail Customer Support Services by telephone at +91-92276 84884.
                        </p>

                        <h2 className="privacy-policy__section-title">Children’s Online Privacy Protection</h2>
                        <p className="privacy-policy__text">
                            Orail does not knowingly collect Personal Information from users who are under 13 years of age.
                        </p>
                    </section>

                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">Information Recorded and Use:</h2>

                        <h3 className="privacy-policy__subsection-title">• Personal Information</h3>
                        <p className="privacy-policy__text">
                            During the Registration Process for creating a user account, we request for your name and email address. You will also be asked to choose a unique username and a password, which will be used solely for the purpose of providing access to your user account. Upon registration you will have the option of choosing a security question and an answer to the security question, which if given, will be used solely for the purpose of resetting your password. Your name and email address will be used to inform you regarding new services, releases, upcoming events and changes in this Privacy Policy Statement.
                        </p>

                        <p className="privacy-policy__text">
                            Orail will have access to third party personal information provided by you as part of using Orail Services such as contacts in your Optigo Apps account. This information may include third party names, email addresses, phone numbers and physical addresses and will be used for servicing your requirements as expressed by you to Orail and solely as part and parcel of your use of Optigo Apps Services. We do not share this third party personal information with anyone for promotional purposes, nor do we utilize it for any purposes not expressly consented to by you. When you elect to refer friends to the website, we request their email address and name to facilitate the request and deliver a one time email. Your friend may contact us at <Link href="mailto:privacy@orail.in">support@orail.in</Link> to request that we remove this information from our database.
                        </p>

                        <p className="privacy-policy__text">
                            We post user testimonials on our website. These testimonials may include names and other Personal Information and we acquire permission from our users prior to posting these on our website. Orail is not responsible for the Personal Information users elect to post within their testimonials.
                        </p>

                        <h3 className="privacy-policy__subsection-title">• Usage Details</h3>

                        <p className="privacy-policy__text">
                            Your usage details such as time, frequency, duration and pattern of use, features used and the amount of storage used will be recorded by us in order to enhance your experience of the Optigo Apps Services and to help us provide you the best possible service.
                        </p>

                        <h3 className="privacy-policy__subsection-title">• Contents of your User Account</h3>

                        <p className="privacy-policy__text">
                            We store and maintain files, documents, images, to-do lists, emails and other data stored in your user account at our facilities in the United States. In order to prevent loss of data due to errors or system failures, we also keep backup copies of data including the contents of your user account. Hence your files and data may remain on our servers even after deletion or termination of your user account. We may retain and use your Personal Information and data as necessary to comply with our legal obligations, resolve disputes, and enforce our rights. We assure you that the contents of your user account will not be disclosed to anyone and will not be accessible even to employees of Orail except in circumstances specifically mentioned in this Privacy Policy Statement and Terms of Services. We also do not scan the contents of your user account for serving targeted advertisements.
                        </p>

                        <h3 className="privacy-policy__subsection-title">• Payment Information</h3>

                        <p className="privacy-policy__text">
                            In case of services requiring payment, we request credit card or other payment account information, which will be used solely for processing payments. Your financial information will not be stored by us except for the name and address of the card holder, the expiry date and the last four digits of the Credit Card number. Subject to your prior consent and where necessary for processing future payments, your financial information will be stored in encrypted form on secure servers of our reputed Payment Gateway Service Provider who is beholden to treating your Personal Information in accordance with this Privacy Policy Statement.
                        </p>

                        <h3 className="privacy-policy__subsection-title">• Visitor Details</h3>

                        <p className="privacy-policy__text">
                            collected in our log files to analyze the trends, administer the website, track visitor’s movements and to improve our website. We link this automatically collected data to other information we collect about you.
                        </p>

                        <h2 className="privacy-policy__section-title">Cookies and Other Tracking Technologies</h2>

                        <p className="privacy-policy__text">
                            We use temporary and permanent cookies to enhance your experience of our Orail Services. Temporary cookies will be removed from your computer each time you close your browser. By selecting ‘keep me signed-in’ ( ‘Remember me’ ) option in Orail Services, a permanent cookie will be stored in your computer and you will not be required to sign-in by providing complete login information each time you return to our website. If you have turned cookies off, you may not be able to use registered areas of the website. We tie cookie information to your email address when you elect to remain logged in so as to maintain and recall your preferences within the website.
                        </p>

                        <p className="privacy-policy__text">
                            Technologies such as: cookies, beacons, tags and scripts are used by Orail and our partners [such as reseller partners], affiliates, or service providers [such as analytics service providers]. These technologies are used in analyzing trends, administering the site, tracking users’ movements around the site and to gather demographic information about our user base as a whole. We may receive reports based on the use of these technologies by these companies on an individual as well as aggregated basis.
                        </p>

                        <p className="privacy-policy__text">
                            We use Local Storage Objects (LSOs) such as HTML5 to store content information and preferences. Third parties with whom we partner to provide certain features on our site or to display advertising based upon your Web browsing activity use LSOs such as HTML 5 to collect and store information. Various browsers may offer their own management tools for removing HTML5 LSOs.
                        </p>

                        <h2 className="privacy-policy__section-title">Behavioral Targeting/ Re-Targeting</h2>

                        <p className="privacy-policy__text">
                            We partner with third parties to manage our advertisements on other sites. Our third party partners may use technologies such as cookies to gather information about your activities on this site and other sites in order to provide you advertising based upon your browsing activities and interests. If you wish to not have this information used for the purpose of serving you interest-based advertisements, you may opt-out by clicking here (or if located in the European Union click here). However, you will continue to receive generic advertisements on other websites that display advertisements
                        </p>

                        <h2 className="privacy-policy__section-title">Links from our website</h2>

                        <p className="privacy-policy__text">
                            Some pages of our website contain external links. You are advised to verify the privacy practices of such other websites. We are not responsible for the manner of use or misuse of information made available by you at such other websites. We encourage you not to provide Personal Information, without assuring yourselves of the Privacy Policy Statement of other websites.
                        </p>

                        <h2 className="privacy-policy__section-title">Federated Authentication</h2>

                        <p className="privacy-policy__text">
                            You can log in to our site using federated authentication providers such as Facebook Connect. These services will authenticate your identity and provide you the option to share certain Personal Information with us such as your name and email address to pre-populate our sign up form.
                        </p>

                        <h2 className="privacy-policy__section-title">With whom we share Information</h2>

                        <p className="privacy-policy__text">
                            We may need to share your Personal Information and your data to our affiliates, resellers, service providers and business partners solely for the purpose of providing Optigo Services to you. The purposes for which we may disclose your Personal Information or data to our service providers may include, but are not limited to, data storage, database management, web analytics and payment processing. These service providers are authorized to use your Personal Information or data only as necessary to provide these services to us. In such cases Orail will also ensure that such affiliates, resellers, service providers and business partners comply with this Privacy Policy Statement and adopt appropriate confidentiality and security measures. We will obtain your prior specific consent before we share your Personal Information or data to any person outside Orail for any purpose that is not directly connected with providing Optigo Apps Services to you. We will share your Personal Information with third parties only in the ways that are described in this Privacy Policy Statement. We do not sell your Personal Information to third parties. We may share generic aggregated demographic information not linked to any Personal Information regarding visitors and users with our business partners and advertisers. Please be aware that laws in various jurisdictions in which we operate may obligate us to disclose user information and the contents of your user account to the local law enforcement authorities under a legal process or an enforceable government request. In addition, we may also disclose Personal Information and contents of your user account to law enforcement authorities if such disclosure is determined to be necessary by Orail in our sole and absolute discretion for protecting the safety of our users, employees, or the general public. If Orail is involved in a merger, acquisition, or sale of all or a portion of its business or assets, you will be notified via email and/or a prominent notice on our website of any change in ownership or uses of your Personal Information, as well as any choices you may have regarding your Personal Information.
                        </p>

                        <h2 className="privacy-policy__section-title">How secure is your Information</h2>

                        <p className="privacy-policy__text">
                            We adopt industry appropriate data collection, storage and processing practices and security measures, as well as physical security measures to protect against unauthorized access, alteration, disclosure or destruction of your Personal Information, username, password, transaction information and data stored in your user account. Access to your name and email address is restricted to our employees who need to know such information in connection with providing Orail Services to you and are bound by confidentiality obligations.
                        </p>

                        <h2 className="privacy-policy__section-title">Your Choice in Information Use</h2>

                        <p className="privacy-policy__text">
                            In the event we decide to use your Personal Information for any purpose other than as stated in this Privacy Policy Statement, we will offer you an effective way to opt out of the use of your Personal Information for those other purposes. From time to time, we may send emails to you regarding new services, releases and upcoming events. You may opt out of receiving newsletters and other secondary messages from Orail by selecting the ‘unsubscribe’ function present in every email we send. However, you will continue to receive essential transactional emails.
                        </p>

                        <h2 className="privacy-policy__section-title">Accessing, Updating and Removing Personal Information</h2>

                        <p className="privacy-policy__text">
                            Users who wish to correct, update or remove any Personal Information including those from a public forum, directory or testimonial on our site may do so either by accessing their user account or by contacting Orail Customer Support Services at <Link href="mailto:support@orail.in">support@orail.in</Link>. Such changes may take up to 48 hours to take effect. We respond to all enquiries within 30 days.
                        </p>

                        <h2 className="privacy-policy__section-title">Investigation of Illegal Activity</h2>

                        <p className="privacy-policy__text">
                            We may need to provide access to your Personal Information and the contents of your user account to our employees and service providers for the purpose of investigating any suspected illegal activity or potential violation of the terms and conditions for use of Orail Services. However, Orail will ensure that such access is in compliance with this Privacy Policy Statement and subject to appropriate confidentiality and security measures.
                        </p>

                        <h2 className="privacy-policy__section-title">Enforcement of Privacy Policy</h2>

                        <p className="privacy-policy__text">
                            We make every effort, including periodic reviews to ensure that Personal Information provided by you is used in conformity with this Privacy Policy Statement. If you have any concerns regarding our adherence to this Privacy Policy Statement or the manner in which Personal Information is used for the purpose of providing Orail Services, kindly contact Orail Customer Support Services at <Link href="mailto:support@orail.in">support@orail.in</Link>. We will contact you to address your concerns and we will also co-operate with regulatory authorities in this regard if needed.
                        </p>

                        <h2 className="privacy-policy__section-title">Notification of Changes</h2>

                        <p className="privacy-policy__text">
                            We may modify the Privacy Policy Statement upon notice to you at any time through a service announcement or by sending email to your primary email address. If we make significant changes in the Privacy Policy Statement that affect your rights, You will be provided with at least 30 days advance notice of the changes by email to your primary email address. You may terminate your use of Orail Services by providing Orail notice by email within 30 days of being notified of the availability of the modified Privacy Policy Statement if the Privacy Policy Statement is modified in a manner that substantially affects your rights in connection with use of Orail Services. Your continued use of Orail Services after the effective date of any change to the Privacy Policy Statement will be deemed to be your agreement to the modified Privacy Policy Statement. You will not receive email notification of minor changes to the Privacy Policy Statement. If you are concerned about how your Personal Information is used, you should check back at <Link href="https://optigoapps.com/privacy-policy/">https://optigoapps.com/privacy-policy/</Link> periodically.
                        </p>

                        <h2 className="privacy-policy__section-title">Blogs and Forums</h2>

                        <p className="privacy-policy__text">
                            We provide the capacity for users to post information in blogs and forums for sharing information in a public space on the website. This information is publicly available to all users of these forums and visitors to our website. We require registration to publish information, but given the public nature of both platforms, any Personal Information disclosed within these forums may be used to contact users with unsolicited messages. We encourage users to be cautious in disclosure of Personal Information in public forums as Orail is not responsible for the Personal Information users elect to disclose.
                        </p>

                        <p className="privacy-policy__text">
                            Orail also supports third party widgets such as Facebook and Twitter buttons on the website that allow users to share articles and other information on different platforms. These widgets may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the widgets to function properly. These widgets do not collect or store any Personal Information from users on the website and simply act as a bridge for your convenience in sharing information. Your interactions with these widgets are governed by the privacy policy of the company providing it.
                        </p>

                        <div className='privacy-policy__updated'>
                            <span>Updated on: 10th June 2015.</span>
                            <span>Effective Date: 10th July 2015.</span>
                        </div>

                        <div className='privacy-policy__end'>
                            <h2 className="privacy-policy__footer-title">END OF PRIVACY POLICY</h2>

                            <p className="privacy-policy__footer-text">
                                If you have any questions or concerns regarding this Privacy Policy Statement, please contact us at <Link href="mailto:legal@orail.in">legal@orail.in</Link>. We shall respond to all inquiries within 30 days of receipt upon ascertaining your identity.
                            </p>
                        </div>

                    </section>
                </div>
            </main>
        </div>
    );
};

export default page;