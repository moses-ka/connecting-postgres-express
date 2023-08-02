import pg from "pg"
const url =
  "postgres://qohwdhxb:lOdsnj_NlO4M6IcS9ZF7T7BN_q2Krbjj@snuffleupagus.db.elephantsql.com/qohwdhxb";
const conString = url;
 export const client = new pg.Client(conString);
client.connect((err) => {
  if (err) {
    return console.log(err, " cant connect to data base ");
  }
  // client.query('SELECT NOW() AS "theTime"', function (err, result) {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  //   console.log(result.rows[0].theTime);
  //   // >> output: 2018-08-23T14:02:57.117Z
  //   client.end();
  // });
});

