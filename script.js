const loadImg=async()=>{
    var img=document.getElementById('image')
    var id=document.getElementById('inputid').value
    id=id.trim()
    img.src=`https://portal.ewubd.edu/Documents/StudentProfile/`+id+".jpg"
    
}