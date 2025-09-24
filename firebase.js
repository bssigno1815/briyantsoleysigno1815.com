<script type="module">
  // /js/firebase.js
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
  // paste your config here:
  const firebaseConfig = {/* ...from Firebase... */};
  export const app = initializeApp(firebaseConfig);
  export const db  = getFirestore(app);
</script>
