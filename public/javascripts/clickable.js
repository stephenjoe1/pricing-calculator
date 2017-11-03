$(".clickable-row").on('click', navigateTo);
});

function navigateTo(evt) {
  window.document.location = $(this).data("href");
}

