const nodemailer = require('nodemailer');

// Create a transporter with Gmail credentials
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'afsrun771@gmail.com', // Replace with your Gmail address
        pass: 'shariar5175' // Replace with your Gmail password
    }
});

// Function to send verification email
const sendVerificationEmail = async (recipientEmail, verificationLink) => {
    const mailOptions = {
        from: 'afsrun771@gmail.com', // Replace with your Gmail address
        to: recipientEmail,
        subject: 'Email Verification',
        text: `Please click the following link to verify your email address: ${verificationLink}`,
        html: `<p>Please click the following link to verify your email address: <a href="${verificationLink}">Verify Email</a></p>`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendVerificationEmail;
