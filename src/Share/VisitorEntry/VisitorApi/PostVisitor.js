  export const BASE_URL = import.meta.env.VITE_BACKEND_url

    // api get visitor_entry table calling
  export const postVisitor = async (formData) => {
        try {
            const response = await fetch(`${BASE_URL}/visit/postvisitor`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json()
            return result;

        } catch (error) {
            console.error(error.message);
        }
    }