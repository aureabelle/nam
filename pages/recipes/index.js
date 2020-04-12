import { useEffect, useState, Fragment } from "react";
import Link from "next/link";

import { Card } from "antd";
const { Meta } = Card;

import Loader from "../../components/common/loader";
import Layout from "../../components/pages/layout";

const RecipesMain = ({ allRecipesApi }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);

  const getAllRecipes = async () => {
    try {
      await fetch(allRecipesApi)
        .then(res => res.json())
        .then(data => {
          console.log(data);

          if (data.length !== 0) {
            setRecipeList(data);
          } else {
            setRecipeList([]);
          }
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <Fragment>
      <Layout>
        <div className="recipes-main">
          {!isLoading ? (
            <Fragment>
              <h1>Nam Nam's Recipes</h1>
              <div className="recipes-list">
                {recipeList.map((recipeItem, index) => {
                  return (
                    <Link
                      href={`/recipes/${recipeItem.url}`}
                      key={`recipe-item-${index}`}
                    >
                      <a className="recipe-card">
                        <Card
                          hoverable
                          bordered={false}
                          cover={
                            <img
                              alt={`${recipeItem.name} - ${recipeItem.altName}`}
                              src={recipeItem.coverPhoto}
                            />
                          }
                        >
                          <Meta title={`${recipeItem.name} `} />
                          <p className="alt-name">{recipeItem.altName}</p>
                        </Card>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </Fragment>
          ) : (
            <Loader tipText="Loading recipes ..." />
          )}
        </div>
      </Layout>
      <style jsx global>{`
        .recipes-main {
          margin: 0 auto;
          max-width: 1400px;
          padding: 20px;
        }

        .recipes-main h1 {
          font-family: "Delius Unicase", cursive;
          text-align: center;
        }

        .recipes-main .recipes-list {
          display: flex;
          flex-direction: column;
        }

        .recipes-main .recipes-list .recipe-card {
          margin-bottom: 20px;
          width: 100%;
        }

        .recipes-main .recipes-list .recipe-card .alt-name {
          margin: 0;
          margin-top: 5px;
        }

        @media screen and (min-width: 640px) {
          .recipes-main {
            min-height: 100vh;
            padding: 20px 10px;
          }

          .recipes-main h1 {
            font-size: 34px;
          }

          .recipes-main .recipes-list {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }

          .recipes-main .recipes-list .recipe-card {
            margin: 0 10px;
            margin-bottom: 20px;
            width: 46%;
          }
        }

        @media screen and (min-width: 1024px) {
          .recipes-main .recipes-list .recipe-card {
            margin: 0 10px;
            margin-bottom: 20px;
            width: 30%;
          }
        }

        @media screen and (min-width: 1200px) {
          .recipes-main h1 {
            font-size: 45px;
          }

          .recipes-main .recipes-list .recipe-card {
            flex: 1 0 auto;
            margin: 0 10px;
            margin-bottom: 20px;
            width: 33.3%;
          }
        }
      `}</style>
    </Fragment>
  );
};

RecipesMain.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const allRecipesApi = process.browser
    ? `${protocol}://${window.location.host}/api/admin/recipes`
    : `${protocol}://${req.headers.host}/api/admin/recipes`;

  return {
    allRecipesApi
  };
};

export default RecipesMain;
