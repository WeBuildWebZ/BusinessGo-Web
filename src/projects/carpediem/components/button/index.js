const Button = ({ children }) => {
  return (
    <button>
      {children}
      <style jsx>
        {`
          button {
            background-image: linear-gradient(120deg, #f6d365 0%, #ed8e2c 100%);
            border-radius: 9px;
            cursor: pointer;
            outline: none;
            border: none;
            width: 200px;
            height: 50px;
            font-weight: bold;
            font-size: 1.3em;
            color: white;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          button::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(120deg, #8c52ff 0%, #563c7e 100%);
            color: white;
            transform: scaleX(0);
            transform-origin: left;
            transition: 0.3s;
            top: 0;
            left: 0;
          }
          button:hover::before {
            transform: scaleX(1);
          }
        `}
      </style>
    </button>
  );
};

export default Button;
