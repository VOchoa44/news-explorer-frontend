export const authorize = () => {
  return new Promise((resolve) => {
    resolve({ token: "fake-token" });
  });
};

export const checkToken = () => {
  return new Promise((resolve) => {
    resolve({
      data: {
        name: "Vince",
        email: "fake@example.com",
        _id: "fake-id",
      },
    });
  });
};
