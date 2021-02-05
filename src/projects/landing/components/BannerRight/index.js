import Rectangle from '../../../../components/Rectangle';

const Rigth = () => (
  <div className="right">
    <div className="box">
      <Rectangle>
        <Rectangle.Row text="WeBuildWebZ" backgroundColor="#F9EE08" color="#1c1c1c" borderTopRight={4} />
        <Rectangle.Row backgroundColor="#FF8CAC" borderBottomRight={4} />
        <Rectangle.Row borderTopLeft={4} />
      </Rectangle>
      <Rectangle>
        <Rectangle.Row imageUrl="/images/grupal1.jpg" flex={2} borderTopLeft={4} borderBottomRight={4} />
        <Rectangle.Row text="Chatbots" backgroundColor="#F9EE08" color="#1c1c1c" borderBottomLeft={4} />
      </Rectangle>
      <Rectangle>
        <Rectangle.Row text="SEO" borderTopLeft={4} />
        <Rectangle.Row
          text="Dominio.com"
          backgroundColor="#FF8CAC"
          borderTopLeft={50}
          borderTopRight={50}
          borderBottomLeft={50}
          borderBottomRight={50}
        />
        <Rectangle.Row imageUrl="/images/brindis.jpg" borderTopLeft={4} />
      </Rectangle>
      <Rectangle>
        <Rectangle.Row imageUrl="/images/man.jpg" />
        <Rectangle.Row text={'Diseño\nWeb'} backgroundColor="#F9EE08" color="#1c1c1c" />
        <Rectangle.Row
          text="Hosting"
          backgroundColor="#FF8CAC"
          color="#1c1c1c"
          borderBottomLeft={4}
          borderTopRight={4}
        />
      </Rectangle>
    </div>
    <style jsx>
      {`
        .right {
          width: 600px;
          height: 700px;
          margin-left: 3em;
        }
        .box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
          border-radius: 5px;
          overflow: hidden;
        }
        // ======================
        @media (max-width: 1286px) {
          .right {
            margin-left: 0;
          }
        }
        @media (max-width: 605px) {
          .right {
            width: 100vw;
          }
        }

        @media (max-width: 528px) {
          .right {
            height: 650px;
          }
        }
        @media (max-width: 454px) {
          .right {
            height: 600px;
          }
        }
        @media (max-width: 370px) {
          .right {
            height: 500px;
          }
        }
        @media (max-width: 304px) {
          .right {
            height: 400px;
          }
        }
      `}
    </style>
  </div>
);

export default Rigth;
