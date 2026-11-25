  export const BASE_URL = import.meta.env.VITE_BACKEND_url

    // api get visitor_entry table calling
  export const postGatePass = async (productForm) => {
        try {
            const response = await fetch(`${BASE_URL}/gate/postgate`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(productForm)
            })
            const result = await response.json()
            return result;

        } catch (error) {
            console.error(error.message);
        }
    }


  