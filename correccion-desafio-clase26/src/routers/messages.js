/************* sin uso *********/
/************* esats rutas ya no se usan, ya que la comunicacion de los mensajes es por websockets *********/
/* import Router from 'express';

import sqliteConnection from '../../database/sqliteConnection.js';
import ProductContenedorSQL from '../contenedores/ProductContenedorSQL.js';

const messagesRouter = Router();

const productContenedorSQL = new ProductContenedorSQL(sqliteConnection, 'mensajes');

messagesRouter.get('/', async (req, res) => {
    const messagesList = await productContenedorSQL.getAll();
    res.json(messagesList)
  });
  
  messagesRouter.get('/:id', async (req, res) => {
    let messagesList = {};
    if (req.params.id) {
      messagesList = await productContenedorSQL.getById(req.params.id);
    }
    res.json(messagesList)
  });
  
  messagesRouter.post('/', async (req, res) => {
    const messageId = await productContenedorSQL.save(req.body);
    res.json(messageId)
  });
  
  messagesRouter.delete('/:id', async (req, res) => {
    if (req.params.id) {
      await productContenedorSQL.deleteById(req.params.id);
    }
    res.json({ message: `${req.params.id} deleted succesfully`});
  });
  
  messagesRouter.put('/:id', async (req, res) => {
    if (req.params.id) {
      await productContenedorSQL.update(req.params.id, req.body);
    }
    res.json({ message: `${req.params.id} updated succesfully`});
  });
  
  export default messagesRouter; */
  /************* sin uso *********/