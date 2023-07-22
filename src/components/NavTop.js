import React from 'react';
import { Link } from 'react-router-dom';

const NavTop = ({}) => {

    return ( 
<div class="header__col bg-blue text-white">
    <div class="prl-container--lg hidden lg:block">
      <div class="region region--secondary-nav">
            <nav role="navigation" class="settings-tray-editable" data-drupal-settingstray="editable">
                <ul class="inline-menu">
                    <li class="inline-menu__item">
                        <Link to={"/Investor"} class="inline-menu__link menu_header ext" title="Login to Prologis Essentials" >Investor Relations</Link>
                    </li>
                    <li class="inline-menu__item">
                        <Link to={"/Careers"} class="inline-menu__link menu_header ext" title="Login to Prologis Essentials" >Careers</Link>
                    </li>
                    <li class="inline-menu__item">
                        <Link to={"/contact"} class="inline-menu__link menu_header ext" title="Login to Prologis Essentials" >Contact Us</Link>
                    </li>
            </ul>
            </nav>
        </div>
    </div>
</div>
     );
}
 
export default NavTop;
