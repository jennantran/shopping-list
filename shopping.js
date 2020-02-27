function submitListener(){
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
        let newItem =list.append(item);
        deleteListener();
        toggleListener();
        event.preventDefault();
        });
}

function deleteListener(){
    $('.shopping-item-delete').on('click', (function(event) {
        console.log(event);
        $(event.currentTarget).closest('li').remove();
    }));
}
   
function toggleListener(){
    $('.shopping-item-toggle').on('click', (function(event) {
        const itemSpan = $(event.currentTarget).closest('li').find('span.shopping-item');
        console.log(itemSpan);
        itemSpan.toggleClass('shopping-item__checked');
    }));
}
   
function shoppingListListeners(){
    submitListener();
    deleteListener();
    toggleListener();
}

$(shoppingListListeners);

//delete new items
//check and uncheck