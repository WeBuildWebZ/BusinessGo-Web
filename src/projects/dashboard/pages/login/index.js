import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Login = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="login">
      <h1 className="title">WeBuildWebz - Dashboard</h1>
      <input className="input" type="text" placeholder={language.username} />
      <input className="input" type="password" placeholder={language.password} />
      <div className="button">{language.login}</div>
      <style jsx>
        {`
          * {
            color: white;
          }
          .login {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            height: 100vh;
            background-color: #1e191b;
            position: absolute;
            left: 0;
            top: 0;
            background-image: url(/images/login.png);
            background-size: cover;
            background-position-y: 0;
            background-repeat: no-repeat;
            animation: backgroundAppear 1.4s ease;
          }
          .title {
            width: fit-content;
            margin-top: 100px;
            padding: 14px;
            text-align: center;
            border-style: solid;
            border-width: 5px;
            border-radius: 15px;
            user-select: none;
            margin-bottom: 90px;
            animation: titleAppear 1.4s ease;
          }
          .input {
            width: 300px;
            height: 60px;
            padding: 14px;
            font-size: 20px;
            color: #030303;
            outline: none;
            border-style: none;
            border-radius: 14px;
            margin: 14px;
            transition: 0.7s;
            animation: inputAppear 1.4s ease;
          }
          .input:hover {
            transform: scale(1.04);
            box-shadow: 0 0 1px 1px whitesmoke;
          }
          .input:focus {
            transform: scale(1.1);
            box-shadow: 0 0 2px 2px whitesmoke;
            transition: 0.1s;
          }
          .button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 60px;
            margin: 14px;
            font-size: 30px;
            background-color: #ff044c;
            border-radius: 14px;
            user-select: none;
            transition: 0.7s;
          }
          .button:hover {
            transform: scale(1.04);
            box-shadow: 0 0 1px 1px #ff044c;
          }
          .button:active {
            transform: scale(1.1);
            box-shadow: 0 0 2px 2px #ff044c;
            transition: 0.1s;
          }
          @keyframes backgroundAppear {
            0% {
              background-position-y: 150px;
            }
          }
          @keyframes titleAppear {
            0% {
              margin-top: -200px;
            }
          }
          @keyframes inputAppear {
            0% {
              width: 0;
              height: 0;
              opacity: 0;
            }
          }
          @media only screen and (max-width: 768px) {
            .title {
              font-size: 20px;
            }
            .input {
              width: 80%;
              height: 40px;
              font-size: 15px;
            }
            .button {
              width: 80%;
              height: 40px;
              font-size: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
