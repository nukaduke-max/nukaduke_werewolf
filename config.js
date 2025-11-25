// config.js
// Firebaseの基本設定をここで行います
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, set, get, update, onValue, push, onChildAdded, remove, onDisconnect, child } 
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// あなたの設定
const firebaseConfig = {
    apiKey: "AIzaSyCZZlMXREYtPTFXMTrjtATsa1xShWmZIZI",
    authDomain: "werewolf-756e4.firebaseapp.com",
    databaseURL: "https://werewolf-756e4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "werewolf-756e4",
    storageBucket: "werewolf-756e4.firebasestorage.app",
    messagingSenderId: "935198400486",
    appId: "1:935198400486:web:4ad43bbc49adac97a6c027",
    measurementId: "G-Q7LBVYBN3Z"
};

// 初期化してエクスポート（他のファイルで使えるようにする）
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 定数もここで管理
const ROOM_ID = "my_private_room";
const PASSWORD = "1234";

export { db, ref, set, get, update, onValue, push, onChildAdded, remove, onDisconnect, child, ROOM_ID, PASSWORD };
