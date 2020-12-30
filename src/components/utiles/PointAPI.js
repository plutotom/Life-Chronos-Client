import axios from "axios";
import { initialState } from "../GlobleState/store";
//========================/GetUserEvents============================
export async function GETData() {
  const config = {
    headers: {
      Authorization: `Bearer ${initialState.userData.token}`,
      "Content-Type": "application/json",
    },
  };
  // var data = {
  //   email: initialState.userData.email,
  // };
  try {
    const res = await axios.post(
      "http://localhost:5000/GetUserEvents",
      { email: initialState.userData.email },
      config
    );

    // console.log(initialState.userData.email, res.data.data);

    return res.data.data;
  } catch (err) {
    console.log(
      err.message,
      "this is error for getting data",
      initialState.userData.email
    );
  }
}
//========================POST============================
export async function POSTData(dataincome) {
  const config = {
    headers: {
      Authorization: `Bearer ${initialState.userData.token}`,
      "Content-Type": "application/json",
    },
  };
  console.log(dataincome, "dataingcome");
  try {
    const res = await axios.post(
      "http://localhost:5000/uploadDatapoint",
      dataincome,
      config
    );

    // console.log(res.data);
    return await res.data.data;
  } catch (err) {
    console.log(err.response.data.error);
    console.log(err.message);
    return err.response.data;
  }
}
//====================PUT================================
export async function PUTData(id, body) { // this is updating a event with a new body. 
  const headers = {
    headers: {
      Authorization: `Bearer ${initialState.userData.token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:5000/uploadDatapoint/${id}`,
      body,
      headers
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
//======================DELETE==============================
export async function DELETEData(id) {
  const config = {
    headers: {
      Authorization: `Bearer ${initialState.userData.token}`,
    },
  };
  try {
    const res = await axios.delete(
      `http://localhost:5000/uploadDatapoint/${id}`,
      config
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//========================GET-Settings============================
export async function GETSettings() {
  const config = {
    headers: {
      Authorization: `Bearer ${initialState.userData.token}`,
    },
  };
  try {
    const res = await axios.get("http://localhost:5000/settings", config);

    // console.log(res.data.count);
    // return await res.data;
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//======================PUT-Settigns==============================

export async function PUTSettings(defaultDuration) {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${initialState.userData.token}`,
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:5000/settings/update`,
      defaultDuration,
      headers
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
