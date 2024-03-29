import React, {useState} from 'react';
import Footer from '../layouts/Footer'
import {Button, TextField} from '@material-ui/core';
import {init, send} from 'emailjs-com';


const rightchrt: { [key: string]: string } = {
  color: "white",
  textAlign: "center",
  paddingLeft: "60px",
};

const outline: { [key: string]: string } = {
  margin: "62px 0 100px 0",
};

const outword: { [key: string]: string } = {
  color: "snow",
  fontSize: "30px",
  textAlign: "left",
  margin: "0 0 48px 160px",
  paddingBottom: "2px",
  borderBottom: "2px solid snow",
  width: "400px",
};

const formword: { [key: string]: string } = {
  color: "snow",
  fontSize: "27px",
  margin: "50px 0  90px 0"
}

const nameform: { [key: string]: string } = {
  width: "439px",
  height: "43px",
  padding: "0 11px 0",
  backgroundColor: "#EEEEEE"
}

const textform: { [key: string]: string } = {
  dispkay: "flex",
  flexDirection: "row",
  margin: "42px 112px 0 0",

}

const textform2: { [key: string]: string } = {
  marginTop: "40px",
}

const subjectform: { [key: string]: string } = {
  width: "1082px",
  height: "43px",
  marginLeft: "21px",
  paddingLeft: "11px",
  backgroundColor: "#EEEEEE"
}

const contentcss: { [key: string]: string } = {
  marginTop: "20px"
}

const contentform: { [key: string]: string } = {
  width: "1091px",
  height: "123px",
  marginRight: "150px",
  marginLeft: "172px",
  padding: "17px 0 0 11px",
  backgroundColor: "#EEEEEE",
}

const btnoutline: { [key: string]: string } = {
  dispkay: "flex",
  marginTop: "26px",
  justifyContent: "center"
}

const btn: { [key: string]: string } = {
  margin: "0 50px 0"
}


function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const userID = process.env.REACT_APP_EmailJS_USER_ID;
  const serviceID = process.env.REACT_APP_EmailJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EmailJS_TEMPLATE_ID;

  const handleChange = () => {
    window.alert('お問い合わせを送信致しました。');
    setName('');
    setEmail('');
    setSubject('');
    setContent('');
  };

  const handleCanceled = () => {
    setName('');
    setEmail('');
    setSubject('');
    setContent('');
  };

  const focusout = () => {
    let regex = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!regex.test(email))
    {
      alert('メールアドレスが正しくありません!');
    }
  }

  const disabled =
    name.length < 8 ||
    email == '' ||
    subject.length < 10 ||
    content.length < 15

  return (
    <div style={outline}>
      <h1 style={outword}>Contact Form(お問い合わせ)</h1>
      <div>
        <h2 style={formword}>Fullfill the form(以下、入力ください)</h2>
        <form>
          <div style={textform}>
            <label htmlFor="nameForm">Your Name (氏名)</label>
            <input
              type = "text"
              id = "nameForm"
              name = "name"
              placeholder = "Name(氏名)"
              style = {nameform}
              onChange = {(e) => setName(e.target.value)}
            />
            <label>Email(メールアドレス)</label>
            <input
              type = "email"
              placeholder ="Address(メールアドレス)"
              style={nameform}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              onBlur={focusout}
              id="emailForm"
              value={email}
            />
          </div>
          <div style={textform2}>
            <input
              type="text"
              id="subjectForm"
              className="formInput"
              placeholder="Subject(件名)"
              style={subjectform}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div style={contentcss}>
            <label htmlFor="contentForm">Content(お問い合わせ内容)</label>
            <textarea
              id="mailContentForm"
              className="formInput"
              placeholder="Content(お問い合わせ内容)"
              style={contentform}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div style={btnoutline}>
            <Button
              type="submit"
              variant="contained"
              color="default"
              style={btn}
              onBlur={focusout}
              onMouseOver={focusout}
              onClick={handleChange}
              disabled={disabled}
              >
              <strong>Submit(送信する)</strong>
            </Button>
            <Button variant="contained" color="default" style={btn} onClick={handleCanceled}>
              <strong>Cancel(キャンセル)</strong>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;