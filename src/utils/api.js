const API = process.env.REACT_APP_API;

export const loginRequest = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
          .then(response => response.json())
          .then((result) => resolve(result.data.user_token))
          .catch((error) => {
              reject(errors);
          });

    });
};