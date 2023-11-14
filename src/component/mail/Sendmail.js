import {Button, Form} from 'react-bootstrap'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import { authActions } from '../../store/auth';
function Sendmail(props){
    const email=useRef()
    const subject=useRef()
    const [editorState, setEditorState] = useState(null);
    const emailSender=useSelector((state)=>state.auth.mailuser)
     
    // console.log(emailSender)
    const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const onSubmitHandler=async (event)=>{
    event.preventDefault()

    console.log('sending')
    const firebaseApiUrl = 'https://react3-6931f-default-rtdb.firebaseio.com/email.json'; 
    const requestData = {
    senderEmail:emailSender,
  email: email.current.value,
  subject:subject.current.value,
  mailbody:editorState.getCurrentContent().getPlainText(),
  read:false
}
// console.log(requestData)
try {
    const response =await fetch(firebaseApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      console.log('Email sent successfully!');
      alert('Email sent successfully!');
      
    } else {
      console.error('Failed to send email.');
      alert('Failed to send email.');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  }
  const onCancelHandler=()=>{
    props.onCancel()
  }
//   console.log(editorState.getCurrentContent().getPlainText())
return (
<div >
<h3>Send mail</h3>
<Form onSubmit={onSubmitHandler} style={{backgroundColor: 'white'}}>
    <Form.Control placeholder='To' ref={email}></Form.Control>
    <Form.Control placeholder='Subject' ref={subject}></Form.Control>
    <Editor
    editorState={editorState}
    toolbarClassName="toolbarClassName"
    wrapperClassName="wrapperClassName"
    editorClassName="editorClassName"
    onEditorStateChange={onEditorStateChange}
    
    />
    <Button type="submit"> Send </Button>
    <Button variant='secondary' onClick={onCancelHandler}>Cancel</Button>
</Form>
<br/>
<br/>
</div>
)
}
export default Sendmail;




