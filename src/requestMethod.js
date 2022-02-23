import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGJjZDkzZWQ1NzRlMzk5NDBjZTIyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTU0MDMyOSwiZXhwIjoxNjQ1Nzk5NTI5fQ.2gvy3ssOgQ7_-Xs5FAbbwF4zdRgZa540XYqnRgF6YCo';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {token: `Bearer ${TOKEN}`}
})