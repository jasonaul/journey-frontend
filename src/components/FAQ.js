import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
    return (
        <>
        <h1 id="FAQ">Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Journey</Accordion.Header>
          <Accordion.Body>
            Journey is your personal event tracker! Use Journey to catelog any events you have attended, or any events you are interested in attending in the future. Any event or function applies, whether it be a concert, a business meeting, art show, or more. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does Journey work?</Accordion.Header>
          <Accordion.Body>
           Journey is purposefully built to be a bare-bones web application designed to fit your needs. Enter as much - or as little - detail and information as you wish! Think of it as your own personal diary of events you have attended, or events you are interested in atttending.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How can I create an account?</Accordion.Header>
          <Accordion.Body>
           Creating an account is easy! Simply click on the "Sign Up" button at the top-right of the navigation bar. We have provided two options for you to sign in. You may use Google Sign-in to create an account, or you may enter your own email address and password.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>I have a question or concern - how do I contact you?</Accordion.Header>
          <Accordion.Body>
           We are here to help! Contacting Journey is easy. Simply send us an email at DontYouDareEverEmailUs@gmail.com. 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion></>
    );
  }
  
  export default FAQ;