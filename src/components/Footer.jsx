import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className="footer">
            <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className="contact">
                <FaEnvelope /><p>
                    muhammadabrar341@gmail.com

                </p>
            </a>
            <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer" className="contact">
                <FaPhone />
                <p>
                    +923498512161
                </p>
            </a>
        </footer>
    )
}
