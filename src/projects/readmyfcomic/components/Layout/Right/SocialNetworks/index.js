const SocialNetworks = () => (
  <div className="socialNetworks">
    <img className="icon" src="/icons/whatsapp.png" />
    <img className="icon" src="/icons/facebook.png" />
    <img className="icon" src="/icons/twitter.png" />
    <img className="icon" src="/icons/phone.png" />
    <style jsx>
      {`
        .socialNetworks {
          float: right;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          background-color: #dcb3e1;
          border-style: solid;
          border-width: 1px;
        }
        .icon {
          margin: 7px;
          width: 20px;
          cursor: pointer;
          transition: 0.7s;
        }
        .icon:hover {
          transform: rotate(45deg);
        }
        @media only screen and (max-width: 768px) {
          .icon {
            margin: 4px;
            width: 14px;
          }
        }
      `}
    </style>
  </div>
);

export default SocialNetworks;
