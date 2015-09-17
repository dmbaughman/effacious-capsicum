var selectors = {
    menu: 'js-menu',
    menuToggle: 'js-menu-toggle',
    submenu: 'js-submenu',
    submenuToggle: 'js-submenu-toggle',
    submenuActive: '.js-submenu.active'
};

var strings = {
    hover: 'mouseover',
    active: 'active'
};

bindMenuToggle = function( toggler, target ) {
    var menuToggle = document.getElementById( toggler );
    var menu = document.getElementById( target );

    menuToggle.addEventListener( strings.hover, function() {
        menu.classList.add( strings.active );
    });
};

hideSubmenu = function( selector ) {
    var activeSubmenu = document.querySelector( selector );
    if ( activeSubmenu !== null ) {
        activeSubmenu.classList.remove( strings.active );
    }
};

addSubmenuHandler = function( el, target ) {
    el.addEventListener( strings.hover, function() {
        hideSubmenu( selectors.submenuActive );
        target.classList.add( strings.active );
    });
};

bindSubmenuToggle = function( toggler ) {
    var submenuToggle = document.getElementsByClassName( toggler );

    for (var i = 0; i < submenuToggle.length; i++) {
        var submenu = submenuToggle[i].children[0];
        addSubmenuHandler( submenuToggle[i], submenu );
    }
};

init = function() {
    bindMenuToggle( selectors.menuToggle, selectors.menu );
    bindSubmenuToggle( selectors.submenuToggle );
};

init();
