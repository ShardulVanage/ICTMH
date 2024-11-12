export const adminNotificationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Paper Submission</title>
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
        }
        .submission-details {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #e9ecef;
        }
        .field {
            margin-bottom: 10px;
        }
        .field-label {
            font-weight: bold;
            color: #495057;
        }
        .pdf-link {
            color: #007bff;
            text-decoration: none;
        }
        .pdf-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Paper Submission</h2>
    </div>
    <div class="submission-details">
        <div class="field">
            <span class="field-label">Author:</span> ${data.authorName}
        </div>
        <div class="field">
            <span class="field-label">Email:</span> ${data.email}
        </div>
        <div class="field">
            <span class="field-label">Phone:</span> ${data.number}
        </div>
        <div class="field">
            <span class="field-label">Country:</span> ${data.country}
        </div>
        <div class="field">
            <span class="field-label">Paper Title:</span> ${data.paperTitle}
        </div>
        <div class="field">
            <span class="field-label">Department:</span> ${data.department}
        </div>
        <div class="field">
            <span class="field-label">University/Organization:</span> ${data.universityOrganization}
        </div>
        <div class="field">
            <span class="field-label">Paper Type:</span> ${data.paperType}
        </div>
        <div class="field">
            <span class="field-label">Presentation Type:</span> ${data.presentationType}
        </div>
        <div class="field">
            <span class="field-label">PDF URL:</span> 
            <a href="${data.pdfUrl}" class="pdf-link">${data.pdfUrl}</a>
        </div>
        <div class="field">
            <span class="field-label">Message:</span><br>
            ${data.message}
        </div>
    </div>
</body>
</html>
`;