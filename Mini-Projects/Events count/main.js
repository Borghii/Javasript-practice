const form = document.querySelector("#form");
const eventsContainer = document.querySelector("#events");

let events = JSON.parse(localStorage.getItem("events")) || []; // Leer desde localStorage
renderEvent();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  events.unshift({
    id: (Math.random() * 100).toString(36).slice(3),
    name: data.get("nameEvent"),
    date: data.get("dateEvent"),
  });

  localStorage.setItem("events", JSON.stringify(events)); // guardar

  renderEvent();
});

function renderEvent() {
  const html = events.map((event) => {
    return `
        <div class="flex flex-row p-3 items-center justify-around gap-2">
            <!-- Days left -->
            <div class="text-center max-w-1/4">
              <span class="text-2xl font-bold">${Math.floor(
                (new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24)
              )}</span>
              <div>Days</div>
            </div>

            <!-- Name event -->
            <h1 class="max-w-1/4 break-words">${event.name}</h1>

            <!-- Date event -->
            <div class="max-w-1/4">${event.date}</div>
            <!-- Button delete event -->
            <button
                data-id="${event.id}"
              class="bg-red-600 max-w-1/4 text-red-50 rounded-sm px-2 py-1 border-2 border-black cursor-pointer"
            >
              Eliminar
            </button>
          </div>
        `;
  });

  console.log(html);

  eventsContainer.innerHTML = html.join("");

  addEventListenerButtonsDelete(document.querySelectorAll("#events [data-id]"));
}

function addEventListenerButtonsDelete(deleteButtons) {
  deleteButtons.forEach((buttonDelEve) => {
    buttonDelEve.addEventListener("click", () => {
      const id = buttonDelEve.getAttribute("data-id");
      events = events.filter((event) => event.id !== id);
      localStorage.setItem("events", JSON.stringify(events)); // guardar después de borrar
      renderEvent();
    });
  });
}
