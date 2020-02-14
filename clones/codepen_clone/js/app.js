const codeSection = document.querySelector(".code");
const mobileButtons = document.querySelectorAll(".editors-mobile-nav");
const editors = [...document.querySelectorAll(".editor")];

function clearEditorStates() {
  editors.forEach(current => {
    current.classList.remove("active");
  });
}

function showEditor(button) {
  const activeEditor = editors.find(function(current) {
    return current.querySelector(".editor-title").innerHTML == button;
  })

  activeEditor.classList.add("active");
}

editors[0].classList.add("active");

codeSection.addEventListener("click", e => {
  if(e.target.tagName=="BUTTON") {
    clearEditorStates();
    showEditor(e.target.textContent);
  }
})

/* When adding new lines in contenteditable elements, create them as paragraphs */
document.execCommand("defaultParagraphSeparator", false, "p");