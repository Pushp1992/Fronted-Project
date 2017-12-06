


// Creating Form Uisng React library (View part)

 var Myform = React.createClass({
 render: function(){
 return(
	<div><br/><br/>
	 <strong> CREATE AN ACCOUNT</strong> <br/><br/><br/>
	 
	 <form name="signUpForm" id="register" method="post">
	 <label>E-MAIL</label><br/>
	 <input type="email" /><br/>
	 <label>USERNAME</label><br/>
	 <input type="text" /><br/>
	 <label>PASSWORD</label><br/>
	 <input type="password" /><br/>
	 </form> <br/> <br/>

	 </div>
 );
}
 });
 
 ReactDOM.render(
 <Myform/>, document.getElementById("UserSignupForm")
 );
