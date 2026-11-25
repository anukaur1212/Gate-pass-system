const BASE_URL = import.meta.env.VITE_BACKEND_url
// get data 
export const getGatePass = async (setProductData) => {
  try {
    const response = await fetch(`${BASE_URL}/gate/getgate`);
    const result = await response.json();

    setProductData(result.data);

  } catch (error) {
    console.error(error.message);
  }
};