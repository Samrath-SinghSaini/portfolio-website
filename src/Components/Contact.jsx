import React, {useState} from 'react'
import EmailJS from '@emailjs/browser'

function Contact(){
    const [formData, setFormData] = useState({
        fullName:"", 
        email:"", 
        message:""
    })

    const [response, setResponse] = useState('')
    function changeForm(event){
        let name = event.target.name
        if(name === 'fullName'){
            setFormData((prevVal)=>{
                return {...prevVal, fullName:event.target.value}
            })
        } else if(name ==='email'){
            setFormData((prevVal)=>{
                return {...prevVal, email:event.target.value}
            })
        } else if(name === 'message'){
            setFormData((prevVal)=>{
                return {...prevVal, message:event.target.value}
            })
        }
    }

    function sendEmail(){
        EmailJS.send('service_mxqzz3j', 'template_aoff4ur', formData, 'amwmvsHuQhBfb9JsK')
        .then((res)=>{
            console.log(res)
            console.log("Successfully sent email")
            setFormData(()=>{
                return {
                    fullName:'',
                    email:'',
                    message:''
                }
            })
            res.status === 200 ? setResponse("Your message has been sent successfully.") :setResponse("Your message could not be sent due to an error. Please reach out to me using my LinkedIn Profile. Thanks.")
        })
        .catch((err)=>{
            console.log("Could not send email")
            console.log(err)
            setResponse("Your message could not be sent due to an error. Please reach out to me using my LinkedIn Profile. Thanks.")
        })
    }
    return <div className='contact-main'>
    <h1 className='contact-heading'>Contact</h1>
    <div className='contact-form'>
    <p className='contact-para'>Send me an email!</p>
    <input type='text' name='fullName' placeholder='Your Name' className='form-input' value={formData.fullName} onChange={changeForm}></input>
    <input type='email' name='email' placeholder='Your Email' className='form-input' value={formData.email} onChange={changeForm}></input>
    <input type='text' name="message" className='form-message' placeholder='Your Message' value={formData.message} onChange={changeForm}></input>
    <button className='form-btn' onClick={sendEmail}>Send Message</button>
    <p style={{color:'black'}} className='contactResponse'>{response}</p>
    </div>
    </div>
}

export default Contact