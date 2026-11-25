  const BASE_URL = import.meta.env.VITE_BACKEND_url

  // api get visitor_entry table calling
export const getVisitor = async ({setVisitor}) => {
    try {
      const response = await fetch(`${BASE_URL}/visit/getvisitor`)
      const result = await response.json()
      setVisitor(result.data)

    } catch (error) {
      console.error(error.message);
    }
  }