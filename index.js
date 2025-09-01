function toggleSearch() {
  const input = document.querySelector(".search-input");
  if (input.style.display === "block") {
    input.style.display = "none";
  } else {
    input.style.display = "block";
    input.focus();
  }
}

