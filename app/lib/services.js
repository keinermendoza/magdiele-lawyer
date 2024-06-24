import { services, testimonials } from "./place-holder-data";

export async function fetchServicesList() {
    try {
        // aqui are el fetching de datos
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return services
    } catch (error) {
    throw new Error('Failed to fetch revenue data.');
  }

}

// export async function fetchTestimonialList() {
//   try {
//       // aqui are el fetching de datos
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       return testimonials
//   } catch (error) {
//   throw new Error('Failed to fetch revenue data.');
// }

// }
// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.LOCAL_API,
    headers: {
      "X-Api-Key": process.env.API_KEY
    }
     // Ajusta esto según tu configuración
    // withCredentials: true, // Esto asegura que se envíen las cookies con cada solicitud
    // xsrfCookieName: 'csrftoken',
    // xsrfHeaderName: "X-CSRFTOKEN"

});

const fetchAllPost = async () => {
  try {
    const resp = await axiosInstance.get("blog/")
    return {allPosts:resp.data}
  }
  catch(err) {
    return {error:err?.message}
  }
}

const fetchLatestPost = async () => {
  try {
    const resp = await axiosInstance.get("blog/latest/")
    return {latetsPosts:resp.data}
  }
  catch(err) {
    return {error:err?.message}
  }
}

const fetchSinglePost = async (slug) => {
  try {
    const resp = await axiosInstance.get(`blog/${slug}/`)
    return {post:resp.data}
  }
  catch(err) {
    return {error:err?.message}
  }
}

const sendMessage = async (body) => {
    const resp = await axiosInstance.post("blog/realizar/consulta/", body)
}

export {axiosInstance, fetchAllPost, fetchLatestPost, fetchSinglePost, sendMessage};
