import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message, toEmail } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'producthouse365@gmail.com',
        pass: 'ymlk ayts odib pzuh',  
      },
    });

    await transporter.sendMail({
      from: 'no-reply@producthouse.com',
      to: 'producthouse365@gmail.com',
      subject: `New Inquiry from ${name} - Product House`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), {
      status: 500,
    });
  }
}
