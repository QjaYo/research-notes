(function () {
  var input = document.getElementById("note-search");
  if (!input) return;

  var items = Array.prototype.slice.call(document.querySelectorAll(".note-item"));

  input.addEventListener("input", function () {
    var query = input.value.trim().toLowerCase();

    items.forEach(function (item) {
      var haystack = item.getAttribute("data-search") || "";
      item.hidden = query !== "" && haystack.indexOf(query) === -1;
    });
  });
})();
