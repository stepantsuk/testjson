window.addEventListener("DOMContentLoaded", function () {
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
  const createElements = (arr, classNameParent, classNameChild) => {
    arr.forEach((item) => {
      const template = `
      <div class=${classNameChild}>${item.title}</div>
      `;
      document.querySelector(`.${classNameParent}`).innerHTML += template;
    });
  };

  const getDataFetch = async () => {
    try {
      let response = await fetch("./myTestJson.json");
      if (!response.ok) {
        return null;
      }

      let data = await response.json();

      return data;
    } catch (error) {
      console.log("error in getDataFetch ===>", error);
    }
  };

  getDataFetch()
    .then((data) => {
      console.log("createElements");
      createElements(data, "listContainer", "listItem");
    })
    .catch((e) => console.log("error in chain ===>", e));

  console.log("endOfScript");

  // const

  // createElements(dataToRender, "listJSONItem");
});
