import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResult] = useState([]);
    const [errMsg, setErrMsg] = useState("");

    console.log("Hi There!!!");
    const searchApi = searchTerm => {
        yelp
            .get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose"
                }
            })
            .then(res => {
                setResult(res.data.businesses);
            })
            .catch(e => {
                setErrMsg("Something went Wrong!!!");
            });
    };

    // Call searchApi when component is first rendered: BAD APPROACH
    // searchApi('pasta');
    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results, errMsg];
};