## Simple mail server in node js
This is a simple server that servs up a basic contact form. Upon the submission of the contact form the server will send email.
## To use
- Make sure you have node js installed on your machine.
- Clone this project onto your machine (In terminal type in git clone https://github.com/lippyDesign/basic-node-mailer.git)
- Change directory into the project (In terminal type in cd basic-node-mailer)
- Install the needed node modules. (In terminal type in npm install)
- Create a gmail account and make sure you are logged in.
- Go to https://myaccount.google.com/lesssecureapps and click: Allow less secure apps: ON (This will disable some of google security settings for your account)
- Go to https://accounts.google.com/b/0/displayunlockcaptcha and click continue (This will disable some of google security settings for your account)
- In the root of this project create a file and name it .env (In terminal type in touch .env)
- Open the .env file in your text editor and create the following two lines (the first one is the email address of the gmail account, the second one is the password):
```
GMAIL_USER=ruslan@gmail.com
GMAIL_PASS=passwordYouUseForThisEmail
```
- Start the server and test it out (In terminal type in node index.js)
- In your browser go to http://localhost:5000/

## Things to note
- This project does not come with a stylesheet

## Useful resources
- https://codeburst.io/sending-an-email-using-nodemailer-gmail-7cfa0712a799