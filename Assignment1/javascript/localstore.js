  $(document).ready(function(){

window.localStorage.setItem('checkout', 0);
      
      //Set custom user details
    // this code is run everytime this js file is loaded.   
    if (localStorage.getItem('userdetails') === null) {  
        // if userdetails is null, that means it has not been loaded before. we not initialise userdetails object
        var userDetails = {firstName:"Harry", lastName:"Flanagan", dob:"1997-06-30",address1:"Shore Road Drive", address2:"Strandhill", address3:"Sligo"};
        // now we store the userdetails object as a localstorage object but localstore only stores text and userdetails is a javascript object
        // we convert a javascript object ot a string using JSON.stringify - we are being expedient!
        localStorage.setItem('userdetails',JSON.stringify(userDetails));
    } else {
        // if localstorage variable userdetails is already created - load it to javascript oject. JSON.parse turns it back into an javascript object
        userDetails=JSON.parse(localStorage.getItem('userdetails'));
    }
      

// Put the object into storage
localStorage.setItem('userdetails', JSON.stringify(userDetails));
      
        
    // check if user is logged in or logged out..
    var loggedin=localStorage.getItem('loggedIn'); 

    if (loggedin==1) {
        $("#loginlogout" ).html("Logout" );
        $( "#accountdetails" ).removeClass( "d-none" );            
    } else{
        $( "#accountdetails" ).addClass( "d-none" );
        $( "#loginlogout" ).html("Login" );
        $("#loginlogout" ).prop("href", "login.html");
    } 
      //set checkout total
if (localStorage.getItem('checkoutTotal') == null) {  
        localStorage.setItem('checkoutTotal',0);
    }
    $("#checkoutTotal" ).html(localStorage.getItem('checkoutTotal'));


 // wait for submit button to be clicked on login form - this code only invoked if login form submit button clicked
    $('form[name="login"]' ).submit(function( event ) {
        var email=$('input[name="email"]').val();
        var password =$('input[name="password"]').val();
        if (email=="flan97@mail.com" && password=="password1")  {   
            // successful login, user redirected to shop.html
            localStorage.setItem('loggedIn',1);    
            window.location.href = "shop.html";
        }
        else {
            // login unsuccessful, error message appears
            localStorage.setItem('loggedIn',0);
            $( "#loginerror" ).addClass( "d-block" );
        }
        return false;
    }); 
          // wait for loginlogout button to be clicked - a click here means the user has chosen to logout
    $("#loginlogout").button().click(function(){
        if (loggedin==1) {
            // set the flag so that user is not logged in
            localStorage.setItem('loggedIn',0);
            window.location.href = "login.html";
        }  else 
            window.location.href = "login.html";

    });     

// set the checkout figure
    if (localStorage.getItem('checkout') == null) {  
        localStorage.setItem('checkout',0);
    }
    $("#checkout" ).html(localStorage.getItem('checkout'));
     

    // wait for submit button to be clicked on login form - this code only invoked if login form submit button clicked
    $('form[name="login"]' ).submit(function( event ) {
        var email=$('input[name="email"]').val();
        var password =$('input[name="password"]').val();
        if (email=="flan97@mail.com" && password=="password1")  {   
            // successful login, user redirected to shop.html
            localStorage.setItem('loggedIn',1);    
            window.location.href = "shop.html";
        }
        else {
            // login unsuccessful, error message appears
            localStorage.setItem('loggedIn',0);
            $( "#loginerror" ).addClass( "d-block" );
        }
        return false;
    });     
      


    // we only run this code if an id of udetails is on the html page we are currently on - makes the code a little bit more efficient
    // if the length > 0 it means we are on the right page - and we can populdate the form fields!!!
    if ($('#udetails').length > 0) {
        $('input[name="firstname"]').val(userDetails.firstName);         
        $('input[name="lastname"]').val(userDetails.lastName);
        $('input[name="dob"]').val(userDetails.dob);
        $('input[name="address1"]').val(userDetails.address1);
        $('input[name="address2"]').val(userDetails.address2);
        $('input[name="address3"]').val(userDetails.address3);
    }
if ($('#checkoutdetails').length > 0) {
        $('input[name="firstname"]').val(userDetails.firstName);         
        $('input[name="lastname"]').val(userDetails.lastName);
    }
      


    // wait for submit button to be clicked on userdetails update form
    $('form[name="userdetails"]' ).submit(function( event ) {
        // if the user updates the user details - we update the userDetails javascript object
        userDetails.firstName=$('input[name="firstname"]').val();
        userDetails.lastName=$('input[name="lastname"]').val();
        userDetails.address1=$('input[name="address1"]').val(); 
        userDetails.address2=$('input[name="address2"]').val();   
        userDetails.address3=$('input[name="address3"]').val();    
        // finally we convert the javascript object to a string with JSON.stringify and save it to localstorage
        localStorage.setItem('userdetails',JSON.stringify(userDetails));
        return false;
    }); 

      // wait for submit button to be clicked on userdetails update form
    $('form[name="paymentdetails"]' ).submit(function( event ) {
        var cardnumber=$('input[name="cardnumber"]').val();
        if (cardnumber=="1234 5678 9102 3456") {
            $( "#payment-failure" ).addClass( "d-none" );
            $( "#payment-success" ).removeClass( "d-none" );
            $( "#buy-button" ).addClass( "d-none" );
            $( "#checkout" ).html("0");
            localStorage.setItem("checkout",0);
            localStorage.setItem("checkoutTotal",0);
            
        } else {
            $( "#payment-failure" ).removeClass( "d-none" );
        }
        return false;
    }); 
      
    $(".btn-success").click(function(){
        var total=localStorage.getItem('checkout');
        total++;
        localStorage.setItem('checkout',total);
        $("#checkout" ).html(total );
    });
$("#CallOfDutyCart").click(function(){
var cartTotal=localStorage.getItem('checkoutTotal');
        cartTotal = cartTotal + 79.99;
        localStorage.setItem('checkoutTotal',cartTotal);
        $("#item1").html("Call of Duty: Modern Warfare");
    });
      
}); 