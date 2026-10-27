# ASTRA // Creative Agency & Brand Identity

> *"Hagamos algo digno de recordar."*  
> *“Let's make something worth remembering.”*

Sitio web oficial e interactivo de **ASTRA**, desarrollado con base en las directrices estratégicas, visuales y conceptuales del **Manual de Marca Oficial (2026)**.

---

## 📑 Tabla de Contenidos

- [Sobre ASTRA](#-sobre-astra)
- [Sistema de Identidad & Brand Guidelines](#-sistema-de-identidad--brand-guidelines)
  - [Paleta Cromática Oficial](#paleta-cromática-oficial)
  - [Tipografías de Marca](#tipografías-de-marca)
  - [Construcción del Logotipo](#construcción-del-logotipo)
  - [Versiones Vectoriales (SVG)](#versiones-vectoriales-svg)
- [Características de la Web](#-características-de-la-web)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías & Estándares Web](#-tecnologías--estándares-web)
- [Instalación & Ejecución Local](#-instalación--ejecución-local)
- [Créditos](#-créditos)

---

## 🌌 Sobre ASTRA

Inspirado en el vocablo latino *astra* («estrellas»), el nombre representa la curiosidad inagotable por explorar lo desconocido y la ambición de llegar más allá de lo establecido.

**ASTRA** nace de la unión de dos mentes creativas que encuentran en sus diferencias una fuerza para innovar. Así como las estrellas forman constelaciones, las mejores ideas surgen cuando distintas perspectivas se conectan.

- **Misión**: Transformamos ideas en marcas con identidad, creando soluciones estratégicas y creativas que conectan, comunican y generan impacto. Combinamos creatividad, innovación y visión para llevar cada proyecto más allá de lo esperado.
- **Visión**: Ser una agencia creativa referente por nuestra forma de pensar diferente, anticiparnos a lo que viene y construir marcas relevantes, auténticas y memorables, capaces de evolucionar en un mundo en constante cambio.
- **Valores del ADN**:
  1. **Estrategia**: La brújula antes del trazo.
  2. **Creatividad**: El motor que rompe lo ordinario.
  3. **Innovación**: Anticipar el mañana.
  4. **Conexión**: El puente humano y emocional.
  5. **Evolución**: Sistemas visuales vivos y adaptables.

---

## 🎨 Sistema de Identidad & Brand Guidelines

### Paleta Cromática Oficial

| Tono | Muestra | HEX | RGB | CMYK | Pantone | Rol |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Volt** | `■` | `#CFFF02` | `207, 255, 2` | `19%, 0%, 99%, 0%` | `389 C` | Color primario, alta energía neón |
| **Impact Blue** | `■` | `#1046C0` | `16, 70, 192` | `92%, 64%, 0%, 25%` | `2728 C` | Color secundario, profundidad |
| **Makoy Fruit** | `■` | `#EF8E01` | `239, 142, 1` | `0%, 41%, 100%, 6%` | `144 C` | Acento dinámico |
| **Cosmic Black** | `■` | `#080B0E` | `8, 11, 14` | `—` | `—` | Fondo base de alto contraste |
| **Pure White** | `■` | `#FFFFFF` | `255, 255, 255` | `0%, 0%, 0%, 0%` | `—` | Claridad y legibilidad tipográfica |

### Tipografías de Marca

- **Tipografía Principal — Neue Jothama**: Sans-serif geométrica que combina armoniosamente elementos humanistas y neogrotescos. Trazo grueso, moderno y robusto.
- **Tipografía Corporativa — Qubic Grid**: Caracteres en caja alta y estilo grotesco cuadrado, arquitectónico y de alto impacto.

### Construcción del Logotipo

- **Proporción Vectorial**: 379.41 px (ancho) × 101.11 px (alto).
- **Elemento Distintivo**: Letra «A» inicial intervenida con un anillo orbital y una estrella de cuatro puntas, simbolizando movimiento perpetuo, creatividad y visión de futuro.
- **Área de Reserva**: Medida referencial de **1X** (equivalente al grosor del trazo vertical de la letra «A»).

### Versiones Vectoriales (SVG)

Ubicadas en `assets/logos/`:

1. `astra-logo.svg`: Logotipo Corporativo (Volt + Blanco).
2. `astra-logo-white.svg`: Versión monocromática blanca.
3. `astra-logo-volt.svg`: Versión monocromática verde Volt.
4. `astra-logo-blue.svg`: Versión Impact Blue.
5. `astra-logo-orange.svg`: Versión Makoy Fruit.
6. `astra-symbol.svg`: Isotipo («A» orbital con estrella de cuatro puntas).

---

## ⚡ Características de la Web

1. **Constelaciones Interactivas en Tiempo Real (`HTML5 Canvas`)**:
   - Red estelar generativa donde los nodos se conectan entre sí y son atraídos por el cursor del usuario.
2. **Brand System Lab (Laboratorio en Vivo)**:
   - Selector interactivo de las 6 variantes autorizadas del logotipo en SVG.
   - Activador de retícula técnica (*Cotas & Grid*) con cotas milimétricas y área de seguridad 1X.
   - Muestras de color con copiado al portapapeles en 1 clic y retroalimentación háptica/visual (*Toast*).
3. **Probador Tipográfico en Vivo (Type Tester)**:
   - Campo editable en tiempo real para previsualizar cualquier texto o titular en las tipografías corporativas.
4. **Visor del Manual Oficial (Native Modal Lightbox)**:
   - Galería interactiva con las páginas del manual de marca renderizadas en alta resolución utilizando el elemento estándar `<dialog>`.
5. **Configurador de Brief & Cotizador ("Diseña tu Órbita")**:
   - Calculadora paso a paso que estima el presupuesto referencial según alcance, etapa de la marca y módulos adicionales.
   - Botón de transferencia directa que precarga el brief en el formulario de contacto.
6. **Formulario de Contacto Accesible**:
   - Campos validados nativamente con selectores CSS `:user-valid` y `:user-invalid`, y modal de confirmación.
7. **Micro-Sonidos Sci-Fi (Web Audio API)**:
   - Sintetizador de tonos sutiles de interfaz, con interruptor de encendido/apagado en el encabezado.
8. **Diseño 100% Responsivo & Resistente**:
   - Adaptado a resoluciones móviles, tablets (con menú hamburguesa) y escritorios panorámicos.
   - Cabecera con cristal oscuro semi-opaco para evitar transparencias y solapamientos al desplazarse.

---

## 📁 Estructura del Proyecto

```text
ASTRA/
├── assets/
│   ├── img/
│   │   └── bg-space-texture.jpg       # Textura ambiental cósmica
│   ├── logos/
│   │   ├── astra-logo.svg             # Logotipo Corporativo oficial (Volt + Blanco)
│   │   ├── astra-logo-white.svg       # Versión Blanca
│   │   ├── astra-logo-volt.svg        # Versión Volt Neón
│   │   ├── astra-logo-blue.svg        # Versión Impact Blue
│   │   ├── astra-logo-orange.svg      # Versión Makoy Fruit
│   │   └── astra-symbol.svg           # Isotipo oficial (A orbital con estrella)
│   └── manual/
│       ├── page-01.png ... page-15.png  # Páginas completas en alta definición
│       └── thumbs/
│           ├── page-01.webp ... page-15.webp  # Miniaturas optimizadas
├── index.html                         # Estructura semántica HTML5
├── styles.css                         # Hoja de estilos autónoma y responsive
├── app.js                             # Motor interactivo de la aplicación
├── Manual de Marca ASTRA.pdf          # Documento original del manual
└── README.md                          # Documentación del proyecto
```

---

## 🛠️ Tecnologías & Estándares Web

- **HTML5 Semántico**: Estructura limpia y accesible sin etiquetas redundantes.
- **CSS3 Moderno**:
  - Variables CSS nativas para el sistema de color.
  - Reglas de contención de scroll (`overscroll-behavior: contain`) y modales nativos (`dialog:modal`).
  - Pseudo-clases modernas `:user-valid` y `:user-invalid`.
  - Estilos de respaldo integrados (funciona con o sin conexión a internet).
- **Tailwind CSS (CDN v3)**: Integrado con tokens temáticos personalizados.
- **JavaScript Moderno (ES6+)**:
  - Manipulación nativa del DOM sin dependencias externas.
  - Web Audio API (`AudioContext`) para el sintetizador de efectos sonoros.
  - HTML5 Canvas para el renderizado estelar a 60 FPS.

---

## 🚀 Instalación & Ejecución Local

No requiere compilación ni dependencias pesadas. Para previsualizar el proyecto localmente:

### Opción 1: Servidor rápido con Python
```bash
python3 -m http.server 8080
```
Luego abre tu navegador en `http://localhost:8080`.

### Opción 2: Con Node.js (`serve`)
```bash
npx serve .
```

### Opción 3: Extensión Live Server
Abre el directorio en Visual Studio Code o en tu IDE preferido y ejecuta **Open with Live Server** sobre `index.html`.

---

## 📄 Créditos

- **Identidad de Marca**: ASTRA Creative Agency (Manual de Marca Oficial 2026).
- **Desarrollo Web**: Diseñado y construido con precisión vectorial, estética futurista y estándares web modernos.
