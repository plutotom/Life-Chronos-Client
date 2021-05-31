import axios from "axios";
//========================Login============================
export async function POSTLogin(email, password) {
  const data = {
    email,
    password,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/user/login",
      { email, password },
      config
    );

    console.log("res");
    return res;
  } catch (err) {
    console.log("err", err.response);
    return err.response;
  }
}
//========================POST============================
export async function POSTData(dataincome) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/uploadDatapoint",
      dataincome,
      config
    );

    // console.log(res.data);
    return await res;
  } catch (err) {
    // console.log(err.response.data.error);
    return err.response;
  }
}
