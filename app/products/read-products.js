$(document).ready(function(){
 
    // show list of product on first load
    showProducts();
    // when a 'read products' button was clicked
    $(document).on('click', '.read-products-button', function(){
    showProducts();
    });
});
 

function showProducts(){
 
    // get list of products from the API
    $.getJSON("http://localhost/api/product/read.php", function(data){
 
        // html for listing products
        readProductsTemplate(data, "");
 
        // chage page title
        changePageTitle("Read Products");
 
    });
}