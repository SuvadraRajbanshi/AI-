// const url = "http://192.168.1.85:8000";
// const url = "http://192.168.1.75:8000"

const url = "http://192.168.1.77:8000"

const api = url + "/api/";

export default {
    AUTH_TOKEN: api + "token/",
    REFRESH_TOKEN: api + "token/refresh/",
    CREATE_USER: api + "farmer/users/create/",
    PROFILE: api + "farmer/profile/",
    DETECTOR: api + "disease-detector/",
    LOGOUT: api + "logout/",
    FARMER_POSTS: api + "farmer/posts/",
    FARMER_POST_COMMENT: api + "farmer/post/comments/",
    CREATE_POST: api + "farmer/post/create/",
};
