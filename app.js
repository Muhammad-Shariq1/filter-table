let add = document.getElementById('addBtn')

add.addEventListener('click', ()=> {
    let f = document.getElementById('fruitInput')
    let q = document.getElementById('qualityInput')
    let fruit = f.value.trim()
    let quality = q.value.trim()

    if(fruit === '' || quality === ''){
        alert('enter both fruit and quality')
        return
    }

    let body = document.querySelector('#fruitTable tbody')
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')

    td1.textContent = fruit
    td2.textContent = quality

    td1.className = 'py-2 px-3 border-b'
    td2.className = 'py-2 px-3 border-b'

    tr.appendChild(td1)
    tr.appendChild(td2)
    body.appendChild(tr)

    f.value = ''
    q.value = ''
    f.focus()
})

function filterTable(){
    let s = document.getElementById('searchBar').value.toLowerCase()
    let rows = document.querySelectorAll('#fruitTable tbody tr')

    for(let i=0;i<rows.length;i++){
        let a = rows[i].cells[0].textContent.toLowerCase()
        let b = rows[i].cells[1].textContent.toLowerCase()
        if(a.indexOf(s)>-1 || b.indexOf(s)>-1){
            rows[i].style.display=''
        }else{
            rows[i].style.display='none'
        }
    }
}
