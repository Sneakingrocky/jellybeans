$("[data-modal]").each(function() {
  $(this).leanModal({overlay: 0.7, top: 50, closeButton: "[data-modal-close]"});
});
$("[data-auto-modal]").each(function() {
  var $btn = $(this);
  setTimeout(function() { $btn.trigger("click"); }, 100);
})
