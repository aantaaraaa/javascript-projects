const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in FAQs, product descriptions, and settings panels.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with another framework?",
    answer: "Yes, it is very possible to create one using another framework.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `
      <div class="accordion_item">
        <div class="accordion_title">
          <h3>${dataItem.question}</h3>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="accordion_content">
          <p>${dataItem.answer}</p>
        </div>
      </div>
    `
    )
    .join(" ");
}

createAccordionData();

const getAccordionTitles = document.querySelectorAll(".accordion_title");

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", () => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      document.querySelectorAll(".accordion_title.active").forEach((openItem) => {
        openItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});
