import { Router } from 'express';
import History from '../models/History.js';
import User from '../models/User.js';

class HTTPError extends Error {
    constructor(message, code) {
      super(message);
      this.code = code;
    }
}

const router = Router();

router.get('/', (req, res) => {
    res.redirect('/index.html');
});

router.get('/history', async (req, res) => {
  const histories = await History.readAll();
 
  if (histories) {
   res.json(histories);
  } else {
    throw new HTTPError('Invalid data to create investment', 400);
  }
  }
);

router.post('/histories', async (req, res) => {
  

  const newHistories = await History.setHistory(req.body);

  if (newHistories) {
    res.json(newHistories);
  } else {
    throw new HTTPError('Invalid data to create investment', 400);
  }
});

router.get('/histories', async (req, res) => {
    try {
        History.readAll().then((data) => {
            // ordena o array de historico por data (mais recente primeiro)
            const history = data.sort((a, b) => new Date(b.data) - new Date(a.data));
            res.json(history);
        });
    } catch (error) {
        console.log(error)

        throw new HTTPError('Invalid data to create investment', 400);;
    }
});

router.post('/users', async (req, res) => {
    const user = req.body;
  
    delete user.confirmationPassword;
  
    const newUser = await User.create(user);
  
    res.status(201).json(newUser);
  });
  
  router.use((req, res, next) => {
    res.status(404).json({ message: 'Error 404 Not Found' });
  });
  
  router.use((err, req, res, next) => {
    if (err instanceof HTTPError) {
      res.status(err.code).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Pane no Sistema, Alguém me Desconfigurou!' });
    }
  });

export default router;
