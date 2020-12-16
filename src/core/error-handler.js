const getAxiosErrorObject = error => {
  console.log(error);
  const errObj = JSON.parse(JSON.stringify(error));
  console.log(errObj);
  return errObj;
};

async function handleError4xx(error) {
  console.log("4xx", error.statusText);
  return error.statusText;
}

async function handleError5xx(error) {
  console.log("5xx", error.statusText);
  return error.statusText;
}

async function handleApiError(error) {
  const errResponse = getAxiosErrorObject(error);
  if (errResponse.status >= 500) {
    return await handleError5xx(error);
  } else if (errResponse.status >= 400) {
    return await handleError4xx(error);
  } else return error;
}

export { handleApiError, getAxiosErrorObject };
