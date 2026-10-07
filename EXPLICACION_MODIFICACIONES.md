# Documentación del Proyecto: Landing Page Comercial con IA

## Datos del Proyecto
- **Asignatura / Programa:** Frontend Developer
- **Proyecto:** Landing Page Comercial con IA
- **Giro de Negocio Asignado:** **Restaurante** (*Aura Bistró & Grill*)
- **Tecnologías Utilizadas:** HTML5 semántico, CSS3 moderno (Custom Properties, Flexbox, CSS Grid), JavaScript estándar (ES6+), Font Awesome 6, Google Fonts.

---

## 1. Resumen y Objetivos del Proyecto

El objetivo de este proyecto consistió en desarrollar una landing page comercial moderna, atractiva, 100% responsiva y completamente funcional para un **Restaurante de autor**, tomando como punto de partida una primera versión conceptual generada mediante herramientas de Inteligencia Artificial (Fase 1) y evolucionándola a través de:
1. **Personalización integral (Fase 2):** Adaptación visual y de contenido específica para el rubro gastronómico (paleta de colores, tipografías, imágenes en alta resolución, redacción persuasiva y animaciones).
2. **Formulario funcional con validación HTML5 (Fase 3):** Implementación de los campos requeridos con atributos `required`, `minlength` y `email`.
3. **Mejoras avanzadas con JavaScript (Fase 4):** Menú responsive para móviles con animación tipo hamburguesa, botón flotante de retorno al inicio ("Volver arriba"), validación personalizada en tiempo real con mensajes visuales intuitivos y un modal dinámico de confirmación de reserva.

---

## 2. Fase 1: Diseño con IA (Punto de Partida)

### Prompt Utilizado:
> *"Crea una landing page para una barbería moderna. Debe incluir: Encabezado, Menú, Sección de servicios, Galería, Formulario de contacto, Pie de página. Genera HTML5, CSS3 y JavaScript."*

### Análisis de la Primera Versión Generada:
La versión inicial producida por la IA proporcionó una estructura básica de prueba:
- Estructura HTML plana con bloques genéricos (`div` excesivos).
- Estilos estándar con paleta oscura monocromática orientada a barbería (tonos grises fríos).
- Textos genéricos ("Corte de cabello", "Arreglo de barba", etc.).
- Formulario no validado con recarga de página por defecto (`action=""`).
- Ausencia de micro-interacciones, accesibilidad (`ARIA`) y validación en tiempo real.

---

## 3. Fase 2: Personalización (Adaptación al Negocio: Restaurante)

Se transformó la propuesta base para responder a las necesidades de una empresa gastronómica de alta cocina: **Aura Bistró & Grill**. Las modificaciones realizadas fueron las siguientes:

### A. Paleta de Colores
- **Antes:** Grises fríos y blanco genérico.
- **Después:** Se diseñó una paleta gastronómica premium mediante variables CSS (`:root`):
  - `--color-primary: #d4af37` (Dorado ámbar): Evoca exclusividad, calidez, alta cocina y excelencia culinaria.
  - `--color-primary-hover: #b89324`: Variación oscura para interacción y hover.
  - `--bg-body: #0d1117` y `--bg-darker: #07090c`: Fondos oscuros elegantes que maximizan el contraste y hacen resaltar las fotografías de los platos.
  - `--bg-card: #151b23`: Superficies de tarjetas con bordes sutiles y sombras profundas.
  - `--color-success: #2ecc71` y `--color-error: #ff5252`: Feedback cromático claro e inequívoco en el formulario.

### B. Imágenes y Recursos Visuales
- **Antes:** Marcadores de posición o fotos de cortes de pelo.
- **Después:** Curaduría de imágenes fotográficas reales en alta resolución:
  - Fotografía enlazada y destacada de la **Plaza Daniel Alcides Carrión** (Cerro de Pasco) en la sección inicial (Hero), situada junto a la descripción del restaurante en una tarjeta interactiva de alta fidelidad con geolocalización.
  - Imagen de fondo atmosférica en el Hero (`hero` con iluminación tenue y mesas preparadas).
  - Fotografía del Chef emplatando con dedicación en la sección *"Nosotros"*.
  - 8 fotografías de especialidades (Entrantes gourmet, Solomillo Angus a la brasa, Salmón silvestre, Risotto de trufas, Coulant de chocolate, Coctelería de autor).
  - Cuadrícula de 6 imágenes en la *"Galería"* (Salón, Bar, Terraza exterior, Cocina en vivo).
  - Implementación de `loading="eager"` en el Hero y `loading="lazy"` en las secciones inferiores para optimizar la velocidad de carga (Core Web Vitals).

### C. Textos y Copywriting Comercial
- **Antes:** Frases genéricas de plantilla.
- **Después:** Redacción enfocada a despertar el apetito y generar reservas:
  - Título del Hero: *"El Arte Culinario que Despierta Tus Sentidos"*.
  - Filosofía del restaurante: Huerto propio, brasa con carbón de encina y cocina con pasión.
  - Menú detallado con ingredientes de autor, alérgenos y precios reales.
  - Descripción de servicios orientados a experiencias (Cenas con maridaje, Eventos privados, Catering gourmet, Terraza lounge).

### D. Fuentes Tipográficas
- **Antes:** Fuentes de sistema genéricas (`Arial`, `sans-serif`).
- **Después:** Combinación tipográfica seleccionada en Google Fonts:
  - **Titulares:** `Playfair Display` (Serif de estilo editorial, refinado y clásico).
  - **Cuerpo y botones:** `Plus Jakarta Sans` (Sans-serif moderna, geométrica y con excelente legibilidad en pantallas de cualquier tamaño).

### E. Animaciones y Micro-interacciones
- **Antes:** Elementos estáticos sin transiciones.
- **Después:**
  - Animaciones de entrada `@keyframes fadeInUp` y `@keyframes fadeInDown` en el Hero.
  - Efecto `bounce` en el indicador de scroll.
  - Transiciones suaves de escala (`transform: scale(1.08)`) y overlays de oscurecimiento progresivo en la galería de fotos y tarjetas del menú.
  - Efectos hover en botones con desplazamiento sutil (`translateY(-2px)`) y resplandor dorado (`box-shadow`).

---

## 4. Fase 3: Formulario Funcional

Se configuró el formulario de reservas y contacto garantizando el cumplimiento estricto de los campos y validaciones requeridas por la documentación:

| Campo | Atributo HTML | Validación Requerida | Validación Aplicada |
| :--- | :--- | :--- | :--- |
| **Nombre** | `id="nombre"` | `required`, `minlength` | Obligatorio, mínimo 3 caracteres, verificación de que no contenga únicamente números. |
| **Correo** | `id="correo"` | `required`, `email` | Obligatorio, tipo `email`, validación con expresión regular RFC. |
| **Teléfono** | `id="telefono"` | `required`, `minlength` | Obligatorio, mínimo 8 caracteres, formato numérico internacional compatible (`+`, espacios, guiones). |
| **Mensaje** | `id="mensaje"` | `required`, `minlength` | Obligatorio, mínimo 10 caracteres explicativos para la reserva. |

Se añadió el atributo `novalidate` en la etiqueta `<form>` para permitir que las validaciones visuales personalizadas de JavaScript tomen el control con una experiencia visual unificada y profesional.

---

## 5. Fase 4: Mejoras con JavaScript

Se programó el archivo `script.js` con las cuatro mejoras solicitadas:

### 1. Menú Responsive
- Botón hamburguesa interactivo que transforma sus 3 barras horizontales en una "X" mediante transiciones CSS.
- Apertura fluida del menú lateral/desplegable en pantallas de smartphone y tablet.
- Bloqueo de desplazamiento del fondo (`body.style.overflow = 'hidden'`) cuando el menú está desplegado para evitar scrolls accidentales.
- Cierre automático al hacer clic en cualquier enlace (`.nav-link`), al pulsar fuera del menú o al presionar la tecla `Escape`.
- Gestión de accesibilidad mediante el atributo dinámico `aria-expanded="true/false"`.

### 2. Botón "Volver Arriba" (Back to Top)
- Botón flotante `#btn-volver-arriba` situado en la esquina inferior derecha.
- Permanece invisible en la parte superior y se activa dinámicamente mediante la clase `.show` cuando el scroll vertical supera los 300 píxeles (`window.scrollY > 300`).
- Al hacer clic, ejecuta un desplazamiento suave y fluido (`window.scrollTo({ top: 0, behavior: 'smooth' })`).

### 3. Validación Personalizada
- Funciones modulares e independientes: `validarNombre()`, `validarCorreo()`, `validarTelefono()`, `validarMensaje()`.
- Validación en tiempo real conectada a los eventos `blur` e `input`:
  - Si el usuario comete un error, el campo se resalta con borde rojo (`.input-error`) y aparece un mensaje específico con icono de alerta debajo del campo.
  - Al corregir el dato, el error desaparece de inmediato y el campo se resalta en verde (`.input-success`).
- Al intentar enviar el formulario:
  - Se evalúan todos los campos en conjunto.
  - Si existen fallos, se cancela el envío y el foco (`focus()`) se traslada automáticamente al primer campo inválido para guiar al usuario.

### 4. Mensaje de Confirmación
- Intercepción del envío mediante `event.preventDefault()`.
- Simulación de proceso de envío ("Procesando Solicitud..." con icono de carga animado).
- Despliegue de una ventana modal emergente con diseño de tarjeta flotante y fondo oscuro difuminado (`backdrop-filter`).
- El modal presenta un resumen detallado con los datos ingresados:
  - Nombre del comensal.
  - Correo electrónico de confirmación.
  - Teléfono de contacto.
  - Mensaje / Observaciones de la reserva.
- Opciones de cierre mediante botón 'X', botón de aceptación, clic sobre el fondo o tecla `Escape`.
- Limpieza automática del formulario (`form.reset()`) y restauración de estados.

### Mejoras Adicionales Implementadas:
- **Filtro interactivo de platos:** Botones de categoría (*Todos, Entrantes, Platos Fuertes, Postres, Bebidas*) que muestran y ocultan los elementos del menú dinámicamente con transiciones fluidas.
- **Scroll Spy:** Resalta automáticamente el enlace del menú correspondiente a la sección que el usuario está viendo en pantalla.
- **Header Scrolled:** Aplica un efecto de desenfoque y sombra pronunciada a la barra de navegación al descender por la página.

---

## 6. Estructura de Archivos del Proyecto

```plaintext
proyecto final frontend developer/
│
├── index.html                            # Estructura semántica HTML5 y contenido del restaurante
├── styles.css                            # Hoja de estilos CSS3 moderna y diseño responsivo
├── script.js                             # Lógica JavaScript (menú, scroll, validaciones y modal)
├── EXPLICACION_MODIFICACIONES.md         # Documento explicativo de entrega final
├── Explicacion_de_las_Modificaciones.docx# Presentación formal en formato Microsoft Word
└── README.md                             # Guía rápida de presentación y ejecución
```

---

## 7. Instrucciones para Visualizar el Proyecto

Para abrir y probar la aplicación web:
1. Haz doble clic sobre el archivo `index.html` en tu explorador de archivos para abrirlo en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
2. O bien, ejecuta un servidor local (por ejemplo usando Python: `python -m http.server 8000`) y accede a `http://localhost:8000`.
3. Prueba la respuesta visual en distintos anchos de pantalla reduciendo el tamaño de la ventana o utilizando el modo responsivo de las herramientas para desarrolladores (`F12`).
4. Prueba el formulario en la sección de Contacto:
   - Envía el formulario vacío para observar las validaciones en tiempo real y mensajes de error.
   - Escribe un correo inválido (ej. `correo@`) para ver el aviso de formato.
   - Completa todos los campos correctamente y envía para visualizar la ventana modal de confirmación con el resumen de la reserva.
