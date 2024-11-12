// File: app/components/emails/ContactFormEmail.jsx
const ContactFormEmail = (data) => {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #f97316;
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #666666;
        }
        .value {
            margin-top: 5px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eeeeee;
            color: #666666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
            </div>
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${data.phone}</div>
            </div>
            <div class="field">
                <div class="label">Country:</div>
                <div class="value">${data.country}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message}</div>
            </div>
        </div>
        <div class="footer">
            This email was sent from your website's contact form.
        </div>
    </div>
</body>
</html>
`;
};

export default ContactFormEmail;