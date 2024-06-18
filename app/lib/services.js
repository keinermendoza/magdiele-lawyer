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

export async function fetchTestimonialList() {
  try {
      // aqui are el fetching de datos
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return testimonials
  } catch (error) {
  throw new Error('Failed to fetch revenue data.');
}

}