const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const sgMail = require('@sendgrid/mail');

/*const sendMail = async (reciever, token) => {

    /*return new Promise(async (resolve, reject) => {

        const clintID = `${process.env.GMAIL_CLIENT_ID}`;
        const clientSecret = `${process.env.GMAIL_CLIENT_SECRET}`;
        const redirectUri = `${process.env.GMAIL_REDIRECT_URI}`;
        const refreshToken = `${process.env.GMAIL_REFRESH_TOKEN}`;

        const oAuth2Client =  new google.auth.OAuth2(clintID , clientSecret , redirectUri);
        oAuth2Client.setCredentials({
            refresh_token : refreshToken
        });
        const accessToken = await oAuth2Client.getAccessToken();

        const smtpTransport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                user: "med.dev.checker@gmail.com",
                clientId: clintID,
                clientSecret: clientSecret,
                refreshToken: refreshToken,
                accessToken: accessToken
            }
        });

        smtpTransport.use('compile', hbs({
            viewEngine: {
                extname: '.hbs',
                layoutsDir: 'mailTemplate',
                partialsDir: 'mailTemplate',
                defaultLayout: 'mail'
            },
            viewPath: 'mailTemplate',
            extName: '.hbs'
        }));

        const mailOptions = {
            from: "med.dev.checker@gmail.com",
            to: reciever,
            subject: "Email verification",
            template: 'mail',
            context: {
                msg: 'Verify your email',
                link: `${process.env.HOST}/confirm_email?token=${token}`
            }
        };


        smtpTransport.sendMail(mailOptions, (err, response) => {

            if (err) res olve({ err });
            else {
                smtpTransport.close();
                resolve({ success: true });
            }
        });

    });

    try {
      

            const clintID = `${process.env.GMAIL_CLIENT_ID}`;
            const clientSecret = `${process.env.GMAIL_CLIENT_SECRET}`;
            const redirectUri = `${process.env.GMAIL_REDIRECT_URI}`;
            const refreshToken = `${process.env.GMAIL_REFRESH_TOKEN}`;

            const oAuth2Client =  new google.auth.OAuth2(clintID , clientSecret , redirectUri);
            oAuth2Client.setCredentials({refresh_token : refreshToken});
            const accessToken = await oAuth2Client.getAccessToken();
            console.log('new tokken');
            console.log(accessToken.token);


            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    type: "OAuth2",
                    user: "med.dev.checker@gmail.com",
                    clientId: clintID,
                    clientSecret: clientSecret,
                    refreshToken: refreshToken,
                    accessToken: accessToken.token
                }
            });
    
            smtpTransport.use('compile', hbs({
                viewEngine: {
                    extname: '.hbs',
                    layoutsDir: 'mailTemplate',
                    partialsDir: 'mailTemplate',
                    defaultLayout: 'mail'
                },
                viewPath: 'mailTemplate',
                extName: '.hbs'
            }));
    
            const mailOptions = {
                from: "med.dev.checker@gmail.com",
                to: reciever,
                subject: "Email verification",
                template: 'mail',
                context: {
                    msg: 'Verify your email',
                    link: `${process.env.HOST}/confirm_email?token=${token}`
                }
            };
    
    
            smtpTransport.sendMail(mailOptions, (err, response) => {
    
                if (err) return 'error sending';
                else {
                    smtpTransport.close();
                    //resolve({ success: true });
                    return 'email sent';
                }
            });
        
    } catch (error) {
        console.log(error);
        return 'error';
    }

};*/

const sendMail = async (reciver , token )=>{
    // returned value : { status : 1 / 0 }
    const sender = process.env.SENDGRID_EMAIL;
    const template_id = process.env.SENDGRID_TEMPLATE_ID;
    const link = process.env.EMAIL_VERIFICATION_LINK;

     return new Promise( async(resolve,reject)=>{
         try {
            sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

            const data =  {
                link : `${link}=${token}`
            };
        
            await sgMail.send({
                to : reciver , 
                from : {
                    email : sender , 
                    name : 'Era Auto Supprt'
                }  ,  
                templateId : template_id ,
                dynamicTemplateData : data 
            }).then( (info)=>{

                if(info[0].statusCode == 202 )
                    resolve({ status : 1 });
                else 
                    reject({ status : 0})
            }).catch((error)=>{
                console.log(error);
                reject({ status : 0});
            });

         } catch (error) {
             reject({ status : 0});
         }
     });
}

module.exports = sendMail;