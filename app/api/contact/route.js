import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message, toEmail } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: '9191df4fc0e1e8',
        pass: '9e6785d21ea959',
      },
    });

    await transporter.sendMail({
      from: email,
      to: toEmail,
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
