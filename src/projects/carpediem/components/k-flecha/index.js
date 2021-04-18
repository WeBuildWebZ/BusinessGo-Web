import Link from 'next/link';

const Arrow = () => (
  <Link href="/#benefit">
    <a>
      <div className="flecha">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-down"
          className="svg-inline--fa fa-arrow-down fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
          />
        </svg>
        <style jsx>
          {`
            .flecha {
              width: 80px;
              height: 80px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-image: linear-gradient(120deg, #8c52ff 0%, #563c7e 100%);
              position: absolute;
              bottom: 10em;
              left: 4em;
              z-index: 200;
              cursor: pointer;
              transition: 0.2s;
            }
            .flecha:hover {
              border-radius: 50px;
              transform: scale(1.1) rotate(360deg);
            }
            .flecha:active {
              transform: scale(1.3) rotate(360deg);
              transition: 0.1s;
            }
            svg {
              width: 60px;
              height: 60px;
              color: white;
            }

            // ======================================================
            @media (max-width: 550px) {
              .flecha {
                left: 2em;
                bottom: 6em;
                width: 60px;
                height: 60px;
              }
            }
            @media (max-width: 388px) {
              .flecha {
                left: 1em;
                bottom: 4em;
              }
            }
            @media (max-width: 270px) {
              .flecha {
                width: 40px;
                height: 40px;
                left: 1em;
                bottom: 4em;
              }
            }
          `}
        </style>
      </div>
    </a>
  </Link>
);

export default Arrow;
