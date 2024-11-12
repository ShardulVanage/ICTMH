export const userConfirmationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
            text-align: center;
        }
        .content {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #e9ecef;
        }
        .submission-details {
            margin-top: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 0.9em;
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>Paper Submission Confirmation</h2>
    </div>
    <div class="content">
        <p>Dear ${data.authorName},</p>
        <p>Thank you for submitting your paper. We are pleased to confirm that we have received your submission titled "${data.paperTitle}".</p>
        
        <div class="submission-details">
            <h3>Submission Details:</h3>
            <ul>
                <li>Paper Type: ${data.paperType}</li>
                <li>Presentation Type: ${data.presentationType}</li>
                <li>Submission Date: ${new Date().toLocaleDateString()}</li>
            </ul>
        </div>
        
        <p>Our team will review your submission and contact you within 24-48 hours with further information.</p>
        
        <p>If you have any questions or concerns in the meantime, please don't hesitate to contact us.</p>
    </div>
    <div class="footer">
        <p>This is an automated message. Please do not reply to this email.</p>
    </div>
</body>
</html>
`;