// Find the section that contains the <dialog>
const allSections = document.querySelectorAll("main section");
let targetSection = null;

for (const section of allSections) {
  if (section.querySelector("dialog")) {
    targetSection = section;
    break;
  }
}

// Only proceed if the section and dialog exist
if (targetSection) {
  const input = targetSection.querySelector("input");
  const button = targetSection.querySelector("button");
  const dialog = targetSection.querySelector("dialog");
  const nameSpan = dialog.querySelector("span");

  button.addEventListener("click", () => {
    const name = input.value.trim();
    nameSpan.textContent = name || "stranger";

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("Your browser doesn't support <dialog>.");
    }
  });

  dialog.addEventListener("click", () => {
    dialog.close();
  });
} else {
  console.error("No section containing a <dialog> was found.");
}
