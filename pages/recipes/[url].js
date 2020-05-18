import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";

import Loader from "../../components/common/loader";
import Layout from "../../components/pages/layout";

const Recipe = ({ allRecipesApi }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  const getAllRecipes = async () => {
    try {
      await fetch(allRecipesApi)
        .then((res) => res.json())
        .then((data) => {
          const recipe = data.find((data) => data.url === router.query.url);

          if (recipe) {
            setRecipe(recipe);
          } else {
            setRecipe({});
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

  // console.log(recipe);

  return (
    <Fragment>
      <Layout>
        <div className="recipe">
          {!isLoading ? (
            <Fragment>
              {Object.keys(recipe).length === 0 &&
              recipe.constructor === Object ? (
                <Fragment>
                  <div>
                    <p>Ooops ... this recipe is missing in action.</p>
                    <p>Try these other recipes:</p>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div
                    className="hero"
                    style={{ backgroundImage: `url(${recipe.coverPhoto})` }}
                  />

                  <div className="recipe-info">
                    <div className="recipe-details">
                      <div className="details">
                        <h1>{recipe.name}</h1>
                        <h2>{recipe.altName}</h2>
                        <p>{recipe.description}</p>
                      </div>

                      <div className="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                          {recipe.ingredients.map((ingredient, index) => {
                            return (
                              <li
                                key={`ing-${index}`}
                              >{`${ingredient.quantity} ${ingredient.name}`}</li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="instructions">
                        <h3>Procedure</h3>
                        <ol>
                          {recipe.instructions.map((instruction, index) => {
                            return (
                              <li key={`inst-${index}`}>{instruction.step}</li>
                            );
                          })}
                        </ol>
                      </div>

                      <div className="video">
                        <iframe
                          width="100%"
                          height="480"
                          src={recipe.videoUrl}
                        ></iframe>
                      </div>
                    </div>

                    <div className="misc">-ads here-</div>
                  </div>
                </Fragment>
              )}
            </Fragment>
          ) : (
            <Loader tipText="Loading recipe ..." />
          )}
        </div>
      </Layout>
      <style jsx>{`
        .recipe .hero {
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 45vh;
          max-height: 400px;
          min-height: 320px;
          transition: min-height linear 0.2s;
          width: 100%;
        }

        .recipe .recipe-info {
          margin: 0 auto;
          max-width: 1200px;
        }

        .recipe .recipe-info .misc {
          display: none;
        }

        .recipe .details,
        .recipe .ingredients,
        .recipe .instructions,
        .recipe .video {
          padding: 0 20px;
          margin-bottom: 20px;
        }

        .recipe .details {
          margin-top: 20px;
        }

        .recipe .details h1 {
          font-family: "Delius Unicase", cursive;
          margin-bottom: 0;
        }

        .recipe .ingredients ul {
          list-style-type: none;
          margin: 0;
          margin-bottom: 20px;
          padding: 0;
        }

        .recipe .ingredients ul li {
          align-items: center;
          border-bottom: 1px dotted #e0e0e0;
          display: flex;
          justify-content: space-between;
          padding: 6px;
        }

        .recipe .instructions ol {
          counter-reset: section;
          list-style-type: none;
          margin: 0;
          margin-bottom: 20px;
          padding: 0;
        }

        .recipe .instructions ol li {
          align-items: center;
          border-bottom: 1px dotted #e0e0e0;
          display: flex;
          padding: 6px;
        }

        .recipe .instructions ol li::before {
          counter-increment: section;
          content: counter(section) ". ";
          margin-right: 5px;
        }

        .recipe .ingredients ul li:last-child,
        .recipe .instructions ol li:last-child {
          border-bottom: none;
        }

        @media screen and (min-width: 640px) {
          .recipe .hero {
            min-height: 480px;
          }

          .recipe p {
            font-size: 16px;
            line-height: 24px;
            margin: 24px 0;
          }

          .recipe .details h1 {
            font-size: 34px;
          }
        }

        @media screen and (min-width: 1024px) {
          .recipe .hero {
            min-height: 550px;
          }

          .recipe .recipe-info {
            display: flex;
          }

          .recipe .recipe-info .recipe-details {
            width: 70%;
          }

          .recipe .recipe-info .misc {
            display: block;
            width: 30%;
            background: #efefef;
          }
        }

        @media screen and (min-width: 1200px) {
          .recipe .hero {
            min-height: 700px;
          }

          .recipe .details h1 {
            font-size: 45px;
          }
        }
      `}</style>
    </Fragment>
  );
};

Recipe.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const allRecipesApi = process.browser
    ? `${protocol}://${window.location.host}/api/admin/recipes`
    : `${protocol}://${req.headers.host}/api/admin/recipes`;

  return {
    allRecipesApi,
  };
};

export default Recipe;
