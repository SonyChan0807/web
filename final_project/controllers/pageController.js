const root_path = process.env.PAGE


exports.homePage = (req, res) => {
  res.sendFile(root_path + '/home.html');
};


exports.brandPage = (req, res) => {
    res.sendFile(root_path + '/brands.html');
}


exports.carGroupPage = (req, res) => {
    res.sendFile(root_path + '/groups.html');
}



exports.pricePage = (req, res) => {
    res.sendFile(root_path + '/price.html');
}

// exports.rankingPage = (req, res) => {
//     res.render('./pages/ranking');
// }


