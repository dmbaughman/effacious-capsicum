var selectors = {
    menu: 'js-menu',
    menuToggle: 'js-menu-toggle',
    submenu: 'js-submenu',
    submenuToggle: 'js-submenu-toggle'
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

addSubmenuHandler = function( el, target ) {
    el.addEventListener( strings.hover, function() {
        
        // @TODO: Remove 'active' class from other submenus when changing hover target

        target.classList.add( strings.active );
    });
};

bindSubmenuToggle = function( toggler ) {
    var submenuToggle = document.getElementsByClassName( toggler );

    console.log(submenuToggle.length);

    for (var i = 0; i < submenuToggle.length; i++) {
        var submenu = submenuToggle[i].children[0];
        console.log('derp');
        
        addSubmenuHandler( submenuToggle[i], submenu );
    }
};

init = function() {
    bindMenuToggle( selectors.menuToggle, selectors.menu );
    bindSubmenuToggle( selectors.submenuToggle );
};

init();
