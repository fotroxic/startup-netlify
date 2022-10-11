import Link from "next/link"
import Head from "next/head"
import Script from "next/script"



export default  function Header() {
  return (
   <>
   <Head>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </link>
    
   </Head>

    <div className="header">
        <div className="header__container">
       
   
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="logo">
           <Link href="/">
                <img src="https://i.hizliresim.com/oroa6z0.jpg" alt="" />
            </Link>  
    </div> 
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#"></a>
            </li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Community</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Events</a>
        </li>
        
        
      </ul>
     
    </div>
    
  </div>
    <div className="nav-btn">
      
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>

</nav>
            <div className="support__button">
                <Link href="/support-our-community">
                    <button className="support-button">Support our community</button>
                </Link>
            </div>
        </div>
    </div>

<Script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
</Script>
    </>
  )
}
