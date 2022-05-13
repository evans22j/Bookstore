
const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.text();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  export default postData;