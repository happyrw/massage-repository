import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { email, name, orderDetails } = await req.json();

        console.log(email, name, orderDetails);

        // Create a transporter object
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.APP_EMAIL,
                pass: process.env.APP_PASSWORD,
            },
        });

        // Define the mailOptions for the user
        const userMailOptions = {
            from: `M-a-S service <${process.env.APP_EMAIL}>`,
            to: email,
            subject: "ORDER CONFIRMATION  M-a-S",
            html: `<h1>Thank you for your order, ${name}!</h1>
                   <p>Your order has been received and is being processed.</p>
                   <p><strong>Order Details:</strong></p>
                   <p>${orderDetails}</p>
                   <p>If you have any questions, feel free to contact us.</p>
                   <p>Best regards,<br />M-a-S service Team</p>
                `,
        };

        // Define the mailOptions for yourself
        const adminMailOptions = {
            from: `M-a-S service <${process.env.APP_EMAIL}>`,
            to: 'happy222004567@gmail.com',
            subject: "New Order Received",
            html: `<h1>New Order from ${name}</h1>
                   <p><strong>Order Details:</strong></p>
                   <p>${orderDetails}</p>
                   <p>Best regards,<br />M-a-S service Team</p>
                `,
        };

        // Send both emails
        await Promise.all([
            new Promise((resolve, reject) => {
                transporter.sendMail(userMailOptions, (error, info) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(info);
                    }
                });
            }),
            new Promise((resolve, reject) => {
                transporter.sendMail(adminMailOptions, (error, info) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(info);
                    }
                });
            })
        ]);

        return NextResponse.json({ message: 'Emails sent successfully' });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: error.toString() }, { status: 500 });
    }
}











// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//     try {
//         const { email, name, orderDetails } = await req.json();

//         console.log(email, name, orderDetails);

//         // Create a transporter object
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.APP_EMAIL,
//                 pass: process.env.APP_PASSWORD,
//             },
//         });

//         // Define the mailOptions
//         const mailOptions = {
//             from: `M-a-S service <${process.env.APP_EMAIL}>`,
//             to: email,
//             subject: "Order Confirmation - M-a-S",
//             html: `<h1>Thank you for your order, ${name}!</h1>
//                    <p>Your order has been received and is being processed.</p>
//                    <p><strong>Order Details:</strong></p>
//                    <p>${orderDetails}</p>
//                    <p>If you have any questions, feel free to contact us.</p>
//                    <p>Best regards,<br />M-a-S service Team</p>`,
//         };

//         // Send the email
//         await new Promise((resolve, reject) => {
//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve(info);
//                 }
//             });
//         });

//         return NextResponse.json({ message: 'Email sent successfully' });
//     } catch (error: any) {
//         console.error('Error sending email:', error);
//         return NextResponse.json({ error: error.toString() }, { status: 500 });
//     }
// }
