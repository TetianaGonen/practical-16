const getS = selector => document.querySelector(selector);

getS('.btn-edit').onclick = function(){
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;

}

getS('.btn-save').onclick = function(){
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

getS('.btn-style').onclick =function(){
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
}