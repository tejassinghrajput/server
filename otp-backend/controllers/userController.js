class UserController {
    constructor() {
      // Hardcoded data for validation
      this.validData = {
        username: 'user1',
        password: 'password123',
      };
    }
  
    // GET route handler for /hey
    getHey(req, res) {
      res.status(200).json({ message: 'Hey, how are you?' });
    }
  
    // GET route handler for /hello
    getHello(req, res) {
      res.status(200).json({ message: 'Hello, welcome!' });
    }
  
    // GET route handler for /hi
    getHi(req, res) {
      res.status(200).json({ message: 'Hi, good to see you!' });
    }
  
    // GET route handler for /hai
    getHai(req, res) {
      res.status(200).json({ message: 'Hai, have a great day!' });
    }
  
    // POST route handler for /verify (example of verifying data)
    verifyData(req, res) {
      const { username, password } = req.body;
  
      if (username === this.validData.username && password === this.validData.password) {
        res.status(200).json({ message: 'Verification successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  
    // POST route handler for /authenticate (another example of authentication)
    authenticate(req, res) {
      const { username, password } = req.body;
  
      if (username === this.validData.username && password === this.validData.password) {
        res.status(200).json({ message: 'Authenticated successfully' });
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    }
  }
  
  module.exports = UserController;
  