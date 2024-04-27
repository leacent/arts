"use server";

export async function fetchNickName(data = {}) {
  try {
    const res = await fetch("https://4arts.io/arts/user/getUserNickName", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log("res--------------------------123123", result);

    return res.json();
  } catch (error) {
    console.error("【Error: 】", error);
  }
}
