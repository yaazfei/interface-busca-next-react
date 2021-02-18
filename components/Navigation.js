const Navigation = ({ settings }) => (




<nav className="bg-red-900">

<nav className="flex items-center justify-between flex-wrap bg-red-900 p-4 fixed w-full z-10 top-0">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
  <svg className="svg-icon" viewBox="0 0 20 20">
          <path fill="none" d="M19.629,9.655c-0.021-0.589-0.088-1.165-0.21-1.723h-3.907V7.244h1.378V6.555h-2.756V5.866h2.067V5.177h-0.689V4.488h-1.378V3.799h0.689V3.11h-1.378V2.421h0.689V1.731V1.294C12.88,0.697,11.482,0.353,10,0.353c-5.212,0-9.446,4.135-9.629,9.302H19.629z M6.555,2.421c1.522,0,2.756,1.234,2.756,2.756S8.077,7.933,6.555,7.933S3.799,6.699,3.799,5.177S5.033,2.421,6.555,2.421z"></path>
          <path fill="none" d="M12.067,18.958h-0.689v-0.689h2.067v-0.689h0.689V16.89h2.067v-0.689h0.689v-0.689h-1.378v-0.689h-2.067v-0.689h1.378v-0.689h2.756v-0.689h-1.378v-0.689h3.218c0.122-0.557,0.189-1.134,0.21-1.723H0.371c0.183,5.167,4.418,9.302,9.629,9.302c0.711,0,1.401-0.082,2.067-0.227V18.958z"></path>
        </svg>
        <a className="text-white no-underline hover:text-white hover:no-underline" href="#">

          <span className="text-2xl pl-2"><i className="em em-grinning"></i>Busca Filmes</span>
    </a>
  </div>

  <div className="block lg:hidden">
    <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content1">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a className="inline-block py-2 px-4 text-white no-underline" href="/">Início</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="http://www.omdbapi.com">OMDB</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">Lista</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">Sobre</a>
          </li>
        </ul>
      </div>
</nav>

<div className="container shadow-lg mx-auto bg-gray-300 mt-20 md:mt-18">

</div>



{/*
<body>
<script>
  document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content1").classList.toggle("hidden")
    }
</script> 
</body>
*/}



</nav>












  //   <nav className="flex items-center justify-between flex-wrap bg-red-900 p-6">
  //   <div className="flex items-center flex-no-shrink text-white mr-6">
  //   <svg className="svg-icon" viewBox="0 0 20 20">
  // 							<path fill="none" d="M19.629,9.655c-0.021-0.589-0.088-1.165-0.21-1.723h-3.907V7.244h1.378V6.555h-2.756V5.866h2.067V5.177h-0.689V4.488h-1.378V3.799h0.689V3.11h-1.378V2.421h0.689V1.731V1.294C12.88,0.697,11.482,0.353,10,0.353c-5.212,0-9.446,4.135-9.629,9.302H19.629z M6.555,2.421c1.522,0,2.756,1.234,2.756,2.756S8.077,7.933,6.555,7.933S3.799,6.699,3.799,5.177S5.033,2.421,6.555,2.421z"></path>
  // 							<path fill="none" d="M12.067,18.958h-0.689v-0.689h2.067v-0.689h0.689V16.89h2.067v-0.689h0.689v-0.689h-1.378v-0.689h-2.067v-0.689h1.378v-0.689h2.756v-0.689h-1.378v-0.689h3.218c0.122-0.557,0.189-1.134,0.21-1.723H0.371c0.183,5.167,4.418,9.302,9.629,9.302c0.711,0,1.401-0.082,2.067-0.227V18.958z"></path>
  // 	</svg>
  //     <span className="font-semibold text-xl tracking-tight">Busca Filmes</span>
  //   </div>
  //   <div className="block lg:hidden">
  //     <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
  //       <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  //     </button>
  //   </div>
  //   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
  //     <div className="text-sm lg:flex-grow">
  //       <a href="http://www.omdbapi.com" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
  //         OMDB
  //       </a>
  //       <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
  //         Lista
  //       </a>
  //       <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
  //         Sobre
  //       </a>
  //     </div>
  //     <div>
  //       <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
  //     </div>
  //   </div>
  // </nav> */}




)
export default Navigation