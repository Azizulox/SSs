let New_db = [ 
    { 
        BackDropPath: "https://videos.voxe.tv/imgs/CHida-yulduzim-Erali-origenal-koda-941234/CHida-yulduzim-Erali-origenal-koda-941234_thumbnail_min.webp" 
      } , 
      {  
          BackDropPath: "https://videos.voxe.tv/imgs/Trailer-hokimbuvo-948123/Trailer-hokimbuvo-948123_thumbnail_min.webp" 
        } , 
    //   { 
    //     BackDropPath: "https://videos.voxe.tv/imgs/ozod-FINAL-4k/ozod-FINAL-4k_thumbnail_min.webp" 
    //   } , 
    //   { 
    //     BackDropPath: "https://videos.voxe.tv/imgs/CHida-yulduzim-Erali-origenal-koda-941234/CHida-yulduzim-Erali-origenal-koda-941234_thumbnail_min.webp" 
    //   } , 
      

  ] 
   
  New_db.forEach(el => { 
    document.write( 
      ` 
      <div id="conteiner">
      <div class="card" style="width: 18rem;"> 
      <img src=${el.BackDropPath} class="card-img-top" alt="BackDropPath error"> 
      <div class="card-body"> 
      </div> 
    </div> 
    </div>
    </div>
      ` 
    ) 
  })
  