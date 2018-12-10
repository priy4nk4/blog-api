var mongoose = require('mongoose');

var DBURI = "mongodb://localhost:27017/postDB";

mongoose.connect(DBURI,function(error){
	if(error){
		console.log(error);
	}
}); 

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + DBURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});