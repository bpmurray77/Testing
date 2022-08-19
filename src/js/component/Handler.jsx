import React from "react";

var Piece = $('.row.ifields').map(function() {
    return {
        quantity: $(this).find('[name="quantity"]').val(),
    };
}).get();

console.log(Piece);

export default Piece