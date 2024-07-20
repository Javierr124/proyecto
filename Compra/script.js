document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
  
    // Validación básica del número de tarjeta (puedes implementar validaciones más avanzadas según tus necesidades)
    var tarjetaInput = document.getElementById('tarjeta');
    var expiracionInput = document.getElementById('expiracion');
    var cvvInput = document.getElementById('cvv');
  
    if (!isValidCreditCardNumber(tarjetaInput.value)) {
      alert('Número de tarjeta no válido. Debe contener entre 13 y 16 dígitos.');
      return;
    }
  
    if (!isValidExpiryDate(expiracionInput.value)) {
      alert('Fecha de expiración no válida. Debe estar en formato MM/YY.');
      return;
    }
  
    if (!isValidCVV(cvvInput.value)) {
      alert('CVV no válido. Debe contener 3 o 4 dígitos.');
      return;
    }
  
    // Simulación de proceso de compra exitoso (en realidad aquí deberías integrar una pasarela de pago real)
    setTimeout(function() {
      // Mostrar mensaje de compra exitosa
      document.getElementById('resultado').style.display = 'block';
      document.getElementById('resultado').innerHTML = '<h2>Compra exitosa!</h2><p>Gracias por tu compra.</p>';
      
      // Limpiar el formulario (opcional)
      document.getElementById('purchaseForm').reset();
    }, 2000); // Simulación de proceso de compra (2 segundos), reemplazar con la lógica real
  });
  
  // Función para validar el número de tarjeta de crédito (básica)
  function isValidCreditCardNumber(number) {
    // Se puede implementar una validación más avanzada según el tipo de tarjeta
    var regex = /^[0-9]{13,16}$/;
    return regex.test(number);
  }
  
  // Función para validar la fecha de expiración (básica)
  function isValidExpiryDate(expiracion) {
    // Verifica que esté en formato MM/YY y que sea válida (puedes implementar lógica más avanzada)
    var regex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    return regex.test(expiracion);
  }
  
  // Función para validar el CVV (básica)
  function isValidCVV(cvv) {
    // Verifica que contenga 3 o 4 dígitos
    var regex = /^[0-9]{3,4}$/;
    return regex.test(cvv);
  }