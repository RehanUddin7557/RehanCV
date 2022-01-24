
$(document).ready(function () {
    $('.submit').click(function (event) {
       
       console.log("clicked button")
 
 var name =$('.name').val()
 var email =$('.email').val()
 var subject =$('.subject').val()
 var message =$('.message').val()
 var statuseElm =$('.status')
 statuseElm.empty()
 
 
 if(email.length > 5 && email.includes('@') && email.includes('.')){
 
    statuseElm.append('<div>Email is valid</div>')
 } else{
    event.preventDefault()
 statuseElm.append('<div>Email is not valid</div>')
    }
 
 
    if(subject.length > 3){
       statuseElm.append('<div>Subject is valid</div>')
    } else{
       event.preventDefault()
    statuseElm.append('<div>Subject is not valid</div>')
    }
 
 
    if(message.length > 20){
       statuseElm.append('<div><The message is valid /div>')
     } else{
       event.preventDefault()
       statuseElm.append('<div><The message is not  valid /div>')
     }
    })
    
 
 })
 
 