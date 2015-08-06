$("[data-modal]").each(function() {
  var $btn = $(this);
  $btn.leanModal({overlay: 0.7, top: 50, closeButton: ".modal__close"});
});
