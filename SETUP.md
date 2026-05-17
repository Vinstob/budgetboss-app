# 🚀 Guía Completa de Instalación - BudgetBoss

Sigue estos pasos para tener **BudgetBoss** funcionando en tu máquina y lista para vender.

---

## 📋 Requisitos Previos

Asegúrate de tener instalado:
- **Node.js** (v16+) - Descargar de https://nodejs.org/
- **npm** (incluido con Node.js)
- Una cuenta en **Firebase** (gratis) - https://firebase.google.com

---

## 🔧 Paso 1: Configurar Firebase

Firebase es la base de datos y autenticación de la app.

### 1.1 Crear un proyecto en Firebase
1. Ir a https://console.firebase.google.com
2. Haz clic en "Create Project"
3. Nombre: `BudgetBoss`
4. Click en "Create Project"
5. Espera a que se cree

### 1.2 Habilitar Autenticación
1. En el menú izquierdo, ve a "Authentication"
2. Click en "Get Started"
3. Habilita "Email/Password"
4. También puedes habilitar "Google" y "Apple" para login social

### 1.3 Crear la Base de Datos
1. En el menú izquierdo, ve a "Firestore Database"
2. Click en "Create database"
3. Selecciona "Start in test mode" (para desarrollo)
4. Región: Elige la más cercana a ti (ej: América del Sur)

### 1.4 Obtener Credenciales
1. Haz clic en la rueda de engranaje (⚙️) en la esquina superior izquierda
2. Selecciona "Project Settings"
3. Ve a la sección "Your apps"
4. Click en "Create app" y selecciona "Web" (</> icono)
5. Copia el código que te muestra
6. De aquí extraerás tus credenciales

---

## 📝 Paso 2: Configurar Variables de Entorno

1. En la raíz del proyecto, crea un archivo llamado `.env`
2. Abre `.env.example` para ver el formato
3. Rellena tus credenciales de Firebase:

```env
REACT_APP_FIREBASE_API_KEY=AIzaSyDemoKeyExample...
REACT_APP_FIREBASE_AUTH_DOMAIN=budgetboss-demo.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=budgetboss-demo
REACT_APP_FIREBASE_STORAGE_BUCKET=budgetboss-demo.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

**⚠️ IMPORTANTE**: Nunca compartas este archivo. Agrégalo a `.gitignore`

---

## 💻 Paso 3: Instalar la Aplicación

1. Abre terminal/CMD en la carpeta del proyecto
2. Ejecuta:

```bash
# Instalar todas las dependencias
npm install

# Esto tardará unos minutos...
```

---

## ▶️ Paso 4: Ejecutar en Desarrollo

1. En la misma terminal, ejecuta:

```bash
npm start
```

2. La app se abrirá automáticamente en `http://localhost:3000`
3. Si no se abre, ve manualmente a esa URL

### Prueba la app:
- Regístrate con tu email
- Agrega algunos gastos
- Prueba las funcionalidades
- Cambia la moneda a PYG (Guaraní)

---

## 🌍 Paso 5: Cambiar Moneda por Defecto

Si querés que la moneda **por defecto sea el Guaraní (PYG)** para usuarios de Paraguay:

1. Abre el archivo `src/config/firebaseConfig.js`
2. En la sección de preferencias por defecto, cambia:

```javascript
const defaultPreferences = {
  currency: 'PYG',  // ← Cambié de 'USD' a 'PYG'
  language: 'es',
  plan: 'free',
  createdAt: new Date(),
  theme: 'light'
};
```

---

## 📦 Paso 6: Compilar para Producción

Cuando estés listo para vender:

```bash
npm run build
```

Esto crea una carpeta `build/` con todos los archivos optimizados para production.

---

## 🌐 Paso 7: Desplegar la Aplicación

Tienes varias opciones (elije una):

### Opción A: Vercel (Recomendado - Gratis y muy fácil)
1. Ir a https://vercel.com
2. Sign up con GitHub
3. Haz push de tu código a GitHub
4. Click en "Import Project"
5. Selecciona el repositorio `budgetboss-app`
6. Agrega las variables de entorno (mismo `.env`)
7. Click en "Deploy"

**La app estará en vivo en minutos** ✅

### Opción B: Firebase Hosting (Gratis)
1. Instala Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login a Firebase:
```bash
firebase login
```

3. Inicializa Firebase:
```bash
firebase init hosting
```

4. Compila y deploya:
```bash
npm run build
firebase deploy
```

### Opción C: Netlify (Gratis)
1. Ir a https://netlify.com
2. Conecta tu repositorio GitHub
3. Agrega variables de entorno
4. Deploy automático

---

## 📱 Paso 8: Preparar para App Stores

### Google Play (Android)
1. Instala React Native
2. Convierte web a React Native (o usa Expo)
3. Compila APK
4. Sube a Google Play

### App Store (iOS)
1. Necesitas Mac y Xcode
2. Instala React Native
3. Compila para iOS
4. Sube a App Store

**Nota**: Esto requiere más trabajo. Podemos hacerlo después.

---

## 💳 Paso 9: Configurar Sistema de Pagos

Para la versión Pro ($4.99/mes):

### Opción A: Stripe
1. Crear cuenta en https://stripe.com
2. Obtener claves públicas/privadas
3. Agregar a variables de entorno
4. Integrar en componente de pago

### Opción B: Mercado Pago (Mejor para Latinoamérica)
1. Crear cuenta en https://www.mercadopago.com/developers
2. Obtener credenciales
3. Integrar en la app
4. Es ideal para Paraguay, Argentina, Brasil, etc.

---

## 🛡️ Paso 10: Optimizar para Seguridad

1. **Firebase Security Rules** - Configurar reglas:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/expenses/{expense=**} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

2. **Habilitar CORS** en Firebase si es necesario

3. **Cambiar a Production Mode** cuando despliegues

---

## ✅ Checklist de Lanzamiento

- [ ] Firebase configurado
- [ ] Variables de entorno en `.env`
- [ ] App funciona en localhost
- [ ] Testeado en celular/tablet
- [ ] Presupuestos Pro configurados
- [ ] Sistema de pagos integrado
- [ ] Security rules en Firestore
- [ ] Desplegado en Vercel/Firebase/Netlify
- [ ] Dominio personalizado (ej: budgetboss.app)
- [ ] SSL/HTTPS habilitado
- [ ] Landing page para vender
- [ ] Marketing en redes sociales

---

## 🎯 Siguientes Pasos para Vender

1. **Landing Page** - Crear página para atraer usuarios
2. **Marketing** - TikTok, Instagram, Facebook
3. **App Stores** - Publicar en Google Play y App Store
4. **Comunidades** - Promover en grupos de Reddit, Facebook
5. **Influencers** - Contactar micro-influencers

---

## 📞 Ayuda

Si tienes problemas:
1. Revisa la consola (F12 en navegador)
2. Verifica variables de entorno
3. Comprueba credenciales de Firebase
4. Lee mensajes de error en la terminal

¡Estás listo para vender BudgetBoss! 🚀👑
