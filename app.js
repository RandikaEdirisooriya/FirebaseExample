/*
/!*firebase configure *!/


const firebaseConfig = {
    apiKey: "AIzaSyCpOzYhOR97o_8W6Jel3b--B4f_2iEVj_4",
    authDomain: "fir-example-c5f8e.firebaseapp.com",
    projectId: "fir-example-c5f8e",
    storageBucket: "fir-example-c5f8e.appspot.com",
    messagingSenderId: "694295450327",
    appId: "1:694295450327:web:b9f19c15762c33b9c0d692"
};


/!*initialized karanna oni firebase*!/

/!*const app = initializeApp(firebaseConfig);*!/
firebase.initializeApp(firebaseConfig);
/!*create a auth instance*!/

const auth=firebase.auth();
/!*sigh up login*!/
document.getElementById('loginbtn').addEventListener('click',()=>{
/!*const email=document.getElementById('email').value;
const password=document.getElementById('password').value;*!/
    console.log(awaa)
/!*auth.createUserWithEmailAndPassword(email,password)
    .then(()=>{
    alert("done")
    })*!/
})
/!*document.getElementById('signupbtn').addEventListener('click',()=>{
    alert("hello")
})*!/

*/



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
/*signupbtn*/
    document.getElementById('signupbtn').addEventListener('click', () => {


   const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

        alert(email,password)
    console.log(email, password);


    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

    alert("User signed up successfully!");

})
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
    console.error("Error code:", errorCode, "Message:", errorMessage);
});
});

