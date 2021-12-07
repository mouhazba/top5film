$(document).ready(function() {
    var menuItems = $('#main-menu ul').children('li'),
        nbrLi = menuItems.length,
        openIndex = 2,

        init = function() {
            bindEvents();
            if (indexValide(openIndex)) {
                animateItem(menuItems.eq(openIndex), true, 700);
            }
        },
        bindEvents = function() {
            var Items = menuItems.children('.fond');
            Items.click(function() {
                    var newIindexli = $(this).parent().index(),
                        item = menuItems.eq(newIindexli);
                    if (openIndex === newIindexli) {
                        animateItem(item, false, 250);
                        openIndex = -1;
                    } else {
                        if (indexValide(newIindexli)) {
                            animateItem(menuItems.eq(openIndex), false, 250);
                            openIndex = newIindexli;
                            animateItem(item, true, 250);
                        }
                    }
                }),
                $('.bout').hover(
                    function() {
                        $(this).toggleClass('overed');
                    }
                ),
                $('.bout').click(function() {
                    var newIndex = $(this).index(), //pask les bout sont des li
                        item = menuItems.eq(newIndex);

                    if (openIndex === newIndex) {
                        animateItem(item, false, 250);
                        openIndex = -1;
                    } else {
                        if (indexValide(newIndex)) {
                            animateItem(menuItems.eq(openIndex), false, 250);
                            openIndex = newIndex;
                            animateItem(item, true, 250);
                        }
                    }
                })
        },
        animateItem = function(item, toOpen, speed) {
            var colorImage = item.find('.color'),
                itemParam = toOpen ? { width: '360px' } : { width: '140px' }
            colorParam = toOpen ? { left: '0' } : { left: '140px' };
            item.animate(itemParam, speed);
            colorImage.animate(colorParam, speed);

        },
        indexValide = function(checkIndex) {
            return (checkIndex >= 0 && checkIndex < nbrLi)
        };
    init();




})