# 👑 BudgetBoss - App de Tracking de Gastos

Una aplicación moderna y potente para trackear tus gastos personales. Diseñada para consumidores finales, disponible en web y móvil.

## ✨ Características

### Versión Gratis (Free)
✅ Registrar gastos ilimitados
✅ Acceso desde web
✅ Sincronización entre dispositivos
✅ Historial de gastos
✅ Estadísticas básicas
✅ Múltiples divisas (200+)
✅ Categorías predefinidas

### Versión Pro ($4.99/mes)
👑 Todo lo de Free +
💎 Presupuestos mensuales personalizables
📈 Gráficos avanzados y comparativas
📊 Categorías personalizadas
📄 Reportes en PDF
🌙 Sin anuncios
💾 Exportar datos en Excel

## 🚀 Instalación y Uso

### Requisitos
- Node.js (v16 o superior)
- npm o yarn
- Cuenta Firebase (gratis)

### Pasos de Instalación

1. **Clonar/Descargar el repositorio**
```bash
cd budgetboss-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Firebase** (Importante!)
   - Crear proyecto en https://firebase.google.com
   - Obtener credenciales
   - Crear archivo `.env` en la raíz:
```
REACT_APP_FIREBASE_API_KEY=tu_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
REACT_APP_FIREBASE_APP_ID=tu_app_id
```

4. **Iniciar servidor de desarrollo**
```bash
npm start
```

5. **Abrir en navegador**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
budgetboss-app/
├── public/
│   └── index.html           # HTML principal
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── StatsPanel.jsx
│   │   └── Navbar.jsx
│   ├── pages/               # Páginas principales
│   │   ├── LoginPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── SettingsPage.jsx
│   ├── hooks/               # Hooks personalizados
│   │   ├── useAuth.js
│   │   └── useExpenses.js
│   ├── config/              # Configuración
│   │   └── firebaseConfig.js
│   ├── styles/              # Estilos CSS
│   │   ├── App.css
│   │   ├── LoginPage.css
│   │   ├── DashboardPage.css
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseList.css
│   │   ├── StatsPanel.css
│   │   ├── Navbar.css
│   │   └── SettingsPage.css
│   ├── constants.js         # Constantes y datos
│   ├── App.jsx              # Componente principal
│   └── index.jsx            # Punto de entrada
├── package.json
├── .env                     # Variables de entorno
└── README.md
```

## 🌍 Divisas Soportadas

La app soporta **todas las divisas del mundo**, incluyendo:
- 🇵🇾 Guaraní Paraguayo (PYG) - Divisa por defecto para Paraguay
- 🇺🇸 Dólar Estadounidense (USD)
- 🇪🇺 Euro (EUR)
- 🇦🇷 Peso Argentino (ARS)
- 🇲🇽 Peso Mexicano (MXN)
- 🇧🇷 Real Brasileño (BRL)
- Y muchas más...

## 💰 Modelo de Monetización

1. **Versión Gratis** - Funcionalidades básicas
2. **Pro Mensual** - $4.99/mes
3. **Pro Anual** - Descuento
4. **Integración Stripe/Mercado Pago** para pagos

## 📱 Plataformas Soportadas

- ✅ Web (Navegador)
- 🔄 App iOS (en desarrollo)
- 🔄 App Android (en desarrollo)

## 🔧 Tecnologías Utilizadas

- **Frontend**: React 18
- **Routing**: React Router v6
- **Backend/BD**: Firebase (Firestore)
- **Autenticación**: Firebase Auth
- **Almacenamiento**: Firebase Storage
- **Gráficos**: Chart.js (v4)
- **Iconos**: React Icons
- **Fechas**: date-fns
- **Divisas**: currency-js

## 📝 Características Planeadas

- [ ] App móvil iOS
- [ ] App móvil Android
- [ ] Integración con Stripe/Mercado Pago
- [ ] Presupuestos inteligentes con IA
- [ ] Gráficos avanzados (comparativas, tendencias)
- [ ] Exportar datos a Excel/PDF
- [ ] Categorías personalizadas
- [ ] Etiquetas para gastos
- [ ] Compartir gastos (split)
- [ ] Modo offline
- [ ] Notificaciones

## 🛡️ Seguridad

- Autenticación con Firebase
- Datos encriptados en reposo
- HTTPS para todas las conexiones
- No almacenamos datos sensibles en el cliente

## 📞 Soporte

Para reportar bugs o sugerencias:
- Crear un issue en el repositorio
- Contactar: support@budgetboss.app

## 📄 Licencia

MIT License - Siéntete libre de usar, modificar y distribuir

## 👨‍💻 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 🚀 Próximos Pasos

1. Configurar Firebase
2. Instalar dependencias
3. Ejecutar en desarrollo
4. Testear funcionalidades
5. Preparar para producción
6. Publicar en App Stores
7. Marketing y promoción

¡Gracias por usar BudgetBoss! 👑
