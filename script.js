/**
 * ==============================================================================
 * PROYECTO: LANDING PAGE COMERCIAL CON IA - AURA BISTRÓ & GRILL
 * CÓDIGO JAVASCRIPT (FASE 3 Y FASE 4)
 * ==============================================================================
 * Contenido:
 * 1. Menú responsive (Toggle hamburguesa, accesibilidad y cierre interactivo)
 * 2. Botón "Volver arriba" (Scroll suave y visibilidad dinámica)
 * 3. Validación personalizada del formulario (required, minlength, email y regex)
 * 4. Mensaje modal de confirmación con resumen de reserva
 * 5. Extras interactivos: Filtro de menú gastronómico y Navbar al hacer scroll
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================================
     1. FASE 4: MENÚ RESPONSIVE
     ============================================================================ */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  /**
   * Alterna la visibilidad del menú móvil y el estado del botón hamburguesa
   */
  function toggleMobileMenu() {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Bloquear el scroll de la página cuando el menú móvil esté abierto
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Cierra el menú móvil de forma segura
   */
  function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && navMenu) {
    // Evento de clic en el botón hamburguesa
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Cerrar el menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Cerrar el menú al hacer clic fuera del mismo
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }


  /* ============================================================================
     2. FASE 4: BOTÓN "VOLVER ARRIBA" (BACK TO TOP)
     ============================================================================ */
  const btnVolverArriba = document.getElementById('btn-volver-arriba');
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Mostrar u ocultar el botón volver arriba a partir de 300px
    if (btnVolverArriba) {
      if (scrollPos > 300) {
        btnVolverArriba.classList.add('show');
      } else {
        btnVolverArriba.classList.remove('show');
      }
    }

    // Efecto de sombreado y desenfoque del header al hacer scroll
    if (header) {
      if (scrollPos > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Actualizar enlace activo en la barra de navegación (Scroll Spy)
    actualizarEnlaceActivo();
  });

  if (btnVolverArriba) {
    btnVolverArriba.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  /* ============================================================================
     3. FASE 3 Y FASE 4: FORMULARIO FUNCIONAL Y VALIDACIÓN PERSONALIZADA
     ============================================================================ */
  const form = document.getElementById('formulario-contacto');
  const inputNombre = document.getElementById('nombre');
  const inputCorreo = document.getElementById('correo');
  const inputTelefono = document.getElementById('telefono');
  const inputMensaje = document.getElementById('mensaje');
  const btnSubmit = document.getElementById('btn-submit');

  // Elementos donde se inyectan los mensajes de error
  const errorNombre = document.getElementById('error-nombre');
  const errorCorreo = document.getElementById('error-correo');
  const errorTelefono = document.getElementById('error-telefono');
  const errorMensaje = document.getElementById('error-mensaje');

  /**
   * Muestra un mensaje de error visual y aplica estilos de campo inválido
   */
  function mostrarError(input, elementoError, mensaje) {
    input.classList.remove('input-success');
    input.classList.add('input-error');
    elementoError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${mensaje}`;
    elementoError.classList.add('visible');
  }

  /**
   * Limpia los errores visuales y marca el campo como válido
   */
  function limpiarError(input, elementoError) {
    input.classList.remove('input-error');
    input.classList.add('input-success');
    elementoError.textContent = '';
    elementoError.classList.remove('visible');
  }

  /**
   * Valida el campo Nombre:
   * - required
   * - minlength = 3
   * - Solo caracteres alfabéticos y espacios
   */
  function validarNombre() {
    const valor = inputNombre.value.trim();
    if (valor === '') {
      mostrarError(inputNombre, errorNombre, 'El nombre completo es obligatorio.');
      return false;
    }
    if (valor.length < 3) {
      mostrarError(inputNombre, errorNombre, 'El nombre debe contener al menos 3 caracteres.');
      return false;
    }
    // Comprobar que no sean solo números
    const regexSoloNumeros = /^[0-9]+$/;
    if (regexSoloNumeros.test(valor)) {
      mostrarError(inputNombre, errorNombre, 'Por favor, introduce un nombre válido sin solo números.');
      return false;
    }
    limpiarError(inputNombre, errorNombre);
    return true;
  }

  /**
   * Valida el campo Correo Electrónico:
   * - required
   * - Formato estándar de email (RFC compliant regex)
   */
  function validarCorreo() {
    const valor = inputCorreo.value.trim();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (valor === '') {
      mostrarError(inputCorreo, errorCorreo, 'El correo electrónico es obligatorio.');
      return false;
    }
    if (!regexEmail.test(valor)) {
      mostrarError(inputCorreo, errorCorreo, 'Introduce un correo válido (ejemplo: usuario@correo.com).');
      return false;
    }
    limpiarError(inputCorreo, errorCorreo);
    return true;
  }

  /**
   * Valida el campo Teléfono:
   * - required
   * - minlength = 8
   * - Solo números, espacios, guiones y prefijo (+)
   */
  function validarTelefono() {
    const valor = inputTelefono.value.trim();
    const regexTel = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
    if (valor === '') {
      mostrarError(inputTelefono, errorTelefono, 'El número de teléfono es obligatorio.');
      return false;
    }
    if (valor.length < 8) {
      mostrarError(inputTelefono, errorTelefono, 'El teléfono debe tener un mínimo de 8 dígitos.');
      return false;
    }
    if (!regexTel.test(valor)) {
      mostrarError(inputTelefono, errorTelefono, 'Formato telefónico no válido (ej. +34 612 345 678).');
      return false;
    }
    limpiarError(inputTelefono, errorTelefono);
    return true;
  }

  /**
   * Valida el campo Mensaje:
   * - required
   * - minlength = 10
   */
  function validarMensaje() {
    const valor = inputMensaje.value.trim();
    if (valor === '') {
      mostrarError(inputMensaje, errorMensaje, 'El mensaje o consulta es obligatorio.');
      return false;
    }
    if (valor.length < 10) {
      mostrarError(inputMensaje, errorMensaje, 'El mensaje debe tener al menos 10 caracteres explicativos.');
      return false;
    }
    limpiarError(inputMensaje, errorMensaje);
    return true;
  }

  // Escuchadores de eventos para validación en tiempo real (blur e input)
  if (inputNombre) {
    inputNombre.addEventListener('blur', validarNombre);
    inputNombre.addEventListener('input', () => {
      if (inputNombre.classList.contains('input-error')) validarNombre();
    });
  }

  if (inputCorreo) {
    inputCorreo.addEventListener('blur', validarCorreo);
    inputCorreo.addEventListener('input', () => {
      if (inputCorreo.classList.contains('input-error')) validarCorreo();
    });
  }

  if (inputTelefono) {
    inputTelefono.addEventListener('blur', validarTelefono);
    inputTelefono.addEventListener('input', () => {
      if (inputTelefono.classList.contains('input-error')) validarTelefono();
    });
  }

  if (inputMensaje) {
    inputMensaje.addEventListener('blur', validarMensaje);
    inputMensaje.addEventListener('input', () => {
      if (inputMensaje.classList.contains('input-error')) validarMensaje();
    });
  }


  /* ============================================================================
     4. FASE 4: MENSAJE DE CONFIRMACIÓN (MODAL Y GESTIÓN DE ENVÍO)
     ============================================================================ */
  const modal = document.getElementById('modal-confirmacion');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalAcceptBtn = document.getElementById('modal-accept-btn');
  const resumenNombre = document.getElementById('resumen-nombre');
  const resumenCorreo = document.getElementById('resumen-correo');
  const resumenTelefono = document.getElementById('resumen-telefono');
  const resumenMensaje = document.getElementById('resumen-mensaje');

  /**
   * Abre la ventana modal de confirmación con los datos enviados
   */
  function abrirModal(datos) {
    if (!modal) return;
    resumenNombre.textContent = datos.nombre;
    resumenCorreo.textContent = datos.correo;
    resumenTelefono.textContent = datos.telefono;
    resumenMensaje.textContent = datos.mensaje;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Cierra la ventana modal de confirmación
   */
  function cerrarModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', cerrarModal);
  if (modalAcceptBtn) modalAcceptBtn.addEventListener('click', cerrarModal);

  // Cerrar al hacer clic en el backdrop oscuro
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) cerrarModal();
    });
  }

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      cerrarModal();
    }
  });

  // Manejo del evento Submit del formulario
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Ejecutar todas las validaciones personalizadas
      const esNombreValido = validarNombre();
      const esCorreoValido = validarCorreo();
      const esTelefonoValido = validarTelefono();
      const esMensajeValido = validarMensaje();

      const formularioValido = esNombreValido && esCorreoValido && esTelefonoValido && esMensajeValido;

      if (!formularioValido) {
        // Enfocar el primer campo inválido para guiar al usuario
        if (!esNombreValido) inputNombre.focus();
        else if (!esCorreoValido) inputCorreo.focus();
        else if (!esTelefonoValido) inputTelefono.focus();
        else if (!esMensajeValido) inputMensaje.focus();
        return;
      }

      // Si es válido, simular estado de envío profesional
      const textoOriginal = btnSubmit.innerHTML;
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Procesando Solicitud...`;

      setTimeout(() => {
        // Datos recopilados
        const datosEnvio = {
          nombre: inputNombre.value.trim(),
          correo: inputCorreo.value.trim(),
          telefono: inputTelefono.value.trim(),
          mensaje: inputMensaje.value.trim()
        };

        // Mostrar el modal de confirmación con los datos del usuario
        abrirModal(datosEnvio);

        // Restaurar botón y resetear formulario
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = textoOriginal;
        form.reset();

        // Limpiar clases de validación de los campos
        [inputNombre, inputCorreo, inputTelefono, inputMensaje].forEach(input => {
          input.classList.remove('input-success', 'input-error');
        });
      }, 700);
    });
  }


  /* ============================================================================
     5. EXTRAS: FILTRO INTERACTIVO DE LA CARTA Y SCROLL SPY
     ============================================================================ */
  
  // Filtro de categorías del Menú Gastronómico
  const categoryBtns = document.querySelectorAll('.category-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const categoria = btn.getAttribute('data-category');

      menuCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (categoria === 'todos' || cardCategory === categoria) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Scroll Spy: Marca la sección activa en el menú de navegación
  const sections = document.querySelectorAll('section[id]');
  function actualizarEnlaceActivo() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const enlace = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (enlace) {
          navLinks.forEach(l => l.classList.remove('active'));
          enlace.classList.add('active');
        }
      }
    });
  }

});
