// create an array with nodes
var node = [
  {id: 'categories', label: 'categories'},
  {id: 'customercustomerdemo', label: 'customercustomerdemo'},
  {id: 'customerdemographics', label: 'customerdemographics'},
  {id: 'customers', label: 'customers'},
  {id: 'employees', label: 'employees'},
  {id: 'employeeterritories', label: 'employeeterritories'},
  {id: 'order_details', label: 'order_details'},
  {id: 'orders', label: 'orders'},
  {id: 'products', label: 'products'},
  {id: 'region', label: 'region'},
  {id: 'shippers', label: 'shippers'},
  {id: 'shippers_tmp', label: 'shippers_tmp'},
  {id: 'suppliers', label: 'suppliers'},
  {id: 'territories', label: 'territories'},
  {id: 'usstates', label: 'usstates'}
];
// create an array with edges
var edges = [
  {from: 'customercustomerdemo', to: 'customers'},
  {from: 'employeeterritories', to: 'territories'},
  {from: 'order_details', to: 'orders'},
  {from: 'order_details', to: 'products'},
  {from: 'orders', to: 'customers'},
  {from: 'orders', to: 'employees'},
  {from: 'products', to: 'suppliers'},
  {from: 'products', to: 'categories'},
  {from: 'territories', to: 'region'}
];
// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: node,
  edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);