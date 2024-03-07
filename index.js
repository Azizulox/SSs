/** @format */

async function getData() {
    const response = await fetch("db.json");
    db = await response.json();
    document.write(
      `<div style="display:flex; flex-wrap:wrap;">${db.map((el) => {
        return `<div style="background-color: red; width="100px" hei>
                  <h1>${el.title}</h1>
                  <h2>${el.name}</h2>
                  <h2>${el.age}</h2>
                </div>`;
      })}</div>`
    );
  }
  getData();