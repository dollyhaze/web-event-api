import Base from '../base';
import * as client from '../../helpers/eventful'

let poorMansCache = []

export default class ArticleCtrl extends Base {
  static async getEvents(req, res) {
    let response = []
    if(poorMansCache.length > 0) {
      response = poorMansCache
    } else {
      const res = await client.searchEvents({
        location: "Rotterdam, Netherlands",
        page_size: 250
      })
      response = poorMansCache = res.events
    }

    res.status(200).json({
      events: response,
    })
  }
}
