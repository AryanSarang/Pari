import React from "react"
const Navbar = () => {
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 61 || document.documentElement.scrollTop > 61) {
    document.getElementById("navbar").style.padding = "1% 10%";
  } else {
    document.getElementById("navbar").style.padding = "2% 10%";
  }
}
  return (
    
<nav id="navbar" class="navbar navbar-expand-sm  sticky-top navbar-light bg-light " >
  <a id="logo" class="navbar-brand" href="#">Pari</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link"  href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Module description</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Course Outline
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">About the course</a>
          <a class="dropdown-item" href="#">Outcomes</a>
          <a class="dropdown-item" href="#">Schedule</a>
          <a class="dropdown-item" href="#">Guidelines</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Upcoming Batch</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Dashboard</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search more courses" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
};

export default Navbar;


