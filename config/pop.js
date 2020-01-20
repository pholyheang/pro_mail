var os = require('os');
if (os.platform() == 'win32') {  
    if (os.arch() == 'ia32') {
        var chilkat = require('@chilkat/ck-node11-win-ia32');
    } else {
        var chilkat = require('@chilkat/ck-node11-win64'); 
    }
} 

function chilkatExample() {

    // This example requires the Chilkat API to have been previously unlocked.
    // See Global Unlock Sample for sample code.

    var mailman = new chilkat.MailMan();

    // Set the POP3 server's hostname
    mailman.MailHost = "pop.someMailServer.com";

    // Set the POP3 login/password.
    mailman.PopUsername = "lyheng@golftravelmyanmar.com";
    mailman.PopPassword = "Lyheng@2019!@#$%";

    // Get the number of messages in the mailbox.
    var numMessages = mailman.GetMailboxCount();

    // Message numbers are specific to a POP3 session. 
    // If a maildrop (i.e. inbox)  contains 10 messages, 
    // the message numbers will be 1, 2, 3, ... 10. 
    // If message number 1 is deleted and a new POP3 session 
    // is established, there will be 9 messages numbered 1, 2, 3, ... 9. 

    var i = 0;

    // email: Email
    var email;
    while (i < numMessages) {

        email = mailman.FetchByMsgnum(i);
        if (mailman.LastMethodSuccess !== true) {
            console.log(mailman.LastErrorText);
            return;
        }

        console.log(email.From + ": " + email.Subject + "\n");

        i = i+1;

    }


}

module.exports = {
    chilkatExample
}