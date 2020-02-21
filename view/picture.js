  const template = require('./template');
  const header = template.header();

  module.exports.picture = function (navBar, menuLink) {
      return `
    <!DOCYYPE html>
    <html lang='ko'>
<head>
${header}
</head>
<body>
    <div class="container">
        ${navBar}
        <div class="row" style="margin-top: 30px">
            <div class="col-2">
                ${menuLink}
            </div>
            <div class="col-10">
                <div class="row" style="margin-left: 10px">
                    <div class="col-12">
                        <h3>사 진</h3>
                    </div>
                    <div class="col-12">
                        <hr>
                    </div>
                    <div class="col-12">
                    <img src="p1.jpg" class="img-thumbnail" alt="Cinque Terre">
                    <img src="p4.jpg" class="img-thumbnail" alt="Cinque Terre">
                    <img src="p3.jpg" class="img-thumbnail" alt="Cinque Terre">
                    <img src="p5.jpg" class="img-thumbnail" alt="Cinque Terre">
                    <img src="p6.jpg" class="img-thumbnail" alt="Cinque Terre">

                 </div>   
                </div>
            </div>
        </div>
    </div>
</body>

</html>
`;
  }