import { Fragment } from "react";
import Link from "next/link";

import { ScheduleOutlined, FireOutlined } from "@ant-design/icons";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link href="/">
          <a className="logo">
            <img src="/_images/logo.png" />
          </a>
        </Link>

        <div className="menu">
          <ul>
            <li>
              <Link href="/recipes">
                <a className="item">
                  <ScheduleOutlined />
                  <span className="label">Recipes</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/spices">
                <a className="item">
                  <FireOutlined />
                  <span className="label">Spices</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx global>{`
        .navigation {
          align-items: center;
          background-color: rgba(254, 244, 248, 0.95);
          bottom: 0;
          display: flex;
          justify-content: space-between;
          padding: 10px 20px;
          position: fixed;
          width: 100%;
          z-index: 10;
        }

        .navigation .logo {
          display: block;
          height: 60px;
          width: 60px;
        }

        .navigation .logo img {
          height: auto;
          object-fit: cover;
          width: 100%;
        }

        .navigation .menu ul {
          align-items: center;
          display: flex;
          justify-content: flex-end;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .navigation .menu ul li {
          margin-left: 20px;
        }

        .navigation .menu ul li:first-child {
          margin-left: 0;
        }

        .navigation .menu ul li .item {
          align-items: center;
          color: rgba(0, 0, 0, 0.85);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .navigation .menu ul li .item .anticon {
          font-size: 21px;
        }

        .navigation .menu ul li .item .label {
          display: block;
          font-size: 10px;
        }

        .navigation .menu ul li .item:hover {
          color: #d92027;
        }

        @media screen and (min-width: 640px) {
          .navigation {
            bottom: initial;
            top: 0;
          }

          .navigation .menu ul li .item {
            flex-direction: row;
          }

          .navigation .menu ul li .item .label {
            font-size: 14px;
            margin-left: 5px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Navigation;
