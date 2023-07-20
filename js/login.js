const firebaseConfig = {
    apiKey: "AIzaSyDMiZGLeWBAa0D0qkbc_D7tVBNeWYrQVfQ",
    authDomain: "shc-bhy.firebaseapp.com",
    projectId: "shc-bhy",
    storageBucket: "shc-bhy.appspot.com",
    messagingSenderId: "833178477745",
    appId: "1:833178477745:web:a6f5b940104f2722fa2e90",
    measurementId: "G-H9YGYYHVTB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  //Initialize variables
const auth =firebase.auth();
const database= firebase.database();



function register(){

    email =document.getElementById('email').value
    password =document.getElementById('password').value



if( validate_email(email) == false || validate_password(password) == false){

alert('Invalid pass or email')
    return
}



auth.createUserWithEmailAndPassword(email, password).then(function(){

var user =auth.currentUser

ar database_ref =database.ref()


    var user_data ={
        email: email,
        password: password,
        last_login: Date.now()

    }


database_ref.child('users/' + user.uid).set(user_data)



alert('User Created')

})
.catch(function(error){
 var error_code =error.code
    var error_message =error.message


    alert(error_message)

})






}


function validate_email(email){

expression = /^[^@]+@\w+(\.\w+)+\w$/
if(expression.test(email) == true){

        return true
}else{

    return false
}

}


function validate_password(password){
    if(password <6){
        return false
    }else{
        return true
    }
}



function validate_feilds(fields){
    if(fields == null){
        return false
    }

    if(fields.length <=0){
        return false
    }else {
        return true
    }
}

function login() {
    email =document.getElementById('email').value
    password =document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
    alert('Invalid !!!!')
return

}

auth.signInWithEmailAndPassword(email, password).then(function() {

    var user =auth.currentUser

    var database_ref =database.ref()


    var user_data ={
        last_login: Date.now()

    }


database_ref.child('users/' +user.uid).update(user_data)


alert('Created !!!')


})
.catch(function(error) {
    var error_code =error.code
    var error_message =error.message


    alert(error_message)
})


}