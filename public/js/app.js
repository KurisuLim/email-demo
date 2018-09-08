/* Your custom app logic goes here */
(function(){
    
    var turbo = Turbo({site_id:"TURBO_APP_ID"})

        $('#btn-send').click(function(event){
            var email = {
                fromEmail: $('#input-email').val(),
                fromName: $('#input-name').val(),
                recipients: [$('#input-recipient').val()],
                subject: 'Email Demo',
                content: $('#input-message').val()
            }
            console.log('Send Email: ' + JSON.stringify(email));
            turbo.sendEmail(email, function(err,data){
                if(err){
                    alert('Error: ' + err.message)
                    return
                }
                alert('Email Sent!')
            })
        })
})()