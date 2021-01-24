const ProductMessage = () => (
  <div className="productMessage">
    <div className="message">Te mostramos nuestros mejores productos en cosméticos</div>
    <style jsx>
      {`
        .productMessage {
          display: flex;
          flex-direction: column;
          width: 96%;
          margin: 0 0 15px 2%;
          border-bottom-left-radius: 50px;
          border-bottom-right-radius: 50px;
          height: 100px;
          background-color: lightskyblue;
          box-shadow: 0 0 2px 2px lightskyblue;
          transition: 0.7s;
        }
        .productMessage:hover {
          border-bottom-left-radius: 500px;
          border-bottom-right-radius: 500px;
          background-color: rgb(126, 192, 233);
          box-shadow: 0 0 2px 2px rgb(126, 192, 233);
        }
        .message {
          text-align: center;
          user-select: none;
          font-size: 20px;
        }
      `}
    </style>
  </div>
);

export default ProductMessage;
