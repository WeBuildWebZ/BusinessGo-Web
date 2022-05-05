import Title from '../title';

const staff = [
  {
    name: 'Andrea Castro',
    picture:
      'https://static.wixstatic.com/media/a3c153_9edd7519e41c46b8bbbf9fa1c86be6e5~mv2.jpg/v1/crop/x_1215,y_42,w_3240,h_3240/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-591216789.jpg',
    position: 'Editora en jefe'
  },
  {
    name: 'Yoel Colodro',
    picture:
      'https://static.wixstatic.com/media/a3c153_e5fe1f6deb8d48409e21fec059e8c1c7~mv2.jpg/v1/crop/x_0,y_207,w_3580,h_3575/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1198446243.jpg',
    position: 'Asistente'
  },
  {
    name: 'Marta Prieto',
    picture:
      'https://static.wixstatic.com/media/a3c153_86dbef970b6649dfada50c0e4b4d8869~mv2.jpg/v1/crop/x_12,y_24,w_691,h_691/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0920%20(1)%20(2).jpg',
    position: 'Directora'
  },
  {
    name: 'Pedro Retamal',
    picture:
      'https://static.wixstatic.com/media/a3c153_775f75c847ff47b98950606c18801d98~mv2.jpg/v1/crop/x_1643,y_166,w_3016,h_3019/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-545986197%20(3).jpg',
    position: 'Programador'
  }
];

const Staff = () => (
  <div className="staff_container" id="staff">
    <Title title="Staff" />
    <div className="box">
      {staff.map((item, i) => (
        <div className="card" key={i}>
          <img src={item.picture} alt="" />
          <h2>{item.name}</h2>
          <h4>{item.position}</h4>
        </div>
      ))}
    </div>
    <style jsx>
      {`
        .staff_container {
          width: 100vw;
          min-height 40vw;
          padding: 3em 0 0 0;
        }
        .staff_container .box {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .card {
          width: 250px;
          height: 250px;
          border: 0.3em solid #1c1c1c;
          border-radius: 10px;
          padding: 1em;
          margin: 0.5em;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        .card img {
          width: 150px;
          height: 150px;
          border-radius: 100%
        }
        .card h2 {
          color: #ebebeb;
          margin: 0;
          padding: 0;
        }
        .card h4 {
          color: #ebebeb;
          margin: 0;
          padding: 0;
        }
        .card:hover {
          border: 0.3em solid #f5b723;
        }
      `}
    </style>
  </div>
);

export default Staff;
