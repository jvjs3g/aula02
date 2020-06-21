import axios from 'axios';

const api = axios.create({
  baseURL:"http://10.0.2.2:3333"
});

export default api;

/**
 * ios com emulador :localhost
 * ios com fisico : IP da maquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (android studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com fisico : IP da maquina
 */