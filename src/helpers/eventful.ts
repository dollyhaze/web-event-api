import * as eventful from 'eventful-node';
import Promise from 'bluebird';
import _ from 'lodash';
var client = new eventful.Client("qkngX6QvzGVBKD2W")

export function searchEvents(query) {
  return new Promise((resolve, reject) => {
    client.searchEvents(query, (err, res) => {
      if(err) {
        return reject(err);
      }
      return resolve({
        meta: _.omit(res.search, ['events']),
        events: res.search.events.event
      });
    })
  })
}
