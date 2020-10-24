import * as express from 'express';

import UserCtrl from './controllers/user';
import SpeakerCtrl from './controllers/speaker';

export default function setRoutes(app) {

  const router = express.Router();
  
  // Users
  const userCtrl = new UserCtrl();

  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Speakers
  const speakerCtrl = new SpeakerCtrl();

  router.route('/speakers').get(speakerCtrl.getAll);
  router.route('/speakers/count').get(speakerCtrl.count);
  router.route('/speaker').post(speakerCtrl.insert);
  router.route('/speaker/:link').get(speakerCtrl.get);
  router.route('/speaker/:id').put(speakerCtrl.update);
  router.route('/speaker/:id').delete(speakerCtrl.delete);
  
  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
