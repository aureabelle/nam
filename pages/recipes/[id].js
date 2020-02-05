import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/pages/layout";

const Recipe = ({ domain }) => {
  const router = useRouter();
  const [recipe, setRecipe] = useState(null);

  const getRecipe = async function() {
    const cleanUrl = router.query.id.replace(/\s+/g, "-").toLowerCase();

    try {
      await fetch(`${domain}/api/recipes/recipe`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: cleanUrl
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <Layout>
      <div className="recipe">
        <div>-photos-</div>

        <div className="details">
          <h1>{router.query.id}</h1>
          <p>This is the content</p>
        </div>

        <div className="ingredient">-ingredients-</div>
        <div className="procedure">-procedure-</div>
      </div>
    </Layout>
  );
};

Recipe.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const domain = process.browser
    ? `${protocol}://${window.location.host}`
    : `${protocol}://${req.headers.host}`;

  return {
    domain
  };
};

export default Recipe;
