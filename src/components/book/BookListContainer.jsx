import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";
import useGetResource from "../../utils/useGetResource";
import usePostResource from "../../utils/usePostResource";
import React from "react";
import axios from "axios";

//TODO add custom hook for post?
function BookListContainer() {
  const books = useGetResource(
    "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/books.json"
  );

  // Por que fica sendo chamado indefinidamente?
  // const token = usePostResource(
  //   "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
  //   { email: "merciofilho@gmail.com", password: "123" }
  // );

  React.useEffect(() => {
    axios
      .post(
        "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
        { email: "merciofilho@gmail.com", password: "123" }
      )
      .then(function (resposta) {
        return console.log(resposta.data.token);
      });
  }, []);

  return (
    <MiniDrawer>
      <MediaCardListGrid elements={books} />
    </MiniDrawer>
  );
}

export default BookListContainer;
