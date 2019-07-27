export const retrieveFromLink = link => {
  return fetch(link, {
    method: "GET",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-Type": "type",
      host: "api.yuuvis.io",
      "Ocp-Apim-Subscription-Key": "09fda7d9a017412088076ffd4b8d0e58"
    },
    redirect: "follow",
    referrer: "no-referrer"
  });
};
