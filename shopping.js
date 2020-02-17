$(document).ready(function (){
    $('form').submit(function(event){
        const itemName = $('#shopping-list-entry').val();
        const list = $('.shopping-list');
        const item = '<li>' +
                        '<span class="shopping-item">' + `${itemName}` + '</span>' +
                        '<div class="shopping-item-controls">' +
                            '<button class="shopping-item-toggle">' +
                                '<span class="button-label">check</span>' +
                            '</button>' +
                            '<button class="shopping-item-delete">' +
                                '<span class="button-label">delete</span>' +
                            '</button>' +
                        '</div>' +
                    '</li';
        list.append(item);
        event.preventDefault();
        // let itemHtml = '     <li>  +
        //              '   <span class="shopping-item">' +`${itemName}` +
        //                 <div class="shopping-item-controls">
        //                 <button class="shopping-item-toggle">
        //                     <span class="button-label">check</span>
        //                 </button>
        //                 <button class="shopping-item-delete">
        //                     <span class="button-label">delete</span>
        //                 </button>
        //                 </div>
        //             </li>';

    
        // $('#shopping-list').append(item);
    });

    $('.shopping-item-delete').click(function() {
        this.closest('li').remove();
    });

    // $('.shopping-item-toggle').click(function() {
    //     this.closest('li.shopping-item').addClass('shopping-item__checked');
    // });

    $('.shopping-item-toggle').on('click', (function(event) {
        const itemSpan = $(event.currentTarget).closest('li').find('span.shopping-item');
        console.log(itemSpan);
        itemSpan.toggleClass('shopping-item__checked');
        // this.closest('li').addClass('shopping-item__checked');
    }));

});