const colors = ['red', 'green', 'blue'];

const Circles = () => (
  <div className="circles">
    {colors.map((color, i) => (
      <div
        key={i}
        className="circle"
        style={{
          animationDelay: `${i * 0.3}s`,
          backgroundColor: color,
          boxShadow: `2px 2px 2px 2px ${color}`
        }}
      />
    ))}
    <style jsx>
      {`
        .circles {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          width: fit-content;
          height: fit-content;
        }
        .circle {
          display: inline-block;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          margin: 7px;
          animation: loading 1s infinite;
        }
        @keyframes loading {
          50% {
            width: 50px;
            transform: translate(0, -50%);
          }
          80% {
            height: 50px;
            transform: translate(0, 50%);
          }
        }
      `}
    </style>
  </div>
);

export default Circles;
