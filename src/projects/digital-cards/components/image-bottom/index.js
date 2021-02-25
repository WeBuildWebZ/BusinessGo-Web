const ImageBackground = () => (
  <div className="image-bg">
    <style>
      {`

    .image-bg{
        width:100vw;
        height:100vh;
        background-image:url(/images/image-home.png);
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    `}
    </style>
  </div>
);

export default ImageBackground;
