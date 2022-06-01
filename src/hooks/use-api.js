import { useState } from 'react';

const UseApi = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (requestConfig, dataFetch) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      dataFetch(data.meals);

      if (data.meals === null) {
        throw new Error(
          'We are unable to find the recipe you are looking for. Please try searching for words like pasta, chocolate etc.'
        );
      }

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  return { isLoading, error, sendRequest };
};

export default UseApi;
