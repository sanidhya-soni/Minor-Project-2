import React, { useState } from 'react';
import axios from 'axios';
import "./mail.css";


const Mail = () =>{
    const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    console.log("hgchgcchc")
    event.preventDefault();
    axios.post('http://3.111.218.250:5003/send-email', { to, subject, text })
      .then((response) => {
        console.log(response.data);
        alert(response.data);
        setTo('');
        setSubject('');
        setText('');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="left">
            <img src='mailPik.jpg' alt='img' />
          </div>
          <div className="right">
            <h2>Mail Please😊</h2>
            <div className="contact">
              <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="username">
                    <input type="email" name='to' placeholder='To Whom' value={to} onChange={(event) => setTo(event.target.value)} />
                  </div>
                  <div className="useremail">
                    <input type="text" name='subject' placeholder='Subject Please' value={subject} onChange={(event) => setSubject(event.target.value)} />
                  </div>
                  <div className="usermessage">
                    <textarea value={text} name='text' placeholder='Enter Message' onChange={(event) => setText(event.target.value)} />
                  </div>
                  <div className="usersubmit">
                    <br/><br/><br/>
                    <center>
                      <button className='submit' type="submit">Send</button>
                    </center>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mail;