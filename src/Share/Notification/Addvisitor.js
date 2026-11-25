 export const notify = () => {
    return toast('Data Deleted!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      newestOnTop: true,
      rtl: false,
      closeButton: true,
      icon: "✅",
      limit: 3,
    });
  }