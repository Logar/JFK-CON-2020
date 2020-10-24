import Speaker from '../models/speaker';
import BaseCtrl from './base';

export default class SpeakerCtrl extends BaseCtrl {
  model = Speaker;

  // Get by link
  get = async (req, res) => {
    try {
      const obj = await this.model.findOne({ link: req.params.link });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}
