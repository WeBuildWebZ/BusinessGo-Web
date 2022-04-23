const BottomGradient = () => (
  <>
    <div className="bottomGradient" />
    <style jsx>
      {`
        .bottomGradient {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 220px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 100%);
        }
      `}
    </style>
  </>
);

export default BottomGradient;
