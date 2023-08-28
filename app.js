const button=document.querySelector('.btn')

let modal;
let backdrop;
button.addEventListener('click',showModalHandler)

function showModalHandler(){
    console.log("hello",button)
    if(modal){
        
        modal=document.createElement('div')
modal.className="modal"

const modaltext=document.createElement('p')
modaltext.textContent="Are you sure?"

const modalCancelAction=document.createElement('button')
modalCancelAction.textContent='Cancel'
modalCancelAction.className='btn btn--alt'
modalCancelAction.addEventListener('click',closeModalHandler)

const modalConfirmAction=document.createElement('button')
modalCancelAction.textContent='Confirm'
modalCancelAction.className='btn'
modalCancelAction.addEventListener('click',closeModalHandler)

modal.append(modaltext)
modal.append(modalCancelAction)
modal.append(modalConfirmAction)

document.body.append(modal)

backdrop=document.createElement('div')
backdrop.className='backdrop'

backdrop.addEventListener('click',closeModalHandler)
document.body.append(backdrop)


        return;
    }
}



function closeModalHandler(){
    modal.remove()
    modal=null

    backdrop.remove()
    backdrop=null
}