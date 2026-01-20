import React from 'react';
import './page.scss';
import Link from 'next/link';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages["/terms-of-service"])

const page = () => {
    return (
        <div className="terms">
            <main className="terms__main">
                <div className="terms__container">
                    <h1 className="terms__title">Terms of Service</h1>

                    <section className="terms__section">
                        <p className="terms__text">
                            THIS IS AN AGREEMENT BETWEEN YOU OR THE ENTITY THAT YOU REPRESENT (hereinafter “You” or “Your”) AND ORAIL SERVICES (hereinafter “Orail”) GOVERNING YOUR USE OF OPTIGO APPS SUITE OF ONLINE BUSINESS PRODUCTIVITY AND COLLABORATION SOFTWARE (hereinafter “Optigo” or “Optigo Apps” or “Optigo Service(s)”).
                        </p>

                        <h2 className="terms__section-title">Parts of this Agreement</h2>

                        <p className="terms__text">
                            This Agreement consists of the following terms and conditions (hereinafter the “General Terms”) and terms and conditions, if any, specific to use of individual Services (hereinafter the “Service Specific Terms”). The General Terms and Service Specific Terms are collectively referred to as the “Terms”. In the event of a conflict between the General Terms and Service Specific Terms, the Service Specific Terms shall prevail.
                        </p>

                        <h2 className="terms__section-title">Acceptance of the Terms</h2>
                        <p className="terms__text">
                            You must be of legal age to enter into a binding agreement in order to accept the Terms. If you do not agree to the General Terms, do not use any of our Services. If you agree to the General Terms and do not agree to any Service Specific Terms, do not use the corresponding Service. You can accept the Terms by checking a checkbox or clicking on a button indicating your acceptance of the terms or Login to apps or by actually using the Services.
                        </p>

                        <h2 className="terms__section-title">Description of Service</h2>
                        <p className="terms__text">
                            We provide an array of services for online collaboration and management including Data processor, reports and spreadsheet, presentation tool, database application, email services, Cloud hosting services, chat client, organizer, customer relationship management application and project management application (“Service” or “Services”). You may use the Services for your personal and business use or for internal business purpose in the organization that you represent. You may connect to the Services using any Internet browser supported by the Services. You are responsible for obtaining access to the Internet and the equipments necessary to use the Services. You can create and edit content with your user account and if you choose to do so, you can publish and share such content.
                        </p>

                        <h2 className="terms__section-title">Subscription to Beta Service</h2>
                        <p className="terms__text">
                            We may offer certain Services as closed or open beta services (“Beta Service” or “Beta Services”) for the purpose of testing and evaluation. You agree that we have the sole authority and discretion to determine the period of time for testing and evaluation of Beta Services. We will be the sole judge of the success of such testing and the decision, if any, to offer the Beta Services as commercial services. You will be under no obligation to acquire a subscription to use any paid Service as a result of your subscription to any Beta Service. We reserve the right to fully or partially discontinue, at any time and from time to time, temporarily or permanently, any of the Beta Services with or without notice to you. You agree that Orail will not be liable to you or to any third party for any harm related to, arising out of, or caused by the modification, suspension or discontinuance of any of the Beta Services for any reason.
                        </p>

                        <h2 className="terms__section-title">Modification of Terms of Service</h2>
                        <p className="terms__text">
                            We may modify the Terms upon notice to you at any time. You will be provided notice of any such modification by electronic mail or by publishing the changes on the website <Link href="https://optigoapps.com/terms-of-service/">https://optigoapps.com/terms-of-service/</Link>. You may terminate your use of the Services if the Terms are modified in a manner that substantially affects your rights in connection with use of the Services. Your continued use of the Service after notice of any change to the Terms will be deemed to be your agreement to the amended Terms.
                        </p>

                        <h2 className="terms__section-title">User Sign up Obligations</h2>
                        <p className="terms__text">
                            You need to sign up for a user account by providing all required information in order to access or use the Services. If you represent an organization and wish to use the Services for corporate internal use, we recommend that you, and all other users from your organization, sign up for user accounts by providing your corporate contact information. In particular, we recommend that you use your corporate email address. You agree to: a) provide true, accurate, current and complete information about yourself as prompted by the sign up process; and b) maintain and promptly update the information provided during sign up to keep it true, accurate, current, and complete. If you provide any information that is untrue, inaccurate, outdated, or incomplete, or if Orail has reasonable grounds to suspect that such information is untrue, inaccurate, outdated, or incomplete, Orail may terminate your user account and refuse current or future use of any or all of the Services.
                        </p>

                        <h2 className="terms__section-title">Personal Information and Privacy</h2>
                        <p className="terms__text">
                            Personal information you provide to Orail through the Service is governed by Orail Privacy Policy. Your election to use the Service indicates your acceptance of the terms of the Orail Privacy Policy. You are responsible for maintaining confidentiality of your username, password and other sensitive information. You are responsible for all activities that occur in your user account and you agree to inform us immediately of any unauthorized use of your user account by email to info@orail.in or by calling us on any of the numbers listed on <Link href="https://www.optigoapps.com/contactus">https://www.optigoapps.com/contactus</Link>. We are not responsible for any loss or damage to you or to any third party incurred as a result of any unauthorized access and/or use of your user account, or otherwise.
                        </p>

                        <h2 className="terms__section-title">Communications from Orail</h2>
                        <p className="terms__text">
                            The Service may include certain communications from Orail, such as service announcements, administrative messages and newsletters. You understand that these communications shall be considered part of using the Services. As part of our policy to provide you total privacy, we also provide you the option of opting out from receiving newsletters from us. However, you will not be able to opt-out from receiving service announcements and administrative messages.
                        </p>

                        <h2 className="terms__section-title">Fees and Payments</h2>
                        <p className="terms__text">
                            Subscriptions to paid services are available on quarterly, half-yearly and yearly subscription plans. Subscription and Setup charges must be paid in advance when you sign up for any service. Both setup fees and subscription charges are non-refundable payments. Your subscription will automatically renew at the end of each billing cycle unless you notify us otherwise. If your subscription is not renewed, your data will be deleted immediately after expiration.
                        </p>
                        <p className="terms__text">
                            If you do not wish to renew your subscription, you must notify us by email at <Link href="mailto:accounts@orail.in">accounts@orail.in</Link> at least seven days before the renewal date or the initial subscription application.
                        </p>
                        <p className="terms__text">
                            Please note that if you cancel your subscription, no refunds will be provided for the unused portion of the billing period. Under the terms of the Annual Plan, you are responsible for the full payment of the annual contract, even if you cancel before the term ends.
                        </p>
                        <p className="terms__text">
                            Orail Services reserves the right to modify subscription fees and introduce charges for services that are currently free. You will only be charged for services if you opt for a paid subscription plan.
                        </p>

                        <h2 className="terms__section-title">Restrictions on Use</h2>
                        <p className="terms__text">
                            In addition to all other terms and conditions of this Agreement, you shall not: (i) transfer or otherwise make available to any third party the Services; (ii) provide any service based on the Services without prior written permission; (iii) use the third party links to sites without agreeing to their website terms & conditions; (iv) post links to third party sites or use their logo, company name, etc. without their prior written permission; or (v) use the Services for spamming and other illegal purposes.
                        </p>

                        <h2 className="terms__section-title">Excessive Use of Shared System Resources</h2>
                        <p className="terms__text">
                            You may not use any shared system provided by Optigoapps.com in a way that unnecessarily interferes with the normal operation of the shared system, or that consumes a disproportionate share of the resources of the system. For example, we may require you to repair files or code-processing abnormalities in your Cloud-hosted files or data if it unnecessarily conflicts with other Cloud customers’ use of the Cloud. You agree that we may quarantine or delete any data stored on a shared system if the data is infected with a virus, or is otherwise corrupted, and has the potential to infect or corrupt the system or other customers’ data that is stored on the same system.
                        </p>

                        <h2 className="terms__section-title">Spamming and Illegal Activities</h2>
                        <p className="terms__text">
                            You agree to be solely responsible for the contents of your transmissions through the Services. You agree not to use the Services for illegal purposes or for the transmission of material that is unlawful, defamatory, harassing, libelous, invasive of another’s privacy, abusive, threatening, harmful, vulgar, pornographic, obscene, or is otherwise objectionable, offends religious sentiments, promotes racism, contains viruses, or that which infringes or may infringe intellectual property or other rights of another. You agree not to use the Services for the transmission of “junk mail”, “spam”, “chain letters”, “phishing” or unsolicited mass distribution of email. We reserve the right to terminate your access to the Services if there are reasonable grounds to believe that you have used the Services for any illegal or unauthorized activity.
                        </p>

                        <h2 className="terms__section-title">Inactive User Accounts Policy</h2>
                        <p className="terms__text">
                            We reserve the right to terminate unpaid user accounts that are inactive for a continuous period of 120 days. In the event of such termination, all data associated with such user account will be deleted. We will provide you prior notice of such termination and backup of your data by email. The data deletion policy may be implemented with respect to any or all of the Services. Each Service will be considered an independent and separate service for the purpose of calculating the period of inactivity. In other words, activity in one of the Services is not sufficient to keep your user account in another Service active. In case of accounts with more than one user, if at least one of the users is active, the account will not be considered inactive.
                        </p>

                        <h2 className="terms__section-title">Data Ownership</h2>
                        <p className="terms__text">
                            We respect your right to ownership of content created or stored by you. You own the content created or stored by you. Unless specifically permitted by you, your use of the Services does not grant Orail the license to use, reproduce, adapt, modify, publish or distribute the content created by you or stored in your user account for Orail’s commercial, marketing or any similar purpose. But you grant Orail permission to access, copy, distribute, store, transmit, reformat, publicly display and publicly perform the content of your user account solely as required for the purpose of providing the Services to you.Your data is very important and can contain sensitive and crucial information. So it is equally important that your data be backed up to avoid accidentally losing it permanently. It is recommended that you keep a regular backup of your data and to do a manual point-in-time backup before you proceed with any major data project within your organization.
                        </p>

                        <h2 className="terms__section-title">User Generated Content</h2>
                        <p className="terms__text">
                            You may transmit or publish content created by you using any of the Services or otherwise. However, you shall be solely responsible for such content and the consequences of its transmission or publication. Any content made public will be publicly accessible through the internet and may be crawled and indexed by search engines. You are responsible for ensuring that you do not accidentally make any private content publicly available. Any content that you may receive from other users of the Services, is provided to you AS IS for your information and personal use only and you agree not to use, copy, reproduce, distribute, transmit, broadcast, display, sell, license or otherwise exploit such content for any purpose, without the express written consent of the person who owns the rights to such content. In the course of using any of the Services, if you come across any content with copyright notice(s) or any copy protection feature(s), you agree not to remove such copyright notice(s) or disable such copy protection feature(s) as the case may be. By making any copyrighted/copyrightable content available on any of the Services you affirm that you have the consent, authorization or permission, as the case may be from every person who may claim any rights in such content to make such content available in such manner. Further, by making any content available in the manner aforementioned, you expressly agree that Orail will have the right to block access to or remove such content made available by you, if Orail receives complaints concerning any illegality or infringement of third party rights in such content. By using any of the Services and transmitting or publishing any content using such Service, you expressly consent to determination of questions of illegality or infringement of third party rights in such content by the agent designated by Orail for this purpose.
                        </p>
                        <p className="terms__text">
                            For procedure relating to complaints of illegality or infringement of third party rights in content transmitted or published using the Services, click here.
                        </p>
                        <p className="terms__text">
                            If you wish to protest any blocking or removal of content by Orail, you may do so in the manner provided here.
                        </p>

                        <h2 className="terms__section-title">Sample files and Applications</h2>
                        <p className="terms__text">
                            Orail may provide sample files and applications for the purpose of demonstrating the possibility of using the Services effectively for specific purposes. The information contained in any such sample files and applications consists of random data. Orail makes no warranty, either express or implied, as to the accuracy, usefulness, completeness or reliability of the information or the sample files and applications.
                        </p>

                        <h2 className="terms__section-title">Trademark</h2>
                        <p className="terms__text">
                            Orail, Orail logo, the names of individual Services and their logos are trademarks of ORAIL Corporation. You agree not to display or use, in any manner, the Orail trademarks, without Orail’s prior permission.
                        </p>

                        <h2 className="terms__section-title">Disclaimer of Warranties</h2>
                        <p className="terms__text">
                            YOU EXPRESSLY UNDERSTAND AND AGREE THAT THE USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN AS-IS-AND-AS-AVAILABLE BASIS. ORAIL EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. ORAIL MAKES NO WARRANTY THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR VIRUS FREE. USE OF ANY MATERIAL DOWNLOADED OR OBTAINED THROUGH THE USE OF THE SERVICES SHALL BE AT YOUR OWN DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM, MOBILE TELEPHONE, WIRELESS DEVICE OR DATA THAT RESULTS FROM THE USE OF THE SERVICES OR THE DOWNLOAD OF ANY SUCH MATERIAL. NO ADVICE OR INFORMATION, WHETHER WRITTEN OR ORAL, OBTAINED BY YOU FROM ORAIL, ITS EMPLOYEES OR REPRESENTATIVES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TERMS.
                        </p>

                        <h2 className="terms__section-title">Limitation of Liability</h2>
                        <p className="terms__text">
                            YOU AGREE THAT ORAIL SHALL, IN NO EVENT, BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, SPECIAL, PUNITIVE, OR OTHER LOSS OR DAMAGE WHATSOEVER OR FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, COMPUTER FAILURE, LOSS OF BUSINESS INFORMATION, OR OTHER LOSS ARISING OUT OF OR CAUSED BY YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF ORAIL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH ORAIL RELATED TO ANY OF THE SERVICES SHALL BE TERMINATION OF SUCH SERVICE. IN NO EVENT SHALL ORAIL’S ENTIRE LIABILITY TO YOU IN RESPECT OF ANY SERVICE, WHETHER DIRECT OR INDIRECT, EXCEED THE FEES PAID BY YOU TOWARDS SUCH SERVICE.
                        </p>

                        <h2 className="terms__section-title">Indemnification</h2>
                        <p className="terms__text">
                            You agree to indemnify and hold harmless Orail, its officers, directors, employees, suppliers, and affiliates, from and against any losses, damages, fines and expenses (including attorney’s fees and costs) arising out of or relating to any claims that you have used the Services in violation of another party’s rights, in violation of any law, in violations of any provisions of the Terms, or any other claim related to your use of the Services, except where such use is authorized by Orail.
                        </p>

                        <h2 className="terms__section-title">Suspension and Termination</h2>
                        <p className="terms__text">
                            We may suspend your user account or temporarily disable access to whole or part of any Service in the event of any suspected illegal activity, extended periods of inactivity or requests by law enforcement or other government agencies. Objections to suspension or disabling of user accounts should be made to legal@orail.in within thirty days of being notified about the suspension. We may terminate a suspended or disabled user account after thirty days. We will also terminate your user account on your request. In addition, we reserve the right to terminate your user account and deny the Services upon reasonable belief that you have violated the Terms and to terminate your access to any Beta Service in case of unexpected technical issues or discontinuation of the Beta Service. Termination of user account will include denial of access to all Services, deletion of information in your user account such as your e-mail address and password and deletion of all data in your user account.
                        </p>

                        <h2 className="terms__section-title">Cancel your subscription</h2>
                        <p className="terms__text">
                            If you no longer want to use Optigo Apps, cancel your Optigo Apps subscription. Your service will stop within 48 hours. You’ll be charged for your final costs within 31 days.
                        </p>
                        <p className="terms__text">
                            <strong>Before canceling</strong>, make sure your Orail billing account has a valid primary payment method that we can charge for your final automatic payment. If necessary, fix a Alternate payment method.
                        </p>
                    </section>

                    <section className="terms__section">
                        <h2 className="terms__section-title">To stop your paid subscription for Optigo Apps :</h2>

                        <p className="terms__text">1. Send email to <Link href="mailto:support@orail.in">support@orail.in</Link> from your registered admin email with subject ”Cancel subscription“ and follow the instruction given in email reply.</p>
                        <p className="terms__text">2. On the following page, you’ll see additional information, depending on your billing plan. Review this information before deleting the subscription.</p>

                        <section className="terms__section" style={{ marginLeft: "20px" }}>
                            <p className="terms__text">1. <strong>Delete user data:</strong> All your users’ Optigo Apps data will be deleted in accordance with Optigo App’s Privacy Policy. This includes their data, images, scheduler events, and online documents and url. Before deleting your account, you might therefore want to export all Apps data.</p>
                            <p className="terms__text">2. <strong>Closeout charge:</strong> If you’re on the Annual Plan, we email a calculation of your <i>closeout</i> charge. This is the value of the remainder of your annual contract. As per the terms of the <span style={{ textDecoration: "underline" }}>Annual Plan</span>, you’re responsible for paying the full amount of your annual contract, even if you cancel your subscription before the contract is over.</p>
                        </section>

                        <p className="terms__text">3. If you’re not using your domain with any other Optigo Apps services, <span style={{ textTransform: "underline" }}>delete your domain’s OptigoApps account.</span> You must also do this to re-use your domain with another OptigoApps account.</p>


                        <div className='terms__end'>
                            <h2 className="terms__footer-title">END OF TERMS OF SERVICE</h2>

                            <p className="terms__footer-text">
                                If you have any questions or concerns regarding this agreement, please contact us at info@orail.in.
                            </p>
                            <p className="terms__footer-text">
                                Last updated on: 25th April, 2016.
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default page;