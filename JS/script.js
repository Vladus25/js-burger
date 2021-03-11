// Funzioni per calcolo del Prezzo di Burger

var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {

  var li = lis[i];

  li.addEventListener('click', function() {

    var clickedLi = this;
    var clickedLiChildrens = clickedLi.children;
    var clickedCheckbox = clickedLiChildrens[2];

    clickedCheckbox.checked = !clickedCheckbox.checked;

  });

}

var priceBtn = document.getElementById('calculate');
priceBtn.addEventListener('click', function() {

  var burgerName = document.getElementById('burger-name').value;

  if (burgerName.length < 1) {

    alert('Per favore inserite nome del Burger');
  }
  else {

    var finalPrice = 5;

    var checkboxs = document.getElementsByClassName('ingred');

    for (var i = 0; i < checkboxs.length; i++) {

      var checkbox = checkboxs[i];
      var isChecked = checkbox.checked;
      var price = parseInt(checkbox.dataset.price);

      if (isChecked) {
        finalPrice += price;

      }
    }

    // Coupons - Sconto
    var coupons = [
      '417428FERYDE',
      '293619QKROCV',
      '840366EODNGP',
      '993645AEYVGW',
      '194637DYRBXZ',
    ];

    var finded = false;
    var burgerCoupon = document.getElementById('burger-coupon').value;
    for (var i = 0; i < coupons.length; i++) {

      var coupon = coupons[i];
      if (coupon == burgerCoupon) {

        finded = true;

      }

    }
    if (finded) {
      finalPrice -= finalPrice / 100 * 20;
    }

    var spanPrice = document.getElementById('price');
    spanPrice.innerHTML = finalPrice;
    console.log(finalPrice);
  }
});
