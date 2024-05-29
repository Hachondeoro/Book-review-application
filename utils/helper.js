function validateRequestBody( req, res ) {
  if (!req.body) {
    return res.status( 400 ).json( {message: "Request body is missing!"} );
  }

  const {username, password} = req.body;

  if (!username || !password) {
    return res.status( 400 ).json( {message: "Username and Password fields are required!"} );
  }

  if (typeof username !== 'string') {
    return res.status( 400 ).json( {message: "Username must be a string!"} );
  }

  if (typeof password !== 'string') {
    return res.status( 400 ).json( {message: "Password must be a string!"} );
  }

  if (username.length > 50 || password.length > 50) {
    return res.status( 400 ).json( {message: "Username and Password must not exceed 50 characters!"} );
  }

  return null;
}