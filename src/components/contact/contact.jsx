import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'

const contact = () => {

  /* emailJS implementation */
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xqsaw4v', 'template_14mxras', form.current, 'ssbABKj0y5h1hDCie')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

    e.target.reset();
  };
  /* End of emailJS */


  /*Submission Form Display */
  var amtOfTimesClicked = 0;

  function handleSubmit() {
    amtOfTimesClicked++;
    var submitBTN = document.getElementById("submitBtn");
    var nameInput = document.getElementsByName('name');

    if (amtOfTimesClicked > 0 && !nameInput.value) {
      submitBTN.textContent = "Sent! x"+amtOfTimesClicked;
    }

  }
  /*End of submission form display*/

  return (
    <section>
      <h2 id='message-sent' className='hidden'>Message Sent. Thank you for reaching out!</h2>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container" id="contact-container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact_option-icon' />
              <h4>Email</h4>
              <h5>bolyaxel@gmail.com</h5>
              <a href="mailto:bolyaxel@gmail.com" target="_blank">Send a message</a>
            </article>

          </div>
          {/*END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail} id='email-form'>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary sbmtBtn' id='submitBtn' onClick={handleSubmit}>Send Message</button>
          </form>
        </div>
      </section>
    </section>
  )
}

export default contact