  const BASE_URL = import.meta.env.VITE_BACKEND_url

  const editId = location.state?.editId;

   export const handleUpdate = async (e,formData) => {
        e.preventDefault();

        const response = await fetch(
            `${BASE_URL}/visit/update/${editId}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formData)
            }
        );

        const result = await response.json();
        console.log(result);
    };