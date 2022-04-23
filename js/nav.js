const dynamicNav = () => {
  let navBar = document.querySelector('.navigationBar');

  navBar.innerHTML = `<div class="navbar2">
        <nav class="vavbar2">
          <div class="nav">
            <div class="nav_logo">
              <a href="index.html"
                ><img src="./img/Poketo-Logo-Site.png" alt=""
              /></a>
            </div>
            <div class="links_with_icons">
              <div class="nav_icons">
                <div>
                  <a href=""
                    ><img src="./img/search_icon.svg" class="icons_img" alt=""
                  /></a>
                </div>
                <div>
                  <a href=""
                    ><img src="./img/cart_bag.svg" class="icons_img" alt=""
                  /></a>
                </div>
                <div>
                  <a href=""
                    ><img
                      src="./img/wish_list_icon.svg"
                      class="icons_img"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      `;
};
dynamicNav();
const dynamicNavDrop = () => {
  let navBarDrop = document.querySelector('.dashboard_navigations');
  navBarDrop.innerHTML = `
      <div class="dropdown2">
        <div class="nameHeader">
          <a href="index.html"> <h1>MrOmachi</h1></a>
        </div>
        <div class="dropdown2-content">
          <div class="header2_container">
            <!-- <br /><br /> -->
            <div class="header2">
              <h2><a href="index.html" class="header_anchor">DASHBOARD </a></h2>
            </div>
            <div class="header2">
              <h2><a href="allusers.html">ALL USERS </a></h2>
            </div>
            <div class="header2">
              <h2><a href="createusers.html">CREATE USERS</a></h2>
            </div>
            <div class="header2">
              <h2><a href="allproducts.html">ALL PRODUCTS</a></h2>
            </div>
            <div class="header2">
              <h2><a href="createproduct.html">CREATE PRODUCTS</a></h2>
            </div>
            <div class="header2">
              <h2><a href="allorders.html">All ORDERS</a></h2>
            </div>
            <div class="header2">
              <h2><a href="">Logout</a></h2>
            </div>
          </div>
        </div>
      </div>`;
};
dynamicNavDrop();
