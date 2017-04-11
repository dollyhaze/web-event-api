import Base from '../base';

export default class ArticleCtrl extends Base {
  static async getArticles(_, res) {
    res.status(200).send('ok')
  }
}
