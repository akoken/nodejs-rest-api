var products = {
  getAll : function(req, res){
    var allProducts = data; //I think I have to get data from db
    res.json(allProducts);
  }
}

var data = [
{
  name:'laptop',
  id:'1'
}
,
{
  name:'smart phone',
  id:'2'
}
,
{
  name:'printer',
  id:'3'
}
];

module.exports = products;
