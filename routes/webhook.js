var express = require('express');
var router = express.Router();

var webhookServer = require('contentful-webhook-server')({
  path: '/',
  username: 'verysecretusername',
  password: 'verysecretpassword'
});

var cmd = require('node-cmd');

router.use('/', webhookServer.mountAsMiddleware);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log('A content type was published!');
  res.render('index', { title: 'Express' });
});

module.exports = router;

webhookServer.on('ContentManagement.ContentType.save', function (req) {
  console.log('A content type was saved!');
  // cmd.run('gatsby build');

  cmd.get(
    'gatsby build',
    function(err, data, stderr){
      console.log('the current working dir is : ',data)
    }
  );
});



webhookServer.on('ContentManagement.ContentType.publish', function (req) {
  console.log('A content type was published!');
});

webhookServer.on('ContentManagement.ContentType.unpublish', function (req) {
  console.log('A content type was unpublished!');
});

webhookServer.on('ContentManagement.Entry.publish', function (req) {
  console.log('An entry was published!');
});

webhookServer.on('ContentManagement.Entry.unpublish', function (req) {
  console.log('An entry was unpublished!');
});

webhookServer.on('ContentManagement.Asset.publish', function (req) {
  console.log('An asset was published!');
});

webhookServer.on('ContentManagement.Asset.unpublish', function (req) {
  console.log('An asset was unpublished!');
});
