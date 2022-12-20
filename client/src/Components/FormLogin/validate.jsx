const validate = (data) => {
  const result = {};
  const expRegular =
    /^(([^<>()[\].,;:\s@\"]+(\.[^<>()[\].,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\].,;:\s@\"]+\.)+[^<>()[\].,;:\s@\"]{2,})$/i;

  if (!expRegular.test(data.email)) {
    result.email = "Email is not valid";
  }

  if (data.password.length < 5) {
    result.password = "Password must have a last 5 length";
  }

  !/[0-9]/.test(data.password) &&
    (result.password = "Password must have a last one number");

  return result;
};

export default validate;
