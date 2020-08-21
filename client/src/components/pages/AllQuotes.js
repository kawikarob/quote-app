import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Header } from "../ui/Header";
import { List } from "../ui/List";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export const AllQuotes = () => {
   const { removeQuote } = useContext(GlobalContext);
   const [quotes, setQuotes] = useState([]);

   useEffect(() => {
      axios
         .get(
            "https://raw.githubusercontent.com/kawikarob/react-demo-app/master/src/components/data/quotes.json?token=APOMTR32OTIQQGMKCPHENIS7JCQJM"
         )
         .then((res) => {
            console.log(res);
            setQuotes(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div>
         <Header />
         <List />
         <div>
            {quotes.map((quote) => (
               <Card className="mt-4 border border-dark" key={quote.id}>
                  <CardBody>
                     <CardTitle>{quote.quote}</CardTitle>
                  </CardBody>
                  <div className="ml-auto mb-2 mr-2">
                     <Link
                        to={`/edit-quote/${quote.id}`}
                        className="btn btn-secondary mr-1"
                     >
                        Edit
                     </Link>
                     <Button
                        onClick={() => removeQuote(quote.id)}
                        className="btn btn-danger"
                     >
                        Delete
                     </Button>
                  </div>
               </Card>
            ))}
         </div>
      </div>
   );
};