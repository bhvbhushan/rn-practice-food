import Axios from "axios";

export default Axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer YIehzOBovWN_G00IKq3j5EMQG4_6UBhuChssWdN7X3946S_WCzATI73e7I7h7DYxnKcbIBB9LBn3dMAQxOJ11konmr2e6eGx1uWFgMaajZJBJR0x57FcqGPlRyIUXnYx"
    }
});