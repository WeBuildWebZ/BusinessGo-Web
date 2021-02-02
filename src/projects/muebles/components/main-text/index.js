const MainText = () => (
  <div className="maintext">
    <p>
      like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
      their default model text, and a search for 'lorem ipsum'
    </p>
    <p>
      like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
      their default model text, and a search for 'lorem ipsum'
    </p>
    <p>
      like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
      their default model text, and a search for 'lorem ipsum'
    </p>
    <style>
      {`


    .maintext{
        width:100vw;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-werap:wrap;
        padding:1em;
    }
    p{
        max-width:400px;
        padding:1em;


    }

    `}
    </style>
  </div>
);

export default MainText;
