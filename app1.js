
// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCpOzYhOR97o_8W6Jel3b--B4f_2iEVj_4",
    authDomain: "fir-example-c5f8e.firebaseapp.com",
    projectId: "fir-example-c5f8e",
    storageBucket: "fir-example-c5f8e.appspot.com",
    messagingSenderId: "694295450327",
    appId: "1:694295450327:web:b9f19c15762c33b9c0d692"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
// Add event listener for signup button
document.getElementById('loginbtn').addEventListener('click', () => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Logged in successfully!");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Login Error: ${errorMessage}`);
            console.error("Login Error code:", errorCode, "Message:", errorMessage);
        });
});
