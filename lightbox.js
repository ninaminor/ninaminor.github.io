const container = document.querySelector('.container .bilder'),
lightbox = document.querySelector('.lightbox');
closeicon = document.querySelector('.icon');

window.onload = () => {
        for (let i = 0; i < container.lenght; i++) {
            container[i].onclick = ()=>{
                console.log(i);
                lightbox.classList.add('show');





            const prevBtn = document.querySelector('.fore');
            const nextBtn = document.querySelector('.nasta');

            preBtn.onclick = ()=>
                NewIndex--;
                if(NewIndex == 0) {
                    preview();
                    preBtn.style.display = 'none'
                }else{
                    preview();
                }









                closeicon.onclick = () =>{
                    lightbox.classlist.remove('show');
                }

            }
        }

    }