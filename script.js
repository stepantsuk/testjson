window.addEventListener("DOMContentLoaded", function () {
  const JSONContainer = document.querySelector(".listJSONContainer");
  const listJSONItem = document.querySelector(".listJSONItem");
  const JSContainer = document.querySelector(".listJSContainer");
  const listJSItem = document.querySelector(".listJSItem");

  const dataToRender = [
    {
      title: "aaa",
    },
    {
      title: "bbb",
    },
    {
      title: "ccc",
    },
    {
      title: "ddd",
    },
    {
      title: "eee",
    },
  ];

  const createElements = (arr, className) => {
    arr.forEach((item) => {
      const element = document.createElement("div");
      element.innerHTML = `
        <div class=${className}">${item.title}</div>
        `;
      JSONContainer.append(element);
    });
  };

  const getData = () => {
    console.log("getData");
    const req = new XMLHttpRequest();
    req.open("GET", "./myTestJson.json");
    req.setRequestHeader("Content-type", "application/json; charset=utf-8");
    req.send();

    req.addEventListener("readystatechange", () => {
      console.log("req", req);

      if (req.readyState === 4 && req.status === 200) {
        const data = JSON.parse(req.response);
        createElements(data, "listJSONItem");
      }

      // try {
      //   // createElements(data, "listJSONItem");
      // } catch (error) {
      //   console.log(error);
      // }
      // if (req.readyState === 4 && req.status === 200) {
      // } else {
      // }
    });
  };

  getData();

  console.log("endOfScript");

  // const

  // createElements(dataToRender, "listJSONItem");
});
