import user from "../models/user.js";
import { hashPassword, compare_hashed_passwords } from "../utils/hashing.js";
import { createToken } from "../utils/tokens.js"

export async function register( req, res ) {
  try {
    // defensive check for valid request body
    if (!req.body) {
      return res.status( 400 ).json( {message: "Request body is missing!"} );
    }

    const {username, password} = req.body;

    // defensive check for valid username and password
    if (!username || !password) {
      return res.status( 400 ).json( {message: "Username and Password fields are required!"} );
    }

    // defensive check: the username should be a string
    if (typeof username !== 'string') {
      return res.status( 400 ).json( {message: "Username must be a string!"} );
    }

    // defensive check: the password should be a string
    if (typeof password !== 'string') {
      return res.status( 400 ).json( {message: "Password must be a string!"} );
    }

    // defensive check: restrict username and password length
    if (username.length > 50 || password.length > 50) {
      return res.status( 400 ).json( {message: "Username and Password must not exceed 50 characters!"} );
    }

    // check if the user name exists
    const foundUser = await user.findOne( {where: {username}} );

    // defensive check: user already exists
    if (foundUser) {
      return res.status( 400 ).json( {message: "This user is already registered!"} );
    }

    // hashing the password
    const hashedPassword = await hashPassword( password );

    // execute the registration
    const newUser = await user.create( {username: username, password: hashedPassword} );

    res.json( {message: "User registered successfully!"} );
  } catch (error) {
    res.status( 500 ).json( {message: "Internal Server Error!!"} );
  }
}

export async function login( req, res ) {
  try {
    // defensive check for valid request body
    if (!req.body) {
      return res.status( 400 ).json( {message: "Request body is missing!"} );
    }

    const {username, password} = req.body;

    // defensive check for valid username and password
    if (!username || !password) {
      return res.status( 400 ).json( {message: "Username and Password fields are required!"} );
    }

    // defensive check: the username should be a string
    if (typeof username !== 'string') {
      return res.status( 400 ).json( {message: "Username must be a string!"} );
    }

    // defensive check: the password should be a string
    if (typeof password !== 'string') {
      return res.status( 400 ).json( {message: "Password must be a string!"} );
    }

    // defensive check: restrict username and password length
    if (username.length > 50 || password.length > 50) {
      return res.status( 400 ).json( {message: "Username and Password must not exceed 50 characters!"} );
    }

    // check if user registered or not
    const registeredUser = await user.findOne( {where: {username}} );
    if (!registeredUser) {
      return res.status( 400 ).json( {message: "Username does not exist!"} );
    }

    // check password matching
    const is_matched = await compare_hashed_passwords( password, registeredUser.password );
    if (!is_matched) {
      return res.status( 400 ).json( {message: "Invalid password!"} );
    }

    // create token
    const token = createToken( registeredUser.id, username );

    return res.status( 200 ).json( {message: "User logged in successfully!", token} );
  } catch (error) {
    res.status( 500 ).json( {message: "Internal server error!"} );
  }
}