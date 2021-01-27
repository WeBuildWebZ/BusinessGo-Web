import Rectangle from '../../../../../components/Rectangle';

const Rigth = () => (
  <div className="right">
    <div className="box">
      <Rectangle>
        <Rectangle.Row text="DancotLL" backgroundColor="yellow" color="black" borderTopRight="4em" />
        <Rectangle.Row backgroundColor="pink" borderBottomRight="4em" />
        <Rectangle.Row borderTopLeft="4em" />
      </Rectangle>
      <Rectangle>
        <Rectangle.Row imageUrl="/images/grupal1.jpg" flex={2} borderTopLeft="4em" borderBottomRight="4em" />
        <Rectangle.Row text="Chatbots" backgroundColor="yellow" color="black" borderBottomLeft="4em" />
      </Rectangle>
      <Rectangle>
        <Rectangle.Row text="SEO" borderTopLeft="4em" />
        <Rectangle.Row
          text="Dominio.com"
          backgroundColor="pink"
          borderTopLeft="50%"
          borderTopRight="50%"
          borderBottomLeft="50%"
          borderBottomRight="50%"
        />
        <Rectangle.Row imageUrl="/images/brindis.jpg" borderTopLeft="4em" />
      </Rectangle>
      <Rectangle>
        <Rectangle.Row imageUrl="/images/man.jpg" />
        <Rectangle.Row text={'Diseño\nWeb'} backgroundColor="yellow" color="black" />
        <Rectangle.Row
          text="Hosting"
          backgroundColor="pink"
          color="black"
          borderBottomLeft="4em"
          borderTopRight="4em"
        />
      </Rectangle>
    </div>
    <style jsx>
      {`
        .right {
          flex: 3;
          width: 100%;
          height: 100%;
          background: #ebebeb;
        }
        .box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
        }
      `}
    </style>
  </div>
);

export default Rigth;
