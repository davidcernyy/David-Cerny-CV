"use strict";

const educationHeader = document.getElementById("education-header");
const certificatesHeader = document.getElementById("certificates-header");
const schoolContainer = document.getElementById("school-container");
const certificatesContainer = document.getElementById("certificates-container");

const activateSectionHeader = function (el, prevEl) {
  prevEl.classList.remove("heading-2--active");
  el.classList.remove("heading-2");
  prevEl.classList.add("heading-2");
  el.classList.add("heading-2--active");
};

const activateSection = function (el, prevEl) {
  if (el.classList.contains("active")) return;
  el.classList.remove("hidden");
  el.classList.add("active");
  prevEl.classList.remove("active");
  prevEl.classList.add("hidden");
};

educationHeader.addEventListener("click", function () {
  activateSectionHeader(educationHeader, certificatesHeader);
  activateSection(schoolContainer, certificatesContainer);
});

certificatesHeader.addEventListener("click", function () {
  activateSectionHeader(certificatesHeader, educationHeader);
  activateSection(certificatesContainer, schoolContainer);
});
