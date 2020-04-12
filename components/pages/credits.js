import { Fragment } from "react";
import Link from "next/link";

import {
  YoutubeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined
} from "@ant-design/icons";

const Credits = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <Fragment>
      <div className="credits">
        <p className="copyright">
          &copy; {currentYear} Nam Nam The Clumsy Chef
        </p>

        <div className="social">
          <p className="spread">Spread the love on</p>

          <Link href="/">
            <a className="item">
              <YoutubeOutlined />
            </a>
          </Link>

          <Link href="/">
            <a className="item">
              <FacebookOutlined />
            </a>
          </Link>

          <Link href="/">
            <a className="item">
              <InstagramOutlined />
            </a>
          </Link>

          <Link href="/">
            <a className="item">
              <TwitterOutlined />
            </a>
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .credits {
          align-items: center;
          background-color: #fef4f8;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .credits .copyright {
          font-family: "Delius Unicase", cursive;
          font-size: 12px;
          order: 2;
        }

        .credits .social {
          align-items: center;
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
          order: 1;
        }

        .credits .social .spread {
          font-family: "Delius Unicase", cursive;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 0;
        }

        .credits .social .item {
          color: rgba(0, 0, 0, 0.85);
          display: block;
          font-size: 32px;
          margin: 0 3px;
        }

        .credits .social .item:hover {
          color: #d92027;
        }

        @media screen and (min-width: 640px) {
          .credits {
            flex-direction: row;
            justify-content: space-between;
          }

          .credits .copyright {
            margin: 0;
            order: 1;
          }

          .credits .social {
            margin: 0;
            order: 2;
          }

          .credits .social .spread {
            font-size: 12px;
            margin-right: 10px;
          }

          .credits .social .item {
            font-size: 24px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Credits;
