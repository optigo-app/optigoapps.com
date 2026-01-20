import React from 'react';
import './HRDetails.scss';
import { Phone, Mail, Send } from 'lucide-react';

const HRDetails = () => {
    return (
        <div className="hr-contact">
            <div className="hr-block">
                <Phone className="icon" />
                <div>
                    <span>HR</span>
                    <strong>+91 95102 13587</strong>
                </div>
            </div>

            <div className="hr-block">
                <Mail className="icon" />
                <div>
                    <span>HR</span>
                    <strong>job@orail.in</strong>
                </div>
            </div>

            <div className="hr-block">
                <Send className="icon" />
                <div>
                    <p>
                        Ground Floor, ITC building D-Block, G-20, cross road,
                        <br /> Majura Gate, Surat, Gujarat 395002
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HRDetails;
